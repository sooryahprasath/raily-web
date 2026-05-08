import { MdxLayout } from '@/components/MdxLayout'
import Disclaimer from '@/content/disclaimer.mdx'

export const metadata = {
  title: 'Disclaimer — Raily',
}

export default function DisclaimerPage() {
  return (
    <MdxLayout>
      <Disclaimer />
    </MdxLayout>
  )
}
