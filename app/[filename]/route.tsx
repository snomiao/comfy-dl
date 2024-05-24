import { NextRequest } from "next/server";
import { getHugginfaceDownloadLink } from "./getHugginfaceDownloadLink";

export const GET = async (req: NextRequest, { params: { filename = "" } }) => {
  const q = req.nextUrl.pathname.slice(1);

  const downloadLinks = await getHugginfaceDownloadLink(q);
  if (!downloadLinks.length) return new Response("NOT FOUND", { status: 404 });
  if (downloadLinks.length === 1) {
    const downloadLink = downloadLinks[0];
    return new Response("Found", {
      status: 302,
      statusText: "Found",
      headers: { Location: downloadLink },
    });
  }
  const downloadLink = downloadLinks[0];
  return new Response("Found Multiple, return first", {
    status: 302,
    statusText: "Found Multiple, return first",
    headers: { Location: downloadLink },
  });
};
