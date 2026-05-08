export function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <article className="prose prose-invert prose-sm max-w-none
        prose-headings:font-serif prose-headings:italic prose-headings:font-normal prose-headings:text-ivory
        prose-p:font-light prose-p:text-muted prose-p:leading-[1.85]
        prose-li:font-light prose-li:text-muted
        prose-a:text-saffron prose-a:no-underline hover:prose-a:underline
        prose-hr:border-border">
        {children}
      </article>
    </div>
  )
}
