import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

export default function Carousel() {
  const data = useStaticQuery(graphql`
    query carousel {
      sanitySetting {
        carousel {
          title
          description
          image {
            asset {
              url
            }
          }
        }
      }
    }
  `);
  const carousel = data.sanitySetting.carousel;
  return (
    <div className="bd-example Carousel container">
      <div
        id="carouselExampleCaptions"
        className="carousel slide row"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner">
          {carousel.map((element, i) => {
            return (
              <CarouselItem
                key={i}
                title={element.title}
                description={element.description}
                imgUrl={element.image.asset.url}
                active={i === 0}
              />
            );
          })}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <style jsx="true">{`
        .carousel-item img {
          width: 100%;
          height: 80vh;
          object-fit: cover;
        }
        .carousel-caption {
          background: rgba(0, 0, 0, 0.4);
          width: 100%;
          left: 0;
          bottom: 0;
        }
      `}</style>
    </div>
  );
}
const CarouselItem = ({ title, description, imgUrl, active }) => {
  return (
    <div className={`carousel-item ${active ? "active" : ""}`}>
      <img src={imgUrl} className="d-block w-100" alt={title} />
      <div className="carousel-caption p-3">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};
