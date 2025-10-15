import {
  AlertTriangle,
  ArrowLeft,
  BookmarkPlus,
  Key,
  Lock,
  Share2,
  Shield
} from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/sections/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Segurança em APIs RESTful: Guia Completo',
  description:
    'Aprenda as melhores práticas para proteger suas APIs RESTful contra ameaças comuns e vulnerabilidades. Guia completo sobre autenticação, autorização e criptografia.',
  keywords: [
    'segurança em APIs',
    'API RESTful',
    'autenticação',
    'autorização',
    'JWT',
    'OAuth',
    'segurança web',
    'vulnerabilidades'
  ],
  authors: [{ name: 'Caio Landgraf' }],
  openGraph: {
    title: 'Segurança em APIs RESTful: Guia Completo',
    description:
      'Aprenda as melhores práticas para proteger suas APIs RESTful contra ameaças comuns e vulnerabilidades.',
    url: `${siteConfig.url}/blog/seguranca-apis`,
    type: 'article',
    publishedTime: '2025-10-01T00:00:00.000Z',
    authors: ['Caio Landgraf'],
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Segurança em APIs'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Segurança em APIs RESTful: Guia Completo',
    description:
      'Aprenda as melhores práticas para proteger suas APIs RESTful contra ameaças comuns e vulnerabilidades.',
    images: [`${siteConfig.url}/og-image.jpg`]
  },
  alternates: {
    canonical: `${siteConfig.url}/blog/seguranca-apis`
  }
}

