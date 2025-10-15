'use client'

import { ArrowRight, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-primary font-medium">
              Estamos prontos para ajudar
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
            Pronto para Transformar
            <br />
            Seu Negócio?
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa
            a alcançar novos patamares com tecnologia de ponta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="text-lg gap-2 bg-primary hover:bg-primary/90 text-black font-semibold shadow-[0_0_30px_rgba(255,189,89,0.3)] hover:shadow-[0_0_50px_rgba(255,189,89,0.5)] transition-all duration-300"
            >
              <a href="https://wa.me/5543984793620">
                <Mail className="w-5 h-5" />
                Enviar Mensagem
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg border-white/20 hover:bg-white hover:text-black font-semibold gap-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              <a href="https://wa.me/5543984793620">
                <Phone className="w-5 h-5" />
                Agendar Reunião
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-border/50">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">250+</div>
              <div className="text-muted-foreground">Projetos Entregues</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">
                Satisfação dos Clientes
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Parceiros Ativos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
