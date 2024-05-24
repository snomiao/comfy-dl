import Markdown from "react-markdown";

export default function Home() {
  // const host = process.env.VERCEL_URL || "comfy-dl.vercel.app";
  const msg = `
# Comfy Model Fetcher

This project automaticaly search the model for you and redirect you to download url.

## For Example,

If You want to install this model to your ComfyUI: "sd_xl_refiner_1.0.safetensors", then:

Add a prefix 'https://comfy-dl.vercel.app/' into your model filename name:

https://comfy-dl.vercel.app/sd_xl_refiner_1.0.safetensors

It will find the model file for you and redirect into

https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0.safetensors?download=true

And you could try install it with comfy-cli

\`\`\`
pip install comfy-cli
comfy model download --url https://comfy-dl.vercel.app/sd_xl_refiner_1.0.safetensors
\`\`\`

`;
  return <Markdown>{msg}</Markdown>;
}
/* 


*/
