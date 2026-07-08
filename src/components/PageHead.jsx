// Standard page header (eyebrow + title + optional subtitle).
export default function PageHead({ eyebrow, title, sub }) {
  return (
    <section className="wrap" style={{ paddingTop: 56, paddingBottom: 8 }}>
      <span className="eyebrow rv" style={{ display: 'inline-block' }}>{eyebrow}</span>
      <h1 className="displg rv" style={{ marginTop: 12, maxWidth: 720, '--rvd': '.07s' }}>{title}</h1>
      {sub ? <p className="lead rv" style={{ marginTop: 16, maxWidth: 640, '--rvd': '.14s' }}>{sub}</p> : null}
    </section>
  )
}
