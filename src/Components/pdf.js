import React, { useState , useEffect} from 'react';
import axios from 'axios';
var res;
function Pdfs({val}) {
  const greeting = 'Hello pdfs Component!';

  async function sendGetRequest() {
     res = await axios.get('http://localhost:5000/name')
    console.log(res) 
  }
//  output for pdf which is not complete
  return (
      <div>
           <button onClick={sendGetRequest}>
      Click me!
      {res?.data.map((element,i) => (
          <div key={i} >
          <h4 key={i}>{element.num.name}</h4>
          <h4 key={i}>{element.num.value}</h4>
          </div>
          
      ))}
    </button>
  <h1>{greeting}</h1>
  <h2>{val}</h2>
  </div>
  )
}
 
export default Pdfs;
