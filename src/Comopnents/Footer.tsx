import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-white text-center text-lg-left' style={{backgroundColor: "#0c1022"}}>
      <MDBContainer className='p-4'style={{backgroundColor: "#0c1022"}}>
        <MDBRow style={{backgroundColor: "#0c1022"}}>
          <MDBCol lg='4' md='12' className='mb-4 mb-md-0'style={{backgroundColor: "#0c1022"}}>
            <h5 className='text-uppercase'>Juhász Csenge</h5>
            <p>
             2023.04.21. <br/>
             Szoftverfejlesztés vizsgamunka<br/>
             Webes felület
            </p>
          </MDBCol>

          <MDBCol lg='4' md='6' className='mb-4 mb-md-0' style={{backgroundColor: "#0c1022"}}>
            <h5 className='text-uppercase'>Kontakt</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <p>
                  burger.2023@gmail.com
                </p>
                
              </li>
              <li>
                <p>
                +36 1 999 9999
                </p>
              </li>
              <li>
                <p>
                6900 Kaposvár bagoly utca 9
                </p>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='4' md='6' className='mb-4 mb-md-0' style={{backgroundColor: "#0c1022"}}>
            <h5 className='text-uppercase mb-0'>Rólunk többet</h5>

            <ul className='list-unstyled'>
              <li>
              <p>
                Karrier
              </p>
              </li>
              <li>
                <p>
                  Franchise
                </p>
              </li>
              <li>
               <p>
                Steak&Co Store
               </p>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}