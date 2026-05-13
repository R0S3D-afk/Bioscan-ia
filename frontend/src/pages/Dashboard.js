import React, {
    useContext
} from "react";

import {
    AuthContext
} from "../context/AuthContext";

import {
    useNavigate
} from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

function Dashboard() {

    const {
        usuario,
        logout
    } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <DashboardLayout>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <p className="text-sm text-emerald-700 uppercase tracking-[0.24em] mb-2">
                            Panel de Control
                        </p>
                        <h2 className="text-4xl font-bold text-slate-900">
                            Bienvenido a BIOSCAN IA 🌿
                        </h2>
                        <p className="mt-2 text-slate-600 max-w-2xl">
                            Monitorea la salud de tus cultivos y toma decisiones más seguras con datos en tiempo real.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="rounded-2xl bg-white/90 border border-slate-200 px-4 py-3 shadow-sm">
                            <p className="text-sm text-slate-500">Usuario</p>
                            <p className="font-semibold text-slate-900">{usuario}</p>
                        </div>
                        <button
                            onClick={() => {
                                logout();
                                navigate("/");
                            }}
                            className="rounded-2xl bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-rose-700"
                        >
                            Cerrar sesión
                        </button>
                    </div>
                </div>

                <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
                    <div className="rounded-[2rem] bg-emerald-900/95 p-8 text-white shadow-2xl ring-1 ring-emerald-800/30">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-sm uppercase tracking-[0.28em] text-emerald-200/80">
                                    Nueva Inspección
                                </p>
                                <h3 className="mt-3 text-3xl font-bold">
                                    Escanea producto con IA en tiempo real
                                </h3>
                            </div>
                            <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100/15 text-emerald-200">
                                <span className="text-2xl">🔍</span>
                            </div>
                        </div>
                        <p className="mt-6 max-w-xl text-slate-200/85">
                            Registra una nueva inspección para obtener análisis de salud, alertas y recomendaciones automáticas.
                        </p>
                        <button className="mt-8 rounded-full bg-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-100">
                            Iniciar inspección
                        </button>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                            <span className="inline-flex rounded-2xl bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
                                +12%
                            </span>
                            <p className="mt-5 text-4xl font-bold text-slate-900">127</p>
                            <p className="mt-2 text-sm text-slate-500">Total Analizados</p>
                        </div>
                        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                            <span className="inline-flex rounded-2xl bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
                                Excelente
                            </span>
                            <p className="mt-5 text-4xl font-bold text-slate-900">92%</p>
                            <p className="mt-2 text-sm text-slate-500">Salud Promedio</p>
                        </div>
                        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                            <span className="inline-flex rounded-2xl bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700">
                                Atención
                            </span>
                            <p className="mt-5 text-4xl font-bold text-slate-900">3</p>
                            <p className="mt-2 text-sm text-slate-500">Alertas Críticas</p>
                        </div>
                        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                            <span className="inline-flex rounded-2xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
                                Últimas 24h
                            </span>
                            <p className="mt-5 text-4xl font-bold text-slate-900">7</p>
                            <p className="mt-2 text-sm text-slate-500">Nuevos reportes</p>
                        </div>
                    </div>
                </section>

                <section className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
                    <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                        <div className="flex items-center justify-between mb-5">
                            <h3 className="text-xl font-semibold text-slate-900">Actividad Reciente</h3>
                            <span className="text-sm text-slate-500">Actualizado hace 2 min</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between rounded-3xl bg-slate-50 p-4">
                                <div>
                                    <p className="font-semibold text-slate-900">Manzana analizada</p>
                                    <p className="text-sm text-slate-500">Hace 2 min</p>
                                </div>
                                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Óptimo</span>
                            </div>
                            <div className="flex items-center justify-between rounded-3xl bg-slate-50 p-4">
                                <div>
                                    <p className="font-semibold text-slate-900">Tomate analizado</p>
                                    <p className="text-sm text-slate-500">Hace 15 min</p>
                                </div>
                                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Óptimo</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                        <h3 className="text-xl font-semibold text-slate-900 mb-5">Estadísticas</h3>
                        <div className="grid gap-4">
                            <div className="rounded-3xl bg-slate-50 p-4">
                                <p className="text-sm text-slate-500">Tasa de éxito</p>
                                <p className="mt-2 text-2xl font-bold text-slate-900">94.5%</p>
                            </div>
                            <div className="rounded-3xl bg-slate-50 p-4">
                                <p className="text-sm text-slate-500">Tiempo promedio</p>
                                <p className="mt-2 text-2xl font-bold text-slate-900">2.3s</p>
                            </div>
                            <div className="rounded-3xl bg-slate-50 p-4">
                                <p className="text-sm text-slate-500">Alertas procesadas</p>
                                <p className="mt-2 text-2xl font-bold text-slate-900">47</p>
                            </div>
                            <div className="rounded-3xl bg-slate-50 p-4">
                                <p className="text-sm text-slate-500">Precisión general</p>
                                <p className="mt-2 text-2xl font-bold text-slate-900">98.2%</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </DashboardLayout>
    );
}

export default Dashboard;