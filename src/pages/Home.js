import React, { useState, useEffect } from 'react'
import * as FaIcons from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import DataTable from '../components/Table/index'
import { indexOf } from 'lodash'
import DataImage from './Imagens'

export default function Home() {
  const [q, setQ] = useState('')
  const [analysis, setAnalysis] = useState([])

  useEffect(() => {
    fetch('http://localhost:3002/gerenciador-registro', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        console.log(data[3].img_list[0])
        setAnalysis(data)
      })
      .catch(err => console.log(err))
  }, [])

  function search(analysis) {
    const columns = analysis[0] && Object.keys(analysis[0])
    return analysis.filter(analysi =>
      columns.some(
        column =>
          analysi[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    )
  }

  const api_base = 'http://localhost:3002/'

  return (
    <div>
      {/* filtro de analises */}
      <h1 className="txtHm">Análises</h1>
      <div className="ContainerFilter" className="filter">
        <p>
          <strong className="txt">Busca</strong>
          <input
            type="text"
            placeholder="ID/STATUS"
            value={q}
            onChange={e => setQ(e.target.value)}
          />
        </p>
      </div>
      <div>
        <DataTable data={search(analysis)} />
      </div>
    </div>
  )
}
