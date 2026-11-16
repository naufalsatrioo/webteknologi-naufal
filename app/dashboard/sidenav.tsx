import Link from 'next/link';
import NavLinks from '@/app/dashboard/nav-links';
import Image from 'next/image';
import SignOutButton from '@/app/ui/sign-out-button';

export default function SideNav() {
  return (
    <div className="flex flex-col gap-2 p-3 sm:p-4 md:sticky md:top-0 md:h-screen md:p-2">
      <Link
        className="flex h-20 items-center justify-center rounded-md bg-blue-600 p-4 transition-colors hover:bg-blue-700 md:mb-1 md:h-32"
        href="/"
      >
        <div className="w-full">
          <Image
            src="/logo/uialogo.png"
            width={300}
            height={91}
            className="block h-12 w-full object-contain md:h-14"
            alt="Banner UIA"
            priority
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-row justify-between gap-2 md:flex-col md:justify-start">
        <NavLinks />
        <div className="hidden flex-1 md:block"></div>
        <SignOutButton />
      </div>
    </div>
  );
}
