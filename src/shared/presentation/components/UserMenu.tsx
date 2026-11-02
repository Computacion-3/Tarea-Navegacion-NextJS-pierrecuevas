import Link from 'next/link';

export function UserMenu() {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" aria-label="Menú de usuario" className="btn btn-ghost btn-circle avatar">
                <div className="w-9 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold">
                    U
                </div>
            </div>
            <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-48 p-2 shadow border border-base-200"
            >
                <li className="menu-title">Mi cuenta</li>
                <li>
                    <Link href="/login" className="text-error">
                        Cerrar sesión
                    </Link>
                </li>
            </ul>
        </div>
    );
}
