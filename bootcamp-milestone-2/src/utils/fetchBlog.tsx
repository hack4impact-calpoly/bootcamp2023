export const fetchBlog = async (slug: string) => {
    try {
      const res = await fetch(`https://seanmnguyen.vercel.app/api/${slug}`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch blog");
      }

      const res_j = await res.json();
      return res_j;
    } catch (err: unknown) {
      console.log(`error: ${err}`);
      return null;
    }
}; 
