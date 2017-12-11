import React, { Component } from 'react';
import "../Styles/Workshops.css"
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid';
import NewsCard from "../Components/NewsCard"
import PageDivider from "../Components/PageDivider"
import Slider from 'react-slick'
import matlab from "../Images/matlab.jpg"
import git from '../Images/git.png'
import pov from '../Images/pov.jpg'
import sail from '../Images/sail.png'
import python from '../Images/python.png'
import neecduino from '../Images/neecduino2013.png'

class Workshops extends Component {
  render() {
    var coding = [
        {
            type: "coding",
            tittle: "Programação de Arduino",
            desc: "",
            text: "Se achas que está na altura de tirar o pó ao teu Arduino e se queres dar outra utilidade que não a de pisa papéis, este é o workshop ideal para ti! Vais poder desenvolver um projeto controlado pelo teu arduino e no final ainda ficas com os componentes e a breadboard que utilizas. Download do Software: https://www.arduino.cc/en/Main/Software",
            img: matlab,
            links: {
                facebook: "",
                eventbrite: ""
            }
        },
        {
            type: "coding",
            tittle: "SAIL",
            desc: "",
            text: "No primeiro ano do curso, chega aquela altura em que temos de mergulhar de cabeça no mundo da Programação e tornar-nos num verdadeiro hacker. Mas primeiro, convém aprender a instalar a principal ferramenta de trabalho, o Linux! Obviamente, o NEEC está aqui para ajudar nessa árdua tarefa!",
            img: sail,
            links: {
                facebook: "",
                eventbrite: ""
            }
        },
        {
            type: "coding",
            tittle: "GIT",
            desc: "Vem aprender el giterino mon amigo",
            text: "Estás farto de projetos desorganizados? Queres programar e poder ter todos os teus ficheiros seguros e organizados num só sítio online? Queres entrar no universo da programação open source? O Git é um sistema de controlo de versões, com o qual podes desenvolver e armazenar projetos para os quais qualquer pessoa pode contribuir, não havendo asneira ao mudar a mesma parte de código. Se gostavas de aprender tudo sobre esta ferramenta importantíssima para o teu futuro na área da programação, não percas o workshop de Git trazido pelo NEEC! Não percas esta oportunidade de começar a programar como gente grande!",
            img: git,
            links: {
                facebook: "",
                eventbrite: ""
            }
        },
        {
            type: "coding",
            tittle: "PYTHON",
            desc: "",
            text: "Ouves falar muitas vezes de Python e só te faz lembrar Monty Python? Estás a pensar em aprender uma nova linguagem de programação? Se gostavas de aprender o essencial sobre esta ferramenta importantíssima para o teu futuro na área da programação, não percas o workshop de Python trazido pelo NEEC! Neste vais aprender os básicos desta linguagem de programação e fazer um pequeno projeto introdutório.",
            img: python,
            links: {
                facebook: "",
                eventbrite: ""
            }
        },
        {
            type: "coding",
            tittle: "WebDev",
            desc: "Vem aprender Webdeverino mon amegerino",
            text: "Sempre quiseste construir o teu próprio site, mas tens tanta informação à tua disposição que nem sabes por onde começar? Queres ter a tua página pessoal na Internet mas não sabes como iniciar esse projeto? O Workshop de Web Development do NEEC é a tua oportunidade para dar a volta à situação! Vem aprender tudo o que precisas para criar a tua página pessoal abordando os temas HTML, CSS, JavaScript e jQuery.",
            img: matlab,
            links: {
                facebook: "",
                eventbrite: ""
            }
        },
        {
            type: "coding",
            tittle: "MatLab",
            desc: "Workshop de matlab que te faz fazer sexo com o rabo de um peixe",
            text: "Sempre quiseste construir o teu próprio site, mas tens tanta informação à tua disposição que nem sabes por onde começar? Queres ter a tua página pessoal na Internet mas não sabes como iniciar esse projeto? O Workshop de Web Development do NEEC é a tua oportunidade para dar a volta à situação! Vem aprender tudo o que precisas para criar a tua página pessoal abordando os temas HTML, CSS, JavaScript e jQuery.",
            img: matlab,
            links: {
                facebook: "",
                eventbrite: ""
            }
        },
        {
            type: "coding",
            tittle: "PSpice",
            desc: "",
            text: "Sempre quiseste construir o teu próprio site, mas tens tanta informação à tua disposição que nem sabes por onde começar? Queres ter a tua página pessoal na Internet mas não sabes como iniciar esse projeto? O Workshop de Web Development do NEEC é a tua oportunidade para dar a volta à situação! Vem aprender tudo o que precisas para criar a tua página pessoal abordando os temas HTML, CSS, JavaScript e jQuery.",
            img: matlab,
            links: {
                facebook: "",
                eventbrite: ""
            }
        },
    ]

    var soldadura = [
        {
            type: "soldadura",
            tittle: "TV-Bgone",
            desc: "",
            text: "Se achas que está na altura de tirar o pó ao teu Arduino e se queres dar outra utilidade que não a de pisa papéis, este é o workshop ideal para ti! Vais poder desenvolver um projeto controlado pelo teu arduino e no final ainda ficas com os componentes e a breadboard que utilizas. Download do Software: https://www.arduino.cc/en/Main/Software",
            img: matlab,
            links: {
                facebook: "",
                eventbrite: ""
            }
        },
        {
            type: "soldadura",
            tittle: "NEECDuino",
            desc: "",
            text: "No primeiro ano do curso, chega aquela altura em que temos de mergulhar de cabeça no mundo da Programação e tornar-nos num verdadeiro hacker. Mas primeiro, convém aprender a instalar a principal ferramenta de trabalho, o Linux! Obviamente, o NEEC está aqui para ajudar nessa árdua tarefa!",
            img: neecduino,
            links: {
                facebook: "",
                eventbrite: ""
            }
        },
        {
            type: "soldadura",
            tittle: "POV",
            desc: "",
            text: "Estás farto de projetos desorganizados? Queres programar e poder ter todos os teus ficheiros seguros e organizados num só sítio online? Queres entrar no universo da programação open source? O Git é um sistema de controlo de versões, com o qual podes desenvolver e armazenar projetos para os quais qualquer pessoa pode contribuir, não havendo asneira ao mudar a mesma parte de código. Se gostavas de aprender tudo sobre esta ferramenta importantíssima para o teu futuro na área da programação, não percas o workshop de Git trazido pelo NEEC! Não percas esta oportunidade de começar a programar como gente grande!",
            img: matlab,
            links: {
                facebook: "",
                eventbrite: ""
            }
        },
        {
            type: "soldadura",
            tittle: "Drawdio",
            desc: "",
            text: "Ouves falar muitas vezes de Python e só te faz lembrar Monty Python? Estás a pensar em aprender uma nova linguagem de programação? Se gostavas de aprender o essencial sobre esta ferramenta importantíssima para o teu futuro na área da programação, não percas o workshop de Python trazido pelo NEEC! Neste vais aprender os básicos desta linguagem de programação e fazer um pequeno projeto introdutório.",
            img: matlab,
            links: {
                facebook: "",
                eventbrite: ""
            }
        }
    ]

    var outros = [
        {
            type: "outros",
            tittle: "SoftSkills",
            desc: "",
            text: "Se achas que está na altura de tirar o pó ao teu Arduino e se queres dar outra utilidade que não a de pisa papéis, este é o workshop ideal para ti! Vais poder desenvolver um projeto controlado pelo teu arduino e no final ainda ficas com os componentes e a breadboard que utilizas. Download do Software: https://www.arduino.cc/en/Main/Software",
            img: matlab,
            links: {
                facebook: "",
                eventbrite: ""
            }
        },
        {
            type: "outros",
            tittle: "Be an Arduino Master",
            desc: "",
            text: "No primeiro ano do curso, chega aquela altura em que temos de mergulhar de cabeça no mundo da Programação e tornar-nos num verdadeiro hacker. Mas primeiro, convém aprender a instalar a principal ferramenta de trabalho, o Linux! Obviamente, o NEEC está aqui para ajudar nessa árdua tarefa!",
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
        <PageDivider text='Programação'/>
        <div className="CodingGrid">
        <Slider {...settings}>
            {coding.map(x => <div className='card'><NewsCard tittle={x.tittle} imgsrc={x.img} desc={x.desc}/></div>)}
        </Slider>
        <PageDivider text='Electrónica'/>
        <Slider {...settings}>
            {soldadura.map(x => <div className='card'><NewsCard tittle={x.tittle} imgsrc={x.img} desc={x.desc}/></div>)}
        </Slider>
        <PageDivider text='Outros'/>
        <Slider {...settings}>
            {outros.map(x => <div className='card'><NewsCard tittle={x.tittle} imgsrc={x.img} desc={x.desc}/></div>)}
        </Slider>
        </div>
      </div>
    );
  }
}

export default Workshops;