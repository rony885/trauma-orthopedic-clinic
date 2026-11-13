import React from "react";
import styled from "styled-components";

const collageImages = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=300&q=80",
    alt: "Axial Spine MRI",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=300&q=80",
    alt: "Lumbar Spine MRI",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80",
    alt: "Disc Herniation",
    label: "DISC HERNIATION",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=300&q=80",
    alt: "Spine Tissue",
  },
];

const BlogHeroSection = () => {
  return (
    <Wrapper className="py-5">
      {/* Section Heading */}
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
          <div className="heading text-center mb-40">
            <h3 className="heading__title">Health Information</h3>
          </div>
        </div>
      </div>

      <section className="spine-hero-banner">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {/* LEFT CONTENT */}
            <div className="col-md-7 col-lg-8">
              <span className="clinic-badge d-inline-block mb-2">
                DR DEEN SPINE CARE
              </span>

              <h1 className="hero-title mb-2">অর্থোপেডিক স্বাস্থ্য গাইড</h1>

              <p className="hero-subtitle mb-0">
                অর্থোপেডিক, ট্রমা, স্পাইন ও জয়েন্ট কেয়ারে আধুনিক রোগীকেন্দ্রিক
                সেবা।
              </p>
            </div>

            {/* RIGHT IMAGE COLLAGE */}
            <div className="col-md-5 col-lg-4 d-flex justify-content-md-end">
              <div className="collage-card">
                {collageImages.map((item) => (
                  <div
                    className={`collage-item item-${item.id} position-relative`}
                    key={item.id}
                  >
                    <img src={item.img} alt={item.alt} />

                    {item.label && (
                      <span className="herniation-label">{item.label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .spine-hero-banner {
    background: linear-gradient(90deg, #f3f2fc 0%, #f5f5fd 50%, #eef5fc 100%);
    border-top: 1px solid #e6eaf5;
    border-bottom: 1px solid #e6eaf5;
  }

  .clinic-badge {
    background: #e0f7f6;
    color: #0b8a8f;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 50px;
  }

  .hero-title {
    color: #064e63;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.25;
  }

  .hero-subtitle {
    color: #6b7280;
    font-size: 15px;
    font-weight: 400;
  }

  .collage-card {
    width: 245px;
    height: 155px;
    border-radius: 14px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 34% 40% 26%;
    gap: 2px;
  }

  .collage-item {
    overflow: hidden;
    background: #d1d5db;
  }

  .collage-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .item-1 {
    grid-column: 1;
    grid-row: 1;
  }

  .item-2 {
    grid-column: 1;
    grid-row: 2 / 4;
  }

  .item-3 {
    grid-column: 2;
    grid-row: 1 / 3;
  }

  .item-4 {
    grid-column: 2;
    grid-row: 3;
  }

  .herniation-label {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.3px;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.85);
    pointer-events: none;
  }

  @media (max-width: 767.98px) {
    .hero-title {
      font-size: 26px;
    }

    .collage-card {
      margin-top: 18px;
    }
  }
`;

export default BlogHeroSection;
