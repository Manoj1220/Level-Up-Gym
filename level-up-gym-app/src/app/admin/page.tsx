import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { format } from "date-fns";
import { deleteApplication, markAsContacted } from "./actions";

export default async function AdminDashboard({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; date?: string; status?: string }>;
}) {
  const { q, date, status } = await searchParams;

  const applications = await prisma.application.findMany({
    where: {
      AND: [
        q ? { OR: [{ name: { contains: q } }, { phone: { contains: q } }] } : {},
        status ? { status } : {},
        // Date filtering is simplified for SQLite here, comparing the date string
      ],
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-background text-on-background font-body-md selection:bg-surface-tint selection:text-surface pt-20 pb-10">
      <header className="fixed top-0 w-full z-50 bg-surface/40 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop py-4">
          <div className="font-headline-xl text-primary tracking-wider">LEVEL UP GYM | ADMIN</div>
          <Link href="/" className="font-label-md text-label-md uppercase tracking-widest text-primary-container border border-primary-container px-4 py-2 rounded hover:bg-primary-container hover:text-on-primary-fixed transition-colors">
            PUBLIC SITE
          </Link>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-8">
        <h1 className="font-display-lg text-primary uppercase mb-8">Leads Dashboard</h1>

        <form className="glass-panel p-6 rounded-lg mb-8 flex flex-wrap gap-4 items-end border-primary-container/20">
          <div className="flex flex-col gap-2 flex-grow min-w-[200px]">
            <label className="font-label-md text-secondary uppercase tracking-widest">Search Name / Phone</label>
            <input name="q" defaultValue={q} className="input-field rounded-md px-4 py-2 w-full" placeholder="Search..." />
          </div>
          <div className="flex flex-col gap-2 min-w-[150px]">
            <label className="font-label-md text-secondary uppercase tracking-widest">Status</label>
            <select name="status" defaultValue={status} className="input-field rounded-md px-4 py-2 w-full appearance-none">
              <option value="">All</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
            </select>
          </div>
          <button type="submit" className="bg-surface-tint text-surface font-headline-md px-6 py-2 rounded uppercase hover:scale-105 transition-all">Filter</button>
          <Link href="/admin" className="border border-white/20 text-white font-headline-md px-6 py-2 rounded uppercase hover:bg-white/10 transition-all">Clear</Link>
        </form>

        <div className="glass-panel rounded-xl overflow-hidden border-primary-container/20">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high border-b border-white/10">
                  <th className="p-4 font-label-md text-secondary uppercase tracking-widest">Date</th>
                  <th className="p-4 font-label-md text-secondary uppercase tracking-widest">Name</th>
                  <th className="p-4 font-label-md text-secondary uppercase tracking-widest">Phone</th>
                  <th className="p-4 font-label-md text-secondary uppercase tracking-widest">Email</th>
                  <th className="p-4 font-label-md text-secondary uppercase tracking-widest">Status</th>
                  <th className="p-4 font-label-md text-secondary uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 text-sm text-on-surface-variant whitespace-nowrap">
                      {format(app.createdAt, "MMM d, yyyy HH:mm")}
                    </td>
                    <td className="p-4 font-body-lg text-primary">{app.name}</td>
                    <td className="p-4 text-primary">{app.phone}</td>
                    <td className="p-4 text-secondary">{app.email || "-"}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-label-md uppercase tracking-widest ${app.status === 'new' ? 'bg-primary-container text-on-primary-fixed' : 'bg-surface-container-highest text-secondary'}`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <form className="flex gap-2 justify-end" action={async () => {
                        "use server";
                        await deleteApplication(app.id);
                      }}>
                        {app.status === 'new' && (
                          <button formAction={async () => {
                            "use server";
                            await markAsContacted(app.id);
                          }} className="text-primary-container hover:text-white transition-colors p-1" title="Mark Contacted">
                            <span className="material-symbols-outlined text-base">check_circle</span>
                          </button>
                        )}
                        <button type="submit" className="text-error hover:text-white transition-colors p-1" title="Delete">
                          <span className="material-symbols-outlined text-base">delete</span>
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
                {applications.length === 0 && (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-secondary">
                      No applications found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
