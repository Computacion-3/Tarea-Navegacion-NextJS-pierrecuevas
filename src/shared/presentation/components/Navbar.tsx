import { NavLink } from './NavLink';

const navLinks = [
    { href: '/routines', label: 'Rutinas' },
    { href: '/routines-clean', label: 'Rutinas Clean' },
];

export function Navbar() {
    const links = navLinks.map((link) => (
        <li key={link.href}>
            <NavLink href={link.href}>{link.label}</NavLink>
        </li>
    ));

    return (
        <nav>
            <div className="dropdown dropdown-end md:hidden">
                <div tabIndex={0} role="button" aria-label="Abrir menú" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={-1}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow border border-base-200"
                >
                    {links}
                </ul>
            </div>

            <ul className="menu menu-horizontal hidden md:flex gap-1 px-1">
                {links}
            </ul>
        </nav>
    );
}
