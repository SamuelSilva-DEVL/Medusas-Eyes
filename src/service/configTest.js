import axios from 'axios'

const apiBase = 'http://localhost:3002'

export const multipleFilesUpload = async data => {
  try {
    await axios.post(apiBase + '/gerenciador-registro/uploads')
  } catch (error) {
    throw error
  }
}
