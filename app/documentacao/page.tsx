import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Book, FileText, Code, Video } from "lucide-react"
import Footer from "@/components/sections/footer"

export const metadata: Metadata = {
  title: "Documentação - BunX",
  description: "Guias, tutoriais e documentação técnica dos nossos produtos e serviços.",
}

const docSections = [
  {
    icon: Book,
    title: "Guias de Início Rápido",
    description: "Comece rapidamente com nossos guias passo a passo.",
    links: [
      "Introdução à Plataforma",
      "Primeiro Projeto",
      "Configuração de Ambiente",
      "Deploy em Produção"
    ]
  },
  {
    icon: FileText,
    title: "Documentação de APIs",
    description: "Referência completa das nossas APIs REST e GraphQL.",
    links: [
      "Autenticação",
      "Endpoints Disponíveis",
      "Rate Limiting",
      "Webhooks"
    ]
  },
  {
    icon: Code,
    title: "Exemplos de Código",
    description: "Snippets e exemplos práticos para acelerar seu desenvolvimento.",
    links: [
      "React Examples",
      "Node.js Examples",
      "TypeScript Patterns",
      "Testing Examples"
    ]
  },
  {
    icon: Video,
    title: "Tutoriais em Vídeo",
    description: "Aprenda visualmente com nossos tutoriais em vídeo.",
    links: [
      "Setup Inicial",
      "Melhores Práticas",
      "Troubleshooting",
      "Advanced Features"
    ]
  }
]

export default function DocumentacaoPage() {
  return (
    <>
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/">
            <Button variant="ghost" className="mb-8 gap-2 hover:text-primary">
              <ArrowLeft className="w-4 h-4" />
              Voltar para Home
            </Button>
          </Link>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            Documentação
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Tudo que você precisa saber para começar a desenvolver com nossas soluções.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl">
            <input
              type="search"
              placeholder="Pesquisar na documentação..."
              className="w-full px-6 py-4 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none text-lg"
            />
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {docSections.map((section, index) => {
              const Icon = section.icon
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{section.title}</h3>
                  <p className="text-muted-foreground mb-6">{section.description}</p>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href="#"
                          className="text-primary hover:underline flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-24 relative">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">Tópicos Populares</h2>
          
          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {[
              "Getting Started",
              "Authentication",
              "API Reference",
              "Deployment",
              "Best Practices",
              "Security",
              "Performance",
              "Troubleshooting",
              "Webhooks",
              "SDKs",
              "TypeScript",
              "Testing"
            ].map((topic, index) => (
              <Link
                key={index}
                href="#"
                className="px-6 py-3 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary border border-border hover:border-primary/50 transition-all duration-300"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Não encontrou o que procura?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Nossa equipe de suporte está pronta para ajudar você.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold">
                Contatar Suporte
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white hover:text-black font-semibold">
                Ver FAQ
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
