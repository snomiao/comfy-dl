import { serve } from "bun";
import { getHugginfaceDownloadLink } from "./getHugginfaceDownloadLink";

// test
if (import.meta.main) {
  const qs = [
    "v1-5-pruned-emaonly.ckpt",
    "sd_xl_refiner_1.0.safetensors",
    "sd_xl_base_1.0.safetensors",
    "4x-UltraMix_Smooth.pth",
  ];
  const downloadLink = await getHugginfaceDownloadLink(qs[0]);
  console.log(downloadLink);
}

// serve
serve({
  async fetch(req) {
    if (req.method !== "GET")
      return new Response("method not supported", { status: 405 });
    const q = new URL(req.url).pathname.slice(1);
    const downloadLink = await getHugginfaceDownloadLink(q);
    if (!downloadLink) return new Response("NOT FOUND", { status: 404 });
    return new Response("Found", { status: 302, statusText: "Found" });
  },
});