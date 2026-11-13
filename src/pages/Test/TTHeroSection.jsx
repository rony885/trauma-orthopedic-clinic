// import React from "react";
// import styled from "styled-components";
// import { Swiper, SwiperSlide } from "swiper/react";
// // import { Navigation, Autoplay, EffectFade } from "swiper/modules";
// import { Autoplay, EffectFade } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";

// // Slide data array
// const slides = [
//   {
//     image: "/assets/images/sliders/1.jpg",
//     title: "Compassionate Mental Health Care",
//     desc: "The health and recovery of our patients and their families will always be our priority, so we follow ethical and evidence-based treatment practices.",
//     features: [
//       { icon: "icon-heart", title: "Psychiatry" },
//       { icon: "icon-medicine", title: "Medication" },
//       { icon: "icon-heart2", title: "Therapy" },
//       { icon: "icon-blood-test", title: "Wellness" },
//     ],
//   },
//   {
//     image: "/assets/images/sliders/2.jpg",
//     title: "Complete Psychiatric Treatment",
//     desc: "The health and recovery of our patients and their families will always be our priority, so we ensure safe, confidential, and supportive care.",
//     features: [
//       { icon: "icon-heart", title: "Addiction" },
//       { icon: "icon-medicine", title: "Counseling" },
//       { icon: "icon-heart2", title: "Recovery" },
//       { icon: "icon-blood-test", title: "Support" },
//     ],
//   },
// ];

// const HeroSection = () => {
//   return (
//     <Wrapper style={{ paddingTop: "0", paddingBottom: "0" }}>
//       <section className="slider">
//         <Swiper
//           // modules={[Navigation, Autoplay, EffectFade]}
//           modules={[Autoplay, EffectFade]}
//           slidesPerView={1}
//           // navigation={true}
//           effect="fade"
//           speed={700}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           loop={true}
//           className="m-slides-0"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="slide-item align-v-h"
//                 style={{
//                   backgroundImage: `url(${slide.image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center center",
//                 }}
//               >
//                 <div className="container">
//                   <div className="row align-items-center">
//                     <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12">
//                       <div className="slide__content">
//                         <h2 className="slide__title fs-1">{slide.title}</h2>
//                         <p className="slide__desc">{slide.desc}</p>
//                         <ul className="features-list list-unstyled mb-0 d-flex flex-wrap">
//                           {slide.features.map((feature, i) => (
//                             <li className="feature-item" key={i}>
//                               <div className="feature__icon">
//                                 <i className={feature.icon}></i>
//                               </div>
//                               <h2 className="feature__title">
//                                 {feature.title}
//                               </h2>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   @media (max-width: 425px) {
//     .slide-item {
//       min-height: 400px !important;
//       background-position: center top;
//     }
//   }
// `;

// export default HeroSection;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    alt: "Medical Conference",
    title: "রোগীর সুস্থতায় সমন্বিত কেয়ার",
    subtitle: "পরামর্শ থেকে ফলোআপ—প্রতিটি ধাপে নিরাপদ ও মানবিক সেবা।",
    button: "আমাদের সেবা সমূহ",
    link: "#services",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80",
    alt: "Doctors Team",
    title: "অভিজ্ঞ চিকিৎসক টিম",
    subtitle: "দক্ষ ও অভিজ্ঞ চিকিৎসকদের মাধ্যমে নিশ্চিত করুন উন্নত চিকিৎসা।",
    button: "চিকিৎসক দেখুন",
    link: "#doctors",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    alt: "Hospital Care",
    title: "আধুনিক চিকিৎসা সেবা",
    subtitle: "আপনার সুস্থতায় আধুনিক প্রযুক্তি ও উন্নত চিকিৎসা ব্যবস্থা।",
    button: "বিস্তারিত জানুন",
    link: "#services",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
    alt: "Medical Doctor",
    title: "বিশেষজ্ঞ চিকিৎসকের পরামর্শ",
    subtitle: "সঠিক সময়ে সঠিক চিকিৎসা নিন বিশেষজ্ঞের কাছ থেকে।",
    button: "অ্যাপয়েন্টমেন্ট নিন",
    link: "#appointment",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    alt: "Hospital Building",
    title: "নিরাপদ হাসপাতাল পরিবেশ",
    subtitle: "রোগীদের জন্য পরিচ্ছন্ন, নিরাপদ ও রোগীবান্ধব পরিবেশ।",
    button: "আমাদের সম্পর্কে",
    link: "#about",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80",
    alt: "Healthcare Team",
    title: "আপনার পাশে সবসময়",
    subtitle: "আপনার পরিবারের সুস্বাস্থ্য নিশ্চিত করতে আমরা প্রতিশ্রুতিবদ্ধ।",
    button: "যোগাযোগ করুন",
    link: "#contacts",
  },
];

