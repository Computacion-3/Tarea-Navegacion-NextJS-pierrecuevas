'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthCard } from './AuthCard';
import { FormField } from './FormField';

export function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const emailError = submitted && !email.trim() ? 'Ingresa tu correo.' : undefined;
    const passwordError = submitted && !password.trim() ? 'Ingresa tu contraseña.' : undefined;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);

        if (email.trim() && password.trim()) {
            router.replace('/routines');
        }
    };

    return (
        <AuthCard title="Iniciar sesión" subtitle="Ingresa para ver tus rutinas.">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2">
                <FormField
                    label="Correo"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    placeholder="tu@correo.com"
                    error={emailError}
                />
                <FormField
                    label="Contraseña"
                    type="password"
                    value={password}
                    onChange={setPassword}
                    placeholder="********"
                    error={passwordError}
                />
                <button type="submit" className="btn btn-primary w-full mt-2">
                    Iniciar sesión
                </button>
            </form>

            <p className="text-center text-sm">
                ¿Sin cuenta?{' '}
                <Link href="/register" className="link link-primary">
                    Regístrate
                </Link>
            </p>
        </AuthCard>
    );
}
