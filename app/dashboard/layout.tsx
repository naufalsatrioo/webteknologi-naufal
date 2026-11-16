import SideNav from '@/app/dashboard/sidenav';
import Footer from '@/app/ui/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="w-full flex-none border-b border-slate-200 bg-white md:w-52 md:border-b-0 md:border-r">
        <SideNav />
      </div>
      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <div className="flex-1 p-4 sm:p-6 md:p-8">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
