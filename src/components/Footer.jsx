import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Wrapper className="py-0">
        <div className="footer-secondary">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 d-flex justify-content-center align-items-center">
                <span className="fz-14 mr-1 text-center">
                  Copyright © 2026{" "}
                  {/* <span style={{ color: "#1D2A4D" }}>Unity Health Centre</span>. */}
                  <span>Trauma Centre & Advanced Orthopedic Clinic</span>.
                  Developed By{" "}
                  <Link
                    to="https://www.astrosoftbd.com"
                    target="_blank"
                    className="fz-14"
                    // style={{ color: "#1D2A4D" }}
                  >
                    ASTROSOFT BD
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

const Wrapper = styled.section`
  .footer-secondary {
    background-color: #1d2a4d;
  }
`;

export default Footer;
