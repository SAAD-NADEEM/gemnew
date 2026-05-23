"use client"

import { useState, DragEvent } from "react"

interface ItemForm {
  id: string
  type: "gem" | "mineral" | "other"
  name: string
  category: string
  images: File[]
  imageUrls: string[]
  video: File | null
  videoUrl: string
}

function createEmptyItem(): ItemForm {
  return {
    id: crypto.randomUUID(),
    type: "gem",
    name: "",
    category: "",
    images: [],
    imageUrls: [],
    video: null,
    videoUrl: "",
  }
}

export default function UploadTempPage() {
  const [items, setItems] = useState<ItemForm[]>([createEmptyItem()])
  const [uploading, setUploading] = useState(false)
  const [log, setLog] = useState<string[]>([])
  const [dragOver, setDragOver] = useState(false)

  const updateItem = (id: string, updates: Partial<ItemForm>) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, ...updates } : item))
  }

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  const addMore = () => {
    setItems(prev => [...prev, createEmptyItem()])
  }

  const inferType = (category: string): "gem" | "mineral" | "other" => {
    if (category === "gems") return "gem"
    if (category === "minerals") return "mineral"
    return "other"
  }

  const handleJsonDrop = (e: DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files[0]
    if (!file || !file.name.endsWith('.json')) {
      setLog(prev => [...prev, "❌ Please drop a .json file"])
      return
    }

    const reader = new FileReader()
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target?.result as string)
        const arr = Array.isArray(data) ? data : [data]
        const newItems: ItemForm[] = arr.map((d: any) => ({
          id: crypto.randomUUID(),
          type: inferType(d.category || ""),
          name: d.name || "",
          category: d.category || "",
          imageUrls: d.images || [],
          images: [],
          videoUrl: d.video || "",
          video: null,
        }))
        setItems(prev => [...prev, ...newItems])
        setLog(prev => [...prev, `✅ Loaded ${newItems.length} item(s) from JSON`])
      } catch {
        setLog(prev => [...prev, "❌ Invalid JSON file"])
      }
    }
    reader.readAsText(file)
  }

  const uploadAll = async () => {
    setUploading(true)
    setLog([])

    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      if (!item.name) {
        setLog(prev => [...prev, `⚠️ Skipped item #${i + 1} (no name)`])
        continue
      }

      const formData = new FormData()
      formData.append("type", item.type)
      formData.append("name", item.name)
      if (item.type === "other") {
        formData.append("category", item.category)
      }
      item.images.forEach(img => formData.append("images", img))
      if (item.video) formData.append("video", item.video)

      // Send image URLs from JSON
      item.imageUrls.forEach(url => formData.append("imageUrls", url))
      if (item.videoUrl) formData.append("videoUrl", item.videoUrl)

      try {
        setLog(prev => [...prev, `⏳ Uploading "${item.name}"...`])
        const res = await fetch("/api/upload", { method: "POST", body: formData })
        const data = await res.json()
        if (res.ok) {
          setLog(prev => [...prev, `✅ "${item.name}" uploaded (${data.id})`])
        } else {
          setLog(prev => [...prev, `❌ "${item.name}": ${data.error}`])
        }
      } catch {
        setLog(prev => [...prev, `❌ "${item.name}": Network error`])
      }
    }

    setUploading(false)
  }

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 20, fontFamily: "system-ui, sans-serif", color: "#e0e0e0" }}>
      <h1 style={{ marginBottom: 8 }}>Bulk Upload to Sanity</h1>
      <p style={{ color: "#888", marginBottom: 30 }}>Add items manually or drop a JSON file to auto-fill.</p>

      {/* JSON Drop Zone */}
      <div
        onDragOver={e => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleJsonDrop}
        style={{
          border: `2px dashed ${dragOver ? "#2563eb" : "#444"}`,
          padding: 30,
          textAlign: "center",
          marginBottom: 30,
          borderRadius: 8,
          color: dragOver ? "#2563eb" : "#888",
          background: dragOver ? "rgba(37,99,235,0.05)" : "transparent",
          transition: "all 0.2s",
        }}
      >
        Drop a JSON file here to auto-fill items
        <br />
        <span style={{ fontSize: 12 }}>{'Format: [{ name, category, images: ["/path/..."], video: "/path/..." }]'}</span>
      </div>

      {/* Items */}
      {items.map((item, index) => (
        <div key={item.id} style={{ border: "1px solid #333", padding: 16, marginBottom: 12, borderRadius: 8, background: "#1a1a1a" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <strong>Item #{index + 1}</strong>
            {items.length > 1 && (
              <button onClick={() => removeItem(item.id)} style={{ color: "#f87171", cursor: "pointer", background: "none", border: "none", fontSize: 14 }}>
                ✕ Remove
              </button>
            )}
          </div>

          <div style={{ display: "flex", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
            <select
              value={item.type}
              onChange={e => updateItem(item.id, { type: e.target.value as ItemForm["type"] })}
              style={{ padding: "8px 12px", background: "#111", color: "#e0e0e0", border: "1px solid #444", borderRadius: 4 }}
            >
              <option value="gem">Gem</option>
              <option value="mineral">Mineral</option>
              <option value="other">Other</option>
            </select>

            <input
              placeholder="Name"
              value={item.name}
              onChange={e => updateItem(item.id, { name: e.target.value })}
              style={{ flex: 1, padding: "8px 12px", background: "#111", color: "#e0e0e0", border: "1px solid #444", borderRadius: 4, minWidth: 150 }}
            />

            {item.type === "other" && (
              <input
                placeholder="Category"
                value={item.category}
                onChange={e => updateItem(item.id, { category: e.target.value })}
                style={{ padding: "8px 12px", background: "#111", color: "#e0e0e0", border: "1px solid #444", borderRadius: 4, minWidth: 120 }}
              />
            )}
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontSize: 14 }}>
            <label style={{ color: "#aaa" }}>
              Images:{" "}
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={e => updateItem(item.id, { images: Array.from(e.target.files || []) })}
                style={{ color: "#e0e0e0" }}
              />
            </label>
            <label style={{ color: "#aaa" }}>
              Video:{" "}
              <input
                type="file"
                accept="video/*"
                onChange={e => updateItem(item.id, { video: e.target.files?.[0] || null })}
                style={{ color: "#e0e0e0" }}
              />
            </label>
          </div>

          {item.images.length > 0 && (
            <p style={{ color: "#888", fontSize: 12, marginTop: 6, marginBottom: 0 }}>{item.images.length} image(s) selected from files</p>
          )}

          {item.imageUrls.length > 0 && (
            <p style={{ color: "#6ee7b7", fontSize: 12, marginTop: 6, marginBottom: 0 }}>
              {item.imageUrls.length} image(s) from JSON: {item.imageUrls.join(", ")}
            </p>
          )}

          {item.videoUrl && (
            <p style={{ color: "#93c5fd", fontSize: 12, marginTop: 4, marginBottom: 0 }}>
              Video from JSON: {item.videoUrl}
            </p>
          )}
        </div>
      ))}

      <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
        <button
          onClick={addMore}
          disabled={uploading}
          style={{ padding: "10px 20px", cursor: "pointer", background: "#222", color: "#e0e0e0", border: "1px solid #444", borderRadius: 6 }}
        >
          + Add More
        </button>
        <button
          onClick={uploadAll}
          disabled={uploading}
          style={{
            padding: "10px 24px",
            cursor: uploading ? "not-allowed" : "pointer",
            background: uploading ? "#1e40af" : "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 6,
            fontWeight: 600,
          }}
        >
          {uploading ? "Uploading..." : "Upload All"}
        </button>
      </div>

      {/* Log */}
      {log.length > 0 && (
        <div style={{ marginTop: 24, padding: 16, background: "#111", borderRadius: 8, border: "1px solid #333", maxHeight: 300, overflowY: "auto" }}>
          <strong style={{ marginBottom: 8, display: "block" }}>Log</strong>
          {log.map((msg, i) => (
            <div key={i} style={{ marginBottom: 4, fontSize: 13, fontFamily: "monospace" }}>{msg}</div>
          ))}
        </div>
      )}
    </div>
  )
}
