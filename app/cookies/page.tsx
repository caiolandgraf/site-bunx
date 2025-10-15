import { ArrowLeft } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/sections/footer'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Política de Cookies - BunX',
  description: 'Como utilizamos cookies em nosso site.'
}

export default function CookiesPage() {
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
              <h1 className="text-5xl font-bold mb-6">Política de Cookies</h1>
              <p className="text-muted-foreground mb-12">
                Última atualização: 14 de outubro de 2025
              </p>

              <div className="prose prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    O que são Cookies?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Cookies são pequenos arquivos de texto armazenados em seu
                    dispositivo quando você visita nosso site. Eles nos ajudam a
                    melhorar sua experiência, entender como você usa nosso site
                    e fornecer funcionalidades personalizadas.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Tipos de Cookies que Utilizamos
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        1. Cookies Essenciais
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        São necessários para o funcionamento básico do site. Sem
                        eles, certas funcionalidades não estarão disponíveis.
                        Estes cookies não coletam informações que possam
                        identificá-lo.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        2. Cookies de Desempenho
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Coletam informações sobre como os visitantes usam nosso
                        site, como quais páginas são mais visitadas. Essas
                        informações são agregadas e anônimas, ajudando-nos a
                        melhorar o funcionamento do site.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        3. Cookies Funcionais
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Permitem que o site lembre de escolhas que você faz
                        (como seu idioma ou região) e fornecem recursos
                        aprimorados e mais personalizados.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        4. Cookies de Marketing
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        São usados para rastrear visitantes em diferentes sites
                        para exibir anúncios relevantes e envolventes. Com seu
                        consentimento, compartilhamos essas informações com
                        parceiros de publicidade.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Cookies de Terceiros
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Utilizamos serviços de terceiros que também podem definir
                    cookies:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <strong>Google Analytics:</strong> Para análise de tráfego
                      e comportamento
                    </li>
                    <li>
                      <strong>Google Fonts:</strong> Para carregamento de fontes
                    </li>
                    <li>
                      <strong>Vercel Analytics:</strong> Para métricas de
                      performance
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Gerenciamento de Cookies
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Você pode controlar e gerenciar cookies de várias maneiras:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Através das configurações do seu navegador</li>
                    <li>
                      Usando ferramentas de opt-out fornecidas por terceiros
                    </li>
                    <li>
                      Desabilitando cookies em nosso banner de consentimento
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Note que bloquear ou deletar cookies pode afetar a
                    funcionalidade do site.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Configurações do Navegador
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A maioria dos navegadores permite gerenciar cookies através
                    das configurações:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <strong>Chrome:</strong> Configurações → Privacidade e
                      segurança → Cookies
                    </li>
                    <li>
                      <strong>Firefox:</strong> Preferências → Privacidade e
                      Segurança
                    </li>
                    <li>
                      <strong>Safari:</strong> Preferências → Privacidade
                    </li>
                    <li>
                      <strong>Edge:</strong> Configurações → Cookies e
                      permissões do site
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Atualizações desta Política
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Podemos atualizar esta Política de Cookies periodicamente
                    para refletir mudanças em nossas práticas ou por outras
                    razões operacionais, legais ou regulatórias.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Contato
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Se você tiver dúvidas sobre nossa Política de Cookies:
                  </p>
                  <div className="mt-4 space-y-2 text-muted-foreground">
                    <p>Email: privacidade@bunx.io</p>
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
