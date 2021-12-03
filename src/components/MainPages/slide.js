/*import React from "react";
import Slider from "react-slick";
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from "react-helmet";
import * as S from "./styles";


export function Slide() {
    
    const data = useStaticQuery(graphql`
        query {
            blogdata {
                recipes {
                    exemplephoto1 {
                      url
                    }
                    exemplephoto2 {
                      url
                    }
                    exemplephoto3 {
                      url
                    }
                    exemplephoto4 {
                      url
                    }
                  }
            }
        }
    `)

    const { exemplephoto1,exemplephoto2,exemplephoto3,exemplephoto4 } = data.blogdata.recipes[0]

    const settings = {
      dots: true,
      lazyLoad: false,
      draggable:true,
      autoplay:true,
      infinite: true,
      useCSS:true,
      useTransform:true,
      adaptiveHeight:true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 4,
    };
   
    return (
        <S.ContainerSlide>
          <Helmet>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
           </Helmet>
            <h2> Single Item</h2>
            <Slider {...settings}>
              <S.Slide>
                <S.ImageSlide src={exemplephoto1.url} alt="" />
              </S.Slide>
              <S.Slide>
                  <S.ImageSlide src={exemplephoto2.url} alt="" />
              </S.Slide>
              <S.Slide>
                  <S.ImageSlide src={exemplephoto3.url} alt="" />
              </S.Slide>
              <S.Slide>
                  <S.ImageSlide src={exemplephoto4.url} alt="" />
              </S.Slide>
            </Slider>
        </S.ContainerSlide>
    )
}*/