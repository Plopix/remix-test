import { Link, Outlet } from "remix";
import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";
import { getPost } from "~/post";

export const loader : LoaderFunction= async ({ params }) => {
    invariant(params.slug, "expected params.slug");
    return getPost(params.slug);
  };

export default function EditPostSlug() {
    const post = useLoaderData();
    return (
        <main>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />


            <Outlet />

            <Link to="footer">WITH FOOTER</Link>

            <Link to="/">Back home</Link>
        </main>
    );
}
