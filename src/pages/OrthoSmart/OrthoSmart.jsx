import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const warningOptions = [
  "অঙ্গ বেঁকে গেছে / bone দেখা যাচ্ছে / deep open wound",
  "আঙুল/পা নীল, ঠান্ডা, খুব ফ্যাকাশে বা অনুভূতি কম",
  "নতুন দুর্বলতা/অবশভাব, বিশেষ করে spine injury-এর পর",
  "কোমর ব্যথার সাথে প্রস্রাব-পায়খানা নিয়ন্ত্রণ সমস্যা / saddle numbness",
  "জ্বরের সাথে খুব গরম, লাল ও ফুলে যাওয়া joint",
  "আঘাতের পর একদম ভর নিতে/হাঁটতে পারছেন না",
];

const painAreas = [
  "হাঁটু (Knee)",
  "কোমর (Lower Back)",
  "ঘাড় (Neck)",
  "কাঁধ (Shoulder)",
  "গোড়ালি (Ankle)",
  "হাত (Hand)",
  "কনুই (Elbow)",
  "পা (Foot)",
  "অন্যান্য (Other)",
];

const startOptions = [
  "ধীরে ধীরে / দীর্ঘদিনের",
  "হঠাৎ আঘাত পেয়ে / পড়ে গিয়ে",
  "ভারী কিছু তুলতে গিয়ে",
  "খেলাধুলা বা ব্যায়ামের সময়",
];

const durationOptions = [
  "আজ / ২৪ ঘণ্টার মধ্যে",
  "২ - ৭ দিন",
  "১ - ৪ সপ্তাহ",
  "১ মাসের বেশি",
];

const initialForm = {
  painArea: "",
  howStarted: "ধীরে ধীরে / দীর্ঘদিনের",
  duration: "আজ / ২৪ ঘণ্টার মধ্যে",
  shortDesc: "",
  warnings: [],
};

