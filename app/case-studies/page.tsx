import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/sections/footer'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Case Studies - BunX',
  description: 'Conheça histórias de sucesso dos nossos projetos e clientes.'
}

const caseStudies = [
  {
    client: 'TechCorp Solutions',
    project: 'Plataforma SaaS Enterprise',
    challenge: 'Modernizar sistema legado e implementar arquitetura escalável',
    solution:
      'Migração para arquitetura de microserviços com Next.js e Node.js',
    results: [
      '300% aumento na performance',
      '50% redução nos custos operacionais',
      '99.9% de uptime alcançado',
      'Tempo de deploy reduzido de 2h para 15min'
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    industry: 'Tecnologia',
    duration: '6 meses',
    link: '#'
  },
  {
    client: 'RetailMax',
    project: 'E-commerce de Alta Performance',
    challenge:
      'Criar plataforma de e-commerce capaz de processar 10k pedidos/dia',
    solution: 'Desenvolvimento de plataforma otimizada com Next.js e Stripe',
    results: [
      '2M+ de transações processadas',
      '95% de satisfação dos usuários',
      '40% aumento nas conversões',
      'Tempo de carregamento < 2s'
    ],
    technologies: ['Next.js', 'Stripe', 'MongoDB', 'Redis', 'Vercel'],
    industry: 'E-commerce',
    duration: '4 meses',
    link: '#'
  },
  {
    client: 'HealthCare+',
    project: 'App de Telemedicina',
    challenge:
      'Desenvolver aplicativo mobile seguro para consultas médicas online',
    solution:
      'App multiplataforma com React Native e integração de videochamadas',
    results: [
      '50k+ usuários ativos',
      '10k+ consultas realizadas',
      '4.8 estrelas nas lojas',
      'Certificação HIPAA obtida'
    ],
    technologies: ['React Native', 'WebRTC', 'Firebase', 'Node.js'],
    industry: 'Saúde',
    duration: '8 meses',
    link: '#'
  }
]

export default function CaseStudiesPage() {
  return (
    <>
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 relative z-10">
            <Link href="/">
              <Button variant="ghost" className="mb-8 gap-2 hover:text-primary">
                <ArrowLeft className="w-4 h-4" />
                Voltar para Home
              </Button>
            </Link>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Histórias reais de transformação digital e sucesso dos nossos
              clientes.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="space-y-16 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <Card
                  key={index}
                  className="border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
                >
                  <CardHeader className="bg-gradient-to-br from-primary/5 to-transparent">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20">
                            {study.industry}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {study.duration}
                          </span>
                        </div>
                        <CardTitle className="text-3xl mb-2">
                          {study.client}
                        </CardTitle>
                        <CardDescription className="text-lg">
                          {study.project}
                        </CardDescription>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:text-primary"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-8 space-y-8">
                    {/* Desafio */}
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-primary">
                        Desafio
                      </h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>

                    {/* Solução */}
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-primary">
                        Solução
                      </h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>

                    {/* Resultados */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-primary">
                        Resultados
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <div
                            key={resultIndex}
                            className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tecnologias */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-primary">
                        Tecnologias Utilizadas
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Quer ser nosso próximo case de sucesso?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Entre em contato e descubra como podemos transformar seu
                negócio.
              </p>
              <Link href="https://wa.me/5543984793620">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-black font-semibold"
                >
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
