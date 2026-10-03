export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      <h2 className="text-balance font-serif text-4xl font-medium tracking-tight md:text-5xl">{title}</h2>
      {description && <p className="text-pretty leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  )
}
