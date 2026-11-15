import React, { useState } from "react";
import styled from "styled-components";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const galleryImages = [
  {
    id: 1,
    img: "/assets/images/gallery/1.jpg",
    title: "অর্থোপেডিক সার্জিক্যাল প্রশিক্ষণ",
    subtitle: "Dr. Deen Spine Care",
  },
  {
    id: 2,
    img: "/assets/images/gallery/2.jpg",
    title: "Modern Consultation Room",
    subtitle: "Advanced Patient Consultation Facility",
  },
  {
    id: 3,
    img: "/assets/images/gallery/3.jpg",
    title: "Patient Care Room",
    subtitle: "Comfortable Environment for Patient Care",
  },
  {
    id: 4,
    img: "/assets/images/gallery/4.jpg",
    title: "Physiotherapy & Rehabilitation",
    subtitle: "Modern Therapy and Rehabilitation Services",
  },
  {
    id: 5,
    img: "/assets/images/gallery/5.jpg",
    title: "Medical Training Program",
    subtitle: "Professional Medical Learning and Development",
  },
  {
    id: 6,
    img: "/assets/images/gallery/6.jpg",
    title: "Hospital Reception Area",
    subtitle: "Welcoming and Patient-Friendly Environment",
  },
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openPopup = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  return (
    <Wrapper className="py-0">
      <section className="gallery-layout2 py-5">
        <div className="container">
          {/* Section Heading */}
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div className="heading text-center mb-40">
                <h3 className="heading__title">Our Gallery</h3>
              </div>
            </div>
          </div>

          {/* Gallery Cards */}
          <div className="row">
            {galleryImages.map(({ id, img, title, subtitle }, index) => (
              <div className="col-sm-6 col-md-4 col-lg-4" key={id}>
                <div className="gallery-card">
                  {/* Image */}
                  <div className="gallery-img" onClick={() => openPopup(index)}>
                    <span className="popup-gallery-item">
                      <i className="fas fa-eye"></i>
                    </span>

                    <img src={img} alt={title} />
                  </div>

                  {/* Card Content */}
                  <div className="gallery-content">
                    <h5 className="gallery-title">{title}</h5>

                    <p className="gallery-subtitle">{subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popup Slider */}
        {isOpen && (
          <div className="popup-overlay" onClick={() => setIsOpen(false)}>
            <button className="popup-close" onClick={() => setIsOpen(false)}>
              ×
            </button>

            <div
              className="popup-slider-wrapper"
              onClick={(e) => e.stopPropagation()}
            >
              <Swiper
                modules={[Navigation]}
                navigation
                initialSlide={activeIndex}
                slidesPerView={1}
                className="popup-swiper"
              >
                {galleryImages.map(({ id, img, title }) => (
                  <SwiperSlide key={id}>
                    <img src={img} alt={title} className="popup-img" />
                    <h5 className="popup-title">{title}</h5>
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
  /* Main Card */
  .gallery-card {
    margin-bottom: 30px;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    overflow: hidden;
    text-align: center;
    transition: all 0.3s ease;
    height: calc(100% - 30px);
  }

  .gallery-card:hover {
    transform: translateY(-5px);
    border-color: var(--color-primary);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  /* Image */
  .gallery-img {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    width: 100%;
    height: 300px;
  }

  .gallery-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .gallery-layout2 .gallery-img {
    position: relative;
    margin-bottom: 0px !important;
  }

  .gallery-img:hover img {
    transform: scale(1.06);
  }

  /* Image Hover Overlay */
  .popup-gallery-item {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 2;
  }

  .gallery-img:hover .popup-gallery-item {
    opacity: 1;
  }

  .popup-gallery-item i {
    /* color: #fff; */
    font-size: 30px;
  }

  /* Card Content */
  .gallery-content {
    padding: 20px 15px;
    min-height: 115px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .gallery-title {
    font-size: 17px;
    font-weight: 700;
    color: #222;
    margin-bottom: 8px;
    line-height: 1.5;
  }

  .gallery-subtitle {
    font-size: 14px;
    font-weight: 400;
    color: #777;
    line-height: 1.6;
    margin-bottom: 0;
  }

  /* Popup Overlay */
  .popup-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.92);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
  }

  .popup-close {
    position: absolute;
    top: 15px;
    right: 30px;
    font-size: 42px;
    color: #fff;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 10000;
  }

  .popup-slider-wrapper {
    width: 80%;
    max-width: 900px;
  }

  .popup-swiper {
    width: 100%;
  }

  .popup-img {
    width: 100%;
    max-height: 75vh;
    object-fit: contain;
    border-radius: 12px;
  }

  .popup-title {
    color: #fff;
    text-align: center;
    margin-top: 15px;
    font-size: 18px;
  }

  /* Responsive */
  @media (max-width: 767px) {
    .gallery-layout2 {
      padding-top: 30px;
    }

    .gallery-img {
      height: 200px;
    }

    .gallery-content {
      padding: 15px 10px;
    }

    .gallery-title {
      font-size: 15px;
    }

    .gallery-subtitle {
      font-size: 13px;
    }

    .popup-overlay {
      padding: 15px;
    }

    .popup-slider-wrapper {
      width: 100%;
    }

    .popup-close {
      top: 5px;
      right: 15px;
    }
  }
`;

export default Gallery;
