import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CriptoPage = () => {

    const API_URL = import.meta.env.VITE_API_URL_ASSET
    const params = useParams()
    const [criptosPage, setCriptosPage] = useState({})

  useEffect( () => {
    axios.get(`${API_URL}${params.id}`)
    .then((data) => {
      setCriptosPage(data.data.data)
    })
    .catch((e) => {
      console.log('Uups tienes un error', e)
    })
  }, [])

  return (
    <>
        <div className="container-criptosPages">
            <ul>
              <li>Nombre: {criptosPage.name}</li>
              <li>Ranking: {criptosPage.rank}</li>
              <li>Simbolo: {criptosPage.symbol}</li>
              <li>Precio: {criptosPage.priceUsd}</li>
              <li>Variación: {criptosPage.changePercent24Hr}</li>
            </ul>
        </div>
    </>
  )
}

export default CriptoPage