import styled from 'styled-components'

export const ContainerMain = styled.div`    
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 5rem 0;
    background-color: #1A1A1A;
    @media(max-width: 768px){
        
    }
`

export const ContainerMainSlide = styled.div` 
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: #6420ff;
    border-radius: 2px;
    @media(max-width: 768px) {
        width: 100%;
        align-items: initial;
        justify-content: initial;
    }
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
    @media(max-width: 768px) {
        width: 100%;
        height: auto;
        align-items: center;
        justify-content: flex-start;
    }
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
    @media(max-width: 768px) {
        width: 90%;
    }
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
    @media(max-width: 768px) {
        justify-content: center;
    }
`
export const BoxImage2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    margin: 10px 0;
    @media(max-width: 768px) {
        justify-content: center;
    }
`
export const BoxImage3 = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 10px 0;
    @media(max-width: 768px) {
        justify-content: center;
    }
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
    
    @media(max-width: 768px) {
        width: 100%;
        height: 100%;
        margin: 0; 
    }
`
export const Skill = styled.div`  
    position: absolute;
    width: 55vw;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    transition: ease-in 0.9s;
    background: linear-gradient(90deg, rgba(255,255,255,0.19371498599439774) 0%, rgba(255,255,255,0.3029586834733894) 50%, rgba(255,255,255,0.19371498599439774) 100%);
    
    @media(max-width: 768px) {
        width: 100%;
        height: 100%;
        margin: 0; 
    }
`
export const ImageExemple = styled.img` 
    width: 55vw;
    height: 60vh;
    border-radius: 4px;
    box-shadow:1px 10px 40px -20px rgba(0,0,0,0.7);

    transition:all 1.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    ${OverImage}:hover & {
        transform: scale(1.25);
    }  

    @media(max-width: 768px) {
        width: 100%;
        height: unset;
        margin: 0; 
    }
`

// --- --- Style About --- --- //

export const ContainerAbout = styled.div` 
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #1A1A1A;
`
export const BoxAbout = styled.div` 
    width: 80%;
    height: 80%;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const TitleAbout = styled.div` 
    font-size: 5vw;
    color: white;
`
export const BoxContentAbout = styled.div` 
    height: 80%;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const BoxImageAbout = styled.div` 

`
export const ImageAbout = styled.img` 

`
export const BoxTextAbout = styled.ul` 
    width: 90%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
    border: 2px solid #6420ff;
`
export const ParagraphAbout = styled.li` 
    font-size: 1.5vw;
    font-weight: 500;
    margin-left: 10px;
    color: white;
`