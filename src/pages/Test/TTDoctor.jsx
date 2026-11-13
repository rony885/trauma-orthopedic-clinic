import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// CHAMBER DATA
const chamberData = [
  {
    id: 1,
    location: "ঢাকা",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=450&fit=crop",
    hospital: "BDM Hospital & Diagnostic Centre",
    address: "মোহাম্মদপুর, ঢাকা",
    schedule: "রবি, সোম, বুধ, বৃহ, শনি • 5:00 PM–8:00 PM • প্রতি 10 মিনিট",
    phone: "01711-387595",
    assistant: "",
    mapUrl: "#",
  },
  {
    id: 2,
    location: "কিশোরগঞ্জ",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=450&fit=crop",
    hospital: "Padma General Hospital (Pvt.)",
    address: "পুরানথানা-সদর, কিশোরগঞ্জ।",
    schedule: "সোম, শুক্র • 4:30 PM–12:00 AM • প্রতি 4 মিনিট",
    phone: "+8801741689322",
    assistant: "ব্যক্তিগত এসিস্ট্যান্ট: মোঃ রুহুল মিয়া",
    mapUrl: "#",
  },
  {
    id: 3,
    location: "কিশোরগঞ্জ",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=450&fit=crop",
    hospital: "Midtown Hospital",
    address: "কিশোরগঞ্জ",
    schedule: "শুক্র • 8:30 AM–1:00 PM • প্রতি 10 মিনিট",
    phone: "01787-224525",
    assistant: "",
    mapUrl: "#",
  },
];

