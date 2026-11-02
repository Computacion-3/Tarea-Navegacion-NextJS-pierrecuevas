interface FormFieldProps {
    label: string;
    type: 'text' | 'email' | 'password';
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    error?: string;
}

export function FormField({ label, type, value, onChange, placeholder, error }: FormFieldProps) {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{label}</legend>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={`input w-full ${error ? 'input-error' : ''}`}
            />
            {error && <p className="label text-error">{error}</p>}
        </fieldset>
    );
}
