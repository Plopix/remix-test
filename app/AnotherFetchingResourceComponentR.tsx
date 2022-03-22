import { useFetcher, useLoaderData } from "remix";
import { useEffect, useState } from "react";

// export const loader: LoaderFunction = async () => {
//     console.log("LOADER IN AnotherFetchingResourceComponentR CCC");

//     return await (await fetch(`https://api.github.com/users/plopix`)).json();
// };



export default function AnotherFetchingResourceComponentR() {
    const fetcher = useFetcher();
    useEffect(() => {
        fetcher.load(`https://api.github.com/users/plopix`);
    }, []);


    console.log(fetcher.data);
    return (
        <div>
            <hr />
            <p>AnotherFetchingResourceComponent REEEMIIIIIXXXX:</p>
        </div>
    );
}
