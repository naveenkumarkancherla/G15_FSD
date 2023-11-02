import React from "react";
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg01 from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from "../assets/images/experience.png";

import Subtitle from '../shared/Subtitle';

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";


const Home = () => {
    return (
        <>
            {/*============== hero section start ===============*/}
            <section>
                <Container>
                    <Row>
                        <Col lg={6}> {/* Use uppercase 'Col' and curly braces for the prop */}
                            <div className="hero__content">
                                <div className="hero__subtitle d-flex align-items-center ">
                                    <h5 className="services__subtitle">
                                    <Subtitle Subtitle={"Know Before You Go"} />
                                    </h5>
                                    <img src={worldImg} alt="" />
                                </div>
                                <h1>
                                    Traveling opens the door to creating{" "}
                                    <span className="highlight">memories</span>
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Ullam ipsum nobis asperiores soluta voluptas quas voluptates.
                                    Molestiae tempora dignissimos, animi praesentium molestias
                                    perferendis porro expedita delectus. Soluta natus porro.
                                </p>
                            </div>
                        </Col>
                        <Col lg={2}> {/* Use uppercase 'Col' and curly braces for the prop */}
                            <div className="hero__img-box">
                                <img src={heroImg01} alt="" /> {/* Corrected the variable name to 'heroImg01' */}
                            </div>
                        </Col>
                        <Col lg={2}> {/* Use uppercase 'Col' and curly braces for the prop */}
                            <div className="hero__img-box mt-4">
                                <video src={heroVideo} alt=" " controls /> {/* Added 'controls' for video playback */}
                            </div>
                        </Col>
                        <Col lg={2}> {/* Use uppercase 'Col' and curly braces for the prop */}
                            <div className="hero__img-box mt-5">
                                <img src={heroImg02} alt="" />
                            </div>
                        </Col>
                    </Row>
                    <SearchBar />
                </Container>
            </section>
            {/*============== hero section end ===============*/}
            <section>
                <Container>
                    <Row>
                        <Col lg={3}> {/* Use uppercase 'Col' and curly braces for the prop */}
                            <div>
                            <Subtitle Subtitle={" what we Serve"} />                            
                                <h2 className="services__title">We offer our best services</h2>
                            </div>
                        </Col>
                        <ServiceList />
                    </Row>
                </Container>
            </section>
            {/*=========== featured tour section start =============*/}
            <section>
                <Container>
                    <Row>
                        <Col lg={12} className="mb-5"> {/* Use curly braces for the prop */}
                        <Subtitle Subtitle={"Explor"} />                          
                          <h2 className="featured__tour-title">Our Featured Tours</h2>
                        </Col>
                        <FeaturedTourList />
                    </Row>
                </Container>
            </section>
            {/*=========== featured tour section end =============*/}

            {/*=========== experience section start ==============*/}
            <section>
                <Container>
                <Row>
                    <Col lg='6'>
                        <div className="experience__content">
                            <Subtitle Subtitle={"Experience"} />

                            <h2>
                                wish our all experience <br /> we will serve you
                            </h2>
                            <p>
                                lorem ipsum dolor sit amet,consectetur adipisicing elit.
                            
                            <br />
                            Quas aliquam, hic tempora inventore suscipit unde.
                            </p>
                        </div>
                        <div className="conter__wrapper d-flex align-item-center gap-5">
                        <div className="counter__box">
                            <span>12k+</span>
                            <h6>Successful Trip</h6>
                            </div>  
                            <div className="counter__box">
                            <span>2k</span>
                            <h6>Regular clients</h6>
                            </div> 
                            <div className="counter__box">
                            <span>15</span>
                            <h6>Years experience</h6>
                            </div> 
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="experience__img">
                            <img src={experienceImg} alt="" />
                        </div>
                    </Col>
                </Row>
                </Container>
            </section>
         {/*=========== experience section start ==============*/}

         {/*========== gallery section start ============*/}
         <section>
    <Row>
        <Col lg="12">
            
        <Subtitle Subtitle={"Gallery"} />
            <h2 className="gallery__title">
                Visit our customers tour gallery
            </h2>
        </Col>
        <Col lg='12'>
            <MasonryImagesGallery/>
        </Col>
    </Row>
</section>

         {/*========== gallery section start ============*/}

         {/*========== testimonial section start ============*/}
         <section>
            <Container>
             <Row>
                <Col lg='12'>
                    <Subtitle Subtitle={'fans Love'} />
                    <h2 className="testimonial__title">
                        What our fans say about us
                    </h2>
                </Col>
                <Col lg='12'>
                    <Testimonials />
                </Col>
             </Row>
            </Container>
         </section>
         {/*========== testimonial section start ============*/}
<Newsletter/>
        </>

    );
};

export default Home;
