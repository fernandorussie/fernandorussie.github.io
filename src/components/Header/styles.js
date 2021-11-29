import styled from 'styled-components'
import { Link } from 'gatsby'


export const Body = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6420ff;
`
export const Container = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height:80vh;
`
export const BoxLogo = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0px;
`
export const Avatar = styled.img` 
    width:27vw;
`
export const BoxText = styled.div` 
    color: white;
`
export const Title = styled.h1` 
    font-size: 5vw;
`
export const SubTitle = styled.h3`
    width:80%;
    font-size:1.5vw;
`
export const NavMenu = styled.div` 
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const Btn = styled(Link)`  
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