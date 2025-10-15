'use client'

import { Github, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const socialLinks = [
  { icon: Github, href: 'https://github.com/caiolandgraf', label: 'GitHub' },
  { icon: Twitter, href: 'https://x.com/eicajo', label: 'Twitter' },
  {
    icon: Instagram,
    href: 'https://instagram.com/eu.caiolandgraf',
    label: 'Instagram'
  },
  {
    icon: Mail,
    href: 'mailto:contato@bunx.io',
    label: 'E-mail'
  },
  {
    icon: Phone,
    href: 'https://wa.me/5543984793620',
    label: 'WhatsApp'
  }
]

const navigation = {
  empresa: [
    { name: 'Sobre', href: '/sobre' },
    { name: 'Equipe', href: '/#equipe' },
    { name: 'Carreiras', href: '/carreiras' },
    { name: 'Blog', href: '/blog' }
  ],
  servicos: [
    { name: 'Desenvolvimento Web', href: '/servicos' },
    { name: 'Apps Mobile', href: '/servicos' },
    { name: 'Consultoria', href: '/servicos' },
    { name: 'Design UX/UI', href: '/servicos' }
  ],
  recursos: [
    { name: 'Projetos', href: '/#projetos' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Documentação', href: '/documentacao' },
    { name: 'Suporte', href: '/suporte' }
  ],
  legal: [
    { name: 'Privacidade', href: '/privacidade' },
    { name: 'Termos de Uso', href: '/termos' },
    { name: 'Cookies', href: '/cookies' },
    { name: 'Licenças', href: '/licencas' }
  ]
}

const contact = [
  { icon: Mail, text: 'contato@bunx.io', href: 'mailto:contato@bunx.io' },
  { icon: Phone, text: '+55 43 9 8479-3620', href: 'tel:+5543984793620' },
  { icon: MapPin, text: 'Brasil', href: '#' }
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-black">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="mb-4 mr-auto">
              <Image
                src="/logo.svg"
                alt="BunX Logo"
                width={240}
                height={80}
                className="h-36 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transformamos ideias em realidade através de soluções tecnológicas
              inovadoras que impulsionam o sucesso do seu negócio.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(social => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-black flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation sections */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Empresa</h3>
            <ul className="space-y-3">
              {navigation.empresa.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Serviços</h3>
            <ul className="space-y-3">
              {navigation.servicos.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Recursos</h3>
            <ul className="space-y-3">
              {navigation.recursos.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact section */}
        <div className="py-8 border-t border-border/40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contact.map(item => {
              const Icon = item.icon
              return (
                <a
                  key={item.text}
                  href={item.href}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </a>
              )
            })}
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BunX. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              Feito com <span className="text-primary">❤</span> no Brasil
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
