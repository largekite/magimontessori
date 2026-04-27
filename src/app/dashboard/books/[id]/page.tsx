import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

// Interactive book reader with illustrations, activities, quizzes, and read-aloud support

export default async function BookReaderPage() {
  const { userId } = await auth();
  if (!userId) { redirect('/sign-in'); }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Book Reader</h1>
        <p className="text-slate-500">Interactive book reader with illustrations, activities, quizzes, and read-aloud support</p>
      </main>
    </div>
  );
}
