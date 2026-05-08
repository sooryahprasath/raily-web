import { MdxLayout } from '@/components/MdxLayout'
import Terms from '@/content/terms.mdx'

export const metadata = {
  title: 'Terms of Service — Raily',
}

export default function TermsPage() {
  return (
    <MdxLayout>
      <Terms />
    </MdxLayout>
  )
}
