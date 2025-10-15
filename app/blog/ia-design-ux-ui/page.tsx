import { ArrowLeft, BookmarkPlus, Calendar, Share2, User } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/sections/footer'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Como a IA está Transformando o Design UX/UI',
  description:
    'Descubra como a inteligência artificial está revolucionando a forma como criamos experiências digitais, otimizando processos e personalizando interfaces.',
  keywords: [
    'inteligência artificial',
    'design UX/UI',
    'IA no design',
    'automação de design',
    'machine learning',
    'experiência do usuário',
    'interface design'
  ],
  authors: [{ name: 'Caio Landgraf' }],
  openGraph: {
    title: 'Como a IA está Transformando o Design UX/UI',
    description:
      'Descubra como a inteligência artificial está revolucionando a forma como criamos experiências digitais.',
    url: `${siteConfig.url}/blog/ia-design-ux-ui`,
    type: 'article',
    publishedTime: '2025-10-10T00:00:00.000Z',
    authors: ['Caio Landgraf'],
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'IA no Design'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Como a IA está Transformando o Design UX/UI',
    description:
      'Descubra como a inteligência artificial está revolucionando a forma como criamos experiências digitais.',
    images: [`${siteConfig.url}/og-image.jpg`]
  },
  alternates: {
    canonical: `${siteConfig.url}/blog/ia-design-ux-ui`
  }
}

export default function IADesignPage() {
  return (
    <>
      <main className="min-h-screen bg-black">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

          <div className="container mx-auto px-4 relative z-10">
            <Link href="/blog">
              <Button variant="ghost" className="mb-8 gap-2 hover:text-primary">
                <ArrowLeft className="w-4 h-4" />
                Voltar para Blog
              </Button>
            </Link>

            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20">
                  Design
                </span>
                <span className="text-sm text-muted-foreground">
                  7 min de leitura
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Como a IA está Transformando o Design UX/UI
              </h1>

              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Carlos Santos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>10 de Outubro, 2025</span>
                </div>
              </div>

              <div className="flex gap-3 mb-8">
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Compartilhar
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <BookmarkPlus className="w-4 h-4" />
                  Salvar
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <article className="max-w-3xl mx-auto prose prose-invert prose-lg">
              <p className="lead text-xl text-muted-foreground">
                A Inteligência Artificial não é mais ficção científica no mundo
                do design. Ferramentas de IA estão revolucionando como designers
                criam interfaces e experiências digitais.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-white">
                IA Generativa para Prototipagem
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ferramentas como Midjourney, Stable Diffusion e DALL-E permitem
                que designers criem mockups visuais em segundos. O que antes
                levava horas de trabalho agora pode ser gerado instantaneamente
                através de prompts de texto.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Isso não substitui o designer, mas acelera drasticamente a fase
                de ideação e permite explorar mais opções criativas em menos
                tempo.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-white">
                Design Systems Inteligentes
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                IA está sendo usada para criar e manter design systems.
                Ferramentas podem sugerir componentes baseados em padrões
                existentes, detectar inconsistências e até mesmo gerar variações
                responsivas automaticamente.
              </p>

              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 my-8">
                <p className="text-sm font-semibold text-primary mb-2">
                  🎨 Ferramentas em Destaque
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Figma AI - Geração de layouts e componentes</li>
                  <li>• Adobe Sensei - Automação de tarefas repetitivas</li>
                  <li>• Framer AI - Criação de protótipos interativos</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-white">
                Personalização em Escala
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A IA permite criar experiências personalizadas para milhões de
                usuários. Algoritmos analisam comportamento, preferências e
                contexto para adaptar interfaces em tempo real, aumentando
                engajamento e conversão.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-white">
                Testes de Usabilidade Automatizados
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                IA pode simular comportamentos de usuários, identificar
                problemas de usabilidade e sugerir melhorias antes mesmo de
                testes reais. Isso economiza tempo e recursos significativos no
                processo de design.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-white">
                O Futuro do Design com IA
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                O designer do futuro será um orquestrador de IA, usando
                ferramentas inteligentes para criar experiências mais ricas e
                personalizadas. A criatividade humana permanece essencial, mas
                amplificada pela tecnologia.
              </p>
            </article>
          </div>
        </section>

        {/* Author Bio */}
        <section className="py-12 border-t border-border/40">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-start gap-6 p-6 rounded-xl bg-card border border-border">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex-shrink-0">
                  <Image
                    src="/caiolandgraf.webp"
                    alt="Caio Landgraf"
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Caio Landgraf</h3>
                  <p className="text-primary text-sm mb-3">
                    CTO & Founder da BunX
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Desenvolvedor full-stack com mais de 10 anos de experiência.
                    Apaixonado por tecnologias modernas e por compartilhar
                    conhecimento com a comunidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
