// ───────────────────────────────────────────────────────────────────────────
// Card - reading multiple props
// ───────────────────────────────────────────────────────────────────────────
//
// Concept: props and component reuse.
// Read: content/m2-react Activity 2, and
//       content/react-theory/03-jsx-and-the-component-model.md
//
// Requirement:
//   Given `title` (a string) and `price` (a number) props, render:
//     - an <article> as the outer element
//     - the title inside an <h2>
//     - the price inside a <p>, shown with a leading dollar sign: $PRICE
//
//   <Card title="Coffee" price={3} />   renders an <article> containing
//   <h2>Coffee</h2> and <p>$3</p>
//
// Tip: you can destructure both props in the function parameter list.

export default function Card({ title, price }) {
  return null // TODO: return the <article> described above
}
