import React from 'react'
import * as S from './styles'
import { graphql, useStaticQuery } from 'gatsby'

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
            <S.Container id="home" back={backgroundheader.url}>
                <S.BoxCenter>
                    <S.NavMenu>
                        <S.NavBtn>{btnhome}</S.NavBtn>
                        <S.NavBtn>{btnabout}</S.NavBtn>
                        <S.NavBtn>{btnhelp}</S.NavBtn>
                    </S.NavMenu>
                    <S.NavSocial>
                        <S.BtnSocial src={btngithub.url} alt=""/>
                        <S.BtnSocial src={btninstagram.url} alt=""/>
                        <S.BtnSocial src={btntwitter.url} alt=""/>
                    </S.NavSocial>
                </S.BoxCenter>
            </S.Container>
        </S.Body>
    )
}
