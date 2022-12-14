import React, { useState } from 'react';
import '../components/definition';
import Definition from '../components/definition';
import { NextPage } from 'next';


const Homepage: NextPage = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  async function searchDictionary(searchQuery: string){
    const response = await fetch(`http://localhost:5000/search?q=${searchQuery}`);
    const data = await response.json();
    setSearchResults(data.data);
    console.log(data.data);
  }
  
  return (
    // Wrap all the pages in your app with a common parent element
    <React.Fragment>
          <div className="App">
            {/* search bar to set searchQuery, making api request */}
            <div className="mx-auto rounded p-1 h-7 w-1/3 my-10">
                <input 
                  type='text' 
                  placeholder='Enter Romaji or English...' 
                  value={searchQuery} 
                  className="w-4/5 focus:outline-0 hover:outline-0 focus:outline-0 text-center"
                  onChange={(e) => setSearchQuery(e.target.value)}>
                </input>
                <button onClick={() => searchDictionary(searchQuery)} 
                className="bg-cyan-500 rounded text-white h-7 w-1/5">Search</button>
            </div>

            {/* */}
            <div>
              {searchResults.map((definition) => 
                (<Definition definition={definition}/>))
              }
            </div>
    </div>
    </React.Fragment>
  );
};

export default Homepage;