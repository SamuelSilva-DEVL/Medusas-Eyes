import { render } from '@testing-library/react'
import React, { useState, useEffect } from 'react'

import { Container, Content } from '../styles'
import Images from '../Image/index'
import { indexOf } from 'lodash'

//index que eu quero testar 618b41efdebac628bec44bfb

function Pages({ data, index }) {
  const [analysis, setAnalysis] = useState([])
  const [endImg] = useState('./logo.jpeg')

  useEffect(() => {
    fetch('http://localhost:3002/gerenciador-registro', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        setAnalysis(data)
      })
      .catch(err => console.log(err))
  }, [])
  /* console.log(analysis) */

  return (
    <div>
      {/* {analysis.map(analysi => (
        <li key={analysi._id}>
          <p>{analysi.id_request}</p>
          <p>{analysi._id}</p>
          <p>{analysi.status}</p>
          <p>{analysi.img_list} </p>
          {analysi.img_list.forEach(element => {
            console.log(element)
            console.log(indexOf(element))
          })}
        </li>
      ))} */}
      <img src={endImg} />
    </div>
  )
}

export default Pages
