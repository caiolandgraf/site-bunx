import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Briefcase, MapPin, Clock, ArrowRight } from "lucide-react"
import Footer from "@/components/sections/footer"

export const metadata: Metadata = {
  title: "Carreiras - BunX",
  description: "Junte-se à nossa equipe e faça parte da transformação digital.",
}

const openPositions = [
  {
    title: "Desenvolvedor Full Stack Senior",
    department: "Engenharia",
    location: "São Paulo - Híbrido",
    type: "Full-time",
    description: "Buscamos desenvolvedor experiente em React, Node.js e TypeScript para liderar projetos desafiadores."
  },
  {
    title: "Designer UX/UI",
    department: "Design",
    location: "Remoto",
    type: "Full-time",
    description: "Procuramos designer criativo para criar experiências memoráveis e interfaces intuitivas."
  },
  {
    title: "Engenheiro DevOps",
    department: "Infraestrutura",
    location: "São Paulo - Híbrido",
    type: "Full-time",
    description: "Especialista em cloud (AWS/Azure), CI/CD e automação de infraestrutura."
  },
  {
    title: "Gerente de Projetos",
    department: "Gestão",
    location: "São Paulo - Presencial",
    type: "Full-time",
    description: "Profissional experiente em metodologias ágeis para liderar times multidisciplinares."
  }
]

const benefits = [
  "💰 Salário competitivo",
  "🏥 Plano de saúde e odontológico",
  "🍔 Vale refeição/alimentação",
  "🚌 Vale transporte",
  "📚 Budget para cursos e livros",
  "💻 Equipamento de última geração",
  "🏖️ Férias flexíveis",
  "🎉 Ambiente descontraído"
]

export default function CarreirasPage() {
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
            Carreiras na BunX
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Faça parte de um time apaixonado por tecnologia e inovação. Aqui você terá
            a oportunidade de trabalhar em projetos desafiadores e crescer profissionalmente.
          </p>
        </div>
      </section>

      {/* Por que trabalhar conosco */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Por que trabalhar na BunX?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center"
              >
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vagas Abertas */}
      <section className="py-24 relative">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">Vagas Abertas</h2>
          
          <div className="grid gap-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                      <CardDescription className="text-base">{position.description}</CardDescription>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-black font-semibold">
                      Candidatar
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {position.department}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {position.type}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Não encontrou a vaga ideal?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Envie seu currículo para nosso banco de talentos e entraremos em contato
              quando surgir uma oportunidade que combine com seu perfil.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold">
              Enviar Currículo
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
