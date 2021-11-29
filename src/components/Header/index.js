import React from 'react'
import * as S from './styles'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

export function Header() {

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

    const { backgroundheader, btnabout, btndiscord, btngithub, btnhelp, btnhome, btninstagram, btntwitter, paragraphheader, titleheader } = data.blogdata.headers[0]

    return (
        <S.Body>
          <S.Container id="home">
            <S.NavMenu>
                <S.Btn to="/#project">{btnhome}</S.Btn>
                <S.Btn to="/#">{btnabout}</S.Btn>
                <S.Btn to="/#contact">{btnhelp}</S.Btn>
            </S.NavMenu>
            <S.BoxLogo>
              <S.Avatar src={backgroundheader.url} alt=""/>
              <S.BoxText>
                <S.Title>{titleheader}</S.Title>
                <S.SubTitle>{paragraphheader}</S.SubTitle>
              </S.BoxText>
            </S.BoxLogo>
            <S.NavSocial>
                <S.BtnSocial src={btngithub.url} alt=""/>
                <S.BtnSocial src={btninstagram.url} alt=""/>
                <S.BtnSocial src={btntwitter.url} alt=""/>
            </S.NavSocial>
          </S.Container>
        </S.Body>
    )
}
