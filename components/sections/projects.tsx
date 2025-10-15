'use client'

import { Code2, ExternalLink, Globe, Smartphone, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

const projects = [
  {
    icon: Code2,
    title: 'Plataforma SaaS Enterprise',
    description:
      'Sistema completo de gestão empresarial com IA integrada para automação de processos.',
    tags: ['Next.js', 'AI', 'Cloud'],
    gradient: 'from-blue-500/20 to-primary/20'
  },
  {
    icon: Smartphone,
    title: 'App Mobile Inovador',
    description:
      'Aplicativo mobile multiplataforma com mais de 500k downloads e 4.8 estrelas nas lojas.',
    tags: ['React Native', 'TypeScript', 'Firebase'],
    gradient: 'from-purple-500/20 to-primary/20'
  },
  {
    icon: Globe,
    title: 'E-commerce de Alta Performance',
    description:
      'Loja virtual com arquitetura moderna, processando milhares de transações diárias.',
    tags: ['Next.js', 'Stripe', 'AWS'],
    gradient: 'from-green-500/20 to-primary/20'
  },
  {
    icon: Zap,
    title: 'Dashboard Analytics Real-time',
    description:
      'Painel de analytics em tempo real com visualizações interativas e insights automáticos.',
    tags: ['React', 'D3.js', 'WebSocket'],
    gradient: 'from-orange-500/20 to-primary/20'
  }
]

export default function Projects() {
  return (
    <section id="projetos" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            Nossos Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Confira alguns dos projetos que desenvolvemos e que estão
            transformando negócios ao redor do mundo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/50"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
                <CardHeader className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    className="gap-2 text-primary hover:text-primary hover:bg-primary/10"
                  >
                    <a href="/servicos">
                      Ver mais detalhes
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
