import React, { useState } from "react"
import './App.css'
import Header from "./Components/Stactic/Header"
import Home from "./Components/Pages/Home"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




const App = () =>{
   
   const [count, setCount] = useState(0)
   
   
    return(
<>

{count}




</>



    )
}
export default App




