import Link from 'next/link';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Footer from '@/app/ui/footer';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col px-4 py-4 sm:px-6 sm:py-6">
      <div className="w-full">
        <div className="flex h-24 shrink-0 items-center rounded-md bg-blue-600 px-5 sm:h-32 sm:px-8 md:h-44">
          <Image
            src="/logo/uialogo.png"
            width={500}
            height={152}
            className="block h-16 w-auto object-contain sm:h-20 md:h-28"
            alt="Banner UIA"
            priority
          />
        </div>

        <div className="mt-3 flex flex-1 flex-col md:flex-row">
          <section className="flex min-h-[26rem] flex-col items-start justify-center gap-6 rounded-md bg-slate-50 px-6 py-10 sm:px-10 md:min-h-[32rem] md:w-[40%] md:px-16">
            <p className={`${lusitana.className} max-w-xl text-xl leading-relaxed text-slate-800 md:text-2xl`}>
              <strong className="font-bold">Selamat Datang!</strong>
              <br />
              Ini adalah situs web pembelajaran{' '}
              <a href="https://nextjs.org/learn/" className="text-blue-600 hover:underline">
                Mata Kuliah Web teknologi
              </a>
              , Dosen Pengampu{' '}
              <b>Adhitya Ahmad Pradypta, S.Kom., M.T.I.</b>
            </p>
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
