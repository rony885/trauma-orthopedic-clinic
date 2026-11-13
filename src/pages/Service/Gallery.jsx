

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Gallery = () => {
  const galleryImages = [
    "/assets/images/gallery/1.jpg",
    "/assets/images/gallery/2.jpg",
    "/assets/images/gallery/3.jpg",
    "/assets/images/gallery/4.jpg",
    "/assets/images/gallery/5.jpg",
    "/assets/images/gallery/6.jpg",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Wrapper className="wrapper_gallery">
      <section className="gallery py-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Main Gallery Slider */}
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={4}
                spaceBetween={20}
                loop={true}
                speed={800}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
              >
                {galleryImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Link
                      to="#"
                      className="popup-gallery-item"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveIndex(index);
                        setIsOpen(true);
                      }}
                    >
                      <img src={img} alt="Imagee" />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Popup Image Slider */}
        {isOpen && (
          <div className="popup-overlay" onClick={() => setIsOpen(false)}>
            <button
              className="popup-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close gallery"
            >
              &times;
            </button>

            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <Swiper
                modules={[Navigation]}
                initialSlide={activeIndex}
                navigation
                slidesPerView={1}
                loop={true}
                className="popup-swiper"
              >
                {galleryImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img} alt="Imagee" className="popup-img" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #ebf6f8;

  .gallery {
    overflow: hidden;
  }

  /* Main Gallery Images */
  .popup-gallery-item {
    display: block;
    overflow: hidden;
    border-radius: 12px;
    cursor: pointer;
  }

  .popup-gallery-item img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 12px;
    transition: transform 0.4s ease;
  }

  .popup-gallery-item:hover img {
    transform: scale(1.06);
  }

  /* Popup Overlay */
  .popup-overlay {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.92);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
  }

  .popup-content {
    width: 85%;
    max-width: 1000px;
  }

  /* Popup Close Button */
  .popup-close {
    position: absolute;
    top: 15px;
    right: 30px;
    font-size: 45px;
    line-height: 1;
    color: #fff;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 100000;
  }

  .popup-close:hover {
    color: #00bcd4;
  }

  /* Popup Images */
  .popup-img {
    display: block;
    width: 100%;
    height: 75vh;
    object-fit: contain;
    border-radius: 10px;
  }

  /* Popup Navigation */
  .popup-swiper .swiper-button-next,
  .popup-swiper .swiper-button-prev {
    color: #fff;
  }

  @media (max-width: 767px) {
    .popup-gallery-item img {
      height: 220px;
    }

    .popup-content {
      width: 100%;
    }

    .popup-img {
      height: 65vh;
    }

    .popup-close {
      top: 15px;
      right: 15px;
    }
  }
`;

export default Gallery;
