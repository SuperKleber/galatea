import React from 'react'
// Este componente es el Carousel de Boostrap (ver documentación de Boostrap), 
// lastimosamente este componente para agregar o quitar Slides se debe hacer directamente aquí, desde
// el código, se recomienda escalar este componente
export default function Carousel() {
  return (
    <div className="bd-example Carousel container">
        <div id="carouselExampleCaptions" className="carousel slide row" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img  src="../static/images/carousel2.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption p-3">
                        <h5>Galatea</h5>
                        <p>
                        Somos una empresa que ofrece soluciones tecnológicas en diversas áreas, desde seguridad industrial hasta sistemas de iluminación inteligente
                        </p>
                    </div>
                </div>
            <div className="carousel-item">
                <img  src="../static/images/carousel3.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption p-3">
                    <h5>Vendemos Ilumincación y seguridad</h5>
                    <p>Desde carros de bomberos hasta sistemas led inteligentes</p>
                </div>
            </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        <style jsx>{`
            .carousel-item img{
                width: 100%;
                height: 80vh;
                object-fit: cover;
            }
            .carousel-caption{
                background: rgba(0,0,0,0.4);
                width: 100%;
                left: 0;
                bottom: 0;

            }
            
        `}</style>
    </div>
  )
}
