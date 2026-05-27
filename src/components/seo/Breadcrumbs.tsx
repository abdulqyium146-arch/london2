import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { SingleSchema } from '@/components/seo/SchemaMarkup'
import { generateBreadcrumbSchema } from '@/lib/seo/schema'
import type { BreadcrumbItem } from '@/types'

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const allItems = [{ name: 'Home', href: '/' }, ...items]
  const schema = generateBreadcrumbSchema(allItems)

  return (
    <>
      <SingleSchema schema={schema} id="breadcrumb-schema" />
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center gap-1 text-sm text-slate-400 ${className}`}
      >
        {allItems.map((item, index) => (
          <div key={item.href} className="flex items-center gap-1">
            {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />}
            {index === 0 && <Home className="w-3.5 h-3.5 flex-shrink-0" />}
            {index === allItems.length - 1 ? (
              <span className="text-slate-200 font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-orange-400 transition-colors duration-200 truncate max-w-[120px] md:max-w-none"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  )
}
