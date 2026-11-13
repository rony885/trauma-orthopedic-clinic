import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = () => {
  return (
    <Wrapper>
      <div className="py-3 card">
        <div className="d-flex flex-wrap justify-content-center gap-3">
    
          <Link to="#" className="btn custom-btn btn-teal">
            <i className="fa-regular fa-calendar-check btn-icon"></i>
            <span>অ্যাপয়েন্টমেন্ট নিন</span>
          </Link>

          
          <Link to="#" className="btn custom-btn btn-green">
            <i className="fa-solid fa-tv btn-icon"></i>
            <span>লাইভ সিরিয়াল / TV Queue</span>
          </Link>

        
          <Link to="#" className="btn custom-btn btn-teal">
            <i className="fa-solid fa-mobile-screen-button btn-icon"></i>
            <span>অ্যাপ ডাউনলোড</span>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 5px;
  padding-bottom: 8px;

  .card {
    background-color: #ffffff;
    border: 1px solid #eeeeee;
    /* border-radius: 12px; */
    padding: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  }

  .custom-btn {
    border: none;
    color: #ffffff;
    font-weight: 600;
    padding: 12px 24px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-decoration: none;
    font-size: 15px;
  }

  .custom-btn:hover {
    opacity: 0.92;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  .btn-teal {
    background-color: #178396;
  }

  .btn-green {
    background-color: #119e52;
  }

  .btn-icon {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    .custom-btn {
      width: 100%;
    }
  }
`;

export default Card;
