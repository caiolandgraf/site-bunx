import {
  ArrowLeft,
  Cloud,
  Code2,
  Globe,
  MessageCircle,
  Palette,
  Smartphone,
  Zap
} from 'lucide-react'
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
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Desenvolvimento web, apps mobile, design UX/UI, cloud computing, consultoria e muito mais. Conheça nossas soluções completas em tecnologia.',
  keywords: [
    'desenvolvimento web',
    'aplicativos mobile',
    'design UX/UI',
    'cloud computing',
    'consultoria em TI',
    'API development',
    'soluções digitais'
  ],
  openGraph: {
    title: 'Nossos Serviços - BunX',
    description:
      'Desenvolvimento web, apps mobile, design UX/UI e soluções completas em tecnologia.',
    url: `${siteConfig.url}/servicos`,
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'BunX - Serviços'
      }
    ]
  },
  alternates: {
    canonical: `${siteConfig.url}/servicos`
  }
}

const services = [
  {
    icon: Code2,
    title: 'Desenvolvimento Web',
    description:
      'Criamos aplicações web modernas, escaláveis e de alta performance usando as melhores tecnologias do mercado.',
    features: [
      'Single Page Applications (SPA)',
      'Progressive Web Apps (PWA)',
      'Sistemas empresariais complexos',
      'E-commerce de alta conversão'
    ],
    whatsappMessage:
      'Olá! Gostaria de saber mais sobre serviços de Desenvolvimento Web.'
  },
  {
    icon: Smartphone,
    title: 'Aplicativos Mobile',
    description:
      'Desenvolvemos apps nativos e multiplataforma que proporcionam experiências excepcionais aos usuários.',
    features: [
      'Apps iOS e Android',
      'React Native / Flutter',
      'Integração com APIs',
      'Push notifications e analytics'
    ],
    whatsappMessage: 'Olá! Tenho interesse em desenvolver um Aplicativo Mobile.'
  },
  {
    icon: Palette,
    title: 'Design UX/UI',
    description:
      'Criamos interfaces intuitivas e experiências memoráveis que encantam usuários e aumentam conversões.',
    features: [
      'Research e personas',
      'Wireframes e protótipos',
      'Design system',
      'Testes de usabilidade'
    ],
    whatsappMessage:
      'Olá! Gostaria de conversar sobre serviços de Design UX/UI.'
  },
  {
    icon: Globe,
    title: 'Consultoria Tecnológica',
    description:
      'Ajudamos sua empresa a tomar as melhores decisões tecnológicas para alcançar seus objetivos de negócio.',
    features: [
      'Arquitetura de software',
      'Code review e auditoria',
      'Estratégia de produto',
      'Transformação digital'
    ],
    whatsappMessage:
      'Olá! Preciso de Consultoria Tecnológica para minha empresa.'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'Implementamos infraestrutura escalável e processos automatizados para garantir deploy contínuo.',
    features: [
      'AWS, Azure, Google Cloud',
      'CI/CD pipelines',
      'Kubernetes e Docker',
      'Monitoramento e logs'
    ],
    whatsappMessage: 'Olá! Quero saber mais sobre serviços de Cloud & DevOps.'
  },
  {
    icon: Zap,
    title: 'Otimização de Performance',
    description:
      'Analisamos e otimizamos sua aplicação para garantir a melhor experiência e menor custo operacional.',
    features: [
      'Análise de performance',
      'Otimização de código',
      'CDN e caching',
      'Database optimization'
    ],
    whatsappMessage:
      'Olá! Preciso de ajuda com Otimização de Performance da minha aplicação.'
  }
]

const getWhatsAppLink = (message: string) => {
  const phoneNumber = '5543984793620' // Substitua pelo número real
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

export default function ServicosPage() {
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
              Nossos Serviços
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Soluções completas de tecnologia para impulsionar seu negócio.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card
                    key={index}
                    className="border-border hover:border-primary/50 transition-all duration-300 flex flex-col"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <ul className="space-y-3 mb-6 flex-1">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href={getWhatsAppLink(service.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button className="w-full bg-primary hover:bg-primary/90 text-black font-semibold gap-2">
                          <MessageCircle className="w-4 h-4" />
                          Falar no WhatsApp
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Nosso Processo
            </h2>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  step: '01',
                  title: 'Descoberta',
                  description:
                    'Entendemos suas necessidades e objetivos de negócio.'
                },
                {
                  step: '02',
                  title: 'Planejamento',
                  description:
                    'Criamos uma estratégia detalhada e cronograma do projeto.'
                },
                {
                  step: '03',
                  title: 'Desenvolvimento',
                  description: 'Construímos a solução com metodologias ágeis.'
                },
                {
                  step: '04',
                  title: 'Entrega',
                  description: 'Fazemos deploy e oferecemos suporte contínuo.'
                }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-primary/90 mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Pronto para começar?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Entre em contato e vamos transformar sua ideia em realidade.
              </p>
              <a
                href={getWhatsAppLink(
                  'Olá! Gostaria de conversar sobre um projeto.'
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-black font-semibold gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar com Especialista
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
