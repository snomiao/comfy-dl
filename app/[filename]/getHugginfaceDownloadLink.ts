import DIE from "@snomiao/die";
import { google } from "googleapis";

// example: 
// 
// const q = "model_name sd_xl_base_1.0.safetensors";
// const q2 = "ckpt_name sd_xl_base_1.0.safetensors";
// Prompt outputs failed validation
// Checkpe ointLoaderSimple:
// - Value not in list: ckpt_name: 'sd_xl_refiner_1.0.safetensors' not in ['v1-5-pruned-emaonly.ckpt']
// CheckpointLoaderSimple:
// - Value not in list: ckpt_name: 'sd_xl_base_1.0.safetensors' not in ['v1-5-pruned-emaonly.ckpt']
// UpscaleModelLoader:
// - Value not in list: model_name: 'Interpolations\4x-UltraMix_Smooth.pth' not in []

export async function getHugginfaceDownloadLink(
  model_file_name: string,
  hint?: string
) {
  const result = await google.customsearch("v1").cse.list({
    key:
      process.env.GOOGLE_SEARCH_API_KEY ?? DIE("Missing GOOGLE_SEARCH_API_KEY"),
    cx:
      process.env.GOOGLE_SEARCH_ENGINE_ID ??
      DIE("Missing GOOGLE_SEARCH_ENGINE_ID"),
    q: hint,
    exactTerms: model_file_name,
    siteSearch: "https://huggingface.co",
    siteSearchFilter: "i",
  });
  const items = result.data.items || DIE("MODEL SEARCH FAILED");
  const links = items.map((e) => e.link).flatMap((e) => (e ? [e] : []));
  // convert from
  // https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/blob/main/sd_xl_refiner_1.0.safetensors
  // to
  // https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0.safetensors?download=true
  const downloadLinks = links
    .filter((e) => e.endsWith(model_file_name))
    .map((e) => e.replace("/blob/", "/resolve/"))
    .filter((e) => e.match("/huggingface.co/") && e.match("/resolve/"))
    .map((e) => e + "?download=true");
  if (!downloadLinks.length)
    console.log("WARN: Not found", { model_file_name, hint, links });
  return downloadLinks;
}
