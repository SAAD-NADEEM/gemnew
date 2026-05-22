import Image from "next/image";
import Link from "next/link";



function MainBanner({data}: {data: {image: string, title: string, p: string}}) {

    

    return (
        <div className="relative h-[350px] md:h-150">
            <Image src={data.image} alt="banner image" fill className="object-cover object-right" />

            <div className="absolute bg-black/40 inset-0" />

            <div className="absolute inset-0 max-w-360 mx-auto flex flex-col justify-end pb-15 gap-3 pl-4 lg:px-0">
                <h1 className="z-10 text-background text-3xl md:text-4xl lg:text-5xl font-bold">{data.title}</h1>
                <p className="text-background text-shadow-2xs text w-64 md:w-full tracking-tighter z-10">{data.p}</p>
            </div>
        </div>
    );
}

export default MainBanner;