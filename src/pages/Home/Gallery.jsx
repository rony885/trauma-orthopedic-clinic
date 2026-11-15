import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const galleryImages = [
  { id: 1, img: "/assets/images/gallery/1.jpg" },
  { id: 2, img: "/assets/images/gallery/2.jpg" },
  { id: 3, img: "/assets/images/gallery/3.jpg" },
  { id: 4, img: "/assets/images/gallery/4.jpg" },
  { id: 5, img: "/assets/images/gallery/5.jpg" },
  { id: 6, img: "/assets/images/gallery/6.jpg" },
];

const Gallery = () => {
  return (
    <Wrapper className="py-5">
      <div className="container">
        {/* Section Header */}
        <div className="row align-items-center mb-4">
          <div className="col-md-8">
            <h2 className="section-title mb-1">পেশাগত গ্যালারি</h2>

            <p className="section-subtitle mb-0">
              অপারেশন, প্রশিক্ষণ ও অর্থোপেডিক কার্যক্রম
            </p>
          </div>

          <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <Link to="/gallery" className="top-link">
              পূর্ণ গ্যালারি →
            </Link>
          </div>
        </div>

        {/* Gallery Images */}
        <div className="row">
          {galleryImages.slice(0, 4).map((gallery) => (
            <div key={gallery.id} className="col-6 col-md-3">
              <div className="gallery-card">
                <Link
                  to="/gallery"
                  className="gallery-img"
                  aria-label={`View full gallery, image ${gallery.id}`}
                >
                  <img src={gallery.img} alt={`Gallery ${gallery.id}`} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-title {
    color: #0b4f6c;
    font-size: 34px;
    font-weight: 700;
  }

  .section-subtitle {
    font-size: 18px;
  }

  .top-link {
    color: #0b4f6c;
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    transition: color 0.3s ease;
  }

  .top-link:hover {
    color: var(--color-primary);
  }

  .gallery-card {
    margin-bottom: 30px;
    text-align: center;
  }

  .gallery-img {
    display: block;
    cursor: pointer;
    overflow: hidden;
    border-radius: 12px;
  }

  .gallery-img img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
    border-radius: 12px;
  }

  .gallery-img:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 767.98px) {
    .section-title {
      font-size: 26px;
    }

    .section-subtitle {
      font-size: 15px;
    }

    .gallery-img img {
      height: 160px;
    }
  }
`;

export default Gallery;
