import React, { useState } from 'react'
import axios from 'axios'
import { multipleFilesUpload } from '../service/configTest'

function Teste() {
  const [multipleFiles, setMultipleFiles] = useState('')

  const MultipleFileChange = e => {
    setMultipleFiles(e.target.files)
  }

  //conxão com back-end
  const apiBase = 'http://localhost:3002'
  //conexão através do axios
  const multiFiles = async data => {
    try {
      await axios.post(apiBase + '/gerenciador-registro/upload', data)
    } catch (error) {
      console.log(error)
    }
  }

  const UploadMultipleFiles = async () => {
    const formData = new FormData()
    console.log(multipleFiles)

    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append('file', multipleFiles[i])
    }
    await multiFiles(formData)
  }

  /* const removeSelectedImage = () => {
    setMultipleFiles()
  } */

  return (
    <div className="content">
      <div className="row mt-3">
        <div className="col-6">
          <div className="form-group">
            <label>Multiple files</label>
            <input
              type="file"
              name="image"
              id="upload"
              accept="image/*"
              onChange={e => MultipleFileChange(e)}
              className="form-control"
              multiple
            />

            {/* {multipleFiles && (
              <div /* style={styles.preview} >
                <img
                  src={URL.createObjectURL(multipleFiles)}
                  /* style={styles.image} 
                  alt="Thumb"
                />
                <button
                  onClick={removeSelectedImage} /* style={styles.delete} 
                >
                  Remove This Image
                </button>
              </div>
            )} */}
          </div>
          <div className="row">
            <div className="col-10">
              <button
                type="button"
                onClick={() => UploadMultipleFiles()}
                className="btn btn-success"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teste
