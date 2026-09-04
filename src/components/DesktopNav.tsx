'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home', exact: true },
  { href: '/gallery', label: 'Gallery' },
  { href: '/services', label: 'Services' },
  { href: '/rates', label: 'Rates' },
  { href: '/locations', label: 'Locations' },
  { href: '/about', label: 'About Us' },
] as const;

/** Base styles shared by every nav link */
const linkBase =
  'relative text-[0.95rem] font-semibold no-underline transition-colors duration-200 ' +
  'text-[var(--text-secondary)] hover:text-[var(--accent-primary)] ' +
  'after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-full ' +
  'after:origin-left after:scale-x-0 after:bg-[var(--accent-primary)] ' +
  'after:transition-transform after:duration-200 hover:after:scale-x-100';

/** Extra classes applied when the link is active */
const linkActive = 'text-[var(--accent-primary)] after:scale-x-100';

export default function DesktopNav() {
  const pathname = usePathname();

  const isActive = ({ href, exact }: { href: string; exact?: boolean }) =>
    exact ? pathname === href : pathname.startsWith(href);

  return (
    <nav className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${linkBase} ${isActive(link) ? linkActive : ''}`}
        >
          {link.label}
        </Link>
      ))}

      {/* CTA button */}
      <Link
        href="/contact"
        className={
          'inline-flex items-center justify-center px-5 py-2 rounded-full ' +
          'bg-[var(--accent-primary)] text-white text-[0.9rem] font-bold ' +
          'no-underline transition-colors duration-200 ' +
          'hover:bg-[var(--accent-hover)] active:scale-95'
        }
      >
        Contact Us
      </Link>
    </nav>
  );
}
