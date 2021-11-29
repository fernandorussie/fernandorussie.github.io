import styled from 'styled-components'
import { Link } from 'gatsby'

export const ContainerFooter =styled.div` 
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #6420ff;
    position: relative;
`
export const AvatarFixed = styled.div` 
    position: fixed;
    bottom: 50px;
    left: 15px;

    animation: bounce-in-fwd 1.4s 5s both;    
    @keyframes bounce-in-fwd {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: scale(0.84);
            transform: scale(0.84);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  89% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: scale(0.95);
            transform: scale(0.95);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}

`
export const IntroFooter =styled.div` 
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const BoxLogo =styled.a` 
    cursor: pointer;
    text-decoration: none;
`
export const Logo =styled.img` 
    width: 6vw;
`
export const NavFooter =styled.div` 
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`
export const BoxBtn = styled.div` 
    width: 32%;
    min-width: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    font-weight: 600;
`
export const StyledLink = styled(Link)` 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:1.5vw;
    font-weight: 900;
    text-transform: uppercase;
    color: white;
    margin-bottom: 5px;
    cursor: pointer;
    text-decoration: none;
`
export const ContentLink = styled.p` 
    font-size: 1.6vw;
    font-weight: 400;
`
export const BtnNav = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:1.5vw;
    font-weight: 900;
    text-transform: uppercase;
    color: white;
    margin-bottom: 5px;
    cursor: pointer;
`
export const BoxCopy =styled.div` 
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:1vw;
    color: white;
`