import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

// AI-powered book generator — choose child, topic, Montessori area, and difficulty to create a personalized book

import { auth } from '@clerk/nextjs/server';

export default async function CreateBookPage() {
  const { userId } = await auth();
  if (!userId) { redirect('/sign-in'); }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Create Book</h1>
        <p className="text-slate-500">AI-powered book generator — choose child, topic, Montessori area, and difficulty to create a personalized book</p>
      </main>
    </div>
  );
}
