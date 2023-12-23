export async function POST(req: NextRequest, { params }: IParams) {
    await connectDB();
    const { slug } = params;
  
    try {
      const blog = await blogSchema.findOne({ slug }).orFail(); // get the particular portfolio
      const body = await req.json();
  
      blog.comments.push(body);
      blog.save();
  
      return NextResponse.json("Successfully added comment");
    } catch (err) {
      return NextResponse.json("Unable to add comment", { status: 404 });
    }
  }
  