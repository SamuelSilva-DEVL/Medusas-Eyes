import { indexOf } from 'lodash'
import React from 'react'
import { Container, Content } from '../styles'
import DataImage from './Img'
import { useHistory } from 'react-router-dom'

function Informações(
  /* { data }, */
  id,
  mc,
  mos,
  tc,
  gh,
  tempc,
  r,
  rr,
  fsc,
  pl,
  cha,
  fo
) {
  /*  const aux = indexOf(data._id) */
  const history = useHistory()
  return (
    <div className="details">
      <h1 className="txtHm">Analise: {/* {id} */}</h1>
      <div className="containerInfo">
        {/* <h1>{aux}</h1> */}
        <p>
          <strong>Moagem do Calcario: {/* {mc} */}</strong>
        </p>
        <p>
          <strong>Moagem de Silica: </strong> {/* {mos} */}
        </p>
        <p>
          <strong>Temperatura de Cliquerização: </strong> {/* {tc} */}
        </p>
        <p>
          <strong>Grau de Homogeineização: </strong> {/* {gh} */}
        </p>
        <p>
          <strong>Tempo de Cliquerização: </strong> {/* {tem} */}
        </p>
        <p>
          <strong>1° Resfriamento: </strong> {/* {r}< */}
        </p>
        <p>
          <strong>2° Resfriamento :</strong> {/* {rr} */}
        </p>
        <p>
          <strong>FSC Farinha Alimentada: </strong> {/* {fsc} */}
        </p>
        <p>
          <strong>Peso do Litro: </strong> {pl}
        </p>
        <p>
          <strong>Chama: </strong> {/* {cha} */}
        </p>
        <p>
          <strong>Forno:</strong> {/* {fo} */}
        </p>
      </div>

      <div className="botaoAnalise">
        <button
          onClick={() => {
            history.push('/Img')
          }}
        >
          Imagens Analisadas
        </button>
      </div>
    </div>
  )
}

export default Informações
