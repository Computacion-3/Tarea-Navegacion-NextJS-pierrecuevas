import Link from 'next/link';
import { Navbar } from './Navbar';
import { UserMenu } from './UserMenu';

export function Header() {
    return (
        <header className="navbar bg-base-100 shadow-sm px-4">
            <div className="flex-1">
                <Link href="/routines" className="btn btn-ghost text-xl font-black text-primary">
                    Gym Routines
                </Link>
            </div>
            <div className="flex items-center gap-2">
                <Navbar />
                <UserMenu />
            </div>
        </header>
    );
}
