'use client';

import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';
import {
  AtSymbolIcon,
  EyeIcon,
  EyeSlashIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useActionState, useState } from 'react';
import { authenticate } from '@/app/lib/actions';
import Footer from '@/app/ui/footer';

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <main className="flex min-h-screen flex-col px-4 py-4 sm:px-6 sm:py-6">
      <div className="w-full flex flex-col items-center">
        <Link
          href="/"
          title="Kembali ke Beranda"
          className="w-full flex h-24 shrink-0 items-center rounded-md bg-blue-600 px-5 transition-colors hover:bg-blue-700 sm:h-32 sm:px-8 md:h-44"
        >
          <Image
            src="/logo/uialogo.png"
            width={500}
            height={152}
            className="block h-16 w-auto object-contain sm:h-20 md:h-28"
            alt="Banner UIA"
            priority
          />
        </Link>

        <div className="my-6 w-full max-w-md rounded-md bg-slate-50 px-6 py-8 sm:my-8 sm:px-10 sm:py-10">
          <form action={formAction} className="space-y-4">
            <div className="flex-1">
              <h1 className={`${lusitana.className} mb-5 text-2xl font-normal leading-snug text-slate-900`}>
                Silakan Masuk dengan akun Anda.
              </h1>
              <div className="w-full space-y-4">
                <div>
                  <label
                    className="mb-2 block text-xs font-medium text-slate-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      className="peer block w-full rounded-md border border-slate-300 bg-white py-[10px] pl-10 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Ketikkan alamat email"
                      required
                    />
                    <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400 peer-focus:text-blue-600" />
                  </div>
                </div>
                <div>
                  <label
                    className="mb-2 block text-xs font-medium text-slate-700"
                    htmlFor="password"
                  >
                    Kata Sandi
                  </label>
                  <div className="relative">
                    <input
                      className="peer block w-full rounded-md border border-slate-300 bg-white py-[10px] pl-10 pr-12 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Ketikkan Kata Sandi"
                      required
                      minLength={6}
                    />
                    <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400 peer-focus:text-blue-600" />
                    <button
                      type="button"
                      onClick={() => setShowPassword((isVisible) => !isVisible)}
                      aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                      aria-pressed={showPassword}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      {showPassword ? (
                        <EyeSlashIcon aria-hidden="true" className="h-[18px] w-[18px]" />
                      ) : (
                        <EyeIcon aria-hidden="true" className="h-[18px] w-[18px]" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <Button className="mt-6 w-full" aria-disabled={isPending}>
                Masuk <ArrowRightIcon className="ml-auto h-5 w-5 text-white/90" />
              </Button>
              <div className="flex min-h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
                {errorMessage && (
                  <>
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    <p className="text-sm font-medium text-red-500">{errorMessage}</p>
                  </>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}