const OrthoSmart = () => {
  const [formData, setFormData] = useState(initialForm);
  const [result, setResult] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWarningChange = (warning) => {
    setFormData((prev) => ({
      ...prev,
      warnings: prev.warnings.includes(warning)
        ? prev.warnings.filter((item) => item !== warning)
        : [...prev.warnings, warning],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.painArea) {
      setError("অনুগ্রহ করে সমস্যা বা ব্যথার জায়গা নির্বাচন করুন।");
      setResult(false);
      return;
    }

    setError("");
    setResult(true);
  };

  const handleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("আপনার ব্রাউজারে Voice Input support করছে না।");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "bn-BD";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;

      setFormData((prev) => ({
        ...prev,
        shortDesc: prev.shortDesc
          ? `${prev.shortDesc} ${transcript}`
          : transcript,
      }));
    };

    recognition.onerror = () => {
      alert("Voice input নেওয়া সম্ভব হয়নি। আবার চেষ্টা করুন।");
    };

    recognition.start();
  };

  const resetForm = () => {
    setFormData(initialForm);
    setResult(false);
    setError("");
  };

  return (
    <Wrapper className="py-5">
      {/* Heading */}
      <div className="container mb-4">
        <h3 className="section-title text-center">Ortho Smart</h3>
      </div>

      {/* Hero Banner */}
      <section className="hero-banner py-5">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-md-8">
              <span className="brand-pill">DR DEEN SPINE CARE</span>

              <h1 className="hero-title mt-3">Ortho Smart Guide</h1>

              <p className="hero-subtitle mb-0">
                অর্থোপেডিক, ট্রমা, স্পাইন ও জয়েন্ট কেয়ারে আধুনিক রোগীকেন্দ্রিক
                সেবা।
              </p>
            </div>

            <div className="col-md-4 text-center text-md-end">
              <div className="hero-image-card">
                <img
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=85"
                  alt="Orthopedic medical care"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Cards */}
      <div className="container guide-wrapper ">
        <div className="row g-4">
          {/* Left Card */}
          <div className="col-lg-6">
            <div className="card-left h-100 d-flex flex-column justify-content-between gap-4">
              <div>
                <span className="badge-pill-custom">
                  ORTHOPEDIC SMART GUIDE
                </span>

                <h2 className="left-title mt-3">
                  ব্যথা বা আঘাত সম্পর্কে
                  <br />
                  প্রাথমিক দিকনির্দেশনা
                </h2>

                <p className="left-desc mb-0">
                  ব্যথার স্থান, আঘাতের ইতিহাস এবং গুরুত্বপূর্ণ সতর্কতা নির্বাচন
                  করুন। এটি রোগ নির্ণয় করে না; কখন দ্রুত চিকিৎসা দরকার এবং
                  ডাক্তারের কাছে কী তথ্য বলবেন, সেটি সাজিয়ে দেয়।
                </p>
              </div>

              <div className="d-flex flex-wrap gap-2">
                <a href="#fracture" className="cat-pill">
                  🦴 Fracture
                </a>
                <a href="#spine" className="cat-pill">
                  🩻 Spine
                </a>
                <a href="#joint" className="cat-pill">
                  🦵 Joint
                </a>
                <a href="#sports" className="cat-pill">
                  🏃 Sports Injury
                </a>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="col-lg-6">
            <div className="card-right h-100 d-flex flex-column justify-content-center">
              <h2 className="right-title">ডা. মিঠুর সিরিয়াল</h2>

              <p className="right-desc">
                উপসর্গ স্থায়ী হলে, আঘাত গুরুতর হলে বা চলাফেরায় সমস্যা হলে
                সরাসরি Orthopedic evaluation নিন।
              </p>

              <div className="contact-list mb-4">
                <div className="contact-item">
                  <span>☎️</span>
                  <a href="tel:01326252526">01326252526</a>
                </div>

                <div className="contact-item">
                  <span>💬</span>
                  <a
                    href="https://wa.me/8801719183524"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp: 01719183524
                  </a>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-2">
                <Link to="/doctors" className="btn-appointment">
                  Online Appointment
                </Link>

                <a href="#live-queue" className="btn-queue">
                  Live Queue
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Guidance Form */}
      <div className="container">
        <div className="guidance-card">
          <div className="guidance-heading d-flex align-items-center gap-3 mb-4">
            <div className="guidance-icon">🩺</div>

            <div>
              <h3 className="mb-1">Smart Guidance Form</h3>
              <p className="mb-0">আপনার সমস্যার বিস্তারিত তথ্য দিন।</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Pain Area */}
            <div className="mb-3">
              <label htmlFor="painArea" className="form-label-custom">
                ১. সমস্যা/ব্যথার জায়গা *
              </label>

              <select
                id="painArea"
                name="painArea"
                className="form-select custom-input"
                value={formData.painArea}
                onChange={handleChange}
              >
                <option value="">নির্বাচন করুন</option>

                {painAreas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>

            {/* How Started */}
            <div className="mb-3">
              <label htmlFor="howStarted" className="form-label-custom">
                ২. কীভাবে শুরু হয়েছে?
              </label>

              <select
                id="howStarted"
                name="howStarted"
                className="form-select custom-input"
                value={formData.howStarted}
                onChange={handleChange}
              >
                {startOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration */}
            <div className="mb-3">
              <label htmlFor="duration" className="form-label-custom">
                ৩. কতদিন?
              </label>

              <select
                id="duration"
                name="duration"
                className="form-select custom-input"
                value={formData.duration}
                onChange={handleChange}
              >
                {durationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div className="mb-3">
              <div className="d-flex align-items-center gap-2 mb-2">
                <label htmlFor="shortDesc" className="form-label-custom mb-0">
                  ৪. সংক্ষেপে লিখুন
                </label>

                <button
                  type="button"
                  className="btn-voice"
                  onClick={handleVoiceInput}
                >
                  🎙 Voice
                </button>
              </div>

              <textarea
                id="shortDesc"
                name="shortDesc"
                className="form-control custom-input"
                rows="3"
                value={formData.shortDesc}
                onChange={handleChange}
                placeholder="যেমন: পড়ে গিয়ে ডান হাঁটু ফুলে গেছে, ভর দিতে কষ্ট হচ্ছে"
              />
            </div>

            {/* Warning Options */}
            <div className="mb-3">
              <label className="form-label-custom mb-2">
                ৫. জরুরি সতর্কতার কোনোটি আছে?
              </label>

              <div className="row g-2">
                {warningOptions.map((warning) => (
                  <div className="col-md-6" key={warning}>
                    <label className="warning-pill">
                      <input
                        type="checkbox"
                        checked={formData.warnings.includes(warning)}
                        onChange={() => handleWarningChange(warning)}
                      />

                      <span>{warning}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Error */}
            {error && <div className="form-error mb-3">{error}</div>}

            {/* Actions */}
            <div className="d-flex flex-column flex-sm-row gap-2 mt-4">
              <button type="submit" className="btn-smart-guidance flex-grow-1">
                Smart Guidance দেখুন
              </button>

              <button type="button" className="btn-reset" onClick={resetForm}>
                Reset
              </button>
            </div>
          </form>

          {/* Dynamic Result */}
          {result && (
            <div className="result-box">
              <div
                className={`result-status ${
                  formData.warnings.length > 0 ? "emergency" : "normal"
                }`}
              >
                <span>{formData.warnings.length > 0 ? "⚠️" : "🩺"}</span>

                <div>
                  <h4>
                    {formData.warnings.length > 0
                      ? "জরুরি চিকিৎসা প্রয়োজন"
                      : "পরিকল্পিত Orthopedic Appointment নিন"}
                  </h4>

                  <p>
                    {formData.warnings.length > 0
                      ? "আপনার নির্বাচিত সতর্কতার লক্ষণগুলো জরুরি মূল্যায়নের প্রয়োজন নির্দেশ করতে পারে। এখনই নিকটস্থ হাসপাতালের জরুরি বিভাগে যান।"
                      : "আপনার দেওয়া তথ্য অনুযায়ী চিকিৎসকের মূল্যায়নের জন্য অ্যাপয়েন্টমেন্ট নেওয়া উপযুক্ত হতে পারে।"}
                  </p>
                </div>
              </div>

              {/* Selected Warnings */}
              {formData.warnings.length > 0 && (
                <>
                  <h5>নির্বাচিত সতর্কতা:</h5>

                  <ul>
                    {formData.warnings.map((warning) => (
                      <li key={warning}>{warning}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Patient Information */}
              <div className="result-details">
                <h5>আপনার দেওয়া তথ্য</h5>

                <p>
                  <strong>সমস্যার স্থান:</strong> {formData.painArea}
                </p>

                <p>
                  <strong>শুরুর কারণ:</strong> {formData.howStarted}
                </p>

                <p>
                  <strong>সময়ের পরিমাণ:</strong> {formData.duration}
                </p>

                {formData.shortDesc && (
                  <p>
                    <strong>বিস্তারিত:</strong> {formData.shortDesc}
                  </p>
                )}
              </div>

              <ul>
                <li>আগের X-ray/MRI/report সঙ্গে রাখুন।</li>
                <li>বর্তমানে ব্যবহৃত ওষুধের তালিকা সঙ্গে রাখুন।</li>
                <li>আঘাতের ইতিহাস ও উপসর্গের সময়কাল চিকিৎসককে জানান।</li>
              </ul>

              <div className="d-flex flex-wrap gap-2">
                <a href="tel:01326252526" className="btn-serial">
                  ডা. মিঠুর সিরিয়াল নিন
                </a>

                <a href="tel:01326252526" className="btn-call">
                  ফোন করুন
                </a>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <p className="disclaimer-text">
            এই Smart Guide শিক্ষামূলক triage support; এটি AI diagnosis,
            X-ray/MRI interpretation বা চিকিৎসকের পরীক্ষা/পরামর্শের বিকল্প নয়।
            গুরুতর বা দ্রুত খারাপ হওয়া উপসর্গে নিকটস্থ জরুরি চিকিৎসা নিন। কোনো
            সতর্কতা নির্বাচন না করলেও জরুরি সমস্যা বাদ যায় না।
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: #362d59;
  .hero-banner,
  .guide-wrapper {
    margin-bottom: 50px !important;
  }
  .marg_bb {
    margin-bottom: "50px" !important;
  }
  /* Common */
  .section-title {
    font-size: 30px;
    font-weight: 800;
    color: #023b56;
  }

  .brand-pill,
  .badge-pill-custom {
    display: inline-block;
    padding: 8px 16px;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .brand-pill {
    background: #e4f5f6;
    color: #0096a3;
  }

  /* Hero */
  .hero-banner {
    background: linear-gradient(90deg, #f3f5fc, #eff5fc);
    border-bottom: 1px solid #e3ebf6;
  }

  .hero-title {
    font-size: clamp(30px, 3vw, 40px);
    font-weight: 800;
    color: #023b56;
  }

  .hero-subtitle {
    font-size: 17px;
    line-height: 1.7;
    color: #5b6d82;
  }

  .hero-image-card {
    width: 100%;
    max-width: 280px;
    height: 175px;
    margin-left: auto;
    border-radius: 16px;
    overflow: hidden;
    background: #dbe4ee;
    box-shadow: 0 4px 14px rgba(2, 59, 86, 0.06);
  }

  .hero-image-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Guide Cards */
  .card-left,
  .card-right {
    padding: 36px 34px;
    border-radius: 24px;
  }

  .card-left {
    background: linear-gradient(145deg, #076b7c, #066373);
    color: white;
    box-shadow: 0 14px 32px rgba(7, 107, 124, 0.16);
  }

  .badge-pill-custom {
    background: #e6f6f8;
    color: #097283;
  }

  .left-title {
    font-size: 34px;
    font-weight: 700;
    line-height: 1.35;
    color: white;
  }

  .left-desc {
    font-size: 16px;
    line-height: 1.75;
    color: #e2f1f3;
  }

  .cat-pill {
    display: inline-flex;
    align-items: center;
    padding: 9px 18px;
    border-radius: 50px;
    background: white;
    color: #36254b;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    transition: 0.2s;
  }

  .cat-pill:hover {
    transform: translateY(-2px);
    color: #076b7c;
  }

  .card-right {
    background: white;
    border: 1.5px solid #d5eaee;
    box-shadow: 0 12px 30px rgba(15, 76, 86, 0.05);
  }

  .right-title {
    font-size: 28px;
    font-weight: 700;
    color: #0f3d44;
  }

  .right-desc {
    font-size: 17px;
    line-height: 1.75;
    color: #2c5258;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
    font-size: 15px;
    color: #164850;
  }

  .contact-item a {
    color: inherit;
    text-decoration: none;
  }

  .contact-item a:hover {
    color: #0b8799;
  }

  .btn-appointment,
  .btn-queue {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 13px 24px;
    border-radius: 13px;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    transition: 0.2s;
  }

  .btn-appointment {
    background: #117585;
    border: 1px solid #117585;
    color: white;
  }

  .btn-appointment:hover {
    background: #0d5e6b;
    color: white;
    transform: translateY(-2px);
  }

  .btn-queue {
    background: white;
    border: 1.5px solid #cfe3e7;
    color: #103c42;
  }

  .btn-queue:hover {
    background: #f4fafb;
    color: #0f7181;
  }

  /* Guidance Form */
  .guidance-card {
    padding: 28px;
    border: 1.5px solid #d5e6eb;
    border-radius: 20px;
    background: white;
    box-shadow: 0 5px 25px rgba(15, 76, 86, 0.05);
  }

  .guidance-heading {
    padding-bottom: 18px;
    border-bottom: 1px solid #e5edf0;
  }

  .guidance-icon {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: #e9f6f7;
    font-size: 23px;
  }

  .guidance-heading h3 {
    font-size: 22px;
    font-weight: 800;
    color: #023b56;
  }

  .guidance-heading p {
    font-size: 14px;
    color: #718096;
  }

  .form-label-custom {
    display: block;
    margin-bottom: 7px;
    font-size: 15px;
    font-weight: 700;
    color: #362d59;
  }

  .custom-input {
    padding: 11px 14px;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    background-color: white;
    color: #374151;
    font-size: 15px;
    transition: 0.2s;
  }

  .custom-input:focus {
    border-color: #53168a;
    box-shadow: 0 0 0 0.15rem rgba(83, 22, 138, 0.12);
  }

  .custom-input::placeholder {
    color: #9ca3af;
    font-size: 14px;
  }

  .btn-voice {
    padding: 5px 12px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    background: white;
    color: #374151;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
  }

  .btn-voice:hover {
    background: #f0f8fa;
    border-color: #117585;
  }

  .warning-pill {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 100%;
    padding: 12px;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    background: white;
    cursor: pointer;
    transition: 0.2s;
  }

  .warning-pill:hover {
    border-color: #117585;
    background: #f4fafb;
  }

  .warning-pill input {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    accent-color: #53168a;
    cursor: pointer;
  }

  .warning-pill span {
    font-size: 13px;
    font-weight: 600;
    line-height: 1.5;
  }

  .form-error {
    padding: 10px 14px;
    border: 1px solid #ffcaca;
    border-radius: 8px;
    background: #fff0f0;
    color: #c62828;
    font-size: 14px;
  }

  .btn-smart-guidance,
  .btn-reset {
    padding: 12px 20px;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s;
  }

  .btn-smart-guidance {
    border: none;
    background: #521487;
    color: white;
    font-size: 15px;
  }

  .btn-smart-guidance:hover {
    background: #410e6d;
  }

  .btn-reset {
    border: 1px solid #521487;
    background: white;
    color: #521487;
  }

  .btn-reset:hover {
    background: #f6f0fa;
  }

  /* Result */
  .result-box {
    margin-top: 25px;
    padding: 22px;
    border: 1px solid #bce3cf;
    border-radius: 12px;
    background: #edf9f3;
    color: #155c47;
    animation: fadeIn 0.3s ease;
  }

  .result-status {
    display: flex;
    gap: 14px;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #cce8d8;
  }

  .result-status > span {
    font-size: 26px;
  }

  .result-status h4 {
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 800;
  }

  .result-status p,
  .result-box p,
  .result-box li {
    font-size: 14px;
    line-height: 1.7;
  }

  .result-status p {
    margin: 0;
  }

  .result-status.emergency {
    color: #a51e1e;
  }

  .result-status.normal {
    color: #155c47;
  }

  .result-box h5 {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 700;
  }

  .result-box ul {
    margin-bottom: 16px;
    padding-left: 20px;
  }

  .result-details {
    margin-bottom: 16px;
    padding: 16px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.7);
  }

  .result-details p {
    margin-bottom: 6px;
  }

  .btn-serial,
  .btn-call {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 18px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: 0.2s;
  }

  .btn-serial {
    background: #137a8b;
    color: white;
  }

  .btn-serial:hover {
    background: #0e6270;
    color: white;
  }

  .btn-call {
    border: 1px solid #bce3cf;
    background: white;
    color: #137a8b;
  }

  .btn-call:hover {
    background: #f3fbf7;
    color: #0e6270;
  }

  .disclaimer-text {
    margin: 18px 0 0;
    color: #6b7280;
    font-size: 12px;
    line-height: 1.7;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Responsive */
  @media (max-width: 991px) {
    .card-left,
    .card-right {
      padding: 30px 26px;
    }
  }

  @media (max-width: 767.98px) {
    .hero-image-card {
      max-width: 100%;
      height: 210px;
      margin: 0 auto;
    }

    .hero-title {
      font-size: 30px;
    }

    .left-title {
      font-size: 27px;
    }

    .card-left,
    .card-right {
      padding: 28px 22px;
      border-radius: 18px;
    }

    .guidance-card {
      padding: 20px 16px;
    }

    .btn-reset {
      width: 100%;
    }

    .result-box {
      padding: 16px;
    }

    .btn-appointment,
    .btn-queue {
      flex: 1;
    }
  }

  @media (max-width: 400px) {
    .left-title {
      font-size: 24px;
    }

    .cat-pill {
      padding: 8px 13px;
      font-size: 12px;
    }

    .guidance-heading h3 {
      font-size: 19px;
    }
  }
`;

export default OrthoSmart;
