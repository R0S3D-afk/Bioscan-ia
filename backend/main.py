from fastapi import FastAPI, File, UploadFile
from PIL import Image
import io

app = FastAPI()

@app.get("/")
def inicio():
    return {"mensaje": "API funcionando correctamente"}

@app.post("/analizar")
async def analizar(file: UploadFile = File(...)):
    contenido = await file.read()

    imagen = Image.open(io.BytesIO(contenido))

    ancho, alto = imagen.size

    return {
        "estado": "Imagen recibida correctamente",
        "ancho": ancho,
        "alto": alto
    }