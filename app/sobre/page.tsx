import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Target, Users, Rocket, Heart } from "lucide-react"
import Footer from "@/components/sections/footer"
import { siteConfig } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a história da BunX, nossa missão de transformar ideias em realidade e os valores que nos guiam na entrega de soluções tecnológicas inovadoras.",
  openGraph: {
    title: "Sobre a BunX",
    description: "Conheça nossa história, missão e valores que nos tornam referência em tecnologia.",
    url: `${siteConfig.url}/sobre`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "BunX - Sobre",
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.url}/sobre`,
  },
}

export default function SobrePage() {
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
            Sobre a BunX
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Transformamos ideias em realidade através de soluções tecnológicas inovadoras.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Nossa História</h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                Fundada em 2020, a BunX nasceu com o propósito de revolucionar o mercado de
                tecnologia, oferecendo soluções inovadoras e personalizadas para empresas de
                todos os tamanhos.
              </p>
              <p>
                Desde o início, nossa missão sempre foi clara: transformar ideias em realidade
                através da tecnologia. Acreditamos que cada projeto é único e merece uma
                abordagem personalizada que atenda às necessidades específicas de cada cliente.
              </p>
              <p>
                Ao longo dos anos, construímos uma equipe multidisciplinar de especialistas
                apaixonados por tecnologia e inovação. Nosso time é composto por desenvolvedores,
                designers, gerentes de projeto e consultores que trabalham em sinergia para
                entregar resultados excepcionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center">Nossos Valores</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Excelência",
                description: "Buscamos a perfeição em cada detalhe dos nossos projetos."
              },
              {
                icon: Users,
                title: "Colaboração",
                description: "Trabalhamos em parceria com nossos clientes para alcançar o sucesso."
              },
              {
                icon: Rocket,
                title: "Inovação",
                description: "Estamos sempre na vanguarda das tecnologias mais modernas."
              },
              {
                icon: Heart,
                title: "Paixão",
                description: "Amamos o que fazemos e isso reflete em cada projeto."
              }
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "250+", label: "Projetos Entregues" },
              { number: "50+", label: "Clientes Ativos" },
              { number: "98%", label: "Satisfação" },
              { number: "5+", label: "Anos de Mercado" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
