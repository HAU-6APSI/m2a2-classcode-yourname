// ───────────────────────────────────────────────────────────────────────────
// ProductList - rendering a list
// ───────────────────────────────────────────────────────────────────────────
//
// Concept: rendering lists with .map() and keys.
// Read: content/m2-react Activity 2, and
//       content/react-theory/02-virtual-dom-and-rendering.md (why keys matter)
//
// Requirement:
//   Given a `products` prop (an array of objects like { id, title, price }),
//   render a <ul> containing one <li> per product, showing that product's title.
//   Give each <li> a `key` of the product's id.
//
//   products = [{ id: 1, title: 'Coffee', price: 3 }, { id: 2, title: 'Tea', price: 2 }]
//   renders a <ul> with two <li>: "Coffee" and "Tea"
//
// Tip: turn the array into an array of elements with products.map(...).

export default function ProductList({ products }) {
  return null // TODO: return the <ul> of <li> described above
}
