import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

// Browse all generated and saved learning books with filter by subject, age group, and completion status

export default async function BooksLibraryPage() {
  const { userId } = await auth();
  if (!userId) { redirect('/sign-in'); }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Books Library</h1>
        <p className="text-slate-500">Browse all generated and saved learning books with filter by subject, age group, and completion status</p>
      </main>
    </div>
  );
}
