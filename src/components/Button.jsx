import styled from 'styled-components'


export const Button = styled.button`
    border: 1px solid  #dd6620;
    border-radius: 50px;
    padding: 15px 30px;
    text-decoration: none;
    color: #dd6620;
    background-color:#fff4f1;
    transition: 0.3s;
    font-size: 1em;
    cursor: pointer;
    outline: none;
    margin-top:1rem;
    &:disabled{
        cursor:default;
        background-color:#fff4f1;
    }
    &:hover:not(&:disabled) {
        color: white;
        background-color:  #dd6620;
        border: 1px solid  #dd6620;
    }
    
`;

export default Button