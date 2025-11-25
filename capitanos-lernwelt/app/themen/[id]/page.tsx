'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Progress from '@/components/ui/Progress';
import { Button } from '@/components/ui/Button';
import { themen } from '@/lib/data/themen';
import { useUserStore } from '@/lib/store/userStore';
import { ArrowLeft, BookOpen, CheckCircle2 } from 'lucide-react';

export default function ThemaPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  
  const thema = themen.find(t => t.id === id);
  const { themenProgress, markSectionRead } = useUserStore();
  
  useEffect(() => {
    if (!thema) {
      router.push('/');
    }
  }, [thema, router]);

  if (!thema) {
    return null;
  }

  const progress = themenProgress[thema.id];
  const sectionsRead = progress?.sectionsRead || [];

  return (
    <main className="min-h-screen bg-[var(--color-secondary-background)] pb-8">
      {/* Header */}
      <header className="glass sticky top-0 z-50 border-b border-[rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="secondary" size="sm">
                <ArrowLeft size={16} className="mr-2" />
                Zurück
              </Button>
            </Link>
            <div>
              <h1 className="text-title1 flex items-center gap-2">
                <span>{thema.icon}</span>
                {thema.title}
              </h1>
              <p className="text-subheadline text-secondary">
                {thema.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card padding="md" className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-title2 mb-1">Dein Fortschritt</h2>
                <p className="text-footnote text-secondary">
                  📖 Buchseiten {thema.bookPages}
                </p>
              </div>
              <Badge 
                variant={sectionsRead.length === thema.sections.length ? 'success' : 'hulk'} 
                size="md"
              >
                {sectionsRead.length}/{thema.sections.length} Abschnitte
              </Badge>
            </div>
            <Progress 
              value={(sectionsRead.length / thema.sections.length) * 100} 
              variant="hulk" 
              size="prominent"
            />
          </Card>
        </motion.div>

        {/* Learning Sections */}
        <div className="space-y-6">
          <h2 className="text-title1">Lernabschnitte</h2>
          
          {thema.sections.map((section, index) => {
            const isRead = sectionsRead.includes(section.id);
            
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card padding="lg" className={isRead ? 'border-2 border-success' : ''}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{isRead ? '✅' : '📖'}</div>
                      <div>
                        <h3 className="text-title2">{section.title}</h3>
                        {isRead && (
                          <Badge variant="success" size="sm">
                            Gelesen
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="prose prose-sm max-w-none mb-4">
                    <div 
                      className="text-body whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: section.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                    />
                  </div>

                  {/* Key Points */}
                  {section.keyPoints && section.keyPoints.length > 0 && (
                    <div className="mt-4 p-4 rounded-lg bg-[rgba(0,122,255,0.1)]">
                      <h4 className="text-headline mb-2 flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-primary" />
                        Wichtige Punkte:
                      </h4>
                      <ul className="space-y-2">
                        {section.keyPoints.map((point, idx) => (
                          <li key={idx} className="text-body flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Mark as Read Button */}
                  {!isRead && (
                    <div className="mt-6">
                      <Button
                        variant="hulk"
                        size="md"
                        onClick={() => markSectionRead(thema.id, section.id)}
                      >
                        <BookOpen size={18} className="mr-2" />
                        Als gelesen markieren (+5 XP)
                      </Button>
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Games Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12"
        >
          <Card padding="lg">
            <div className="text-center">
              <h2 className="text-title1 mb-4">🎮 Interaktive Spiele</h2>
              <p className="text-body text-secondary mb-6">
                Lerne spielerisch mit Memory und Quiz zu diesem Thema!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href={`/uebungen/${thema.id}`}>
                  <Button variant="hulk" size="lg">
                    🎴 Memory spielen
                  </Button>
                </Link>
                <Button variant="success" size="lg">
                  🎯 Quiz starten
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link href="/">
            <Button variant="secondary" size="md">
              <ArrowLeft size={16} className="mr-2" />
              Zurück zur Übersicht
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
