import Link from "next/link";

export default function ProjectPreview({title, description, technologies, github, slug}: ProjectPreviewProps) {
    const link = "/portfolio/" + slug
    return (
      <div className="my-2 text-white w-[600px] p-5 hover:bg-[#001523] rounded-md">
        <div className="flex justify-between">
          <h4 className="text-xl">{title}</h4>
        </div>
        <p className="my-2 text-[#adb5bd] font-light">{description}</p>
        <div className="flex flex-row">
          <Link target="_blank" className="hover:underline px-2" href={github}>View Github</Link>
          <Link className="hover:underline px-2" href={link}>View Project</Link>
        </div>
      </div>
    )
  }
  