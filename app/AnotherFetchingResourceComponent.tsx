import { useEffect, useState } from "react";

export default function AnotherFetchingResourceComponent() {
    const [bio, setBio] = useState('loading');
    useEffect(() => {
        (async () => {
            const crystallize = await (await fetch(`https://api.github.com/users/crystallizeapi`)).json();
            setBio(crystallize.bio);
        })();
    }, []);

    return (
        <div>
            <hr />
            <p>AnotherFetchingResourceComponent: {bio}</p>
        </div>
    );
}
