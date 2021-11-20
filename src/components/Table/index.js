import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router-dom'
// import { Container } from './styles';
/* import Details from '../../pages/Details' */

export default function DataTable({ data }) {
  /* aqui onde vai receber os dados na posição em que foi chamado a tabela */
  /* const columns = data[0] && Object.keys(data[0]) */
  const columns = data
  const history = useHistory()
  const [position, setPosition] = useState(0)
  return (
    <table
      /* cellPadding={50} cellSpacing={0}  */ className="table table-bordered"
    >
      <thead>
        {/* <tr>{data[0] && columns.map(heading => <th>{heading}</th>)}</tr> */}
        <tr>
          <td>
            <h2>ID</h2>
          </td>
          <td>
            <h2>STATUS</h2>
          </td>
          <td>
            <h2>ANALISES</h2>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {columns.map(column => (
              <li key={column._id}>
                {/* <td> */}
                <h2>{column._id}</h2>
                {/* </td> */}
              </li>
            ))}
          </td>
          <td>
            {columns.map(column => (
              <li key={column.status}>
                {/* <td> */}
                <h2>{column.status}</h2>
                {/* </td> */}
              </li>
            ))}
          </td>
          <td>
            {/* setPosition(indexOf(column)) */}
            {columns.map(column => (
              <li key={column}>
                {/* <td> */}
                <button
                  onClick={() => {
                    history.push('/Details')
                  }}
                >
                  <FaIcons.FaPlus />
                  {/* <Details data={column} /> */}
                </button>
                {/*  </td> */}
              </li>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  )
}
