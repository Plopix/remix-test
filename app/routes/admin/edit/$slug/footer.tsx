import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import AnotherFetchingResourceComponentR from "~/AnotherFetchingResourceComponentR";

//https://api.github.com/users/crystallizeapi

export const loader: LoaderFunction = async ({ params }) => {
    console.log("LOADER IN Footer");
    return await (await fetch(`https://api.github.com/users/crystallizeapi`)).json();
};

export default function Footer() {
    const crystallize = useLoaderData();
    return (
        <footer>
            <hr />
            <p>FOOTER</p>

<p>Powered by Remix and {crystallize.login}</p>
<img src={crystallize.avatar_url} />



        <AnotherFetchingResourceComponentR />
        </footer>
    );
}
