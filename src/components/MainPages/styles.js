import styled from 'styled-components'

export const ContainerMain = styled.div`    
    width: 100%;
    height: 425vh;
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
    border-radius: 2px;
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
    margin: 10px 0;
    color: #fff;
`
export const Title = styled.p` 
    font-size: 5vw;
    font-weight: 900;
    font-family: 'Roboto', sans-serif;
    text-shadow: 1px 1px 0px #000000;
    cursor: default;
`
export const Paragraph = styled.p` 
    font-size: 1.6vw;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    text-shadow: 0px 0px 1px #fff;
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
export const OverImage = styled.div` 
    position: relative;
    width: 55vw;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin:10px;
    border-radius: 4px;
    box-shadow:1px 10px 40px -20px rgba(0,0,0,0.7);
`
export const Skill = styled.div`  
    position: absolute;
    width: 55vw;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    transition:all 1.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    ${OverImage}:hover & {
        z-index: 3;
    } 
`
export const ImageExemple = styled.img` 
    width: 55vw;
    height: 60vh;
    border-radius: 4px;
    box-shadow:1px 10px 40px -20px rgba(0,0,0,0.7);
    z-index: 2;

    transition:all 1.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    ${OverImage}:hover & {
        transform: scale(1.25);
        opacity: 0.3;
    }  
`