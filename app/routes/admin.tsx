import { getPosts } from "~/post";
import type { Post } from "~/post";
import adminStyles from "~/styles/admin.css";
import { Outlet, Link, useLoaderData } from "remix";

export const loader = async () => {
    return getPosts();
};

export const links = () => {
    return [{ rel: "stylesheet", href: adminStyles }];
  };

export default function Admin() {
    const posts = useLoaderData<Post[]>();
    return (
        <div className="admin">
            <nav>
                <h1><Link to='/admin'>Admin</Link></h1>
                <ul>
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <Link to={`/posts/${post.slug}`}>
                                {post.title}
                            </Link>
                            - 
                            <Link to={`edit/${post.slug}`}>
                                EDIT
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
