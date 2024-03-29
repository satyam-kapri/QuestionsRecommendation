import styled from 'styled-components'
import {Button} from './Button'

const Title = styled.h1`
  
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 2em;
`;

const GameOver = ({tscore,results}) => {

    const refreshPage = () => window.location.reload();

    return (
        <>
        <div>
            <Title>Results</Title>
            <Points>You did {tscore} out of 45!</Points>
            {  results
               &&
                results.map((e)=>{
                return <div>
                 {e.topic}:{e.score}
                </div>
                
                })
            }
            <Button onClick={refreshPage}>Retry</Button>
            </div>
        </>
    )
}

export default GameOver