import Markdown from "react-markdown";

export default function Home() {
  const host = process.env.VERCEL_URL || "comfy-dl.vercel.app";
  const msg = `
# Comfy Model Fetcher

We automaticaly search the model for you and redirect you to download url.

## For Example,

You want to install this model to your ComfyUI: "sd_xl_refiner_1.0.safetensors", then:

\`\`\`
pip install comfy-cli
comfy model download --url https://${host}/sd_xl_refiner_1.0.safetensors
\`\`\`

`;
  return <Markdown>{msg}</Markdown>;
}
/* 

Currently abilities:
1. comfy model download --url https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0.safetensors?download=true
2. comfy model download --url https://comfy-dl.vercel.app/sd_xl_refiner_1.0.safetensors

Sugar suggestions:
1. comfy model download --search sd_xl_refiner_1.0.safetensors
2. comfy model get sd_xl_refiner_1.0.safetensors

*/
