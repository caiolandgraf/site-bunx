import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react"
import Footer from "@/components/sections/footer"
import { siteConfig } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos sobre desenvolvimento web, design, arquitetura de software, segurança, performance e as últimas tendências em tecnologia.",
  keywords: [
    "blog de tecnologia",
    "desenvolvimento web",
    "design UX/UI",
    "arquitetura de software",
    "segurança em APIs",
    "tendências tech",
  ],
  openGraph: {
    title: "Blog - BunX",
    description: "Artigos sobre tecnologia, inovação e tendências do mercado de desenvolvimento.",
    url: `${siteConfig.url}/blog`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "BunX - Blog",
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
}

const blogPosts = [
  {
    title: "O Futuro do Desenvolvimento Web em 2025",
    excerpt: "Exploramos as principais tendências e tecnologias que estão moldando o futuro do desenvolvimento web.",
    author: "Ana Silva",
    date: "15 de Outubro, 2025",
    category: "Desenvolvimento",
    readTime: "5 min",
    slug: "futuro-dev-web"
  },
  {
    title: "Como a IA está Transformando o Design UX/UI",
    excerpt: "Descubra como a inteligência artificial está revolucionando a forma como criamos experiências digitais.",
    author: "Carlos Santos",
    date: "10 de Outubro, 2025",
    category: "Design",
    readTime: "7 min",
    slug: "ia-design-ux-ui"
  },
  {
    title: "Arquitetura de Microserviços: Guia Completo",
    excerpt: "Um guia abrangente sobre como implementar e escalar aplicações usando arquitetura de microserviços.",
    author: "Maria Oliveira",
    date: "5 de Outubro, 2025",
    category: "Arquitetura",
    readTime: "10 min",
    slug: "arquitetura-microservicos"
  },
  {
    title: "Best Practices para Segurança em APIs",
    excerpt: "Aprenda as melhores práticas para manter suas APIs seguras e protegidas contra ameaças.",
    author: "João Pedro",
    date: "1 de Outubro, 2025",
    category: "Segurança",
    readTime: "8 min",
    slug: "seguranca-apis"
  },
  {
    title: "Performance Web: Otimizando para o Usuário",
    excerpt: "Técnicas essenciais para melhorar a performance e proporcionar uma experiência excepcional.",
    author: "Ana Silva",
    date: "25 de Setembro, 2025",
    category: "Performance",
    readTime: "6 min",
    slug: "performance-web"
  },
  {
    title: "DevOps: Cultura e Ferramentas Essenciais",
    excerpt: "Como implementar uma cultura DevOps eficiente e as ferramentas que fazem a diferença.",
    author: "Carlos Santos",
    date: "20 de Setembro, 2025",
    category: "DevOps",
    readTime: "9 min",
    slug: "devops-cultura"
  }
]

export default function BlogPage() {
  return (
    <>
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/">
            <Button variant="ghost" className="mb-8 gap-2 hover:text-primary">
              <ArrowLeft className="w-4 h-4" />
              Voltar para Home
            </Button>
          </Link>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            Blog BunX
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Artigos, tutoriais e insights sobre tecnologia, desenvolvimento e inovação.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`}>
                <article className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime} de leitura</span>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                  </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full mt-4 gap-2 group-hover:text-primary">
                    Ler mais
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Receba nossas novidades</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Inscreva-se em nossa newsletter e receba os melhores conteúdos sobre
              tecnologia diretamente no seu email.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none"
              />
              <Button className="bg-primary hover:bg-primary/90 text-black font-semibold">
                Inscrever
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
  )
}
