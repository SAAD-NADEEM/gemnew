import { createClient } from "next-sanity"
import { apiVersion, dataset, projectId } from "@/sanity/env"
import { NextResponse } from "next/server"
import { readFile } from "fs/promises"
import path from "path"

const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

export async function POST(request: Request) {
  const formData = await request.formData()

  const type = formData.get("type") as string
  const name = formData.get("name") as string
  const category = formData.get("category") as string
  const images = formData.getAll("images") as File[]
  const video = formData.get("video") as File | null
  const imageUrls = formData.getAll("imageUrls") as string[]
  const videoUrl = formData.get("videoUrl") as string | null

  try {
    const imageAssets = []

    // Upload images from file picker
    for (const img of images) {
      if (img.size === 0) continue
      const buffer = Buffer.from(await img.arrayBuffer())
      const asset = await writeClient.assets.upload("image", buffer, { filename: img.name })
      imageAssets.push({
        _type: "image",
        _key: crypto.randomUUID().slice(0, 8),
        asset: { _type: "reference", _ref: asset._id },
      })
    }

    // Upload images from JSON URLs (local public folder paths like /gems/ruby01.png)
    for (const url of imageUrls) {
      if (!url) continue
      try {
        const filePath = path.join(process.cwd(), "public", url)
        const fileBuffer = await readFile(filePath)
        const filename = path.basename(url)
        const asset = await writeClient.assets.upload("image", fileBuffer, { filename })
        imageAssets.push({
          _type: "image",
          _key: crypto.randomUUID().slice(0, 8),
          asset: { _type: "reference", _ref: asset._id },
        })
      } catch (err) {
        console.error(`Failed to read/upload image: ${url}`, err)
      }
    }

    // Upload video from file picker
    let videoAsset = undefined
    if (video && video.size > 0) {
      const buffer = Buffer.from(await video.arrayBuffer())
      const asset = await writeClient.assets.upload("file", buffer, { filename: video.name })
      videoAsset = { _type: "file", asset: { _type: "reference", _ref: asset._id } }
    }

    // Upload video from JSON URL (local public folder path)
    if (!videoAsset && videoUrl) {
      try {
        const filePath = path.join(process.cwd(), "public", videoUrl)
        const fileBuffer = await readFile(filePath)
        const filename = path.basename(videoUrl)
        const asset = await writeClient.assets.upload("file", fileBuffer, { filename })
        videoAsset = { _type: "file", asset: { _type: "reference", _ref: asset._id } }
      } catch (err) {
        console.error(`Failed to read/upload video: ${videoUrl}`, err)
      }
    }

    // Handle category for "other" type
    let categoryRef = undefined
    if (type === "other" && category) {
      let existing = await writeClient.fetch(
        `*[_type == "otherCategory" && title == $title][0]`,
        { title: category }
      )
      if (!existing) {
        existing = await writeClient.create({ _type: "otherCategory", title: category })
      }
      categoryRef = { _type: "reference", _ref: existing._id }
    }

    // Build document
    const doc: any = {
      _type: type,
      name,
    }

    if (type === "gem") doc.category = "gems"
    else if (type === "mineral") doc.category = "minerals"
    else if (type === "other") doc.category = categoryRef

    if (imageAssets.length > 0) doc.images = imageAssets
    if (videoAsset) doc.video = videoAsset

    const created = await writeClient.create(doc)

    return NextResponse.json({ success: true, id: created._id })
  } catch (error: any) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
