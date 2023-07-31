import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sidebar } from '../Components/Sidebar/Sidebar'
import { Navbar } from '../Components/Navbar/Navbar'
import compro from '../assets/img/compro.png'
import mision from '../assets/img/mision.png'
import pq from '../assets/img/pq.png'
import abU from '../assets/img/abU.png'
// import mecanica from '../assets/img/mecanica.jpg'
import imagest from '../assets/img/imagest.jpg'
import { ModalAddCareer } from '../Components/Modal/ModalAdd/ModalAddCareer'
import { ModalAddUser } from '../Components/Modal/ModalAdd/ModalAddUser'
import '../Components/CSS/style.css'

export const InfoPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className="containerP">
                <div className="i" style={{ width: '20%' }}>
                    <Sidebar />
                </div>

                <div className="overflow-auto scroll-invisible-container" style={{ maxHeight: 'calc(110vh - 100px)', width: '80%' }}>
                    <section className="slider_section ">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="detail-box">
                                        <h1>
                                            KNL <br />
                                            <span>
                                                Practices
                                            </span>
                                        </h1>
                                        <p>
                                            El sendero al trabajo!
                                        </p>
                                        {/* <a href="">
                                    Contact Us
                                </a> */}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img src={imagest} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about_section">
                        <div className="container  ">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="img-box">
                                        <img src={abU} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="detail-box">
                                        <div className="heading_container">
                                            <h2>
                                                About <span>Us</span>
                                            </h2>
                                        </div>
                                        <p>
                                            Bienvenido a "KNL practices", tu portal especializado en conectar graduandos del Centro Educativo Técnico Laboral KINAL con las mejores oportunidades de prácticas laborales en empresas destacadas de diversas industrias en GUATEMALA.
                                        </p>
                                        {/* <a href="">
                                    Read More
                                </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="containerOptions">
                            <div className="columns">
                                <div className="content">
                                    <img style={{ height: '150px', marginBottom: '25px' }} src={mision}></img>
                                    <h4 style={{ fontSize: '2em' }}>
                                        Nuestra Misión
                                    </h4>
                                    <p>
                                        Nuestra misión es brindar un puente entre los talentosos estudiantes de KINAL y el mundo profesional. Nos dedicamos a facilitar el acceso a oportunidades de prácticas de calidad, que permitan a los graduandos obtener una valiosa experiencia laboral mientras aplican los conocimientos adquiridos en sus carreras.
                                    </p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="content">
                                    <img style={{ height: '180px', marginBottom: '25px' }} src={compro}></img>
                                    <h4 style={{ fontSize: '2em' }}>
                                        Nuestro Compromiso
                                    </h4>
                                    <p>
                                        Nuestro compromiso es con el crecimiento y desarrollo profesional de nuestros graduandos. Trabajamos incansablemente para ofrecer una plataforma sencilla y eficiente que conecte a nuestros estudiantes con empresas que buscan talento joven y entusiasta. Creemos en el potencial de nuestros graduandos y nos enorgullecemos de ser parte de su camino hacia un futuro exitoso.              </p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="content">
                                    <img style={{ height: '150px', marginBottom: '20px' }} src={pq}></img>
                                    <h2 style={{ fontSize: '2em' }} >¿Por qué elegirnos?</h2>
                                    <p>
                                        - Amplia Red de Empresas Colaboradoras
                                    </p>
                                    <p>
                                        - Oportunidades Personalizadas
                                    </p>
                                    <p>
                                        - Simplicidad y Comodidad
                                    </p>
                                    <p>
                                        - Crecimiento Profesional
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
