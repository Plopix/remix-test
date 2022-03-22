import { LoaderFunction, useLoaderData, json } from "remix"
import { Link } from "remix";
import { getPosts } from "~/post";
import type { Post } from "~/post";
import { Esi } from "~/ESI";


export function headers() {
    return {
        'cache-control': 'max-age=38',
    }
}
export const loader: LoaderFunction = async () => {
    const data = await getPosts();
    return json(data, {
        headers: {
            'Cache-Control': 'max-age=42',
        }
    });
};

export default function Posts() {
    const posts = useLoaderData<Post[]>();
    return (
        <main>
            <h1>Posts</h1>

            <ul>
                {posts.map((post: Post) => (
                    <li key={post.slug}>
                        <Link to={post.slug}>{post.title}</Link>
                    </li>
                ))}
            </ul>

            <Link to="/">Back home</Link>
            <div>
                
                ESI <Esi url="/esi" /> XXX

            </div>
        </main>
    );
}