import styled from 'styled-components'
import { Link } from 'gatsby'


export const Body = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6420ff;
`
export const Container = styled.div` 
    width: 100%;
    height:85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media(max-width: 768px) {
        height:50vh;
}
    @media(max-width: 375px){
        height:32vh;
        justify-content: space-around;
        }
`
export const BoxLogo = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0px;
    @media(max-width: 375px){
       margin: 5px 0;
        }
`
export const Avatar = styled.img` 
    width:27vw;

    animation: bounce-in-top 1.1s 1.4s both;

    @keyframes bounce-in-top {
  0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}

@media(max-width: 768px) {
        width: 17vw;
    }
    @media(max-width: 375px){
        width: 27vw;
        }
`
export const BoxText = styled.div` 
    color: white;
    @media(max-width: 768px) {
        display: none;
    }
`
export const Title = styled.h1` 
    font-size: 5vw;
    text-transform: uppercase;
    cursor: default;

    animation: text-focus-in 1s linear 1s both;

    @keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
`
export const SubTitle = styled.h3`
    width:60%;
    font-size:1.5vw;
    font-weight: 300;
    cursor: default;
    
    animation: text-focus-in 1s linear 1s both;

    @keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
`
export const NavMenu = styled.div` 
    width: 30%;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media(max-width: 375px){
        width: 50%;
        }
`
export const BtnLink = styled(Link)` 
    font-size: 1.5vw;
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    cursor: pointer;

    transition:all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    
    &:hover{
      transform: scale(1.02);
      color: white;
      margin-bottom: 7px;

      text-shadow: 0 0 10px #FFFFFF;
    }
    @media(max-width: 375px){
        font-size: 2.5vw;
        }
`
export const Btn = styled.a`  
    font-size: 1.5vw;
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    cursor: pointer;

    transition:all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover{
      transform: scale(1.02);
      color: white;
      margin-bottom: 7px;

      text-shadow: 0 0 10px #FFFFFF;
    }
    @media(max-width: 375px){
        font-size: 2.5vw;
        background-color:red;
        }
`
export const NavSocial = styled.div` 
    width: 30%;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const BtnSocial = styled.svg` 
    width: 30px;
    fill: #fff;
    cursor: pointer;

    transition:all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover{
        border-radius: 6px;
        margin-bottom: 7px;
        box-shadow: 0 0 10px #FFFFFF;
    }

    @media(max-width: 768px) {
        width: 4vw;
    }
`