export default function SegurancaApisPage() {
  return (
    <>
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 relative z-10">
            <Link href="/blog">
              <Button variant="ghost" className="mb-8 gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar ao Blog
              </Button>
            </Link>

            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20">
                  Segurança
                </span>
                <span className="text-sm text-muted-foreground">
                  10 min de leitura
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Segurança em APIs RESTful: Guia Completo
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Proteja suas APIs contra ameaças comuns e implemente as melhores
                práticas de segurança
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20" />
                  <div>
                    <p className="text-white font-medium">João Silva</p>
                    <p>15 de Março, 2024</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 ml-auto">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    Compartilhar
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <BookmarkPlus className="w-4 h-4" />
                    Salvar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-invert prose-lg max-w-none">
                <p className="lead">
                  A segurança de APIs é um aspecto crítico no desenvolvimento de
                  aplicações modernas. Com o aumento de ataques cibernéticos e
                  vazamentos de dados, proteger suas APIs tornou-se mais
                  importante do que nunca.
                </p>

                <h2>
                  <Shield className="w-6 h-6 inline mr-2 text-primary" />
                  Autenticação e Autorização
                </h2>

                <h3>OAuth 2.0 e OpenID Connect</h3>
                <p>
                  O OAuth 2.0 é o padrão de autorização mais utilizado para APIs
                  modernas. Ele permite que aplicações terceiras acessem
                  recursos em nome do usuário sem expor credenciais.
                </p>

                <div className="bg-card border border-border rounded-lg p-6 my-8">
                  <h4 className="text-primary mb-3">
                    Implementação de OAuth 2.0
                  </h4>
                  <pre className="bg-black/50 p-4 rounded overflow-x-auto">
                    <code>{`// Configuração do servidor OAuth
const oauth2Server = new OAuth2Server({
  model: {
    getClient: async (clientId, clientSecret) => {
      return await Client.findOne({
        clientId,
        clientSecret
      });
    },
    getUser: async (username, password) => {
      return await User.findOne({
        username
      }).verifyPassword(password);
    },
    saveToken: async (token, client, user) => {
      return await Token.create({
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        client: client.id,
        user: user.id,
        expiresAt: token.accessTokenExpiresAt
      });
    }
  }
});`}</code>
                  </pre>
                </div>

                <h3>JWT (JSON Web Tokens)</h3>
                <p>
                  JWTs são tokens autocontidos que carregam informações sobre o
                  usuário e podem ser verificados sem consultar um banco de
                  dados a cada requisição.
                </p>

                <ul>
                  <li>
                    <strong>Stateless:</strong> Não requer armazenamento no
                    servidor
                  </li>
                  <li>
                    <strong>Escalável:</strong> Funciona bem em arquiteturas
                    distribuídas
                  </li>
                  <li>
                    <strong>Cross-domain:</strong> Pode ser usado em diferentes
                    domínios
                  </li>
                  <li>
                    <strong>Performance:</strong> Reduz carga no banco de dados
                  </li>
                </ul>

                <h2>
                  <Key className="w-6 h-6 inline mr-2 text-primary" />
                  Criptografia e HTTPS
                </h2>

                <p>
                  Toda comunicação com APIs deve ser feita exclusivamente
                  através de HTTPS. Isso garante que os dados transmitidos entre
                  cliente e servidor estejam criptografados.
                </p>

                <h3>Implementação de TLS/SSL</h3>
                <div className="bg-card border border-border rounded-lg p-6 my-8">
                  <h4 className="text-primary mb-3">Boas Práticas TLS</h4>
                  <ul className="space-y-2">
                    <li>✓ Use TLS 1.3 ou superior</li>
                    <li>✓ Desabilite protocolos antigos (SSL, TLS 1.0/1.1)</li>
                    <li>✓ Configure cipher suites fortes</li>
                    <li>✓ Implemente HSTS (HTTP Strict Transport Security)</li>
                    <li>✓ Use certificados de autoridades confiáveis</li>
                    <li>✓ Renove certificados antes do vencimento</li>
                  </ul>
                </div>

                <h3>Criptografia de Dados Sensíveis</h3>
                <p>
                  Além de HTTPS, dados sensíveis devem ser criptografados antes
                  de serem armazenados:
                </p>

                <div className="bg-card border border-border rounded-lg p-6 my-8">
                  <pre className="bg-black/50 p-4 rounded overflow-x-auto">
                    <code>{`// Criptografia de senha com bcrypt
const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
}

async function verifyPassword(password, hash) {
  return await bcrypt.compare(password, hash);
}

// Criptografia de dados com crypto
const crypto = require('crypto');

function encrypt(text, secretKey) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(
    'aes-256-gcm',
    Buffer.from(secretKey),
    iv
  );

  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return {
    iv: iv.toString('hex'),
    content: encrypted,
    tag: cipher.getAuthTag().toString('hex')
  };
}`}</code>
                  </pre>
                </div>

                <h2>
                  <Lock className="w-6 h-6 inline mr-2 text-primary" />
                  Rate Limiting e Throttling
                </h2>

                <p>
                  Proteja suas APIs contra abuso e ataques DDoS implementando
                  limitação de taxa de requisições:
                </p>

                <div className="bg-card border border-border rounded-lg p-6 my-8">
                  <h4 className="text-primary mb-3">
                    Implementação com Express
                  </h4>
                  <pre className="bg-black/50 p-4 rounded overflow-x-auto">
                    <code>{`const rateLimit = require('express-rate-limit');

// Limite geral para API
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // máximo de 100 requisições
  message: 'Muitas requisições, tente novamente mais tarde',
  standardHeaders: true,
  legacyHeaders: false,
});

// Limite específico para login
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // apenas 5 tentativas de login
  skipSuccessfulRequests: true,
  message: 'Muitas tentativas de login'
});

app.use('/api/', apiLimiter);
app.use('/api/auth/login', loginLimiter);`}</code>
                  </pre>
                </div>

                <h2>
                  <AlertTriangle className="w-6 h-6 inline mr-2 text-primary" />
                  Validação de Entrada
                </h2>

                <p>
                  Nunca confie em dados de entrada do usuário. Sempre valide e
                  sanitize todos os inputs:
                </p>

                <h3>Proteção contra Injeção</h3>
                <ul>
                  <li>
                    <strong>SQL Injection:</strong> Use prepared statements e
                    ORMs
                  </li>
                  <li>
                    <strong>NoSQL Injection:</strong> Valide tipos de dados e
                    use schemas
                  </li>
                  <li>
                    <strong>XSS:</strong> Escape caracteres especiais em outputs
                  </li>
                  <li>
                    <strong>Command Injection:</strong> Evite executar comandos
                    do sistema com input do usuário
                  </li>
                </ul>

                <div className="bg-card border border-border rounded-lg p-6 my-8">
                  <h4 className="text-primary mb-3">Validação com Joi</h4>
                  <pre className="bg-black/50 p-4 rounded overflow-x-auto">
                    <code>{`const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'Email inválido',
      'any.required': 'Email é obrigatório'
    }),

  password: Joi.string()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/)
    .required()
    .messages({
      'string.min': 'Senha deve ter no mínimo 8 caracteres',
      'string.pattern.base': 'Senha deve conter maiúsculas, minúsculas e números'
    }),

  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
});

async function validateUser(req, res, next) {
  try {
    await userSchema.validateAsync(req.body);
    next();
  } catch (error) {
    res.status(400).json({ error: error.details[0].message });
  }
}`}</code>
                  </pre>
                </div>

                <h2>CORS e Segurança de Origem</h2>

                <p>
                  Configure CORS (Cross-Origin Resource Sharing) adequadamente
                  para controlar quais domínios podem acessar sua API:
                </p>

                <div className="bg-card border border-border rounded-lg p-6 my-8">
                  <pre className="bg-black/50 p-4 rounded overflow-x-auto">
                    <code>{`const cors = require('cors');

// Configuração restritiva
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      'https://app.exemplo.com',
      'https://admin.exemplo.com'
    ];

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Não permitido pelo CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));`}</code>
                  </pre>
                </div>

                <h2>Logging e Monitoramento</h2>

                <p>
                  Implemente logging robusto para detectar e responder a
                  incidentes de segurança:
                </p>

                <ul>
                  <li>
                    Registre todas as tentativas de autenticação (sucesso e
                    falha)
                  </li>
                  <li>Monitore padrões de acesso anormais</li>
                  <li>Configure alertas para atividades suspeitas</li>
                  <li>Mantenha logs auditáveis por tempo adequado</li>
                  <li>Proteja logs contra modificações</li>
                </ul>

                <h2>Checklist de Segurança</h2>

                <div className="bg-card border border-border rounded-lg p-6 my-8">
                  <h4 className="text-primary mb-4">
                    Antes de ir para produção
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-primary mt-1" />
                      <p className="m-0">
                        HTTPS configurado com certificado válido
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-primary mt-1" />
                      <p className="m-0">
                        Autenticação e autorização implementadas
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-primary mt-1" />
                      <p className="m-0">Rate limiting configurado</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-primary mt-1" />
                      <p className="m-0">
                        Validação de entrada em todos os endpoints
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-primary mt-1" />
                      <p className="m-0">CORS configurado adequadamente</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-primary mt-1" />
                      <p className="m-0">Dados sensíveis criptografados</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-primary mt-1" />
                      <p className="m-0">Logging e monitoramento ativos</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-primary mt-1" />
                      <p className="m-0">Teste de segurança realizado</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-primary mt-1" />
                      <p className="m-0">
                        Documentação de segurança atualizada
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Conclusão</h2>

                <p>
                  A segurança de APIs é um processo contínuo que requer
                  vigilância constante e atualização regular. As ameaças
                  evoluem, e suas defesas também devem evoluir.
                </p>

                <p>
                  Implemente essas práticas desde o início do desenvolvimento,
                  não como uma reflexão tardia. Lembre-se: é muito mais fácil e
                  barato construir com segurança do que corrigir
                  vulnerabilidades depois.
                </p>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8">
                  <p className="text-primary font-semibold mb-2">
                    💡 Dica Final
                  </p>
                  <p className="m-0">
                    Realize auditorias de segurança regulares e mantenha-se
                    atualizado sobre as últimas ameaças e melhores práticas
                    através do OWASP API Security Top 10.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="py-12 border-t border-border/40">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-start gap-6 p-6 rounded-xl bg-card border border-border">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex-shrink-0">
                  <Image
                    src="/caiolandgraf.webp"
                    alt="Caio Landgraf"
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Caio Landgraf</h3>
                  <p className="text-primary text-sm mb-3">
                    CTO & Founder da BunX
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Desenvolvedor full-stack com mais de 10 anos de experiência.
                    Apaixonado por tecnologias modernas e por compartilhar
                    conhecimento com a comunidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-12 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Artigos Relacionados</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/arquitetura-microservicos">
                  <Card className="bg-card border-border hover:border-primary/50 transition-all group">
                    <CardContent className="p-6">
                      <span className="text-xs text-primary">Arquitetura</span>
                      <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                        Arquitetura de Microserviços: Guia Completo
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Aprenda a construir sistemas escaláveis com
                        microserviços
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/blog/performance-web">
                  <Card className="bg-card border-border hover:border-primary/50 transition-all group">
                    <CardContent className="p-6">
                      <span className="text-xs text-primary">Performance</span>
                      <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                        Otimização de Performance Web
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Técnicas avançadas para melhorar a velocidade do seu
                        site
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
