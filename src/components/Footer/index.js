import React from 'react'
import * as S from './styles'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

export function Footer() {

    const data = useStaticQuery(graphql`
        query {
            blogdata {
                footers {
                    btncontact
                    btnemail
                    btngithub
                    btnhome
                    copyright
                    logo {
                      url
                    }
                    contentcontact
                    contentemail
                    contentgithub
                  }
            }
        }

    `)

    const { contentcontact,contentemail,contentgithub,btncontact,btnemail,btngithub,btnhome,copyright,logo} = data.blogdata.footers[0]

    return (
        <S.ContainerFooter>
                <S.BoxLogo>
                    <S.Logo src={logo.url} alt="" />
                    <S.StyledLink to="/#home">{btnhome}</S.StyledLink>
                </S.BoxLogo>
            <S.IntroFooter>
                <S.NavFooter>
                    <S.BoxBtn>
                        <S.StyledLink to="https://github.com/fernandorussie" target="_blank">
                            {btngithub}
                        </S.StyledLink>
                        <S.ContentLink>{contentgithub}</S.ContentLink>
                    </S.BoxBtn>
                    <S.BoxBtn>
                        <S.StyledLink to="https://wa.me/5521987654321?text=Ol%C3%A1%2C+seja+bem+vindo.+Agende+um+hor%C3%A1rio%21" target="_blank">{btncontact}</S.StyledLink>
                        <S.ContentLink>{contentcontact}</S.ContentLink>
                    </S.BoxBtn>
                    <S.BoxBtn>
                        <S.StyledLink to="https://mail.google.com/mail/u/0/" target="_blank">{btnemail}</S.StyledLink>
                        <S.ContentLink>{contentemail}</S.ContentLink>
                    </S.BoxBtn>
                </S.NavFooter>
            </S.IntroFooter>
            <S.BoxCopy>
                <p>{copyright}</p>
            </S.BoxCopy>
        </S.ContainerFooter>
    )
}

