import Markdown from "react-markdown";

export default function Home() {
  // const host = process.env.VERCEL_URL || "comfy-dl.vercel.app";
  const msg = `
# Comfy Model Fetcher

This project automaticaly search the model for you and redirect you to download url.

## For Example,

You want to install this model to your ComfyUI: "sd_xl_refiner_1.0.safetensors", then:

\`\`\`
pip install comfy-cli
comfy model download --url https://comfy-dl.vercel.app/sd_xl_refiner_1.0.safetensors
\`\`\`

`;
  return <Markdown>{msg}</Markdown>;
}
/* 


*/
