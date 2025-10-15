'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradients with glow effects */}
      <div className="absolute inset-0 bg-black" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: '1s' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      {/* Radial glow from center */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />

      {/* Grid pattern with glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 backdrop-blur-sm shadow-[0_0_30px_rgba(255,189,89,0.3)] hover:shadow-[0_0_50px_rgba(255,189,89,0.5)] transition-all duration-300">
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm text-primary font-medium">
            Inovação e Excelência
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent [text-shadow:0_0_80px_rgba(255,189,89,0.3)]">
          Transformamos
          <br />
          Ideias em Realidade
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          Somos uma empresa de tecnologia especializada em criar soluções
          inovadoras que impulsionam o sucesso do seu negócio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-lg gap-2 bg-primary hover:bg-primary/90 text-black font-semibold shadow-[0_0_40px_rgba(255,189,89,0.4)] hover:shadow-[0_0_60px_rgba(255,189,89,0.6)] transition-all duration-300"
          >
            Conheça Nossos Projetos
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg border-white/20 hover:bg-white hover:text-black font-semibold hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300"
            asChild
          >
            <a
              href="https://wa.me/5543984793620"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator with glow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2 shadow-[0_0_20px_rgba(255,189,89,0.3)]">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(255,189,89,0.8)]" />
        </div>
      </div>
    </section>
  )
}