const HeroSection = () => {
  
  return (
    <Wrapper className="py-0">
      <section className="hero-section py-0">
        <div className="container my-3">
          <div className="row g-4">
            {/* LEFT COLUMN */}
            <div className="col-lg-7 d-flex flex-column gap-4">
              {/* MEDICAL SWIPER SLIDER */}
              <div className="medical-swiper-wrapper">
                <Swiper
                  className="medical-swiper"
                  modules={[Navigation, Pagination, Autoplay]}
                  slidesPerView={3}
                  spaceBetween={12}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    576: {
                      slidesPerView: 2,
                      spaceBetween: 12,
                    },
                    992: {
                      slidesPerView: 3,
                      spaceBetween: 12,
                    },
                  }}
                >
                  {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <div className="medical-slide-card">
                        <img
                          src={slide.image}
                          alt={slide.alt}
                          className="medical-slide-image"
                        />

                        <div className="medical-slide-overlay">
                          <div className="medical-slide-content">
                            <h3>{slide.title}</h3>
                            <p>{slide.subtitle}</p>

                            <a href={slide.link} className="medical-slide-btn">
                              {slide.button}
                              <i className="fa-solid fa-arrow-right ms-2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* DOCTOR BANNER */}
              <div className="doctor-banner-card rounded-5-custom p-3">
                <div className="row align-items-center g-4">
                  <div className="col-md-7">
                    <span className="doctor-badge badge bg-white rounded-pill shadow-sm mb-3 border border-light">
                      ডা. রিফাত অর্থোপেডিক
                    </span>

                    <h1 className="h2 fw-bold text-dark mb-3">
                      ব্যথামুক্ত চলাফেরার পথে বিশেষজ্ঞ অর্থোপেডিক কেয়ার
                    </h1>

                    <p className="text-secondary small mb-4">
                      হাঁটু, জয়েন্ট, স্পাইন, কাঁধ-ঘাড়, হাত-পা, স্পোর্টস ইনজুরি ও
                      আঘাতজনিত সমস্যায় আধুনিক ও রোগী-কেন্দ্রিক অর্থোপেডিক সেবা।
                    </p>

                    {/* STATISTICS */}
                    <div className="row g-2">
                      <div className="col-6">
                        <div className="stat-box">
                          <div className="stat-number">২০,০০০+</div>
                          <div className="stat-label">সন্তুষ্ট রোগী</div>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="stat-box">
                          <div className="stat-number">রোগী-কেন্দ্রিক</div>
                          <div className="stat-label">চিকিৎসাসেবা</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DOCTOR IMAGE */}
                  <div className="col-md-5">
                    <div className="doctor-img-wrapper">
                      <img
                        src="/assets/images/doctor kk/doctor-din-islam-mithu.jpg"
                        alt="Doctor Portrait"
                        className="doctor-img"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* FOOTER QUICK LINK */}
              <div className="quick-guide d-flex justify-content-between align-items-center rounded-4-custom p-3 px-4">
                <span>
                  <i className="fa-regular fa-file-lines me-2" />
                  রোগীর জন্য দ্রুত গাইড
                </span>

                <Link to="#" className="text-decoration-none fw-bold">
                  সব সেবা দেখুন &rarr;
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-lg-5">
              <div className="card-custom rounded-5-custom py-4 px-3 d-flex flex-column gap-3">
                {/* BOOKING HEADER */}
                <div className="d-flex align-items-center gap-3 pb-3 border-bottom">
                  <div className="calendar-icon rounded-3 d-flex align-items-center justify-content-center text-white fw-bold shadow-sm">
                    <i className="fa-regular fa-calendar-check" />
                  </div>

                  <div>
                    <h2 className="h5 fw-bold mb-0 text-dark">
                      অ্যাপয়েন্টমেন্ট বুক করুন
                    </h2>

                    <span className="booking-subtitle text-muted">
                      সহজে ডাক্তার ও সময় নির্বাচন করে সিরিয়াল নিন
                    </span>
                  </div>
                </div>

                {/* STEP 1 */}
                <div className="step-container">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="step-badge">১</span>

                    <label className="fw-semibold text-dark small mb-0">
                      ডাক্তার নির্বাচন করুন
                    </label>
                  </div>

                  <select
                    className="form-select form-select-custom"
                    defaultValue="doctor-1"
                  >
                    <option value="doctor-1">
                      ডাঃ মোঃ দ্বীন ইসলাম রিজভী — অর্থোপেডিক, ট্রমা ও স্পাইন
                      সার্জারি
                    </option>

                    <option value="doctor-2">
                      ডাঃ রিফাত হাসান — স্পাইন ও জয়েন্ট বিশেষজ্ঞ
                    </option>
                  </select>
                </div>

                {/* STEP 2 */}
                <div className="step-container">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="step-badge">২</span>

                    <label className="fw-semibold text-dark small mb-0">
                      চেম্বার নির্বাচন করুন
                    </label>
                  </div>

                  <select
                    className="form-select form-select-custom"
                    defaultValue="chamber-1"
                  >
                    <option value="chamber-1">
                      Padma General Hospital — কিশোরগঞ্জ
                    </option>

                    <option value="chamber-2">
                      Popular Diagnostic Center — ঢাকা
                    </option>
                  </select>
                </div>

                {/* STEP 3 */}
                <div className="step-container">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <div className="d-flex align-items-center gap-2">
                      <span className="step-badge">৩</span>

                      <label className="fw-semibold text-dark small mb-0">
                        চেম্বারের দিন নির্বাচন করুন
                      </label>
                    </div>

                    <div
                      className="date-display bg-white border rounded-2 px-2 py-1 d-flex align-items-center gap-2 shadow-sm"
                      onClick={(e) =>
                        e.currentTarget
                          .querySelector('input[type="date"]')
                          .showPicker()
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        type="date"
                        className="border-0 bg-transparent"
                        defaultValue={new Date().toLocaleDateString("en-CA")}
                        style={{
                          outline: "none",
                          fontSize: "14px",
                          width: "125px",
                          cursor: "pointer",
                        }}
                      />
                      <i className="fa-regular fa-calendar" />
                    </div>
                  </div>

                  <div className="day-info text-muted">
                    সব দিন দেখানো হচ্ছে — সবুজ: Chamber Open
                  </div>
                </div>

                {/* DAYS AND TIME SLOTS */}
                <div className="booking-container">
                  <h2 className="section-title">সময়ের স্লট নির্বাচন করুন</h2>

                  {/* DAYS GRID */}
                  <div className="days-grid-container">
                    <div className="days-grid">
                      <div className="day-card">
                        <div className="day-name">মঙ্গলবার</div>
                        <div className="day-date">১০ নভেম্বর</div>
                        <div className="day-status">Chamber Off Day</div>
                      </div>

                      <div className="day-card">
                        <div className="day-name">বুধবার</div>
                        <div className="day-date">১১ নভেম্বর</div>
                        <div className="day-status">Chamber Off Day</div>
                      </div>

                      <div className="day-card">
                        <div className="day-name">বৃহস্পতিবার</div>
                        <div className="day-date">১২ নভেম্বর</div>
                        <div className="day-status">Chamber Off Day</div>
                      </div>

                      <div className="day-card open-green">
                        <div className="day-name">শুক্রবার</div>
                        <div className="day-date">১৩ নভেম্বর</div>
                        <div className="day-status">Chamber Open</div>
                      </div>

                      <div className="day-card">
                        <div className="day-name">শনিবার</div>
                        <div className="day-date">১৪ নভেম্বর</div>
                        <div className="day-status">Chamber Off Day</div>
                      </div>

                      <div className="day-card">
                        <div className="day-name">রবিবার</div>
                        <div className="day-date">১৫ নভেম্বর</div>
                        <div className="day-status">Chamber Off Day</div>
                      </div>

                      <div className="day-card open-light-green">
                        <div className="day-name">সোমবার</div>
                        <div className="day-date">১৬ নভেম্বর</div>
                        <div className="day-status">Chamber Open</div>
                      </div>

                      <div className="day-card empty"></div>
                    </div>
                  </div>

                  {/* AVAILABLE TIME SLOTS */}
                  <div className="available-header">
                    <h2 className="section-title mb-0">উপলব্ধ সময়</h2>

                    <span className="slots-badge">7 Slots</span>
                  </div>

                  <div className="sub-header">বিকাল / সন্ধ্যা</div>

                  <div className="slots-grid">
                    <div className="slot-card active-red">
                      <div className="slot-time">4:30 PM – 5:30 PM</div>
                      <div className="slot-avail">ফাঁকা 0 / 15</div>
                    </div>

                    <div className="slot-card">
                      <div className="slot-time">5:30 PM – 6:30 PM</div>
                      <div className="slot-avail">ফাঁকা 14 / 15</div>
                    </div>

                    <div className="slot-card">
                      <div className="slot-time">6:30 PM – 7:30 PM</div>
                      <div className="slot-avail">ফাঁকা 15 / 15</div>
                    </div>

                    <div className="slot-card">
                      <div className="slot-time">7:30 PM – 8:30 PM</div>
                      <div className="slot-avail">ফাঁকা 15 / 15</div>
                    </div>

                    <div className="slot-card">
                      <div className="slot-time">8:30 PM – 9:30 PM</div>
                      <div className="slot-avail">ফাঁকা 15 / 15</div>
                    </div>

                    <div className="slot-card">
                      <div className="slot-time">9:30 PM – 10:30 PM</div>
                      <div className="slot-avail">ফাঁকা 15 / 15</div>
                    </div>

                    <div className="slot-card">
                      <div className="slot-time">10:30 PM – 11:30 PM</div>
                      <div className="slot-avail">ফাঁকা 15 / 15</div>
                    </div>

                    <div className="slot-card">
                      <div className="slot-time">11:30 PM – 12 AM</div>
                      <div className="slot-avail">ফাঁকা 8 / 8</div>
                    </div>
                  </div>
                </div>

                {/* CONFIRM BUTTON */}
                <button
                  type="button"
                  className="btn btn-confirm w-100 shadow-sm mt-2"
                >
                  সিরিয়াল নিশ্চিত করুন
                  <i className="fa-solid fa-arrow-right ms-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .hero-section {
    --primary-teal: #0f766e;
    --soft-mint: #ccfbf1;
    --offday-bg: #f1f5f9;
    --offday-border: #e2e8f0;
    --offday-text: #64748b;
    --openday-bg: #059669;
  }

  /* BORDER RADIUS */
  .rounded-4-custom {
    border-radius: 20px !important;
  }

  .rounded-5-custom {
    border-radius: 28px !important;
  }

  /* CUSTOM CARDS */
  .card-custom {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.05),
      0 2px 4px -1px rgba(0, 0, 0, 0.03);
  }

  /* DOCTOR BANNER */
  .doctor-banner-card {
    background: linear-gradient(135deg, #e0f2fe 0%, #e6f4f1 50%, #ecfdf5 100%);
    border: 1px solid #c7d2fe;
    position: relative;
    overflow: hidden;
  }

  .doctor-badge {
    color: var(--primary-teal);
    font-weight: 600;
    font-size: 12.8px;
    padding: 8px 16px;
  }

  .doctor-banner-card h1 {
    line-height: 1.3;
  }

  .doctor-banner-card p {
    line-height: 1.6;
  }

  /* STATISTICS */
  .stat-box {
    background: #ffffff;
    border: 1px solid #f1f5f9;
    border-radius: 16px;
    padding: 12px 16px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
  }

  .stat-number {
    color: var(--primary-teal);
    font-weight: 700;
    font-size: 18.4px;
    line-height: 1.2;
  }

  .stat-label {
    font-size: 12px;
    color: #64748b;
    font-weight: 500;
  }

  /* DOCTOR IMAGE */
  .doctor-img-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    min-height: 280px;
  }

  .doctor-arch-bg {
    position: absolute;
    bottom: 0;
    width: 220px;
    height: 220px;
    background-color: rgba(15, 118, 110, 0.12);
    border-top-left-radius: 110px;
    border-top-right-radius: 110px;
    border-top: 2px solid rgba(15, 118, 110, 0.2);
  }

  .doctor-img {
    position: relative;
    z-index: 2;
    width: 210px;
    height: auto;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  }

  /* QUICK GUIDE */
  .quick-guide {
    background-color: #e0f2fe;
    color: #0369a1;
    font-weight: 500;
    font-size: 14.4px;
    border-radius: 20px;
  }

  .quick-guide a {
    color: #0369a1;
  }

  /* 
   REACT SWIPER MEDICAL SLIDER
 */

  .medical-swiper {
    width: 100%;
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    padding: 0 0 35px;
  }

  .medical-swiper .swiper-slide {
    height: auto;
    box-sizing: border-box;
  }

  .medical-slide-card {
    position: relative;
    height: 350px;
    width: 100%;
    overflow: hidden;
    border-radius: 16px;
    background-color: #e2e8f0;
  }

  .medical-slide-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .medical-slide-card:hover .medical-slide-image {
    transform: scale(1.06);
  }

  /* IMAGE OVERLAY */
  .medical-slide-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: flex-end;
    padding: 20px 15px;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.45) 45%,
      rgba(0, 0, 0, 0.05) 100%
    );
  }

  .medical-slide-content {
    width: 100%;
    color: #ffffff;
  }

  .medical-slide-content h3 {
    font-size: 15px;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 10px;
    color: #f1f5f9;
  }

  .medical-slide-content p {
    font-size: 12px;
    line-height: 1.6;
    margin-bottom: 15px;
    color: #f1f5f9;
  }

  /* SLIDE BUTTON */
  .medical-slide-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #0f766e;
    color: #ffffff;
    text-decoration: none;
    padding: 9px 13px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .medical-slide-btn:hover {
    background-color: #ffffff;
    color: #0f766e;
  }

  /* SWIPER NAVIGATION */
  .medical-swiper .swiper-button-prev,
  .medical-swiper .swiper-button-next {
    width: 36px;
    height: 36px;
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 50%;
    color: #0f766e;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
  }

  .medical-swiper .swiper-button-prev:hover,
  .medical-swiper .swiper-button-next:hover {
    background-color: #0f766e;
    color: #ffffff;
  }

  .medical-swiper .swiper-button-prev::after,
  .medical-swiper .swiper-button-next::after {
    font-size: 14px;
    font-weight: 700;
  }

  /* SWIPER PAGINATION */
  .medical-swiper .swiper-pagination {
    bottom: 8px !important;
  }

  .medical-swiper .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background-color: #0f766e;
    opacity: 0.4;
    transition: all 0.3s ease;
  }

  .medical-swiper .swiper-pagination-bullet-active {
    width: 20px;
    border-radius: 10px;
    opacity: 1;
  }

  /* 
   APPOINTMENT BOOKING
 */

  /* BOOKING HEADER */
  .calendar-icon {
    width: 42px;
    height: 42px;
    background-color: var(--primary-teal);
    font-size: 20px;
  }

  .booking-subtitle {
    font-size: 12px;
  }

  .date-display {
    font-size: 12px;
    font-weight: 600;
  }

  .day-info {
    font-size: 11.2px;
    padding-left: 28px;
  }

  /* STEP BOXES */
  .step-container {
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 13.6px 16px;
  }

  .step-badge {
    width: 22px;
    height: 22px;
    background-color: var(--primary-teal);
    color: #ffffff;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* FORM CONTROLS */
  .form-select-custom {
    font-size: 13.6px;
    font-weight: 500;
    border-radius: 12px;
    padding: 9.6px 13.6px;
    border-color: #cbd5e1;
    color: #334155;
  }

  .form-select-custom:focus {
    border-color: var(--primary-teal);
    box-shadow: 0 0 0 3.2px rgba(15, 118, 110, 0.15);
  }

  /* 
   WEEKDAY CARDS AND DAYS GRID
 */

  .booking-container {
    padding: 0;
  }

  .section-title {
    color: #1e3a4c;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .days-grid-container {
    border: 1.5px solid #e2e8f0;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 24px;
    background-color: #fff;
  }

  .days-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .day-card {
    border-radius: 0;
    padding: 10px 4px;
    text-align: center;
    border-right: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;
    background-color: #fff5f5;
  }

  .day-card:nth-child(4n) {
    border-right: none;
  }

  .day-card:nth-child(n + 5) {
    border-bottom: none;
  }

  .day-name {
    color: #c53030;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.2;
  }

  .day-date {
    color: #718096;
    font-size: 11px;
    margin: 2px 0;
  }

  .day-status {
    color: #c53030;
    font-size: 11px;
    font-weight: 600;
  }

  /* DAY CARD VARIANTS */
  .day-card.open-green {
    background-color: #10b981;
    color: #ffffff;
  }

  .day-card.open-green .day-name,
  .day-card.open-green .day-date,
  .day-card.open-green .day-status {
    color: #ffffff;
  }

  .day-card.open-light-green {
    background-color: #ecfdf5;
  }

  .day-card.open-light-green .day-name,
  .day-card.open-light-green .day-date,
  .day-card.open-light-green .day-status {
    color: #059669;
  }

  .day-card.empty {
    background-color: #ffffff;
  }

  /* 
   AVAILABLE TIME SLOTS
 */

  .available-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .slots-badge {
    background-color: #f0fdf4;
    color: #0d9488;
    font-size: 12px;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 20px;
    border: 1px solid #ccfbf1;
  }

  .sub-header {
    color: #475569;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .slots-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }

  .slot-card {
    border: 1px solid #cbd5e1;
    border-radius: 12px;
    padding: 10px 4px;
    text-align: center;
    background-color: #ffffff;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .slot-time {
    color: #1e3a4c;
    font-size: 10.5px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 4px;
  }

  .slot-avail {
    color: #0d9488;
    font-size: 11px;
    font-weight: 600;
  }

  /* ACTIVE SLOT */
  .slot-card.active-red {
    background-color: #b91c1c;
    border-color: #b91c1c;
    box-shadow: 0 4px 12px rgba(185, 28, 28, 0.25);
  }

  .slot-card.active-red .slot-time {
    color: #ffffff;
  }

  .slot-card.active-red .slot-avail {
    color: #7f1d1d;
  }

  /* CONFIRM BUTTON */
  .btn-confirm {
    background-color: var(--primary-teal);
    color: #ffffff;
    border-radius: 13.6px;
    font-weight: 700;
    padding: 12px;
    font-size: 15.2px;
    border: none;
    transition: background 0.2s ease;
  }

  .btn-confirm:hover {
    background-color: #0d5e56;
    color: #ffffff;
  }

  /* 
   RESPONSIVE DESIGN
 */

  /* TABLET */
  @media (max-width: 991px) {
    .medical-slide-card {
      height: 280px;
    }

    .medical-slide-content h3 {
      font-size: 15px;
    }

    .medical-slide-content p {
      font-size: 11px;
    }

    .medical-slide-overlay {
      padding: 12px 10px;
    }

    .medical-slide-btn {
      font-size: 10px;
      padding: 7px 9px;
    }
  }

  /* GENERAL RESPONSIVE */
  @media (max-width: 767px) {
    .doctor-banner-card {
      padding: 24px !important;
    }

    .doctor-img-wrapper {
      min-height: 240px;
    }

    .doctor-img {
      width: 190px;
    }

    .doctor-arch-bg {
      width: 200px;
      height: 200px;
    }
  }

  /* MOBILE */
  @media (max-width: 576px) {
    .medical-slide-card {
      height: 200px;
    }

    .medical-slide-content h3 {
      font-size: 11px;
    }

    .medical-slide-content p {
      font-size: 9px;
      line-height: 1.4;
      margin-bottom: 8px;
    }

    .medical-slide-overlay {
      padding: 8px;
    }

    .medical-slide-btn {
      font-size: 9px;
      padding: 5px 7px;
    }

    .medical-swiper .swiper-button-prev,
    .medical-swiper .swiper-button-next {
      width: 28px;
      height: 28px;
    }

    .medical-swiper .swiper-button-prev::after,
    .medical-swiper .swiper-button-next::after {
      font-size: 11px;
    }
  }

  /* SMALL MOBILE */
  @media (max-width: 480px) {
    .booking-container {
      padding: 16px;
    }

    .slot-time {
      font-size: 9.5px;
    }

    .slot-avail {
      font-size: 10px;
    }
  }

  /* EXTRA SMALL MOBILE */
  @media (max-width: 400px) {
    .card-custom {
      padding: 16px !important;
    }

    .step-container {
      padding: 12px;
    }

    .day-card {
      font-size: 10.4px;
    }

    .day-card .day-status {
      font-size: 9.28px;
    }

    .slot-btn {
      font-size: 10.88px;
    }
  }
`;

export default HeroSection;








