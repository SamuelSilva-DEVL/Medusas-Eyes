import React, {useState, useEffect} from 'react'
import {multipleFilesUpload} from '../service/configTest'
import { Container, Content } from '../styles'


const FileUploadScreen = () =>{
  const [multipleFiles, setMultipleFiles] = useState()  
  
  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files)
  }
  const UploadMultipleFiles = async () =>{
    const formData = new FormData()
    console.log(multipleFiles)
   
      formData.append('file', multipleFiles)
  
  await multipleFilesUpload(formData)
  
  }
  
  return (
        <Container>
        <Content>
          <div className="col-6">
            <div className="form-group">
                <label for="image">Multiple files</label>
                <input type="file" id="image" onChange={(e) => MultipleFileChange(e)} className="form-control" multiple/>

            </div>
            <br/> <br/>
            <div clasName="row">
              <div className="col-10">
                <button type="button" onClick={() => UploadMultipleFiles()}  className="btn btn-success">Upload</button>
              </div>
            </div>
          </div>
        </Content>
        </Container>
    )
}

export default FileUploadScreen