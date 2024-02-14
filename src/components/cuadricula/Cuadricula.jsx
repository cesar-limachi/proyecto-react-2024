import { useEffect, useState } from "react"
import axios from "axios"
import "./Cuadricula.css"
import Cripto from "../cripto/Cripto"

function Cuadricula() {

  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState()

  useEffect( () => {
    axios.get(`${API_URL}assets`)
    .then((data) => {
      setCriptos(data.data.data)
    })
    .catch((e) => {
      console.log('Uups tienes un error', e)
    })
  }, [])

  if (!criptos) return <span>Cargando...</span>
  
  return (
    <div className="app-container">
      <h1 className="text-center">Lista de Criptomonedas</h1>
      <div className="cripto-container">
        { 
          criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
            <Cripto 
              key={id} 
              name={name} 
              priceUSD={priceUsd} 
              symbol={symbol} 
              changePercent24hr={changePercent24Hr}
              id={id}

            />
        )) 
        }
      </div>
    </div>
  )
}

export default Cuadricula
