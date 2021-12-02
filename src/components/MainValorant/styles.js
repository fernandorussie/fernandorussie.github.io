import styled from 'styled-components'
import { Link } from 'gatsby'

export const ContainerMain = styled.div`    
    width: 100%;
    height: 400vh;
    display: flex;
    justify-content: center;
    padding: 5rem 0;
    background-color: #191919;
`

export const ContainerMainSlide = styled.div` 
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: #6F7FFB;
`
export const ImageMain = styled.img`
    width: 100%;
`
export const ContentCenter = styled.div` 
    width: 90%;
    height: 80%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
`
export const BoxText = styled.div`  
    width: 100%;
    max-height: 10%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px;
    margin: 10px;
    color: #fff;
`
export const Title = styled.p` 
    font-size: 5vw;
    font-weight: 900;
    font-family: 'Roboto', sans-serif;
    cursor: default;
`
export const Paragraph = styled.p` 
    font-size: 1.6vw;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    cursor: default;
`
export const BoxImage1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 10px 0;
`
export const BoxImage2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    margin: 10px 0;
`
export const BoxImage3 = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 10px 0;
`
export const ImageExemple = styled.img` 
    width: 55vw;
    height: 60vh;
`