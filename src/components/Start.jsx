import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Button from './Button';
import { Input ,InputGroup,InputLeftAddon} from '@chakra-ui/react'
const Intro = styled.div`
  margin-top: 8em;
  text-align: center;
`;

const btnCSS = css`
    margin-top: 2em;
`;


const Start = ({setStart,setuser}) => {
    const [disable,setdisable]=useState(true);
    
    const startQuiz = () =>{
        setStart(true);
        
    }
   function change(e){
    setuser(e.target.value);
    if(e.target.value!==""){
        if(disable===true)
        setdisable(false);

    }
   }
    return (
        <Intro>
                <InputGroup>
                    <InputLeftAddon>
                    Username
                    </InputLeftAddon>
                    <Input placeholder='Type your username...' onChange={change}/>
                </InputGroup>
            <h1>Take the quiz.</h1>
            <h4>We Will Recommend DSA Questions For You.</h4>
            <Button onClick={startQuiz} disabled={disable} css={btnCSS}>Begin</Button>
        </Intro>
    )
}

export default Start