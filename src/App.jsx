import Greeting from './components/Greeting.jsx'
import Card from './components/Card.jsx'
import ProductList from './components/ProductList.jsx'

// A playground that shows your components running together. Nothing here is
// graded; it is only so `npm run dev` shows something. Edit it freely to try
// your components out. The grade comes from the tests in test/.
const products = [
  { id: 1, title: 'Coffee', price: 3 },
  { id: 2, title: 'Tea', price: 2 },
  { id: 3, title: 'Juice', price: 4 },
]

export default function App() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <Greeting name="Ada" />
      <Card title="Coffee" price={3} />
      <h2>Menu</h2>
      <ProductList products={products} />
    </main>
  )
}
