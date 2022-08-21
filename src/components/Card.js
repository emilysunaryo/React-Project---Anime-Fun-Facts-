import React from 'react'
import {useState, useEffect} from 'react'
import { Text, Box, Flex, Image } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowRightIcon} from '@chakra-ui/icons'
import { Stack, HStack, VStack } from '@chakra-ui/react'


function Card(props) {


if (!props.animeFunFacts) return (<h1>loading....</h1>)
const listOfFacts = props.animeFunFacts.map(e => {
    return (
        <div className = "anime-facts" style = {{color: "gray"}}> 
        {e.fact_id}. {e.fact}
        </div> 
    )
})


return (

<Flex justifyContent = {'center'}> 
    <Box 
         w='50%' color='white' h='auto' boxShadow='dark-lg' p='6' rounded='md' bg='white'>  
        <Flex justifyContent = {'center'}> 
            <Box color = "black"> 
                <Text fontSize = '50px' color = "gray"> 
                 {props.name.split('_').join(' ')}
                </Text> 
            </Box> 
        </Flex> 
            
            <Flex justifyContent = {'center'}> 
                <Image src = {props.image} w = '50%' h = "50%" boxShadow='dark-lg' mb = "50px" />
            </Flex> 
            <Box> {listOfFacts} </Box> 
    </Box>
</Flex> 
);
}

export default Card


