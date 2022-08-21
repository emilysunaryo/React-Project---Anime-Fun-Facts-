import React, {useState, useEffect} from 'react';
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import { Select } from '@chakra-ui/react'
import { Box, Flex, Image } from '@chakra-ui/react'


function App() {
  
const [occupyList, setOccupyList] = useState()
const [animeIndex, setAnimeIndex] = useState('')
const [loading, setLoading] = useState(true)
const [funFacts, setFunFacts] = useState()


useEffect(() => {
    fetch('https://anime-facts-rest-api.herokuapp.com/api/v1')
    .then(res => res.json())
    .then(data => {
      setOccupyList(data.data) 
      setLoading(false)
      }
    )     
},[])

function handleChange(event) {
  setAnimeIndex(event.target.value)
  const endpoint = 'https://anime-facts-rest-api.herokuapp.com/api/v1/'
  const animeName = occupyList[event.target.value].anime_name
  console.log(animeNames)
  fetch(endpoint + animeName)
      .then(res => res.json())
      .then(data => setFunFacts(data.data)
    )
}


const animeNames = occupyList?.map(e => {
return (
    <option key ={e.anime_id} value = {(e.anime_id)-1} >{e.anime_name.split('_').join(' ')}</option>
    )
})

  return (
    <div className="App">
        <Navbar />
        
          <Flex alignItems={'center'} justifyContent={'center'}> 
            <Select 
                value = {animeIndex}
                onChange = {handleChange}
                name = "animeIndex"
                id = "animeIndex"
                placeholder='Choose Anime' backgroundColor = '#A7BEAE' width = "500px"color ="white" boxShadow='2xl' pb = "20px" > 
              {animeNames}
          </Select>
        </Flex>

        {occupyList && <Card image={occupyList[animeIndex]?.anime_img}
         animeFunFacts = {funFacts}
         occupyList = {occupyList}
         name = {occupyList[animeIndex]?.anime_name}/>
         }
    </div>
  );
}

export default App;
