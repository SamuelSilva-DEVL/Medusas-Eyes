import React from 'react';
import { Container, Content } from '../styles';

import {BsCheck, BsX} from "react-icons/bs";

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
                } }><BsCheck/></button>
            
                <button onClick={() => {
                    window.location.href = "/";
                }}><BsX /></button>
            </div>
        </Content>
    </Container>
    </>