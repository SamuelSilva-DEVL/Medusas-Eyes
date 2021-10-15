import React, { Component } from 'react'
import { uniqueId } from 'lodash'
import filesize from 'filesize'

import api from '../service/axios'

import GlobalStyle from '../styles/global'
import { Container, Content } from '../styles'
import Upload from "../components/upload"
import FileList from "../components/FileList"

class Uploade extends Component{
  //armazenar informações dos arquivos upload
  state = {
    uploadedFiles: []
  };


  async componentDidMount() {
    
    const response = await api.post("gerenciador-img/upload");

    this.setState({
      uploadedFiles: response.data.map(file => ({
        id: file._id,
        name: file.name,
        readableSize: filesize(file.size),
        preview: file.url,
        uploaded: true,
        url: file.url
      }))
    });
  }

  handleUpload = files => {
    const uploadedFiles = files.map( file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      upload: false,
      error: false,
      url: null, 
    }))

    this.setState({
      /* assim nunca ira sobrepor a outra imagem */
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    })
    
    /* tratamento de um por vez */
    uploadedFiles.forEach(this.processUpload);
  };

  updateFile = (id, data) => {
    this.setState({
      /* percorrer todos os arquivos e retornar em uploadedFile */
      uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
        return id === uploadedFile.id
          ? { ...uploadedFile, ...data }
          : uploadedFile;
      })
    });
  };

  processUpload = uploadedFile => {
    /* submite do form html em javaScript */
    const data = new FormData();
    
    /*file é o campo do banco de dados */
    data.append('file', uploadedFile.file, uploadedFile.name); //file

    /* envia para url posts */
    api
      .post('/gerenciador-img/upload', data, { //post
        /* retorna o progresso da requisição; e=evento */
        onUploadProgress: e => {
          /* pegando os que foram finalizados vezes 100 e dividido pelo tamanho total para transformar em % */
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));
          
          this.updateFile(uploadedFile.id, {
            progress,
          });
        }
      })
      /* executado asssim que o upload finalizar */
      .then(response => {
        /* atualizaçoes */
        this.updateFile(uploadedFile.id, {
          uploaded: true,
          /* de acordo com o BD */
          id: response.data._id,
          url: response.data.url
        });
      })
      .catch(() => {
        this.updateFile(uploadedFile.id, {
          error: true
        });
      });
  };

  handleDelete = async id => {
    /* rota do banco */
    await api.delete(`/gerenciador-img/upload/ ${id}`);

    /* tirando os arquivos */
    this.setState({
      uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id)
    });
  };

  componentWillUnmount() {
    /* quando o componente deixar de existir */
    /* deleta todos os objectURL para n sobrar nenhum cache de imagens */
    this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
  }

  render () {
    const { uploadedFiles } = this.state;

    return(
    <div className='products'>
      <Container>
        <Content>
          <Upload onUpload={this.handleUpload} />
          { !!uploadedFiles.length && (
            <FileList files={uploadedFiles} onDelete={this.handleDelete}/>
          ) }
        </Content>
        <GlobalStyle/>
      </Container>
    </div>
    );
  }

}
export default Uploade;