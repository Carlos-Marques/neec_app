import React, { Component } from 'react';
import "../Styles/Workshops.css"
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid';
import NewsCard from "../Components/NewsCard"
import PageDivider from "../Components/PageDivider"
import Slider from 'react-slick'
import matlab from "../Images/matlab.jpg"
import openday from '../Images/openday.png'

class Events extends Component {
  render() {
    var events = [
        {
            type: "coding",
            tittle: "NEEC Open Days Series",
            desc: "",
            text: "Se achas que está na altura de tirar o pó ao teu Arduino e se queres dar outra utilidade que não a de pisa papéis, este é o workshop ideal para ti! Vais poder desenvolver um projeto controlado pelo teu arduino e no final ainda ficas com os componentes e a breadboard que utilizas. Download do Software: https://www.arduino.cc/en/Main/Software",
            img: openday,
            links: {
                facebook: "",
                eventbrite: ""
            }
        },
        {
            type: "coding",
            tittle: "Visitas à Torre",
            desc: "",
            text: "No primeiro ano do curso, chega aquela altura em que temos de mergulhar de cabeça no mundo da Programação e tornar-nos num verdadeiro hacker. Mas primeiro, convém aprender a instalar a principal ferramenta de trabalho, o Linux! Obviamente, o NEEC está aqui para ajudar nessa árdua tarefa!",
            img: matlab,
            links: {
                facebook: "",
                eventbrite: ""
            }
        },
        {
            type: "coding",
            tittle: "Fast Meeting",
            desc: "",
            text: "Estás farto de projetos desorganizados? Queres programar e poder ter todos os teus ficheiros seguros e organizados num só sítio online? Queres entrar no universo da programação open source? O Git é um sistema de controlo de versões, com o qual podes desenvolver e armazenar projetos para os quais qualquer pessoa pode contribuir, não havendo asneira ao mudar a mesma parte de código. Se gostavas de aprender tudo sobre esta ferramenta importantíssima para o teu futuro na área da programação, não percas o workshop de Git trazido pelo NEEC! Não percas esta oportunidade de começar a programar como gente grande!",
            img: matlab,
            links: {
                facebook: "",
                eventbrite: ""
            }
        }
    ]

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
      <div>
        <div className="Workshoptop"></div>
        <PageDivider text='Events'/>
        <div className="CodingGrid">
        <Slider {...settings}>
            {events.map(x => <div className='card'><NewsCard tittle={x.tittle} imgsrc={x.img}/></div>)}
        </Slider>
        </div>
      </div>
    );
  }
}

export default Events;