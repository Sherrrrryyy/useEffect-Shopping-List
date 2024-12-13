import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getProducts } from './utils/Product';
import Card from './componets/Card';

function App() {
  const [count, setCount] = useState(0)
  //   const [count1, setCount1] = useState(0)

  // useEffect(()=>{
  // console.log("counter=>", count1);

  // },[count1])

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchAllProducts()
  }, [count]);

  const fetchAllProducts = async () => {
    const products = await getProducts()
    setProducts(products)
    console.log(products);

  }


  return (
    <>

      {/* <h1>count 1 {count}</h1>
<h1>count 2{count1}</h1>
<button onClick={()=> setCount(count + 1)}>count</button>
<button onClick={()=> setCount1(count1 - 1)}>count1</button> */}

      <div>
        <h1>Shopping List</h1>

        <div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {
                  products.map((data, index) => {
                    return <Card key={data.id} item={data} />
                  })
                }

              </div>
            </div>
          </section>
        </div>

      </div>
    </>
  )
}

export default App
