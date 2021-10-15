import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import {DropContainer, UploadMessage} from './styles'

export default class upload extends Component {
    renderDragMessage = (isDragActive, isDragReject) => {
        if(!isDragActive){
            return <UploadMessage> Arraste os arquivos...</UploadMessage>
        }
        if(isDragReject){
            return <UploadMessage type="error">Arquivo n suportado</UploadMessage>

        }
        return <UploadMessage type="success">Solte os arquivos</UploadMessage>
    };
    render() {
        const { onUpload } = this.props;
        return (
                <Dropzone accept="image/*" onDropAccepted={onUpload}>
                    { ({getRootProps, getInputProps, isDragActive, isDragReject}) => (
                        <DropContainer
                           {...getRootProps()}
                           isDragActive={isDragActive}
                           isDragReject={isDragReject}
                        >
                            <input {...getInputProps()}/>
                            {this.renderDragMessage(isDragActive, isDragReject)}
                        </DropContainer>
                    )}
                </Dropzone>
            
        )
    }
}
