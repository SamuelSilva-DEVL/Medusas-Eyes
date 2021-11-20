import React from 'react'
import { useState } from 'react'
import { Container, Content } from '../styles'
import api from '../service/axios'

function Pages() {
  const [image, setImage] = useState('')
  const [endImg] = useState('./logo192.png')

  const uploadImage = async e => {
    e.preventDefault() /* não recaregar a pagina */
    const formData = new FormData()
    formData.append('file', image)

    const headers = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    await api
      .post('/gerenciador-registro/uploads', formData, headers)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response)
        } else {
          console.log('Erro: tente mais tarde')
        }
      })
  }

  return (
    <div>
      <h1 className="txtHm">Upload</h1>
      <Container>
        <Content>
          <form onSubmit={uploadImage}>
            <div>
              <label for="image">selecione o arquivo</label>
              <input
                type="file"
                name="image"
                id="image"
                onChange={e => setImage(e.target.files[0])}
              />
              <br />
              <br />

              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="image"
                  width="130"
                  height="130"
                />
              ) : (
                <img src={endImg} alt="image" width="130" height="130" />
              )}
              <br />
              <br />
              <button type="submit" onClick={() => {}}>
                ENVIAR
              </button>
            </div>
          </form>
        </Content>
      </Container>
    </div>
  )
}

export default Pages
