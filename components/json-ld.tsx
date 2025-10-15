'use client'

import { siteConfig } from '@/lib/seo'

interface JsonLdProps {
  type?: 'website' | 'organization' | 'article' | 'breadcrumb'
  data?: Record<string, any>
}

export default function JsonLd({ type = 'website', data = {} }: JsonLdProps) {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org'
    }

    switch (type) {
      case 'organization':
        return {
          ...baseData,
          '@type': 'Organization',
          name: siteConfig.name,
          url: siteConfig.url,
          logo: `${siteConfig.url}/logo.png`,
          description: siteConfig.description,
          sameAs: [
            siteConfig.links.twitter,
            siteConfig.links.github,
            siteConfig.links.linkedin
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: 'contato@bunx.io'
          },
          ...data
        }

      case 'website':
        return {
          ...baseData,
          '@type': 'WebSite',
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: {
              '@type': 'ImageObject',
              url: `${siteConfig.url}/logo.png`
            }
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteConfig.url}/busca?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          },
          ...data
        }

      case 'article':
        return {
          ...baseData,
          '@type': 'Article',
          publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            logo: {
              '@type': 'ImageObject',
              url: `${siteConfig.url}/logo.png`
            }
          },
          ...data
        }

      case 'breadcrumb':
        return {
          ...baseData,
          '@type': 'BreadcrumbList',
          ...data
        }

      default:
        return { ...baseData, ...data }
    }
  }

  const structuredData = getStructuredData()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
