import styled from "styled-components";

export const Button = styled.button`
    border: ${props => props.beako === 'kashira'
        ? 'none'
        : '2px solid white'
    };
    background: ${props => 
        props.beako === 'kashira' 
        ? 'linear-gradient(180deg, #FE7E5D, #FF6378)'
        : 'transparent'};
    font-size: 16px;
    color: white;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 25px;
    transition: ${props => props.beako == 'kashira' ? 'opacity 300ms;' : 'transform 300ms;'};
    &:hover {
        ${props => props.beako === 'kashira'
        ? 'opacity: 0.8;'
        : 'transform: translateY(-5px);'}
    };
    &:active {
        opacity: 0.5;
    }
`