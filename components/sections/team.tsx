'use client'

import { Github, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const team = [
  {
    name: 'Caio Landgraf',
    role: 'CTO & Founder da BunX',
    image: '/caiolandgraf.webp',
    bio: `Amante de tecnologia e inovação, liderando a transformação digital. Desenvolvedor full-stack com mais de 10 anos de
    experiência. Apaixonado por tecnologias modernas e por
    compartilhar conhecimento com a comunidade.`,
    social: {
      instagram: 'https://instagram.com/eu.caiolandgraf',
      twitter: 'https://twitter.com/eicajo',
      github: 'https://github.com/caiolandgraf'
    }
  }
  // {
  //   name: "Carlos Santos",
  //   role: "CTO",
  //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  //   bio: "Especialista em arquitetura de software e inovação.",
  //   social: {
  //     linkedin: "#",
  //     twitter: "#",
  //     github: "#"
  //   }
  // },
  // {
  //   name: "Maria Oliveira",
  //   role: "Head of Design",
  //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  //   bio: "Designer premiada com foco em experiência do usuário.",
  //   social: {
  //     linkedin: "#",
  //     twitter: "#",
  //     github: "#"
  //   }
  // },
  // {
  //   name: "João Pedro",
  //   role: "Lead Developer",
  //   image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  //   bio: "Desenvolvedor full-stack apaixonado por código limpo.",
  //   social: {
  //     linkedin: "#",
  //     twitter: "#",
  //     github: "#"
  //   }
  // }
]

export default function Team() {
  return (
    <section id="equipe" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            Nossa Equipe
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça os talentos por trás das nossas soluções inovadoras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center">
          {team.map((member, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/50"
            >
              <CardContent className="p-6">
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-60" /> */}
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">
                  {member.bio}
                </p>
                <div className="flex gap-3">
                  <a
                    href={member.social.instagram}
                    className="w-8 h-8 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-primary" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-8 h-8 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-primary" />
                  </a>
                  <a
                    href={member.social.github}
                    className="w-8 h-8 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  >
                    <Github className="w-4 h-4 text-primary" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
