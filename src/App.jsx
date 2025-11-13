import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Card from './components/card.jsx'

function App() {
  const [ productsData , setProductsData] = useState([])
  const  [searchTxt,  setSearchTxt] = useState('')

  useEffect(() => {
    const getProducts = async() => {
      try{
        const res = await fetch('https://fakestoreapi.com/products')
        const dataJson  = await res.json()
        setProductsData(dataJson)
      }catch(err){
        console.log(err)
      }
    }
    getProducts()
  }, [])

  const filteredItems = productsData.filter(item => 
    item.title.toLowerCase().includes(searchTxt.toLowerCase())
  )

  return (
    <div className="min-h-screen">
      
      <Header searchTxt={searchTxt} setSearchTxt={setSearchTxt} />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-3">Store</h2>
          <p className="text-gray-500 text-lg">Buy with web3 wallet!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((prod) => (
              Card({ prod })
            ))}
          </div>
      </div>
    </div>
  )
}

export default App