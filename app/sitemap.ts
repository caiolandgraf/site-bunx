import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bunx.io'
  const currentDate = new Date().toISOString()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/servicos`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.7
    },
    {
      url: `${baseUrl}/blog/arquitetura-microservicos`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/blog/futuro-dev-web`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/blog/ia-design-ux-ui`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/blog/seguranca-apis`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/carreiras`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/documentacao`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/suporte`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/termos`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/privacidade`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/licencas`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3
    }
  ]
}
