import React, { useEffect, FunctionComponent, useState } from 'react';

const isClient = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

const fetchURL = async (url: string) => {
    const response = await fetch(url);
    return await response.text();
}

export const Esi: FunctionComponent<{ url: string }> = ({ url }) => {
    const [html, setHtml] = useState(`<esi:include src="${url}" />`);

    useEffect(() => {
        (async () => {
            if (!isClient) {
                return;
            }
            setHtml(await fetchURL(url));
        })();
    }, []);
    return <div dangerouslySetInnerHTML={{ __html: html }} suppressHydrationWarning={true} />
}