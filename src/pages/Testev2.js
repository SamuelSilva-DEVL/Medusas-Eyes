import React from 'react';
import { useState } from 'react';
import { Container, Content } from '../styles'
import api from '../service/axios'

// import { Container } from './styles';

function teste() {

  const [image, setImage] = useState('');
  const [endImg] = useState('./logo192.png');

  const uploadImage = async e => {
    e.preventDefault(); /* não recaregar a pagina */
    const formData = new FormData();
    formData.append('file', image);

    const headers = {
      'headers': {
        'Content-Type': 'application/json'
      }
    }

    await api.post('/gerenciador-img/upload', formData, headers)
     .then((response) => {
        console.log(response);
     }).catch((err) => {
       if(err.response){
         console.log(err.response);
       }else{
         console.log("Erro: tente mais tarde");
       }
     })
  }

  return <div>
    <Container>
      <Content>
        
      </Content>
    </Container>
  </div>
}
export default teste;
