import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { memoryExercises, quizQuestions } from '@/lib/data/exercises';
import { themen } from '@/lib/data/themen';
import { MemoryGame, Quiz } from '@/components/learning';
import { Button } from '@/components/ui/Button';

export function generateStaticParams() {
  return Object.keys(memoryExercises).map((id) => ({ thema: id }));
}

export default function UebungenPage({ params }: { params: { thema: string } }) {
  const memory = memoryExercises[params.thema as keyof typeof memoryExercises];
  const quiz = quizQuestions[params.thema as keyof typeof quizQuestions];
  const thema = themen.find((t) => t.id === params.thema);

  if (!memory && !quiz) notFound();

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href={`/themen/${params.thema}`}>
          <Button variant="secondary" size="sm" leftIcon={<ArrowLeft className="w-4 h-4" />} className="mb-6">
            Zurück zum Thema
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-largeTitle mb-2">
            {thema?.icon} {memory?.title || `Quiz: ${thema?.title}`}
          </h1>
          {memory?.description && <p className="text-body text-gray-600">{memory.description}</p>}
        </div>

        {memory && <MemoryGame title={memory.title} description={memory.description} pairs={memory.pairs} themaId={params.thema} />}
        {!memory && quiz && <Quiz questions={quiz} themaId={params.thema} onComplete={() => {}} />}
      </div>
    </main>
  );
}
