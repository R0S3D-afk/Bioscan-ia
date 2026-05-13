from fastapi import APIRouter

from fastapi import UploadFile

from fastapi import File

import shutil

import os

from app.ai.predictor import predecir_imagen

router = APIRouter()

UPLOAD_FOLDER = "uploads"

@router.post("/predict")

async def predecir(file: UploadFile = File(...)):

    ruta_imagen = os.path.join(

        UPLOAD_FOLDER,

        file.filename
    )

    with open(ruta_imagen, "wb") as buffer:

        shutil.copyfileobj(

            file.file,
            buffer
        )

    resultado = predecir_imagen(

        ruta_imagen
    )

    return {

        "filename": file.filename,

        "resultado": resultado
    }