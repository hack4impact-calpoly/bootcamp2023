import Comment from "@/app/components/commentPreview";

type Props = {
  params: { slug: string };
};

export default async function Portfolio({ params }: Props) {
  const slug = params.slug;
  const portfolio = await getPortfolio(slug);

  if (portfolio) {
    return (
      <div>

        {portfolio.comments.map((index: any, comment: any) => (
          <Comment
            key={index}
            comment={comment.comment}
          />
        ))}
      </div>
    );
  }
  return "Portfolio comment not found";
}

async function getPortfolio(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/portfolio/{slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch portfolio");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}