// import reactImage from './assets/react-core-concepts.png';
import { Fragment } from 'react';
import Header from './components/Header/Header.jsx';
import './components/Header/Header.jsx';
// import Section from './components/Section.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import './components/Header/Header.css';
import { useState } from 'react';
import { EXAMPLES } from './data.js';
import Examples from './components/Examples.jsx';


function App() {
  
 
  return (
    // <div>
    // <>
    <Fragment>
      {/* <header>
        <img src={reactImage} alt="Stylized atom" />
        
        <Header />
      </header> */}
      <header>
        {/* <h>Hello World</h> */}
      </header>
      <Header />
      <main>
        <CoreConcepts />
        {/* <section id="examples">

        </section> */}
        <h2>Time to get started!</h2>
        <Examples />
      </main>
      </Fragment>
      // </>
    // </div>
  );
}

export default App;
