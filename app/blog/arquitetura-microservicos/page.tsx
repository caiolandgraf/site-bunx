import { ArrowLeft, BookmarkPlus, Calendar, Share2, User } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/sections/footer'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Arquitetura de Microserviços: Guia Completo',
  description:
    'Um guia abrangente sobre como implementar e escalar aplicações usando arquitetura de microserviços. Aprenda padrões, boas práticas e casos de uso reais.',
  keywords: [
    'microserviços',
    'arquitetura de software',
    'escalabilidade',
    'desenvolvimento distribuído',
    'containers',
    'kubernetes',
    'docker'
  ],
  authors: [
    {
      name: 'Caio Landgraf'
    }
  ],
  openGraph: {
    title: 'Arquitetura de Microserviços: Guia Completo',
    description:
      'Um guia abrangente sobre como implementar e escalar aplicações usando arquitetura de microserviços.',
    url: `${siteConfig.url}/blog/arquitetura-microservicos`,
    type: 'article',
    publishedTime: '2025-10-05T00:00:00.000Z',
    authors: ['Caio Landgraf'],
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Arquitetura de Microserviços'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arquitetura de Microserviços: Guia Completo',
    description:
      'Um guia abrangente sobre como implementar e escalar aplicações usando arquitetura de microserviços.',
    images: [`${siteConfig.url}/og-image.jpg`]
  },
  alternates: {
    canonical: `${siteConfig.url}/blog/arquitetura-microservicos`
  }
}

export default function ArquiteturaMicroservicosPage() {
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
                  Arquitetura
                </span>
                <span className="text-sm text-muted-foreground">
                  10 min de leitura
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Arquitetura de Microserviços: Guia Completo
              </h1>

              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Maria Oliveira</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>5 de Outubro, 2025</span>
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
                Microserviços revolucionaram a forma como construímos aplicações
                em escala. Neste guia, exploraremos quando, como e por que
                adotar essa arquitetura.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-white">
                O que são Microserviços?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Microserviços é um estilo arquitetural onde uma aplicação é
                composta por serviços pequenos, independentes e fracamente
                acoplados. Cada serviço executa um processo de negócio
                específico e pode ser desenvolvido, implantado e escalado
                independentemente.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-white">
                Vantagens dos Microserviços
              </h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground my-6">
                <li>
                  <strong>Escalabilidade Independente:</strong> Escale apenas os
                  serviços que precisam
                </li>
                <li>
                  <strong>Flexibilidade Tecnológica:</strong> Use a melhor
                  ferramenta para cada job
                </li>
                <li>
                  <strong>Deploy Independente:</strong> Atualize serviços sem
                  afetar toda aplicação
                </li>
                <li>
                  <strong>Resiliência:</strong> Falha em um serviço não derruba
                  toda aplicação
                </li>
                <li>
                  <strong>Times Autônomos:</strong> Equipes podem trabalhar
                  independentemente
                </li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-white">
                Desafios a Considerar
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Microserviços não são uma solução universal. Eles trazem
                complexidade:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground my-6">
                <li>Comunicação entre serviços (latência, falhas de rede)</li>
                <li>Dados distribuídos e consistência eventual</li>
                <li>Monitoramento e debugging mais complexos</li>
                <li>DevOps e infraestrutura mais sofisticados</li>
              </ul>

              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 my-8">
                <p className="text-sm font-semibold text-primary mb-2">
                  ⚠️ Quando NÃO usar Microserviços
                </p>
                <p className="text-muted-foreground text-sm">
                  Para aplicações pequenas ou MVPs, um monolito bem estruturado
                  pode ser mais adequado. Comece simples e migre para
                  microserviços quando a complexidade e escala justificarem.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-white">
                Padrões Essenciais
              </h2>

              <h3 className="text-2xl font-semibold mt-8 mb-3 text-white">
                API Gateway
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ponto único de entrada para todos os clientes. Gerencia
                roteamento, autenticação, rate limiting e agregação de dados de
                múltiplos serviços.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-3 text-white">
                Service Discovery
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Permite que serviços se encontrem dinamicamente. Ferramentas
                como Consul, Eureka ou Kubernetes Service Discovery são
                essenciais.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-3 text-white">
                Circuit Breaker
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Previne cascata de falhas. Se um serviço falha, o circuit
                breaker impede chamadas adicionais, permitindo que o sistema se
                recupere.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-white">
                Stack Tecnológico
              </h2>
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <p className="font-semibold text-white mb-2">Containers</p>
                  <p className="text-sm text-muted-foreground">
                    Docker, Podman
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <p className="font-semibold text-white mb-2">Orquestração</p>
                  <p className="text-sm text-muted-foreground">
                    Kubernetes, Docker Swarm
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <p className="font-semibold text-white mb-2">Service Mesh</p>
                  <p className="text-sm text-muted-foreground">
                    Istio, Linkerd
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <p className="font-semibold text-white mb-2">Mensageria</p>
                  <p className="text-sm text-muted-foreground">
                    RabbitMQ, Kafka
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-4 text-white">
                Conclusão
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Microserviços são poderosos, mas complexos. Avalie
                cuidadosamente se sua aplicação realmente precisa dessa
                arquitetura. Quando bem implementados, trazem escalabilidade e
                flexibilidade incomparáveis.
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
