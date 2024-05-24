# Comfy Model Fetcher

This project automaticaly search the model for you and redirect you to download url.

## For Example, 

You want to install this model to your ComfyUI: "sd_xl_refiner_1.0.safetensors", then:

```sh
pip install comfy-cli
comfy model download --url https://comfy-dl.vercel.app/sd_xl_refiner_1.0.safetensors
```

## Further with comfy-cli

Currently abilities:
1. comfy model download --url https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0.safetensors?download=true
2. comfy model download --url https://comfy-dl.vercel.app/sd_xl_refiner_1.0.safetensors

Sugar suggestions:
1. comfy model download --search sd_xl_refiner_1.0.safetensors
2. comfy model get sd_xl_refiner_1.0.safetensors

2024-05-25 by @snomiao