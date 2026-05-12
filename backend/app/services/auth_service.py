from sqlalchemy.orm import Session
from app.models.usuario_model import Usuario
from app.security.jwt_handler import crear_token

from app.repositories.usuario_repository import (
    obtener_usuario_por_correo,
    crear_usuario
)

from app.security.auth_handler import (
    hash_password,
    verificar_password
)

def registrar_usuario(
    db: Session,
    datos
):

    usuario_existente = obtener_usuario_por_correo(
        db,
        datos.correo
    )

    if usuario_existente:

        return {
            "error": "El correo ya existe"
        }

    nuevo_usuario = Usuario(

        nombre=datos.nombre,

        correo=datos.correo,

        password=hash_password(
            datos.password
        )
    )

    crear_usuario(
        db,
        nuevo_usuario
    )

    return {
        "mensaje": "Usuario registrado"
    }

def login_usuario(
    db: Session,
    datos
):

    usuario = obtener_usuario_por_correo(
        db,
        datos.correo
    )

    if not usuario:

        return {
            "error": "Usuario no encontrado"
        }

    if not verificar_password(
        datos.password,
        usuario.password
    ):

        return {
            "error": "Contraseña incorrecta"
        }

    token = crear_token({

        "sub": usuario.correo
    })

    return {

        "access_token": token,

        "token_type": "bearer",

        "usuario": usuario.nombre
    }