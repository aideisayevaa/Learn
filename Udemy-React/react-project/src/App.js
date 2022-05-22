import React, { useState } from 'react'
import Card from './Components/card/card';
import './App.css';


function App() {

  const [productList, setProductList] = useState(
    [
      {
        id: 1,
        price: 200,
        name: "Ios",
        image: "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500",
        title: "Iphone 12"
      },
      {
        id: 2,
        price: 150,
        name: "Ios",
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTF8ZW58MHx8MHx8&auto=format&fit=crop&w=500",
        title: "Iphone 11"
      },
      {
        id: 3,
        price: 100,
        name: "Android",
        image: "https://images.unsplash.com/photo-1653051708760-aea20b4511ee?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
        title: "Xiaomi 10"
      },
      {
        id: 4,
        price: 175,
        name: "Android",
        image: "https://images.unsplash.com/photo-1591531110744-49eacf536ee7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044",
        title: "Xiaomi 11"
      }
      
    ]
  )


  const [boxProduct,setBoxProduct] = useState([])

  return (
    <div className="App">
       
      <h3>Mehsul Siyahisi</h3>

      <div className="gridItems">
       
        {productList.map((product, index) => {
          return (
            <Card key={index} image={product.image} info={product.title} title={product.name}  onClick = {()=>{
              const arr=[... boxProduct]
              arr.push(product)
              setBoxProduct(arr)
            }}/>
          )
        })}

      </div>

      {boxProduct.length>0 && <div>


         <h3>Aldiginiz Mehsullar</h3>
         
         
         {
           boxProduct.map((boxProduct,index)=>{
             return(
               <div key={index}>
                 {JSON.stringify(boxProduct)}
               </div>
             )
           })
         }
         
         
         </div> }

      {boxProduct.length<1 && <div> <h3>Sebetde mehsul yoxdur</h3></div> }


     

    </div >
  )
}

export default App;

