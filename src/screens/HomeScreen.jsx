import React from 'react'
import Banner from '../Banner';
import './Homescreen.css';
import Nav from '../Nav';
import requests from '../Request';
import Rows from '../Rows';

const Homescreen = () => {
  return (
    <div>
        <Nav/>
        <Banner/>
        <Rows 
         title='NETFLIX ORIGINAL'
         fetchurl={requests.fetchNetflixOriginals}
         islargerow
        />
         <Rows 
         title='Trending Now'
         fetchurl={requests.fetchTrending}
         islargerow
        /> <Rows 
        title='Top Reted'
        fetchurl={requests.fetchTopRated}
        islargerow
       /> 
       <Rows 
       title='Action'
       fetchurl={requests.fetchActionMovies}
       islargerow
      />
       <Rows 
         title='Comady'
         fetchurl={requests.fetchComedyMovies}
         islargerow
        />
         <Rows 
         title='Horror'
         fetchurl={requests.fetchHorrorMovies}
         islargerow
        />
         <Rows 
         title='Documentray'
         fetchurl={requests.fetchDocumentaries}
         islargerow
        />

    </div>
  )
}

export default Homescreen