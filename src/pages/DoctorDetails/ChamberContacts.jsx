import React from "react";
import styled from "styled-components";

const chambers = [
  {
    id: 1,
    name: "BDM Hospital & Diagnostic Centre",
    location: "মোহাম্মদপুর, ঢাকা",
    schedule: "রবি, সোম, বুধ, বৃহঃ, শনি • 5:00 PM–8:00 PM • প্রতি 10 মিনিট",
    phone: "01711-387595",
    color: "primary",
  },
  {
    id: 2,
    name: "Padma General Hospital",
    location: "কিশোরগঞ্জ",
    schedule: "সোম, শুক্র • 4:30 PM–12:00 AM • প্রতি 4 মিনিট",
    phone: "01326-252526",
    color: "purple",
  },
  {
    id: 3,
    name: "Midtown Hospital",
    location: "কিশোরগঞ্জ",
    schedule: "শুক্র • 8:30 AM–1:00 PM • প্রতি 10 মিনিট",
    phone: "01787-224525",
    color: "success",
  },
];

const ChamberContacts = () => {
  return (
    <Wrapper className="pt-0 pb-5">
      <div className="container">
        <div className="main-card p-3 p-md-4">
          {/* Section Header */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="title-icon rounded d-flex align-items-center justify-content-center flex-shrink-0">
              <i className="fa-solid fa-table-cells"></i>
            </div>

            <h2 className="section-title mb-0">চেম্বার ও যোগাযোগ</h2>

            <div className="title-line flex-grow-1"></div>
          </div>

          {/* Chamber Cards */}
          <div className="row g-4">
            {chambers.map((chamber) => (
              <div className="col-lg-4 col-md-6" key={chamber.id}>
                <div className="chamber-card h-100 p-3 p-md-4 position-relative overflow-hidden">
                  {/* Hospital Header */}
                  <div className="d-flex align-items-center gap-3 pb-3 mb-2 border-bottom border-dashed">
                    <div
                      className={`badge-icon rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 ${chamber.color}`}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </div>

                    <h3 className="hospital-name mb-0">{chamber.name}</h3>
                  </div>

                  {/* Location */}
                  <div className="info-row d-flex align-items-start gap-2 py-2 border-bottom">
                    <i className="fa-solid fa-location-dot info-icon"></i>
                    <span>{chamber.location}</span>
                  </div>

                  {/* Schedule */}
                  <div className="info-row d-flex align-items-start gap-2 py-2 border-bottom">
                    <i className="fa-regular fa-clock info-icon"></i>
                    <span>{chamber.schedule}</span>
                  </div>

                  {/* Phone */}
                  <div className="info-row d-flex align-items-start gap-2 py-2">
                    <i className="fa-solid fa-phone info-icon"></i>

                    <a
                      href={`tel:${chamber.phone}`}
                      className="phone-text text-decoration-none"
                    >
                      {chamber.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main-card {
    background: #fff;
    border: 1px solid #eef4f8;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 50, 90, 0.05);
  }

  .section-title,
  .hospital-name {
    color: #0b3c5d;
    font-weight: 700;
  }

  .section-title {
    font-size: 24px;
    white-space: nowrap;
  }

  .title-icon {
    width: 36px;
    height: 36px;
    background: #eaf4fd;
    color: #0076be;
  }

  .title-line {
    height: 2px;
    background: #dbeaf7;
  }

  .chamber-card {
    background: #fff;
    border: 1.5px solid #e4ecf3;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
  }

  .chamber-card::after {
    content: "";
    position: absolute;
    top: -30px;
    right: -30px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: rgba(224, 242, 254, 0.4);
    pointer-events: none;
  }

  .hospital-name {
    font-size: 16px;
    line-height: 1.3;
  }

  .badge-icon {
    width: 38px;
    height: 38px;
    font-size: 15px;
  }

  .badge-icon.primary {
    background: #e0f2fe;
    color: #0284c7;
  }

  .badge-icon.purple {
    background: #f3e8ff;
    color: #9333ea;
  }

  .badge-icon.success {
    background: #dcfce7;
    color: #16a34a;
  }

  .info-row {
    color: #475569;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    border-color: #f1f5f9 !important;
  }

  .info-icon {
    width: 20px;
    min-width: 20px;
    height: 20px;
    margin-top: 2px;
    color: #0076be;
    font-size: 13px;
    text-align: center;
  }

  .phone-text {
    color: #0076be;
    font-weight: 700;
  }

  .phone-text:hover {
    color: #005959;
  }

  @media (max-width: 575.98px) {
    .section-title {
      font-size: 19px;
    }

    .title-line {
      min-width: 20px;
    }
  }
`;

export default ChamberContacts;
