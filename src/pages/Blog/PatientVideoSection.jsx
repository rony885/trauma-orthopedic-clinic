import React from "react";
import styled from "styled-components";

// VIDEO DATA
const videos = [
  {
    id: 1,
    title: "স্পাইন সমস্যার রোগী – কেস ভিজ্যুয়াল",
    description:
      "রোগীর অবস্থা, ইমেজিং ও সমস্যার প্রেজেন্টেশন বোঝানোর জন্য সংক্ষিপ্ত কেস ভিডিও।",
    src: "video1.mp4",
    poster: "https://placehold.co/600x400/1e293b/ffffff?text=Spine+Case+Visual",
    duration: "0:20",
  },
  {
    id: 2,
    title: "চিকিৎসার আগে রোগীর সমস্যা – ভিডিও উপস্থাপন",
    description:
      "অর্থোপেডিক/স্পাইন সমস্যার ক্লিনিকাল presentation ও রোগীর উপসর্গ বোঝাতে ব্যবহৃত ভিডিও।",
    src: "video2.mp4",
    poster:
      "https://placehold.co/600x400/1e293b/ffffff?text=Clinical+Presentation",
    duration: "1:21",
  },
  {
    id: 3,
    title: "রোগীর অভিজ্ঞতা ও recovery guidance",
    description:
      "রোগীর উপসর্গ, follow-up এবং চিকিৎসা-পরবর্তী পরামর্শের জন্য informative video section।",
    src: "video3.mp4",
    poster: "https://placehold.co/600x400/1e293b/ffffff?text=Recovery+Guidance",
    duration: "1:04",
  },
];

const PatientVideoSection = () => {
  return (
    <Wrapper className="py-0">
      <section className="patient-video-section">
        <div className="container">
          {/* SECTION HEADER */}
          <span className="section-pill">PATIENT VIDEO SECTION</span>

          <h2 className="section-title">রোগীর সমস্যা</h2>

          <p className="section-subtitle">
            এখানে রোগীর সমস্যা সম্পর্কিত ভিডিও দেখানো হবে। নতুন ভিডিও সহজেই এই
            সেকশনে যোগ করা যাবে, যাতে রোগী ও অভিভাবকরা সমস্যার ধরন আরও
            পরিষ্কারভাবে বুঝতে পারেন।
          </p>

          {/* VIDEO CARDS */}
          <div className="row g-4">
            {videos.map((video) => (
              <div className="col-lg-4 col-md-6" key={video.id}>
                <div className="video-card h-100 d-flex flex-column">
                  {/* VIDEO */}
                  <div className="video-wrapper position-relative">
                    <span className="video-badge">ভিডিও {video.id}</span>

                    <video poster={video.poster} preload="metadata">
                      <source src={video.src} type="video/mp4" />
                    </video>

                    <div className="video-gradient"></div>

                    {/* VIDEO CONTROLS */}
                    <div className="video-controls-bar d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-2">
                        <button className="icon-btn" aria-label="Play">
                          <i className="bi bi-play-fill"></i>
                        </button>

                        <span className="time-display">
                          0:00 / {video.duration}
                        </span>
                      </div>

                      <div className="d-flex align-items-center gap-2">
                        <button className="icon-btn" aria-label="Mute">
                          <i className="bi bi-volume-up-fill"></i>
                        </button>

                        <button className="icon-btn" aria-label="Fullscreen">
                          <i className="bi bi-fullscreen"></i>
                        </button>

                        <button className="btn-play-pill">
                          <i className="bi bi-play-fill"></i> Play Video
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* CARD CONTENT */}
                  <div className="video-card-body p-4 d-flex flex-column flex-grow-1">
                    <h3 className="video-card-title">{video.title}</h3>

                    <p className="video-card-desc flex-grow-1">
                      {video.description}
                    </p>

                    <div className="video-status-text mt-auto">
                      ভিডিও আপলোড সফলভাবে যুক্ত করা হয়েছে
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* SECTION */
  .patient-video-section {
    padding: 60px 0;
  }

  /* SECTION HEADER */
  .section-pill {
    display: inline-block;
    background: #e6f4f1;
    color: #167a73;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.2px;
    padding: 6px 16px;
    border-radius: 50px;
    margin-bottom: 12px;
  }

  .section-title {
    color: #0b4648;
    font-size: 38px;
    font-weight: 700;
    line-height: 1.25;
    margin-bottom: 10px;
  }

  .section-subtitle {
    color: #5a6c75;
    font-size: 16px;
    line-height: 26px;
    /* max-width: 780px; */
    margin-bottom: 36px;
  }

  /* VIDEO CARD */
  .video-card {
    background: #fff;
    border: 1px solid #edf2f4;
    border-radius: 22px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  .video-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 36px rgba(15, 23, 42, 0.1);
  }

  /* VIDEO */
  .video-wrapper {
    height: 235px;
    background: #0f172a;
    overflow: hidden;
  }

  .video-wrapper video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .video-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.72),
      rgba(0, 0, 0, 0.15) 45%,
      rgba(0, 0, 0, 0.1)
    );
    pointer-events: none;
  }

  /* VIDEO BADGE */
  .video-badge {
    position: absolute;
    top: 14px;
    left: 14px;
    background: rgba(15, 76, 78, 0.88);
    backdrop-filter: blur(4px);
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    padding: 4px 13px;
    border-radius: 50px;
    z-index: 2;
  }

  /* VIDEO CONTROLS */
  .video-controls-bar {
    position: absolute;
    bottom: 12px;
    left: 14px;
    right: 12px;
    z-index: 3;
    color: #fff;
  }

  .time-display {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 13px;
    font-weight: 500;
  }

  .icon-btn {
    background: transparent;
    border: none;
    color: #fff;
    padding: 0;
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
    opacity: 0.92;
    transition: opacity 0.2s;
  }

  .icon-btn:hover {
    opacity: 1;
  }

  .btn-play-pill {
    background: #fff;
    color: #0b4648;
    border: none;
    border-radius: 50px;
    padding: 6px 14px;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 12px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition:
      background 0.2s,
      transform 0.15s;
  }

  .btn-play-pill:hover {
    background: #f1f5f9;
    transform: scale(1.03);
  }

  /* CARD CONTENT */
  .video-card-body {
    padding: 22px 24px 24px !important;
  }

  .video-card-title {
    color: #0b4648;
    font-size: 21px;
    font-weight: 700;
    line-height: 1.35;
    margin-bottom: 10px;
  }

  .video-card-desc {
    color: #5a6c75;
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 24px;
  }

  .video-status-text {
    color: #167a73;
    font-size: 14px;
    font-weight: 600;
  }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .section-title {
      font-size: 32px;
    }

    .video-wrapper {
      height: 220px;
    }
  }

  @media (max-width: 576px) {
    .patient-video-section {
      padding: 40px 0;
    }

    .section-title {
      font-size: 28px;
    }

    .section-subtitle {
      font-size: 15px;
      line-height: 25px;
      margin-bottom: 25px;
    }

    .video-card {
      border-radius: 18px;
    }

    .video-card-body {
      padding: 18px !important;
    }

    .video-card-title {
      font-size: 19px;
    }

    .video-card-desc {
      font-size: 14px;
    }

    .video-wrapper {
      height: 210px;
    }
  }
`;

export default PatientVideoSection;
