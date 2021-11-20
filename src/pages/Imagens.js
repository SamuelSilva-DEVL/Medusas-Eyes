import React from 'react'

// import { Container } from './styles';

function Pages({ data }) {
  const api_base = 'http://localhost:3002/gerenciador-registro'
  return (
    <div>
      <img src={`${api_base}/${data}`} />
    </div>
  )
}

export default Pages
