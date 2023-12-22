import { NextRequest, NextResponse } from "next/server"
import connectDB from "../../../helpers/db";
import portfolioSchema from "../../../database/portfolioSchema";
import PortfolioSlug from "../../components/portfolioSlug";


type Props = {
    params: { slug: string };
};

async function getPortfolio(slug: string) {
    await connectDB();

    try {
        const blog = await portfolioSchema.findOne({ slug }).orFail();
        return blog;
    } catch (err) {
        return null;
    }
}

export default async function Portfolio({ params }: Props) {
    const { slug } = params;
    const portfolio = await getPortfolio(slug);

    return (
        <main>
            {portfolio ? (
                <div>
                    <PortfolioSlug
                        title={portfolio.title}
                        description={portfolio.description}
                        slug={portfolio.slug}
                        img={portfolio.img}
                    />
                 </div>
            ) : (
                <div>No blog found</div>
            )}
        </main>
    );
}