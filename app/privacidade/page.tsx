import { ArrowLeft } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/sections/footer'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Política de Privacidade - BunX',
  description: 'Política de privacidade e proteção de dados da BunX.'
}

export default function PrivacidadePage() {
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
              <h1 className="text-5xl font-bold mb-6">
                Política de Privacidade
              </h1>
              <p className="text-muted-foreground mb-12">
                Última atualização: 14 de outubro de 2025
              </p>

              <div className="prose prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    1. Introdução
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A BunX está comprometida em proteger sua privacidade. Esta
                    Política de Privacidade explica como coletamos, usamos,
                    divulgamos e protegemos suas informações pessoais quando
                    você utiliza nossos serviços.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    2. Informações que Coletamos
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Podemos coletar as seguintes categorias de informações:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      Informações de identificação pessoal (nome, email,
                      telefone)
                    </li>
                    <li>Informações da empresa (nome, CNPJ, endereço)</li>
                    <li>
                      Informações técnicas (endereço IP, tipo de navegador,
                      sistema operacional)
                    </li>
                    <li>
                      Informações de uso do site (páginas visitadas, tempo de
                      navegação)
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    3. Como Usamos suas Informações
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Utilizamos suas informações para:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Fornecer e melhorar nossos serviços</li>
                    <li>
                      Processar transações e enviar notificações relacionadas
                    </li>
                    <li>Responder às suas solicitações e fornecer suporte</li>
                    <li>
                      Enviar comunicações de marketing (com seu consentimento)
                    </li>
                    <li>Cumprir obrigações legais e regulatórias</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    4. Compartilhamento de Informações
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Não vendemos suas informações pessoais. Podemos compartilhar
                    informações com prestadores de serviços terceirizados que
                    nos ajudam a operar nosso negócio, sempre sob acordos de
                    confidencialidade.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    5. Segurança
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Implementamos medidas de segurança técnicas e
                    organizacionais apropriadas para proteger suas informações
                    pessoais contra acesso não autorizado, alteração, divulgação
                    ou destruição.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    6. Seus Direitos (LGPD)
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    De acordo com a Lei Geral de Proteção de Dados (LGPD), você
                    tem direito a:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Confirmar a existência de tratamento de dados</li>
                    <li>Acessar seus dados pessoais</li>
                    <li>
                      Corrigir dados incompletos, inexatos ou desatualizados
                    </li>
                    <li>
                      Solicitar a anonimização, bloqueio ou eliminação de dados
                    </li>
                    <li>Solicitar a portabilidade dos dados</li>
                    <li>Revogar o consentimento</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    7. Cookies
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Utilizamos cookies e tecnologias semelhantes para melhorar
                    sua experiência em nosso site. Você pode configurar seu
                    navegador para recusar cookies, mas isso pode afetar algumas
                    funcionalidades do site.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    8. Alterações nesta Política
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Podemos atualizar esta Política de Privacidade
                    periodicamente. Notificaremos você sobre mudanças
                    significativas através de nosso site ou por email.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    9. Contato
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Para questões sobre esta Política de Privacidade ou sobre
                    suas informações pessoais, entre em contato:
                  </p>
                  <div className="mt-4 space-y-2 text-muted-foreground">
                    <p>Email: privacidade@bunx.io</p>
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
