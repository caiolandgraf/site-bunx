import { ArrowLeft } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/sections/footer'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Termos de Uso - BunX',
  description: 'Termos e condições de uso dos serviços da BunX.'
}

export default function TermosPage() {
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
              <h1 className="text-5xl font-bold mb-6">Termos de Uso</h1>
              <p className="text-muted-foreground mb-12">
                Última atualização: 14 de outubro de 2025
              </p>

              <div className="prose prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    1. Aceitação dos Termos
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ao acessar e usar os serviços da BunX, você concorda em
                    cumprir e estar vinculado a estes Termos de Uso. Se você não
                    concordar com algum destes termos, não use nossos serviços.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    2. Descrição dos Serviços
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A BunX oferece serviços de desenvolvimento de software,
                    consultoria tecnológica, design e soluções digitais
                    personalizadas para empresas e organizações.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    3. Responsabilidades do Cliente
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ao contratar nossos serviços, você concorda em:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Fornecer informações precisas e completas</li>
                    <li>
                      Manter a confidencialidade de suas credenciais de acesso
                    </li>
                    <li>Usar nossos serviços apenas para fins legais</li>
                    <li>Respeitar os direitos de propriedade intelectual</li>
                    <li>Efetuar os pagamentos conforme acordado</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    4. Propriedade Intelectual
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Todo o conteúdo, código-fonte, design e materiais
                    desenvolvidos pela BunX são de nossa propriedade, salvo
                    acordo em contrário especificado em contrato. Após o
                    pagamento integral, transferimos os direitos conforme
                    acordado no contrato de serviço.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    5. Pagamentos e Reembolsos
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Os termos de pagamento são estabelecidos em cada contrato
                    específico. Geralmente:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Pagamento parcial na assinatura do contrato</li>
                    <li>Parcelas intermediárias conforme marcos do projeto</li>
                    <li>Pagamento final na entrega e aprovação do projeto</li>
                    <li>
                      Reembolsos são avaliados caso a caso, conforme contrato
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    6. Limitação de Responsabilidade
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A BunX não será responsável por danos indiretos,
                    incidentais, especiais ou consequenciais resultantes do uso
                    ou incapacidade de usar nossos serviços, exceto quando
                    exigido por lei.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    7. Garantias
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Oferecemos garantia de qualidade em nossos serviços. Bugs e
                    problemas identificados dentro do período de garantia
                    (especificado em contrato) serão corrigidos sem custo
                    adicional. Alterações de escopo não estão cobertas pela
                    garantia.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    8. Confidencialidade
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ambas as partes concordam em manter confidenciais todas as
                    informações proprietárias e sensíveis compartilhadas durante
                    o projeto, exceto quando exigido por lei ou com
                    consentimento prévio por escrito.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    9. Rescisão
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Qualquer parte pode rescindir o contrato de serviços
                    mediante aviso prévio conforme especificado no contrato. Em
                    caso de rescisão, o cliente deve pagar por todo o trabalho
                    realizado até a data da rescisão.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    10. Alterações nos Termos
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Reservamo-nos o direito de modificar estes termos a qualquer
                    momento. Mudanças significativas serão comunicadas através
                    de nosso site ou por email. O uso continuado dos serviços
                    após as alterações constitui aceitação dos novos termos.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    11. Lei Aplicável
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Estes Termos de Uso são regidos pelas leis da República
                    Federativa do Brasil. Qualquer disputa será resolvida no
                    foro da comarca de São Paulo, SP.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    12. Contato
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Para dúvidas sobre estes Termos de Uso:
                  </p>
                  <div className="mt-4 space-y-2 text-muted-foreground">
                    <p>Email: legal@bunx.io</p>
                    <p>Telefone: +55 43 9 8479-3620</p>
                    <p>Endereço: Brasil</p>
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
