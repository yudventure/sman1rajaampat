// Standard page header (eyebrow + title + optional subtitle).
export default function PageHead({ eyebrow, title, sub }) {
  return (
    <section className="wrap" style={{ paddingTop: 56, paddingBottom: 8 }}>
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="displg" style={{ marginTop: 12, maxWidth: 720 }}>{title}</h1>
      {sub ? <p className="lead" style={{ marginTop: 16, maxWidth: 640 }}>{sub}</p> : null}
    </section>
  )
}
