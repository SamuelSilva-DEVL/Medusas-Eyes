import React from 'react'
import * as FaIcons from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';
    
   export default () =>
    <>  
      <h1 className="txtHm">Análises</h1>
      
      <form className="filter">
          <p>
              <strong className="txt">Id</strong>
          <input type="text"/>
          </p>
          <p>
             <strong className="txt">Status</strong>
          <input type="text"/>
          </p>
          <p>
             <strong className="txt">Data-Inicio</strong>
          <input type="text"/>
          </p>
          <p>
             <strong className="txt">Data-Fim</strong>
          <input type="text"/>
          </p>
          
          <button type="submit" onClick = {() => {

          }}>Filter</button>
      
      </form>
      <div className='home'>
            <table className="table table-bordered">
                <thead className="headColl">
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Detalhes</th>
                    </tr>
                </thead>
            
                <tbody>
                    <tr className="headColl">
                        <td>14654896578</td>
                        <td>teste</td>
                        <td>
                            <button onClick={() => {
                                 window.location.href = "Details";
                             } }><FaIcons.FaPlus/></button>
                        </td>
                    </tr>
                </tbody>
            </table>
       </div> 
    </>

