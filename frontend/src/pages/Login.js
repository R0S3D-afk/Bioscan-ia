import React, {
    useState,
    useContext
} from "react";

import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF } from "react-icons/fa";

import {
    AuthContext
} from "../context/AuthContext";

import {
    registrarUsuario,
    loginUsuario
} from "../services/authService";

function Login() {

    const { login } = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(true);

    const [nombre, setNombre] = useState("");

    const [correo, setCorreo] = useState("");

    const [password, setPassword] = useState("");

    const manejarFormulario = async () => {

        try {

            if(correo === "" || password === ""){

                alert("Completa todos los campos");

                return;
            }

            if(!isLogin && nombre === ""){

                alert("Ingresa tu nombre");

                return;
            }

            if(isLogin){

                const response = await loginUsuario({

                    correo,
                    password
                });

                if(response.error){

                    alert(response.error);

                    return;
                }

                login(

                    response.access_token,

                    response.usuario
                );

            }else{

                const response = await registrarUsuario({

                    nombre,
                    correo,
                    password
                });

                if(response.error){

                    alert(response.error);

                    return;
                }

                alert(response.mensaje);

                setIsLogin(true);
            }

        } catch (error) {

            console.log(error);

            alert("Error en el servidor");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-10">
            <div className="relative max-w-6xl w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_35px_60px_-30px_rgba(15,23,42,0.35)]">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-200/25 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-slate-200/25 blur-3xl" />

                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="relative p-8 md:p-14">
                        <div className="mb-8">
                            <p className="text-sm uppercase tracking-[0.35em] text-emerald-600/90 mb-2">Bioscan IA</p>
                            <h1 className="text-4xl md:text-5xl font-semibold text-slate-950 leading-tight">
                                Accede a tu panel de monitoreo agrícola
                            </h1>
                            <p className="mt-4 text-slate-500 max-w-xl">
                                Inicia sesión para comenzar a controlar cultivos, recibir alertas tempranas y mejorar tu producción.
                            </p>
                        </div>

                        <div className="space-y-4">
                            { !isLogin && (
                                <input
                                    type="text"
                                    placeholder="Nombre completo"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    className="w-full p-4 border border-slate-200 rounded-3xl bg-slate-50 text-slate-700 outline-none transition focus:border-emerald-500 focus:bg-white"
                                />
                            ) }
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                className="w-full p-4 border border-slate-200 rounded-3xl bg-slate-50 text-slate-700 outline-none transition focus:border-emerald-500 focus:bg-white"
                            />
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-4 border border-slate-200 rounded-3xl bg-slate-50 text-slate-700 outline-none transition focus:border-emerald-500 focus:bg-white"
                            />
                        </div>

                        <button
                            onClick={manejarFormulario}
                            className="mt-10 w-full rounded-3xl bg-slate-950 px-5 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-slate-800"
                        >
                            {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
                        </button>

                        <div className="mt-8 flex items-center gap-3 text-slate-400 text-sm">
                            <span className="h-px flex-1 bg-slate-200"></span>
                            o continuar con
                            <span className="h-px flex-1 bg-slate-200"></span>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-3">
                            <button className="rounded-3xl border border-slate-200 bg-white py-3 text-slate-600 shadow-sm transition hover:bg-slate-50">
                                <FaApple size={18} />
                            </button>
                            <button className="rounded-3xl border border-slate-200 bg-white py-3 text-slate-600 shadow-sm transition hover:bg-slate-50">
                                <FcGoogle size={22} />
                            </button>
                            <button className="rounded-3xl border border-slate-200 bg-white py-3 text-slate-600 shadow-sm transition hover:bg-slate-50">
                                <FaFacebookF size={18} />
                            </button>
                        </div>

                        <p className="text-center mt-8 text-slate-500">
                            {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
                            <span
                                onClick={() => setIsLogin(!isLogin)}
                                className="ml-2 cursor-pointer font-semibold text-emerald-700"
                            >
                                {isLogin ? "Crear cuenta" : "Iniciar sesión"}
                            </span>
                        </p>
                    </div>

                    <div className="relative min-h-[420px] bg-slate-950">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url('/images/login.jpg')"
                            }}
                        />
                        <div className="absolute inset-0 bg-slate-950/55" />
                        <div className="relative h-full p-10 flex flex-col justify-between text-white">
                            <div>
                                <span className="inline-flex rounded-full bg-emerald-300/15 px-3 py-1 text-xs uppercase tracking-[0.24em] text-emerald-200">
                                    Agricultura inteligente
                                </span>
                                <h2 className="mt-8 text-3xl font-bold leading-tight">
                                    Conecta con tu cultivo
                                </h2>
                                <p className="mt-4 max-w-sm text-slate-200/90">
                                    Visualiza el estado de tus campos, detecta alertas tempranas y actúa con decisiones basadas en datos.
                                </p>
                            </div>
                            <div className="grid gap-3">
                                <div className="rounded-3xl bg-white/10 p-4 backdrop-blur-sm">
                                    <p className="text-xs uppercase text-slate-300">Beneficio</p>
                                    <p className="mt-2 font-semibold text-lg">Mejora la calidad de tus cosechas</p>
                                </div>
                                <div className="rounded-3xl bg-white/10 p-4 backdrop-blur-sm">
                                    <p className="text-xs uppercase text-slate-300">Tiempo</p>
                                    <p className="mt-2 font-semibold text-lg">Resultados rápidos en cada inspección</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;