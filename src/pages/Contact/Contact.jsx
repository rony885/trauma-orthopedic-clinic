import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Wrapper className="py-5">
      {/* Section Heading */}
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
          <div className="heading text-center mb-40">
            <h3 className="heading__title">Contact</h3>
          </div>
        </div>
      </div>

      <section className="google-map py-0 ">
        <iframe
          frameBorder="0"
          height="500"
          width="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321.01090771624763!2d90.77597987691264!3d24.456896574068857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375692412f001e17%3A0x35f381b367f88b4d!2z4Ka44Ka-4Kaw4KeN4KaV4Ka_4KafIOCmueCmvuCmieCmuCwg4KaV4Ka_4Ka24KeL4Kaw4KaX4Kae4KeN4Kac!5e0!3m2!1sbn!2sbd!4v1769402250192!5m2!1sbn!2sbd"
          title="Google Map"
        ></iframe>
      </section>

      <section className="contact-layout1 pt-0 mt--100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-panel d-flex flex-wrap">
                {/* Contact Form */}
                <form className="contact-panel__form" id="contactForm">
                  <div className="row">
                    <div className="col-sm-12">
                      <h4 className="contact-panel__title">How Can We Help?</h4>
                      <p className="contact-panel__desc mb-30">
                        Please feel welcome to contact our friendly reception
                        staff with any general or medical enquiry. Our doctors
                        will receive or return any urgent calls.
                      </p>
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="form-group">
                        <i className="icon-user form-group-icon"></i>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          id="contact-name"
                          name="contact-name"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="form-group">
                        <i className="icon-email form-group-icon"></i>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          id="contact-email"
                          name="contact-email"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="form-group">
                        <i className="icon-phone form-group-icon"></i>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone"
                          id="contact-phone"
                          name="contact-phone"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="form-group">
                        <i className="icon-news form-group-icon"></i>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                          id="contact-subject"
                          name="contact-subject"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <i className="icon-alert form-group-icon"></i>
                        <textarea
                          className="form-control"
                          placeholder="Message"
                          id="contact-message"
                          name="contact-message"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="btn btn__secondary btn__rounded btn__block btn__xhight mt-10"
                      >
                        <span>Submit Request</span>
                        <i className="icon-arrow-right"></i>
                      </button>
                      <div className="contact-result"></div>
                    </div>
                  </div>
                </form>

                {/* Contact Info Panel */}
                <div className="contact-panel__info d-flex flex-column justify-content-between bg-overlay bg-overlay-primary-gradient">
                  <div className="bg-img">
                    <img src="/assets/images/banners/1.jpg" alt="banner" />
                  </div>
                  <div>
                    <h4 className="contact-panel__title color-white">
                      Quick Contacts
                    </h4>
                    <p className="contact-panel__desc font-weight-bold color-white mb-30">
                      Please feel free to contact our friendly staff with any
                      medical enquiry.
                    </p>
                  </div>
                  <div>
                    <ul className="contact__list list-unstyled mb-30">
                      <li>
                        <i className="icon-phone"></i>
                        <Link to="tel:01936209467">01936209467</Link>
                      </li>
                      <li>
                        <i
                          className="icon-email"
                          style={{ fontSize: "12px" }}
                        ></i>
                        <Link to="mailto:abc@healthbd.com">
                          abc@healthbd.com
                        </Link>
                      </li>

                      <li>
                        <i className="icon-location"></i>
                        <Link to="#">
                          {/* Near Circuit House, Gaital, Kishoreganj */}
                          Trauma Centre & Advanced Orthopedic Clinic,
                          Kishoreganj
                        </Link>
                      </li>
                      <li>
                        <i className="icon-clock"></i>
                        <Link to="#">SAT - THU : 0:00 am - 00:00 pm</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Contact;