const Doctors = () => {
  return (
    <Wrapper className="py-3">
      <div className="container">
        {/* CHAMBER CARDS GRID */}
        <div className="row g-4">
          {chamberData.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="chamber-card">
                {/* CARD IMAGE */}
                <div className="card-poster-wrapper">
                  <span className="location-pill">{item.location}</span>

                  <img
                    src={item.image}
                    alt={item.hospital}
                    className="poster-main-img"
                  />
                </div>

                {/* CARD BODY */}
                <div className="chamber-body">
                  <h3 className="hospital-title">{item.hospital}</h3>

                  {/* ADDRESS */}
                  <div className="hospital-address">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>{item.address}</span>
                  </div>

                  {/* SCHEDULE */}
                  <div className="schedule-box">
                    <i className="fa-regular fa-clock"></i>
                    <span>{item.schedule}</span>
                  </div>

                  {/* PHONE */}
                  <div className="phone-row">
                    <i className="fa-solid fa-phone-volume"></i>
                    <span>{item.phone}</span>
                  </div>

                  {/* ASSISTANT NOTE */}
                  {item.assistant && (
                    <div className="assistant-note">{item.assistant}</div>
                  )}

                  {/* ACTION BUTTONS */}
                  <div className="card-actions">
                    <button type="button" className="btn btn-serial">
                      এই চেম্বারে সিরিয়াল
                    </button>

                    <Link to={item.mapUrl} className="btn-map">
                      Map &#8599;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM SMART GUIDE BANNER */}
        <div className="smart-guide-banner">
          <div className="d-flex align-items-center gap-3">
            <div className="guide-icon-box">
              <i className="fa-solid fa-bone"></i>
            </div>

            <div>
              <h4 className="guide-title">কোন সমস্যায় সিরিয়াল নেবেন?</h4>

              <p className="guide-subtitle">
                Fracture/Trauma, Spine &amp; Back Pain, Knee/Joint,
                Shoulder/Neck, Sports Injury, Foot/Ankle, Bone Health এবং
                post-operative follow-up.
              </p>
            </div>
          </div>

          <button type="button" className="btn btn-smart-guide">
            Smart Guide
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* CHAMBER CARD */
  .chamber-card {
    background: #ffffff;
    border: 1px solid #e2ecef;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 6px 20px rgba(20, 77, 94, 0.04);
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .chamber-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(20, 77, 94, 0.09);
  }

  /* FULL WIDTH POSTER IMAGE */
  .card-poster-wrapper {
    position: relative;
    width: 100%;
    height: 225px;
    border-top: 4px solid #167b87;
    overflow: hidden;
    background-color: #ffffff;
  }

  .poster-main-img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  /* LOCATION BADGE */
  .location-pill {
    position: absolute;
    top: 14px;
    left: 14px;
    z-index: 3;
    background-color: #146c78;
    color: #ffffff;
    font-size: 12px;
    font-weight: 600;
    padding: 4px 14px;
    border-radius: 50px;
    letter-spacing: 0.2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  /* CARD BODY */
  .chamber-body {
    padding: 22px 12px 22px 12px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .hospital-title {
    font-size: 19px;
    font-weight: 700;
    color: #144d5e;
    margin-bottom: 6px;
    line-height: 1.35;
  }

  .hospital-address {
    font-size: 14px;
    color: #e05252;
    font-weight: 500;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  /* SCHEDULE */
  .schedule-box {
    background-color: #f6f9fb;
    border: 1px solid #e4edf1;
    border-radius: 10px;
    padding: 12px 14px;
    font-size: 14px;
    color: #36525f;
    font-weight: 500;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .schedule-box i {
    color: #5b7987;
    font-size: 14px;
  }

  /* PHONE */
  .phone-row {
    font-size: 15px;
    font-weight: 700;
    color: #155c6e;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 7px;
  }

  .phone-row i {
    color: #167b87;
    font-size: 15px;
  }

  .assistant-note {
    font-size: 13px;
    color: #e05252;
    font-weight: 500;
    margin-bottom: 10px;
  }

  /* ACTION BUTTONS */
  .card-actions {
    margin-top: auto;
    padding-top: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  /* .btn-serial {
    flex-grow: 1;
    background: linear-gradient(90deg, #157786 0%, #0d7ee6 100%);
    color: #ffffff;
    font-weight: 600;
    font-size: 14px;
    border: none;
    border-radius: 10px;
    padding: 5px 16px !important;
    transition:
      opacity 0.2s ease,
      transform 0.15s ease;
  } */
  .btn-serial {
    flex-grow: 1;
    background: linear-gradient(90deg, #157786 0%, #0d7ee6 100%);
    color: #ffffff;
    font-weight: 600;
    font-size: 14px;
    border: none;
    border-radius: 10px;

    padding: 8px 16px !important;
    line-height: 20px;
    height: auto;
    min-height: 0;

    transition:
      opacity 0.2s ease,
      transform 0.15s ease;
  }

  .btn-serial:hover {
    color: #ffffff;
    opacity: 0.93;
    transform: translateY(-1px);
  }

  .btn-map {
    background-color: #ffffff;
    border: 1px solid #d5e2e8;
    color: #144d5e;
    font-weight: 600;
    font-size: 14px;
    border-radius: 10px;
    padding: 8px 16px !important;
    text-decoration: none;
    white-space: nowrap;
    transition:
      background-color 0.2s ease,
      border-color 0.2s ease;
  }

  .btn-map:hover {
    background-color: #f3f8fa;
    border-color: #b8cdd6;
    color: #144d5e;
  }

  /* SMART GUIDE BANNER */
  .smart-guide-banner {
    background-color: #ffffff;
    border: 1px solid #e2ecef;
    border-radius: 16px;
    padding: 18px 24px;
    margin-top: 28px;
    box-shadow: 0 4px 16px rgba(20, 77, 94, 0.03);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .guide-icon-box {
    width: 48px;
    height: 48px;
    min-width: 48px;
    border-radius: 12px;
    background: linear-gradient(135deg, #ff7676 0%, #f15b5b 100%);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 4px 10px rgba(241, 91, 91, 0.25);
  }

  .guide-title {
    font-size: 17px;
    font-weight: 700;
    color: #144d5e;
    margin-bottom: 3px;
  }

  .guide-subtitle {
    font-size: 14px;
    color: #4f6b78;
    margin-bottom: 0;
    line-height: 1.45;
  }

  .btn-smart-guide {
    background-color: #187a86;
    color: #ffffff;
    font-weight: 600;
    font-size: 14px;
    border: none;
    border-radius: 10px;
    padding: 10px 22px;
    white-space: nowrap;
    transition: background-color 0.2s ease;
  }

  .btn-smart-guide:hover {
    background-color: #13636d;
    color: #ffffff;
  }

  /* RESPONSIVE */
  @media (max-width: 767.98px) {
    .smart-guide-banner {
      flex-direction: column;
      align-items: flex-start;
    }

    .btn-smart-guide {
      width: 100%;
      text-align: center;
    }
  }

  @media (max-width: 575.98px) {
    .card-poster-wrapper {
      height: 220px;
    }

    .chamber-body {
      padding: 18px;
    }

    .smart-guide-banner {
      padding: 16px;
    }
  }
`;

export default Doctors;