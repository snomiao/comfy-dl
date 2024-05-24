import { NextRequest } from "next/server";
import { getHugginfaceDownloadLink } from "./getHugginfaceDownloadLink";

export const GET = async (req: NextRequest, { params: { filename = "" } }) => {
  const q = req.nextUrl.pathname.slice(1);
  
  const downloadLink = await getHugginfaceDownloadLink(q);
  if (!downloadLink) return new Response("NOT FOUND", { status: 404 });
  return new Response("Found", {
    status: 302,
    statusText: "Found",
    headers: { Location: downloadLink },
  });
};
