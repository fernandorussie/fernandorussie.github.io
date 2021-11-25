import styled from 'styled-components'

export const Body = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Container = styled.div` 
    background-image: url(${props => props.back});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height:80vh;
`
export const BoxCenter = styled.div` 
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`
export const NavMenu = styled.div` 
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const NavBtn = styled.p`  
    font-size: 1.5vw;
    font-weight: 900;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
`
export const NavSocial = styled.div` 
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const BtnSocial = styled.img` 
    width: 30px;
    cursor: pointer;
`