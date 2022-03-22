import { Link } from "remix";
import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";
import { getPost } from "~/post";
import AnotherFetchingResourceComponent from "~/AnotherFetchingResourceComponent";
import AnotherFetchingResourceComponentR from "~/AnotherFetchingResourceComponentR";

export const loader : LoaderFunction= async ({ params }) => {
    invariant(params.slug, "expected params.slug");
    return getPost(params.slug);
  };

export default function PostSlug() {
    const post = useLoaderData();
    return (
        <main>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />

            <Link to="/">Back home</Link>

            <AnotherFetchingResourceComponentR />
        </main>
    );
}
