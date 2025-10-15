# Documentação de SEO - BunX

## 📋 Índice
- [Implementações](#implementações)
- [Arquivos Criados](#arquivos-criados)
- [Configurações](#configurações)
- [Próximos Passos](#próximos-passos)
- [Verificação](#verificação)

## ✅ Implementações

### 1. Meta Tags Completas
- **Title e Description**: Otimizados para cada página
- **Open Graph**: Tags para redes sociais (Facebook, LinkedIn)
- **Twitter Cards**: Tags específicas para Twitter
- **Keywords**: Palavras-chave relevantes por página
- **Canonical URLs**: URLs canônicas para evitar conteúdo duplicado
- **Language**: Definido como pt-BR

### 2. Sitemap XML
- **Arquivo**: `/app/sitemap.ts`
- Gerado automaticamente pelo Next.js
- Inclui todas as páginas principais
- Define prioridades e frequências de atualização
- Acessível em: `https://bunx.dev/sitemap.xml`

### 3. Robots.txt
- **Arquivos**: `/app/robots.ts` e `/public/robots.txt`
- Permite indexação do site
- Bloqueia rotas administrativas
- Referência ao sitemap

### 4. Manifest (PWA)
- **Arquivo**: `/app/manifest.ts`
- Configuração para Progressive Web App
- Ícones e tema personalizados
- Nome curto e descrição

### 5. Open Graph Images
- **Arquivo**: `/app/opengraph-image.tsx`
- Gera imagem dinâmica 1200x630px
- Tema escuro com gradiente laranja
- Usado em compartilhamentos sociais

### 6. Favicon Dinâmico
- **Arquivo**: `/app/icon.tsx`
- Gera ícone 1200x1200px
- Logo BunX com gradiente

### 7. Dados Estruturados (JSON-LD)
- **Componente**: `/components/json-ld.tsx`
- Schema.org para Organization
- Schema.org para Website
- Breadcrumbs estruturados
- Suporte para Article

### 8. Breadcrumbs
- **Componente**: `/components/breadcrumbs.tsx`
- Navegação estruturada
- JSON-LD integrado
- Geração automática baseada na URL

### 9. Configuração SEO Centralizada
- **Arquivo**: `/lib/seo.ts`
- Configurações globais do site
- URLs, meta informações
- Keywords principais

### 10. Headers de Segurança
- **Arquivo**: `/next.config.ts`
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- DNS Prefetch

## 📁 Arquivos Criados

```
/lib/seo.ts                           # Configuração SEO global
/app/sitemap.ts                       # Sitemap XML dinâmico
/app/robots.ts                        # Robots.txt dinâmico
/app/manifest.ts                      # Web App Manifest
/app/opengraph-image.tsx              # Open Graph Image
/app/icon.tsx                         # Favicon dinâmico
/components/json-ld.tsx               # Dados estruturados
/components/breadcrumbs.tsx           # Breadcrumbs com SEO
/public/robots.txt                    # Robots.txt estático (backup)
```

## ⚙️ Configurações

### Meta Tags por Página

#### Página Home
- Title: "BunX - Transformando Ideias em Realidade"
- Description otimizada
- Open Graph completo
- Twitter Cards

#### Página Sobre
- Title: "Sobre | BunX"
- Meta description customizada
- Canonical URL

#### Página Serviços
- Title: "Serviços | BunX"
- Keywords específicos de serviços
- Open Graph otimizado

#### Página Blog
- Title: "Blog | BunX"
- Keywords de conteúdo
- RSS feed (opcional)

#### Artigos do Blog
- Title customizado por artigo
- Meta author
- Published time
- Article schema

## 🚀 Próximos Passos

### 1. Verificação do Google
No arquivo `/app/layout.tsx`, adicione seu código de verificação:
```typescript
verification: {
  google: "SEU_CODIGO_AQUI",
}
```

**Como obter**:
1. Acesse [Google Search Console](https://search.google.com/search-console)
2. Adicione sua propriedade
3. Escolha verificação por meta tag
4. Copie o código

### 2. Criar Imagens Reais
Atualmente usando imagens geradas dinamicamente. Considere criar:
- `/public/og-image.jpg` (1200x630px)
- `/public/favicon.ico`
- `/public/icon-192.png`
- `/public/icon-512.png`
- `/public/apple-touch-icon.png`

### 3. Google Analytics
Adicione ao `/app/layout.tsx`:
```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 4. Google Tag Manager (Opcional)
```typescript
<Script
  id="gtm"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-XXXXXXX');
    `,
  }}
/>
```

### 5. Schema.org Adicional
Considere adicionar schemas para:
- FAQPage (página de perguntas frequentes)
- Service (página de serviços)
- Person (equipe)
- Review (avaliações de clientes)
- HowTo (tutoriais do blog)

### 6. Performance
- Configure cache de imagens
- Otimize fontes (já usando Inter do Google Fonts)
- Lazy loading de imagens
- Minificação automática (já ativo no Next.js)

### 7. RSS Feed
Criar feed RSS para o blog em `/app/feed.xml/route.ts`

### 8. URL Atual
Atualize a URL em `/lib/seo.ts`:
```typescript
url: 'https://seu-dominio-real.com',
```

## 🔍 Verificação

### Testar SEO
1. **Google Search Console**
   - URL: https://search.google.com/search-console
   - Adicionar propriedade
   - Verificar sitemap
   - Solicitar indexação

2. **Bing Webmaster Tools**
   - URL: https://www.bing.com/webmasters
   - Adicionar site
   - Submeter sitemap

3. **Ferramentas de Teste**
   - [Google Rich Results Test](https://search.google.com/test/rich-results)
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

4. **PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Testar performance e SEO

5. **Lighthouse (Chrome DevTools)**
   - Abrir DevTools (F12)
   - Aba Lighthouse
   - Gerar relatório

### Comandos Úteis

```bash
# Build de produção
npm run build

# Verificar sitemap localmente
# http://localhost:3000/sitemap.xml

# Verificar robots.txt
# http://localhost:3000/robots.txt

# Verificar manifest
# http://localhost:3000/manifest.json

# Verificar Open Graph
# http://localhost:3000/opengraph-image
```

### Checklist SEO

- [ ] Meta tags em todas as páginas
- [ ] Open Graph configurado
- [ ] Twitter Cards configurado
- [ ] Sitemap.xml acessível
- [ ] Robots.txt configurado
- [ ] Canonical URLs definidas
- [ ] Dados estruturados (JSON-LD)
- [ ] Headers de segurança
- [ ] Google Search Console configurado
- [ ] Google Analytics instalado
- [ ] Imagens com alt text
- [ ] URLs amigáveis
- [ ] Mobile-friendly
- [ ] Performance otimizada (Core Web Vitals)
- [ ] SSL/HTTPS ativo
- [ ] 404 page customizada

## 📊 Métricas para Acompanhar

1. **Posicionamento**
   - Palavras-chave principais
   - Páginas de destino
   - CTR (Click-through rate)

2. **Tráfego**
   - Visitas orgânicas
   - Bounce rate
   - Tempo na página
   - Páginas por sessão

3. **Indexação**
   - Páginas indexadas
   - Erros de rastreamento
   - Cobertura do sitemap

4. **Performance**
   - Core Web Vitals (LCP, FID, CLS)
   - Tempo de carregamento
   - Mobile vs Desktop

5. **Social**
   - Compartilhamentos
   - Engajamento
   - Referrals

## 🎯 Palavras-chave Principais

Definidas em `/lib/seo.ts`:
- desenvolvimento de software
- tecnologia
- inovação
- transformação digital
- consultoria em TI
- soluções empresariais
- desenvolvimento web
- aplicativos mobile
- cloud computing
- inteligência artificial

## 📱 Redes Sociais

Configuradas em `/lib/seo.ts`:
```typescript
links: {
  twitter: 'https://twitter.com/bunxdev',
  github: 'https://github.com/bunx',
  linkedin: 'https://linkedin.com/company/bunx',
}
```

Atualize com suas URLs reais!

## 🔧 Manutenção

### Mensal
- Atualizar sitemap manualmente se necessário
- Verificar links quebrados
- Revisar palavras-chave
- Analisar Google Search Console

### Trimestral
- Auditoria completa de SEO
- Atualizar meta descriptions
- Revisar estratégia de conteúdo
- Análise de concorrência

### Anual
- Revisão completa de SEO técnico
- Atualização de dados estruturados
- Análise profunda de performance
- Planejamento de conteúdo

---

**Desenvolvido por BunX** 🚀
