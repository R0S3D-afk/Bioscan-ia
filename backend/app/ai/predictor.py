import tensorflow as tf

import numpy as np

from PIL import Image

MODEL_PATH = "model/1"

modelo = tf.saved_model.load(

    MODEL_PATH
)

predict_fn = modelo.signatures[

    "serving_default"
]

CLASSES = [

    "Early Blight",

    "Late Blight",

    "Healthy"
]

def predecir_imagen(ruta_imagen):

    imagen = Image.open(ruta_imagen)

    imagen = imagen.resize((256, 256))

    imagen = np.array(imagen)

    imagen = imagen / 255.0

    imagen = np.expand_dims(

        imagen,
        axis=0
    )

    imagen = tf.convert_to_tensor(

        imagen,

        dtype=tf.float32
    )

    prediccion = predict_fn(

        imagen
    )

    prediccion = list(

        prediccion.values()
    )[0].numpy()

    clase = CLASSES[

        np.argmax(prediccion)
    ]

    confianza = float(

        np.max(prediccion)
    )

    return {

        "clase": clase,

        "confianza": round(
            confianza * 100,
            2
        )
    }