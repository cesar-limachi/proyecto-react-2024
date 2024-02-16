import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import dayjs from "dayjs"
import "./CriptoPage.css"
import { parseFloatNumber } from "../../helpers/numbers"

const CriptoPage = () => {

    const API_URL = import.meta.env.VITE_API_URL_ASSET
    const params = useParams()

    const [criptosPage, setCriptosPage] = useState({})
    const [history, setHistory] = useState([])

    console.log("Esto es la hora de la libreria", dayjs("2020-10-09"));

  useEffect( () => {

    axios.get(`${API_URL}${params.id}/history?interval=d1`)
    .then((data) => {
      setHistory(data.data.data)
      console.log(history)
    })
    .catch((e) => {
      console.log('Uups tienes un error', e)
    })

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
        
        <div className="cripto-page-container">
          <div className="info">
            <div className="main-info">
              <span>Ranking: {criptosPage.rank}</span>
              <h1>{criptosPage.name}</h1>
              <span className="symbol">{criptosPage.symbol}</span>
            </div>
            <div className="details">
              <ul>
                <li className="detail">
                  <span className="label">Precio: </span>
                  <span>{parseFloatNumber(criptosPage.priceUsd, 3)}</span>
                </li>
                <li className="detail">
                  <span className="label">MaxSupply: </span>
                  <span>{parseFloatNumber(criptosPage.maxSupply, 3)}</span>
                </li>
                <li className="detail">
                  <span className="label">Market Cap (USD): </span>
                  <span>{parseFloatNumber(criptosPage.marketCapUsd, 3)}</span>
                </li>
                <li className="detail">
                  <span className="label">Volumen (USD - 24Hrs.): </span>
                  <span>{parseFloatNumber(criptosPage.volumenUsdHr, 3)}</span>
                </li>
                <li className="detail">
                  <span className="label">Variación (24Hrs.): </span>
                  <span>{parseFloatNumber(criptosPage.changePercent24Hr, 3)}</span>
                </li>
                <li className="detail">
                  <span className="label">Vwap 24 Hrs.: (24Hrs.): </span>
                  <span>{parseFloatNumber(criptosPage.vwap24Hr, 3)}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="history">
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {
                  history.map(({date, priceUsd, time}) => (
                    <tr key={time}>
                      <td className="label">{dayjs(date).format("DD/MM/YYYY")}</td>
                      <td className="price">{parseFloatNumber(priceUsd, 4)}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
    </>
  )
}

export default CriptoPage