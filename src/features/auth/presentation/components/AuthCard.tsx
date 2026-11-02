interface AuthCardProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

export function AuthCard({ title, subtitle, children }: AuthCardProps) {
    return (
        <div className="card bg-base-100 w-full max-w-sm shadow-md">
            <div className="card-body gap-4">
                <div className="text-center">
                    <p className="text-2xl font-black text-primary">Gym Routines</p>
                    <h1 className="text-lg font-semibold mt-2">{title}</h1>
                    <p className="text-sm text-base-content/70">{subtitle}</p>
                </div>
                {children}
            </div>
        </div>
    );
}
