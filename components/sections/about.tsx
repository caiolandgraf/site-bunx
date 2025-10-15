"use client"

import { Target, Lightbulb, Rocket, Shield } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Desenvolvemos soluções focadas em entregar resultados mensuráveis para o seu negócio."
  },
  {
    icon: Lightbulb,
    title: "Inovação Constante",
    description: "Utilizamos as tecnologias mais modernas para criar produtos inovadores e eficientes."
  },
  {
    icon: Rocket,
    title: "Agilidade",
    description: "Metodologias ágeis que garantem entregas rápidas sem comprometer a qualidade."
  },
  {
    icon: Shield,
    title: "Confiança",
    description: "Parceria de longo prazo com total transparência e comprometimento com seu sucesso."
  }
]

export default function About() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            Sobre Nós
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma equipe apaixonada por tecnologia, dedicada a transformar
            desafios em oportunidades através de soluções digitais inovadoras.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
