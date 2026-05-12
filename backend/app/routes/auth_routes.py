from fastapi import APIRouter

from sqlalchemy.orm import Session

from app.config.database import SessionLocal

from app.schemas.usuario_schema import (
    UsuarioRegistro,
    UsuarioLogin
)

from app.services.auth_service import (
    registrar_usuario,
    login_usuario
)

router = APIRouter()

@router.post("/registro")
def registro(
    usuario: UsuarioRegistro
):

    db: Session = SessionLocal()

    return registrar_usuario(
        db,
        usuario
    )

@router.post("/login")
def login(
    usuario: UsuarioLogin
):

    db: Session = SessionLocal()

    return login_usuario(
        db,
        usuario
    )