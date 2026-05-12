from jose import jwt
from datetime import datetime
from datetime import timedelta

SECRET_KEY = "BIOSCAN_SECRET_KEY"

ALGORITHM = "HS256"

ACCESS_TOKEN_EXPIRE_MINUTES = 60

def crear_token(data: dict):

    datos = data.copy()

    expiracion = datetime.utcnow() + timedelta(

        minutes=ACCESS_TOKEN_EXPIRE_MINUTES
    )

    datos.update({

        "exp": expiracion
    })

    token = jwt.encode(

        datos,
        SECRET_KEY,
        algorithm=ALGORITHM
    )

    return token