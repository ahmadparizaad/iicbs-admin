import { ClientOnly } from './client'

export function generateStaticParams() {
  // Provide both representations so the static exporter includes '/'.
  // Some export runners expect either [] or [''] to represent the root.
  return [{ slug: [] }, { slug: [''] }]
}

export default function Page() {
  return <ClientOnly />
}