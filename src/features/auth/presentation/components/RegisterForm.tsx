'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AuthCard } from './AuthCard';
import { FormField } from './FormField';

export function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const passwordsMismatch = confirmPassword.length > 0 && password !== confirmPassword;

    const getRequiredError = (value: string, message: string) =>
        submitted && !value.trim() ? message : undefined;

    const confirmPasswordError = passwordsMismatch
        ? 'Las contraseñas no coinciden.'
        : getRequiredError(confirmPassword, 'Confirma tu contraseña.');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);

        const isComplete = [name, email, password, confirmPassword].every((value) => value.trim());

        if (isComplete && !passwordsMismatch) {
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setSubmitted(false);
        }
    };

    return (
        <AuthCard title="Crear cuenta" subtitle="Regístrate para empezar a entrenar.">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2">
                <FormField
                    label="Nombre"
                    type="text"
                    value={name}
                    onChange={setName}
                    placeholder="Tu nombre"
                    error={getRequiredError(name, 'Ingresa tu nombre.')}
                />
                <FormField
                    label="Correo"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    placeholder="tu@correo.com"
                    error={getRequiredError(email, 'Ingresa tu correo.')}
                />
                <FormField
                    label="Contraseña"
                    type="password"
                    value={password}
                    onChange={setPassword}
                    placeholder="********"
                    error={getRequiredError(password, 'Ingresa una contraseña.')}
                />
                <FormField
                    label="Confirmar contraseña"
                    type="password"
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                    placeholder="********"
                    error={confirmPasswordError}
                />
                <button type="submit" className="btn btn-primary w-full mt-2">
                    Registrarme
                </button>
            </form>

            <p className="text-center text-sm">
                ¿Ya tienes cuenta?{' '}
                <Link href="/login" className="link link-primary">
                    Inicia sesión
                </Link>
            </p>
        </AuthCard>
    );
}
