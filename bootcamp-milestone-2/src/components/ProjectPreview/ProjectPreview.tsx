import Link from "next/link";

export default function ProjectPreview({title, description, technologies, github}: ProjectPreviewProps) {
    return (
      <div className="my-2 text-white w-[600px] p-5 hover:bg-[#001523] rounded-md">
        <div className="flex justify-between">
          <h4 className="text-xl">{title}</h4>
        </div>
        <p className="my-2 text-[#adb5bd] font-light">{description}</p>
        <Link target="_blank" className="hover:underline" href={github}>View Github</Link>
      </div>
    )
  }
  