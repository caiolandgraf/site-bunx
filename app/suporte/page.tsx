import {
  ArrowLeft,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone
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

export const metadata: Metadata = {
  title: 'Suporte - BunX',
  description: 'Central de ajuda e suporte técnico para nossos clientes.'
}

const faqItems = [
  {
    question: 'Como faço para começar um projeto?',
    answer:
      'Entre em contato conosco através do formulário ou WhatsApp. Agendar emos uma reunião para entender suas necessidades e propor a melhor solução.'
  },
  {
    question: 'Qual o prazo médio de entrega?',
    answer:
      'O prazo varia conforme a complexidade do projeto, geralmente entre 2 a 6 meses. Fornecemos um cronograma detalhado no início do projeto.'
  },
  {
    question: 'Vocês oferecem manutenção pós-entrega?',
    answer:
      'Sim! Oferecemos planos de manutenção mensal com suporte técnico, atualizações e melhorias contínuas.'
  },
  {
    question: 'Quais tecnologias vocês utilizam?',
    answer:
      'Trabalhamos com as tecnologias mais modernas do mercado: React, Next.js, Node.js, TypeScript, entre outras.'
  },
  {
    question: 'Como funciona o processo de pagamento?',
    answer:
      'Trabalhamos com parcelas conforme etapas do projeto. Entrada, marcos intermediários e entrega final.'
  }
]

export default function SuportePage() {
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
              Central de Suporte
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Estamos aqui para ajudar você. Escolha a melhor forma de contato.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              <Card className="text-center border-border hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Email</CardTitle>
                  <CardDescription>Envie sua dúvida por email</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:suporte@bunx.io"
                    className="text-primary hover:underline"
                  >
                    suporte@bunx.io
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Resposta em até 24h úteis
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-border hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>WhatsApp</CardTitle>
                  <CardDescription>Fale conosco em tempo real</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://wa.me/5543984793620"
                    className="text-primary hover:underline"
                  >
                    +55 43 9 8479-3620
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Seg - Sex: 9h às 18h
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-border hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Telefone</CardTitle>
                  <CardDescription>Ligue para nós</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="tel:+5543984793620"
                    className="text-primary hover:underline"
                  >
                    +55 43 9 8479-3620
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Seg - Sex: 9h às 18h
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Office Info */}
            <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Nosso Escritório
                  </h3>
                  <p className="text-muted-foreground mb-1">
                    Av. Paulista, 1000 - Conj. 42
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Bela Vista, São Paulo - SP, 01310-100
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Segunda a Sexta: 9h às 18h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 relative">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Perguntas Frequentes
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3">
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ainda tem dúvidas?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Preencha o formulário de contato e retornaremos o mais breve
                possível.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-semibold"
              >
                Abrir Formulário de Contato
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
