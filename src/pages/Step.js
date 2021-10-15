import { Button } from 'bootstrap';
import React from 'react';
import { Container, Content } from '../styles';
import Uploade from './Uploade'
import api from 'axios'

// import { Container } from './styles';

export default () => 
   <>
   <h1 className="txtUp">Upload</h1>
   <Container>    
        <Content>
            <div>
                <h2>
                    Deseja iniciar o upload de imagens?
                </h2>
            </div>
            <div className="botoesConfirm">
                <button onClick={() => {
                    window.location.href = "Uploade";
                    
                } }>Sim</button>
            
                <button onClick={() => {
                    window.location.href = "/";
                }}>Não
                </button>
            </div>
        </Content>
    </Container>
    </>