import React from 'react'
import '../Styles/home.css'
import {Container,Row,Col} from 'reactstrap'
import world from "../assets/images/world.png"
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo  from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from './../shared/Subtitle';
const Home = () => {
  return (
    <div>
      {/* hero section start */}
     <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='hero__content'>
              <div className='hero__subtitle d-flex align-items-center'>
                <Subtitle subtitle={'Know before You Go'}/>
                <img src={world} alt="" />
              </div>
              <h1>Travelling opens the door to creating{" "} 
              <span className='highlight'>memories 
              </span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt dicta accusantium illum animi temporibus nulla fugiat. Quis hic facere est perferendis nisi necessitatibus repellendus placeat, laudantium fugit quia tenetur fuga!
              </p>
            </div>

          </Col>
        </Row>
      </Container>
     </section>
    </div>
  )
}

export default Home
