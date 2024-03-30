import styled from 'styled-components'
import {Button} from './Button'
import { CircularProgress,CircularProgressLabel } from '@chakra-ui/react';
import jsondata from '../../recomques.json'
import { useState } from 'react';
import { Card, CardHeader, CardBody, Stack,Box ,Heading,Link,StackDivider} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import axios from 'axios';
const Title = styled.h1`
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 2em;
`;

const GameOver = ({tscore,results,user}) => {
    const [resques,setresques]=useState();
    // const refreshPage = () => window.location.reload();
    
     async function recommendques(){
      const score=results.map((e)=>{
        return e.score;
      })
       await axios.post('http://localhost:5000/api/create',{
        data:{"name":user,"score":score}
       });
       const data=await axios.post("http://localhost:5000/api/recommend",{
        data:{"name":user}
       });
       console.log(data);
    //    setresques(jsondata.ARRAY.questions);
    setresques(data.data.questions);
    }
    return (
        <div style={{display:'flex',flexDirection:'column'}}>
        <div>
            <Title>Results</Title>
            <Points>You did {tscore} out of 45!</Points>
            <div className='results-scores'>
            {  results
               &&
                results.map((e)=>{
                return <div className='results-indi-score'>
                <CircularProgress value={e.score*20} color='orange.400' size={'150px'}>
                <CircularProgressLabel fontSize={'16px'}>{e.topic}<br></br>{e.score}</CircularProgressLabel>
                </CircularProgress>
                </div>
                
                })
            }
            </div>
            <Button onClick={recommendques}>Recommend</Button>
            </div>
            <br></br>
            <div>
                {  resques &&
                    <Card>
                    <CardHeader>
                        <Heading size='md'>Recommended Questions</Heading>
                    </CardHeader>
                    <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                { 
                    resques.map((q,index)=>{
                       return <Box key={index}>
                        <Link href={q.link} isExternal>
                       
                         {q.title}<ExternalLinkIcon mx='2px' />
                    
                       </Link>
                     </Box>
                    })
                }
                </Stack>
                </CardBody>
                </Card>
}
            </div>

        </div>
    )
}

export default GameOver