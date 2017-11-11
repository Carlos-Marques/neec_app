import React, { Component } from 'react'
import { Carousel } from "react-bootstrap"
import banner2 from "../Images/banner.jpg"
import banner3 from "../Images/event.png"
import matlab from "../Images/matlab.jpg"
import "../Styles/ImgSlider.css"

export default class ImgSlider extends Component {
  render() {
    return (
      <div className="ImgSlider">
        <Carousel>
          <Carousel.Item>
            <img className="ImgSlide" alt="900x500" src={banner2} />
            <Carousel.Caption>
              <h1>BEM-VINDO AO TÉCNICO!</h1>
              <p className="subtext">O NEECIST dá-te as boas vindas ao IST! Estamos aqui para te ajudar nesta caminhada</p>
            </Carousel.Caption>
            </Carousel.Item>
          <Carousel.Item>
            <img className="ImgSlide" alt="900x500" src={banner3} />
            <Carousel.Caption>
              <h1>Second slide label</h1>
              <p className="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="ImgSlide" alt="900x500" src={matlab} />
            <Carousel.Caption>
              <h1>Third slide label</h1>
              <p className="subtext">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    )
  }
}
