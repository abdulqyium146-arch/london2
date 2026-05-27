interface SchemaMarkupProps {
  schemas: Record<string, unknown>[]
}

export function SchemaMarkup({ schemas }: SchemaMarkupProps) {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

interface SingleSchemaProps {
  schema: Record<string, unknown>
  id?: string
}

export function SingleSchema({ schema, id }: SingleSchemaProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
