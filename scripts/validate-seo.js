#!/usr/bin/env node

/**
 * Script de Validação de SEO
 *
 * Valida as configurações básicas de SEO do site BunX
 * Execute: node scripts/validate-seo.js
 */

const fs = require('fs')
const path = require('path')

console.log('🔍 Validando Configuração de SEO...\n')

let hasErrors = false
let warnings = []

// 1. Verificar se seo.ts existe
console.log('1️⃣  Verificando /lib/seo.ts...')
try {
  const seoPath = path.join(process.cwd(), 'lib', 'seo.ts')
  const seoContent = fs.readFileSync(seoPath, 'utf-8')

  if (seoContent.includes('https://bunx.io')) {
    console.log('   ⚠️  URL ainda está com valor padrão')
    warnings.push('Atualize a URL em /lib/seo.ts para seu domínio real')
  } else {
    console.log('   ✅ URL configurada')
  }

  if (seoContent.includes('@bunxdev')) {
    warnings.push('Atualize os links das redes sociais em /lib/seo.ts')
  }
} catch (error) {
  console.log('   ❌ Arquivo não encontrado!')
  hasErrors = true
}

// 2. Verificar sitemap.ts
console.log('\n2️⃣  Verificando /app/sitemap.ts...')
try {
  const sitemapPath = path.join(process.cwd(), 'app', 'sitemap.ts')
  fs.accessSync(sitemapPath)
  console.log('   ✅ Sitemap configurado')
} catch (error) {
  console.log('   ❌ Sitemap não encontrado!')
  hasErrors = true
}

// 3. Verificar robots.ts
console.log('\n3️⃣  Verificando /app/robots.ts...')
try {
  const robotsPath = path.join(process.cwd(), 'app', 'robots.ts')
  fs.accessSync(robotsPath)
  console.log('   ✅ Robots.txt configurado')
} catch (error) {
  console.log('   ❌ Robots.txt não encontrado!')
  hasErrors = true
}

// 4. Verificar manifest.ts
console.log('\n4️⃣  Verificando /app/manifest.ts...')
try {
  const manifestPath = path.join(process.cwd(), 'app', 'manifest.ts')
  fs.accessSync(manifestPath)
  console.log('   ✅ Manifest configurado')
} catch (error) {
  console.log('   ❌ Manifest não encontrado!')
  hasErrors = true
}

// 5. Verificar opengraph-image.tsx
console.log('\n5️⃣  Verificando /app/opengraph-image.tsx...')
try {
  const ogPath = path.join(process.cwd(), 'app', 'opengraph-image.tsx')
  fs.accessSync(ogPath)
  console.log('   ✅ Open Graph image configurada')
} catch (error) {
  console.log('   ❌ Open Graph image não encontrada!')
  hasErrors = true
}

// 6. Verificar layout.tsx
console.log('\n6️⃣  Verificando /app/layout.tsx...')
try {
  const layoutPath = path.join(process.cwd(), 'app', 'layout.tsx')
  const layoutContent = fs.readFileSync(layoutPath, 'utf-8')

  if (layoutContent.includes('metadataBase')) {
    console.log('   ✅ metadataBase configurado')
  } else {
    console.log('   ⚠️  metadataBase não encontrado')
    warnings.push('Adicione metadataBase no layout.tsx')
  }

  if (layoutContent.includes('verification')) {
    if (layoutContent.includes('seu-codigo-de-verificacao-google')) {
      console.log('   ⚠️  Código de verificação do Google não atualizado')
      warnings.push('Adicione seu código do Google Search Console')
    } else {
      console.log('   ✅ Verificação do Google configurada')
    }
  }

  if (layoutContent.includes('JsonLd')) {
    console.log('   ✅ JSON-LD configurado')
  } else {
    console.log('   ⚠️  JSON-LD não importado')
  }
} catch (error) {
  console.log('   ❌ Layout não encontrado!')
  hasErrors = true
}

// 7. Verificar componentes
console.log('\n7️⃣  Verificando componentes SEO...')
const components = ['json-ld.tsx', 'breadcrumbs.tsx', 'analytics.tsx']
let componentsOk = 0

components.forEach(comp => {
  try {
    const compPath = path.join(process.cwd(), 'components', comp)
    fs.accessSync(compPath)
    componentsOk++
  } catch (error) {
    warnings.push(`Componente ${comp} não encontrado`)
  }
})

console.log(
  `   ✅ ${componentsOk}/${components.length} componentes encontrados`
)

// 8. Verificar next.config.ts
console.log('\n8️⃣  Verificando next.config.ts...')
try {
  const configPath = path.join(process.cwd(), 'next.config.ts')
  const configContent = fs.readFileSync(configPath, 'utf-8')

  if (configContent.includes('compress: true')) {
    console.log('   ✅ Compressão ativada')
  }

  if (configContent.includes('headers()')) {
    console.log('   ✅ Headers de segurança configurados')
  }
} catch (error) {
  console.log('   ⚠️  Configurações avançadas não encontradas')
}

// Resultado final
console.log('\n' + '='.repeat(50))
console.log('📊 RESULTADO DA VALIDAÇÃO\n')

if (hasErrors) {
  console.log('❌ ERROS ENCONTRADOS!')
  console.log('   Alguns arquivos essenciais estão faltando.\n')
} else {
  console.log('✅ TODOS OS ARQUIVOS ESSENCIAIS ESTÃO PRESENTES!\n')
}

if (warnings.length > 0) {
  console.log('⚠️  AVISOS (' + warnings.length + '):')
  warnings.forEach((warning, index) => {
    console.log(`   ${index + 1}. ${warning}`)
  })
  console.log('')
}

if (!hasErrors && warnings.length === 0) {
  console.log('🎉 PARABÉNS! SEU SEO ESTÁ 100% CONFIGURADO!')
  console.log('   Próximo passo: Deploy e configurar Google Search Console\n')
} else if (!hasErrors) {
  console.log('👍 CONFIGURAÇÃO BOA!')
  console.log('   Revise os avisos acima para melhorar ainda mais.\n')
}

console.log('='.repeat(50))

// URLs para testar após deploy
console.log('\n📝 APÓS O DEPLOY, TESTE ESTAS URLs:\n')
console.log('   https://seu-dominio.com/sitemap.xml')
console.log('   https://seu-dominio.com/robots.txt')
console.log('   https://seu-dominio.com/manifest.json')
console.log('   https://seu-dominio.com/opengraph-image\n')

console.log('📚 DOCUMENTAÇÃO:')
console.log('   - SEO-README.md - Documentação completa')
console.log('   - SEO-CHECKLIST.md - Lista de verificação')
console.log('   - IMPLEMENTACAO-SEO.md - Resumo da implementação\n')

process.exit(hasErrors ? 1 : 0)
