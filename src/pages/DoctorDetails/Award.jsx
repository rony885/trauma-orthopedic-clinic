import React, { useState } from "react";
import styled from "styled-components";

const certificates = [
  {
    id: 1,
    number: "01",
    category: "reg",
    categoryName: "রেজিস্ট্রেশন ও ডিগ্রি",
    title: "BMDC Full Registration",
    subtitle:
      "বাংলাদেশ মেডিকেল অ্যান্ড ডেন্টাল কাউন্সিল — Full Registration as a Medical Practitioner",
    year: "2014",
    image: "/assets/images/award/02-bmdc-additional-qualification.jpg",
  },
  {
    id: 2,
    number: "02",
    category: "reg",
    categoryName: "রেজিস্ট্রেশন ও ডিগ্রি",
    title: "BMDC Additional Qualification",
    subtitle:
      "এম.এস ইন অর্থোপেডিক সার্জারি — Additional Medical Qualification Registration",
    year: "2026",
    image: "/assets/images/award/03-ms-orthopaedic-surgery-bsmmu.jpg",
  },
  {
    id: 3,
    number: "03",
    category: "reg",
    categoryName: "রেজিস্ট্রেশন ও ডিগ্রি",
    title: "MS in Orthopaedic Surgery",
    subtitle:
      "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয় — Master of Surgery (Orthopaedic Surgery)",
    year: "2024 / Certificate 2026",
    image: "/assets/images/award/02-bmdc-additional-qualification.jpg",
  },
  {
    id: 4,
    number: "04",
    category: "member",
    categoryName: "সদস্যপদ",
    title: "BMDC Additional Qualification",
    subtitle:
      "এম.এস ইন অর্থোপেডিক সার্জারি — Additional Medical Qualification Registration",
    year: "2026",
    image: "/assets/images/award/03-ms-orthopaedic-surgery-bsmmu.jpg",
  },
  {
    id: 5,
    number: "05",
    category: "member",
    categoryName: "সদস্যপদ",
    title: "MS in Orthopaedic Surgery",
    subtitle:
      "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয় — Master of Surgery (Orthopaedic Surgery)",
    year: "2024 / Certificate 2026",
    image: "/assets/images/award/02-bmdc-additional-qualification.jpg",
  },
];

const filters = [
  { label: "সব", value: "all" },
  { label: "রেজিস্ট্রেশন ও ডিগ্রি", value: "reg" },
  { label: "সদস্যপদ", value: "member" },
  { label: "আন্তর্জাতিক প্রশিক্ষণ", value: "intl" },
  { label: "অন্যান্য", value: "other" },
];

