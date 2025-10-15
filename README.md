# BunX - Site Corporativo Moderno

Site corporativo desenvolvido com as tecnologias mais modernas para apresentar nossa empresa de forma profissional e atraente.

## 🚀 Tecnologias

- **Next.js 15** - Framework React de última geração
- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes de UI modernos e acessíveis
- **Lucide React** - Ícones modernos e consistentes

## 🎨 Design

- **Tema**: Escuro com gradientes modernos
- **Cor Principal**: Laranja (#FF7A00)
- **Estilo**: Minimalista e profissional com efeitos visuais sofisticados

## 📑 Seções do Site

1. **Hero** - Seção inicial impactante com call-to-action
2. **Sobre** - Apresentação da empresa e seus valores
3. **Equipe** - Conheça os profissionais por trás da empresa
4. **Projetos** - Portfólio de projetos desenvolvidos
5. **CTA** - Chamada para ação e contato

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start
```

## 🌐 Acesso

Após executar `npm run dev`, acesse:
- **Local**: http://localhost:3000

## 📝 Personalização

Para personalizar o site para sua empresa:

1. **Cores**: Edite `app/globals.css` para ajustar as variáveis CSS
2. **Conteúdo**: Modifique os componentes em `components/sections/`
3. **Equipe**: Atualize o array `team` em `components/sections/team.tsx`
4. **Projetos**: Edite o array `projects` em `components/sections/projects.tsx`

## 🎯 Features

- ✅ Design responsivo para todos os dispositivos
- ✅ Animações suaves e transições elegantes
- ✅ Otimizado para performance
- ✅ SEO-friendly
- ✅ Acessibilidade (WCAG)
- ✅ Tema escuro moderno
- ✅ Gradientes e efeitos visuais sofisticados

## 📦 Estrutura do Projeto

```
site/
├── app/
│   ├── globals.css       # Estilos globais e variáveis CSS
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Página inicial
├── components/
│   ├── sections/         # Seções do site
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── team.tsx
│   │   ├── projects.tsx
│   │   └── cta.tsx
│   └── ui/              # Componentes shadcn/ui
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   └── utils.ts         # Funções utilitárias
└── public/              # Arquivos estáticos
```

## 🚀 Deploy

Este projeto pode ser facilmente deployado em:

- **Vercel** (recomendado)
- **Netlify**
- **AWS Amplify**
- Qualquer plataforma que suporte Next.js

## 📄 Licença

Este projeto é privado e proprietário.

---

Desenvolvido com ❤️ pela equipe BunX
