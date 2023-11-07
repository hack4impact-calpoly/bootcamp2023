import Link from "next/link";

export default function BlogPreview({title, content, date, img, slug}: BlogPreviewProps) {
    const link = "/blogs/" + slug
    return (
      <div className="my-2 text-white w-[600px] p-5 hover:bg-[#001523] rounded-md">
        <div className="flex justify-between">
          <h4 className="text-xl">{title}</h4>
          <h4 className="italic">{date}</h4>
        </div>
        <p className="my-2 text-[#adb5bd] font-light">{content.substring(0, 150)}...</p>
        <Link className="hover:underline" href={link}>View Blog</Link>
      </div>
    )
  }
  