import React, { useEffect, useState, useLayoutEffect } from 'react'
import './App.css';


function App() {

  const [text, setText] = useState("Aidajhdccccccccccccccccccccccccccccccccccccczzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")

  useEffect(() => {
    setText("useEffect")
    console.log("useEffect")
  }, [])


  /* use effect islenende default olaraq verilen deyeri gosterir 
  daha sonra setText vasitesile deyisilen deyeri gosterir lakin 
  bu kecid suretli oldugu ucun hissolunmur, amma useLayoutEffect 
  istifade edende */



  /* useLayoutEffect useEffectden daha evvel render olunur 
  useEffectde evvelce dom yaradilir daha sonra useEffect isleyir 
  ele ona gore de birinci state daxilindeki default yazilan gorunur
   daha sonra useEffect ile deyisdirilen deyer gorunur amma
    useLayoutEffectde ise dom render olunmazdan evvel isledilir*/


  /* useLayoutEffect useEffectden evvel isleyir */
  useLayoutEffect(() => {
    setText("useLayoutEffect")
    console.log("useLayoutEffect")
  }, [])


  return (
    <div>
      {text}
    </div>
  )
}

export default App;

