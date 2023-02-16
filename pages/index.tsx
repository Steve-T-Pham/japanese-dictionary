import React, { useState } from 'react';
import '../components/definition';
import Definition from '../components/definition';
import { NextPage } from 'next';
import Head from 'next/head';

const Homepage: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  async function searchDictionary(searchQuery: string){
    console.log(`http://localhost:5000/search?q=${searchQuery}`);
    const response = await fetch(`http://localhost:5000/search?q=${searchQuery}`);
    const data = await response.json();
    setSearchResults(data.data);
    console.log(data.data);
  }
  
  return (
    <>
      <Head> 
        <title>JP Dictionary | Home</title>
        <meta name="keywords" content="search"></meta>
      </Head>

      <div className="App">
        {/* search bar to set searchQuery, making api request */}
        <div className="mx-auto rounded p-1 h-7 w-1/3 my-10">
         <input 
            type='text' 
            placeholder='Search Here...' 
            value={searchQuery} 
            className="w-4/5 focus:outline-0 hover:outline-0 focus:outline-0 text-center"
            onChange={(e) => setSearchQuery(e.target.value)} 
            />
          <button onClick={() => searchDictionary(searchQuery)} 
              className="bg-cyan-500 rounded-full text-white h-7 w-1/6 hover:bg-cyan-700 transition-all duration-200 ease-in-out">Search</button>
        </div>

        {/* definition query for the given word */}
        <div>
          {searchResults.map((definition, index) => (<Definition definition={definition} key={index}/>))}
        </div>
      </div>
    </>
  );
};

export default Homepage;