import { Dashboard } from "@/components/Dashboard";

export default function DashboardPage() {
  return (
    <>
      <Dashboard />
      {/* Coming Soon overlay bounded to dashboard route */}
      <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 backdrop-blur-md">
        <div className="mx-4 max-w-xl w-full rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Coming soon</h2>
          <p className="mt-3 text-white/80">We&rsquo;re putting the finishing touches on VirtualStrategy. Join our Telegram to get updates and early access.</p>
          <a
            href="https://t.me/virstrstrategy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 inline-flex px-6 py-3"
          >
            Join Telegram
          </a>
        </div>
      </div>
    </>
  );
}


