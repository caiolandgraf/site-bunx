import { ArrowLeft } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/sections/footer'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Licenças - BunX',
  description: 'Informações sobre licenças de software e uso de código aberto.'
}

export default function LicencasPage() {
  return (
    <>
      <main className="min-h-screen bg-black">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

          <div className="container mx-auto px-4 relative z-10">
            <Link href="/">
              <Button variant="ghost" className="mb-8 gap-2 hover:text-primary">
                <ArrowLeft className="w-4 h-4" />
                Voltar para Home
              </Button>
            </Link>

            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold mb-6">Licenças de Software</h1>
              <p className="text-muted-foreground mb-12">
                Informações sobre licenciamento e uso de software
              </p>

              <div className="prose prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Licenciamento de Projetos
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Os projetos desenvolvidos pela BunX são licenciados conforme
                    acordado em contrato com cada cliente. Após o pagamento
                    integral, os direitos de uso são transferidos conforme
                    especificado no contrato de serviço.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Código Fonte Customizado
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Para projetos customizados:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      O código fonte pode ser entregue ao cliente mediante
                      acordo
                    </li>
                    <li>
                      A propriedade intelectual é transferida após pagamento
                      integral
                    </li>
                    <li>
                      Componentes reutilizáveis podem ser retidos pela BunX
                    </li>
                    <li>Licenciamento específico será definido em contrato</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Software Open Source
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Utilizamos bibliotecas e frameworks open source em nossos
                    projetos. Principais dependências:
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-card border border-border">
                      <h3 className="font-semibold mb-2 text-white">Next.js</h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        Licença: MIT
                      </p>
                      <a
                        href="https://github.com/vercel/next.js"
                        className="text-primary text-sm hover:underline"
                      >
                        github.com/vercel/next.js
                      </a>
                    </div>

                    <div className="p-4 rounded-lg bg-card border border-border">
                      <h3 className="font-semibold mb-2 text-white">React</h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        Licença: MIT
                      </p>
                      <a
                        href="https://github.com/facebook/react"
                        className="text-primary text-sm hover:underline"
                      >
                        github.com/facebook/react
                      </a>
                    </div>

                    <div className="p-4 rounded-lg bg-card border border-border">
                      <h3 className="font-semibold mb-2 text-white">
                        Tailwind CSS
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        Licença: MIT
                      </p>
                      <a
                        href="https://github.com/tailwindlabs/tailwindcss"
                        className="text-primary text-sm hover:underline"
                      >
                        github.com/tailwindlabs/tailwindcss
                      </a>
                    </div>

                    <div className="p-4 rounded-lg bg-card border border-border">
                      <h3 className="font-semibold mb-2 text-white">
                        shadcn/ui
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        Licença: MIT
                      </p>
                      <a
                        href="https://github.com/shadcn/ui"
                        className="text-primary text-sm hover:underline"
                      >
                        github.com/shadcn/ui
                      </a>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Licença MIT
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A maioria das bibliotecas que utilizamos são licenciadas sob
                    MIT License, que permite:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Uso comercial</li>
                    <li>Modificação</li>
                    <li>Distribuição</li>
                    <li>Uso privado</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Recursos de Terceiros
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Também utilizamos recursos de terceiros que possuem suas
                    próprias licenças:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <strong>Google Fonts:</strong> Licenças variadas
                      (principalmente SIL OFL)
                    </li>
                    <li>
                      <strong>Lucide Icons:</strong> ISC License
                    </li>
                    <li>
                      <strong>Unsplash:</strong> Unsplash License (uso gratuito)
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Compliance
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A BunX está comprometida em respeitar todas as licenças de
                    software open source e garantir compliance com os termos de
                    uso de todas as bibliotecas e recursos utilizados em nossos
                    projetos.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Propriedade Intelectual
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Todos os designs, conceitos e códigos proprietários
                    desenvolvidos pela BunX permanecem como nossa propriedade
                    intelectual até transferência formal conforme contrato.
                    Componentes e bibliotecas reutilizáveis podem ser mantidos
                    pela BunX para uso em projetos futuros.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Dúvidas sobre Licenciamento
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Para questões específicas sobre licenciamento em seu
                    projeto:
                  </p>
                  <div className="mt-4 space-y-2 text-muted-foreground">
                    <p>Email: legal@bunx.io</p>
                    <p>Telefone: +55 43 9 8479-3620</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
