import { renderToString } from "react-dom/server";

export async function loader() {
    const date = new Date();
    return new Response(renderToString(
        <strong>PLOP Generated at: {date.toLocaleString()}</strong>
      ), {
        status: 200,
        headers: {
            "Content-Type": "text/hml",
            "Cache-Control": "s-max-age=10",
        },
    });
}