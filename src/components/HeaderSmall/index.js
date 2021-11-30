import React from 'react'
import * as S from './styles'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

export function HeaderSmall() {

    const data = useStaticQuery(graphql`
        query {
            blogdata {
                headers {
                    backgroundheader {
                      url
                    }
                    btnabout
                    btndiscord {
                      url
                    }
                    btngithub {
                      url
                    }
                    btnhelp
                    btnhome
                    btninstagram {
                      url
                    }
                    btntwitter {
                      url
                    }
                    paragraphheader
                    titleheader
                  }
            }
        }

    `)

    const {backgroundheader, btndiscord, btngithub, btnhelp, btnhome, btninstagram, btntwitter, paragraphheader, titleheader } = data.blogdata.headers[0]

    return (
        <S.Body>
          <S.Container id="home">
            <S.NavMenu >
                <S.BtnLink to="/">Inicio</S.BtnLink>
                <S.Btn href="#contact">{btnhelp}</S.Btn>
            </S.NavMenu>

            <S.BoxLogo>
              <S.Avatar src={backgroundheader.url} alt=""/>
            </S.BoxLogo>
      
            <S.NavSocial>
              <Link to="https://github.com/fernandorussie" target="_blank">
                <S.BtnSocial src={btngithub.url} alt=""/>
              </Link>
              <Link to="https://www.instagram.com/fernandorussie/?hl=pt-br" target="_blank">
                <S.BtnSocial src={btninstagram.url} alt=""/>
              </Link>
              <Link to="https://twitter.com/fernandorussie" target="_blank">
                <S.BtnSocial src={btntwitter.url} alt=""/>
              </Link>
              <Link to="https://www.linkedin.com/in/fernando-cesar-romualdo-russie-felip-a52a0b20a/" target="_blank">
                <S.BtnSocial src={btndiscord.url} alt=""/>
              </Link>  
            </S.NavSocial>

          </S.Container>
        </S.Body>
    )
}