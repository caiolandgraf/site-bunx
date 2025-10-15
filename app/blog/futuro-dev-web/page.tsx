import { ArrowLeft, BookmarkPlus, Calendar, Share2, User } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/sections/footer'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'O Futuro do Desenvolvimento Web em 2025',
  description:
    'Exploramos as principais tendências e tecnologias que estão moldando o futuro do desenvolvimento web, incluindo frameworks, ferramentas e boas práticas.',
  keywords: [
    'desenvolvimento web',
    'tendências 2025',
    'frameworks modernos',
    'tecnologia web',
    'frontend',
    'backend',
    'full-stack'
  ],
  authors: [{ name: 'Caio Landgraf' }],
  openGraph: {
    title: 'O Futuro do Desenvolvimento Web em 2025',
    description:
      'Exploramos as principais tendências e tecnologias que estão moldando o futuro do desenvolvimento web.',
    url: `${siteConfig.url}/blog/futuro-dev-web`,
    type: 'article',
    publishedTime: '2025-10-15T00:00:00.000Z',
    authors: ['Caio Landgraf'],
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Futuro do Dev Web'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O Futuro do Desenvolvimento Web em 2025',
    description:
      'Exploramos as principais tendências e tecnologias que estão moldando o futuro do desenvolvimento web.',
    images: [`${siteConfig.url}/og-image.jpg`]
  },
  alternates: {
    canonical: `${siteConfig.url}/blog/futuro-dev-web`
  }
}

export default function FuturoDevWebPage() {
  return (
    <>
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
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
                  Desenvolvimento
                </span>
                <span className="text-sm text-muted-foreground">
                  5 min de leitura
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                O Futuro do Desenvolvimento Web em 2025
              </h1>

              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Ana Silva</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>15 de Outubro, 2025</span>
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

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <article className="max-w-3xl mx-auto prose prose-invert prose-lg">
              <p className="lead text-xl text-muted-foreground">
                O desenvolvimento web está em constante evolução, e 2025 promete
                ser um ano revolucionário para desenvolvedores e empresas que
                buscam se manter na vanguarda da tecnologia.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-white">
                1. React Server Components
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Os React Server Components estão mudando fundamentalmente a
                forma como construímos aplicações React. Com a capacidade de
                renderizar componentes no servidor sem enviar JavaScript para o
                cliente, conseguimos criar aplicações mais rápidas e eficientes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Frameworks como Next.js 15 já adotaram essa tecnologia,
                permitindo que desenvolvedores criem experiências mais rápidas
                com menos código no cliente. Isso significa tempos de
                carregamento menores e melhor performance em dispositivos
                móveis.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-white">
                2. Edge Computing e Edge Functions
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                O Edge Computing está trazendo a computação para mais perto do
                usuário. Com Edge Functions, podemos executar código próximo aos
                usuários finais, reduzindo drasticamente a latência.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground my-6">
                <li>Latência ultra-baixa para usuários globais</li>
                <li>Personalização em tempo real</li>
                <li>Melhor segurança e compliance regional</li>
                <li>Custos reduzidos de infraestrutura</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-white">
                3. IA Generativa no Desenvolvimento
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ferramentas de IA como GitHub Copilot e ChatGPT estão
                transformando o fluxo de trabalho dos desenvolvedores. Não se
                trata de substituir desenvolvedores, mas de torná-los mais
                produtivos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A IA está ajudando em tarefas como geração de código
                boilerplate, documentação automática, testes e até mesmo design
                de interfaces. Desenvolvedores que dominam essas ferramentas
                estão entregando projetos 30-50% mais rápido.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-white">
                4. Web Assembly (WASM)
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                O WebAssembly está amadurecendo e permitindo que linguagens como
                Rust, Go e C++ rodem no navegador com performance próxima ao
                nativo. Isso abre portas para aplicações web mais complexas e
                performáticas.
              </p>

              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 my-8">
                <p className="text-sm font-semibold text-primary mb-2">
                  💡 Dica Prática
                </p>
                <p className="text-muted-foreground">
                  Comece a experimentar com frameworks modernos como Next.js 15
                  ou Remix. A curva de aprendizado inicial vale a pena pela
                  produtividade que você ganha.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-white">
                5. TypeScript como Padrão
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                TypeScript não é mais opcional - é o padrão da indústria. Em
                2025, praticamente todas as grandes empresas exigem TypeScript
                para novos projetos. A segurança de tipos previne bugs e melhora
                significativamente a manutenibilidade do código.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-white">
                Conclusão
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                O futuro do desenvolvimento web é empolgante. Tecnologias como
                Server Components, Edge Computing, IA Generativa e WebAssembly
                estão tornando possível criar experiências web que antes eram
                impensáveis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Para se manter relevante, é essencial continuar aprendendo e
                experimentando com essas novas tecnologias. O mercado valoriza
                desenvolvedores que se adaptam rapidamente e abraçam a inovação.
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

        {/* Related Articles */}
        <section className="py-12 border-t border-border/40">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Artigos Relacionados</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Como a IA está Transformando o Design',
                    category: 'Design',
                    readTime: '7 min',
                    href: '/blog/ia-design-ux-ui'
                  },
                  {
                    title: 'Arquitetura de Microserviços',
                    category: 'Arquitetura',
                    readTime: '10 min',
                    href: '/blog/arquitetura-microservicos'
                  },
                  {
                    title: 'Performance Web Otimizada',
                    category: 'Performance',
                    readTime: '6 min',
                    href: '/blog/performance-web'
                  }
                ].map((article, index) => (
                  <Link key={index} href={article.href}>
                    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                      <span className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20 inline-block mb-3">
                        {article.category}
                      </span>
                      <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {article.readTime} de leitura
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
