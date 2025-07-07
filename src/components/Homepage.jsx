import React, { useState } from 'react';
import './css/homepage.css';
import axios from 'axios'


const Homepage = () => {
  const [addValue, setAddValue] = useState('');
  const [data, setData] = useState([]);

  const handleAdd = () => {
    if (addValue.trim() !== '') {
      setData([...data, addValue.trim()]);
      setAddValue('');
    }

    axios.post('https://localhost:3001/add', {data:data})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  };

  return (
    <div id='body'>
      <div id="nav" className='app-division'>
        <h2>hello IJAZ</h2>
      </div>

      <div id="input" className='app-division'>
        <input
          type="text"
          id='text-input'
          placeholder='Enter your task'
          onChange={(e) => setAddValue(e.target.value)}
          value={addValue}
        />
        <button onClick={handleAdd} id='add-button'>ADD</button>
      </div>

      <div id="notes" className='app-division'>
        <div id="checklist">
          <h1 id='c'><u> your lists :   </u></h1>
          {data.length === 0 ?
            <div><h3>no records </h3></div>
            :

          data.map((item, index) => (
                 <div id="list"> 
            <React.Fragment key={index}>
              <input
                type="checkbox"
                id={`item-${index}`}
                name={`item-${index}`}
                value={item}
              />
              <label htmlFor={`item-${index}`}>{item}</label>
            </React.Fragment></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;


// import React, { useState } from 'react'
// import BasicExample from './Navbar'
// import './css/homepage.css'
// import Checkbox from './Samp';
// const Homepage = () => {
//     const [addValue, setAddValue] = useState("");
//     const [data, setData] = useState([]);

//     const handleadd = () => {
//         setData([...data, addValue]); 
//         setAddValue("");
//         console.log(addValue)
//         console.log(data)
//     }
//     return (
//         <div id='body'>
//             <div id="nav" className='app-division'></div>
//             <div id="input" className='app-division'>
//                 <input type="text" id='text-input' placeholder='enter your task'
//                     onChange={(e) => setAddValue(e.target.value)}
//                     value={addValue} />
//                 <button onClick={handleadd} id='add-button'>ADD</button>
//             </div>
//             <div id="notes" className='app-division'>
//                 <ul id='listsul '>
//                     {data.map((currItem, index) => (
//                         <li key={index} id='listsli' >
                            
//                              {currItem}</li>
//                     ))
//                     }
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Homepage