const Award = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [previewImage, setPreviewImage] = useState(null);

  // Initially hide all achievements
  const [showAchievements, setShowAchievements] = useState(false);

  // Filter certificates
  const filteredCertificates =
    activeFilter === "all"
      ? certificates
      : certificates.filter((item) => item.category === activeFilter);

  // Dynamic category grouping
  const groupedCertificates =
    activeFilter === "all"
      ? filters
          .filter((filter) => filter.value !== "all")
          .map((filter) => ({
            ...filter,
            certificates: certificates.filter(
              (item) => item.category === filter.value,
            ),
          }))
          .filter((group) => group.certificates.length > 0)
      : filters
          .filter((filter) => filter.value === activeFilter)
          .map((filter) => ({
            ...filter,
            certificates: certificates.filter(
              (item) => item.category === filter.value,
            ),
          }))
          .filter((group) => group.certificates.length > 0);

  return (
    <Wrapper className="py-4 py-md-5">
      <div className="container">
        {/* Achievement Heading - Always Visible */}
        <div className="filter-bar d-flex align-items-center justify-content-between gap-3 p-3 mb-4">
          <h2
            className="text-white fs-5 fw-semibold rounded-pill px-4 py-2 mb-0"
            style={{ backgroundColor: "#177886" }}
          >
            আমার অর্জনসমূহ
          </h2>

          <button
            type="button"
            className="achievement-toggle"
            onClick={() => {
              setShowAchievements((prev) => !prev);
              setPreviewImage(null);
            }}
            aria-label={
              showAchievements ? "Hide achievements" : "Show achievements"
            }
          >
            {showAchievements ? "←" : "→"}
          </button>
        </div>

        {/* Everything Below Shows Only After Clicking Arrow */}
        {showAchievements && (
          <>
            {/* Top Filter Bar */}
            <div className="filter-bar d-flex flex-wrap align-items-center justify-content-between gap-3 p-3 mb-4">
              <div className="filter-pills d-flex flex-nowrap align-items-center gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    type="button"
                    className={`btn-filter ${
                      activeFilter === filter.value ? "active" : ""
                    }`}
                    onClick={() => setActiveFilter(filter.value)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              <span className="total-count text-nowrap">
                {filteredCertificates.length} টি সার্টিফিকেট
              </span>
            </div>

            {/* Dynamic Category Headings and Certificate Cards */}
            {groupedCertificates.length > 0 ? (
              groupedCertificates.map((group) => (
                <div
                  className="certificate-group"
                  key={group.value}
                  style={{ marginBottom: "30px" }}
                >
                  {/* Dynamic Section Heading */}
                  <h2 className="section-title mb-4 border-bottom">
                    {group.label}
                  </h2>

                  {/* Certificates */}
                  <div className="row g-4">
                    {group.certificates.map((item) => (
                      <div className="col-lg-4 col-md-6" key={item.id}>
                        <div className="cert-card h-100 d-flex flex-column">
                          {/* Image */}
                          <div className="cert-img-wrapper position-relative">
                            <span className="cert-number">{item.number}</span>

                            <img src={item.image} alt={item.title} />

                            <button
                              type="button"
                              className="btn-zoom"
                              onClick={() => setPreviewImage(item)}
                            >
                              বড় করে দেখুন <span>↗</span>
                            </button>
                          </div>

                          {/* Information */}
                          <div className="cert-body d-flex flex-column flex-grow-1">
                            <span className="cert-category-badge align-self-start">
                              {item.categoryName}
                            </span>

                            <h3 className="cert-title">{item.title}</h3>

                            <p className="cert-subtitle flex-grow-1">
                              {item.subtitle}
                            </p>

                            <div className="cert-year mt-auto">{item.year}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="empty-message">
                  এই ক্যাটাগরিতে কোনো সার্টিফিকেট পাওয়া যায়নি।
                </div>
              </div>
            )}

            {/* Image Preview Modal */}
            {previewImage && (
              <div
                className="preview-overlay d-flex align-items-center justify-content-center"
                onClick={() => setPreviewImage(null)}
                role="dialog"
                aria-modal="true"
                aria-label="Certificate Preview"
              >
                <div
                  className="preview-modal d-flex flex-column"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="preview-header d-flex align-items-center justify-content-between gap-3">
                    <h5 className="m-0">{previewImage.title}</h5>

                    <button
                      type="button"
                      className="preview-close"
                      onClick={() => setPreviewImage(null)}
                      aria-label="Close"
                    >
                      &times;
                    </button>
                  </div>

                  <div className="preview-body text-center">
                    <img src={previewImage.image} alt={previewImage.title} />
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* Filter Bar */
  .filter-bar {
    background: #fff;
    border: 1px solid #e6eff1;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(16, 92, 103, 0.04);
    min-width: 0;
  }

  /* Achievement Toggle Arrow */
  .achievement-toggle {
    background: transparent;
    border: none;
    color: #177886;
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.25s ease;
    line-height: 1;
    padding: 5px 12px;
  }

  .achievement-toggle:hover {
    color: #105965;
    transform: translateX(4px);
  }

  /* Filter Pills */
  .filter-pills {
    flex: 1;
    min-width: 0;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 5px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: #177886 #e6eff1;
  }

  .filter-pills::-webkit-scrollbar {
    height: 5px;
  }

  .filter-pills::-webkit-scrollbar-track {
    background: #e6eff1;
    border-radius: 10px;
  }

  .filter-pills::-webkit-scrollbar-thumb {
    background: #177886;
    border-radius: 10px;
  }

  /* Filter Buttons */
  .btn-filter {
    flex-shrink: 0;
    white-space: nowrap;
    border: 1px solid #dce6e8;
    background: #fff;
    color: #475569;
    font-family: "Hind Siliguri", sans-serif;
    font-size: 14px;
    font-weight: 500;
    padding: 6px 18px;
    border-radius: 50px;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .btn-filter:hover,
  .btn-filter.active {
    background: #177886;
    border-color: #177886;
    color: #fff;
  }

  .btn-filter.active {
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(23, 120, 134, 0.25);
  }

  .total-count {
    font-family: "Hind Siliguri", sans-serif;
    font-size: 14px;
    color: #64748b;
    font-weight: 500;
  }

  /* Heading */
  .section-title {
    font-family: "Hind Siliguri", sans-serif;
    font-size: 26px;
    font-weight: 700;
    color: #164e5b;
    letter-spacing: -0.2px;
  }

  /* Certificate Card */
  .cert-card {
    background: #fff;
    border: 1px solid #e5eef0;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(15, 52, 66, 0.05);
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  .cert-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 30px rgba(15, 52, 66, 0.09);
  }

  /* Certificate Image */
  .cert-img-wrapper {
    height: 235px;
    background: #f8fafc;
    border-bottom: 1px solid #edf2f4;
    overflow: hidden;
  }

  .cert-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform 0.35s ease;
  }

  .cert-card:hover .cert-img-wrapper img {
    transform: scale(1.03);
  }

  /* Certificate Number */
  .cert-number {
    position: absolute;
    top: 14px;
    left: 14px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #155e6b;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.18);
    z-index: 2;
  }

  /* Zoom Button */
  .btn-zoom {
    position: absolute;
    bottom: 12px;
    right: 12px;
    background: rgba(255, 255, 255, 0.95);
    color: #177886;
    border: 1px solid #dbe9ec;
    border-radius: 50px;
    padding: 5px 14px;
    font-family: "Hind Siliguri", sans-serif;
    font-size: 13px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.2s ease;
    cursor: pointer;
    z-index: 2;
  }

  .btn-zoom:hover {
    background: #177886;
    color: #fff;
    border-color: #177886;
  }

  /* Card Content */
  .cert-body {
    padding: 20px 22px 22px;
  }

  .cert-category-badge {
    background: #e1f1f3;
    color: #177886;
    font-family: "Hind Siliguri", sans-serif;
    font-size: 12.5px;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 50px;
    margin-bottom: 12px;
  }

  .cert-title {
    font-size: 18.5px;
    font-weight: 700;
    color: #133b49;
    margin-bottom: 6px;
    line-height: 1.35;
  }

  .cert-subtitle {
    font-family: "Hind Siliguri", "Plus Jakarta Sans", sans-serif;
    font-size: 14px;
    color: #64748b;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .cert-year {
    font-size: 13px;
    font-weight: 500;
    color: #8494a7;
  }

  /* Empty Message */
  .empty-message {
    background: #fff;
    border: 1px solid #e5eef0;
    border-radius: 12px;
    padding: 35px 15px;
    text-align: center;
    color: #64748b;
    font-family: "Hind Siliguri", sans-serif;
  }

  /* Preview Modal */
  .preview-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    z-index: 9999;
    padding: 20px;
  }

  .preview-modal {
    background: #fff;
    width: 100%;
    max-width: 900px;
    max-height: 90vh;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  }

  .preview-header {
    padding: 15px 20px;
    border-bottom: 1px solid #e5eef0;
  }

  .preview-header h5 {
    font-size: 17px;
    font-weight: 700;
    color: #143642;
  }

  .preview-close {
    background: transparent;
    border: none;
    color: #475569;
    font-size: 30px;
    line-height: 1;
    cursor: pointer;
    padding: 0 5px;
  }

  .preview-close:hover {
    color: #177886;
  }

  .preview-body {
    padding: 20px;
    overflow: auto;
  }

  .preview-body img {
    max-width: 100%;
    max-height: 70vh;
    object-fit: contain;
    border-radius: 8px;
  }

  /* Responsive */
  @media (max-width: 767px) {
    .filter-bar {
      padding: 12px !important;
    }

    .filter-pills {
      flex: 0 0 100%;
      width: 100%;
      gap: 8px !important;
    }

    .btn-filter {
      padding: 6px 12px;
      font-size: 13px;
    }

    .total-count {
      width: 100%;
    }

    .section-title {
      font-size: 22px;
    }

    .cert-img-wrapper {
      height: 210px;
    }

    .cert-body {
      padding: 18px;
    }
  }

  @media (max-width: 480px) {
    .btn-filter {
      font-size: 12px;
      padding: 6px 10px;
    }

    .preview-overlay {
      padding: 10px;
    }

    .preview-header,
    .preview-body {
      padding: 12px;
    }
  }
`;

export default Award;
