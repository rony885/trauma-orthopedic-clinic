// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import blogsArray from "../../blogs.js";

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     setBlogs(blogsArray);
//   }, []);

//   return (
//     <>
//       <section
//         className="page-title page-title-layout5 bg-overlay"
//         style={{
//           backgroundImage: 'url("/assets/images/page-titles/8.jpg")',
//           backgroundSize: "cover",
//           backgroundPosition: "center center",
//         }}
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h1 className="pagetitle__heading">Blogs</h1>
//               <nav>
//                 <ol className="breadcrumb mb-0">
//                   <li className="breadcrumb-item">
//                     <Link to="/">Home</Link>
//                   </li>
//                   <li className="breadcrumb-item active" aria-current="page">
//                     Blogs
//                   </li>
//                 </ol>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="blog-grid">
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
//               <div className="heading text-center mb-40">
//                 <h3 className="heading__title">Our Blogs</h3>
//                 <p className="heading__desc">Explore News & Feed</p>
//               </div>
//             </div>
//           </div>

//           <div className="row">
//             {blogs.map((post) => (
//               // <div className="col-sm-12 col-md-6 col-lg-4" key={post.id}>
//               <div className="col-sm-12 col-md-6 col-lg-6" key={post.id}>
//                 <div className="post-item">
//                   <div className="post__img">
//                     <Link to={`/blog/blog-details/${post.id}`}>
//                       <img src={post.img} alt={post.title} loading="lazy" />
//                     </Link>
//                   </div>

//                   <div className="post__body">
//                     <div className="post__meta-cat">
//                       {post.categories.map((cat, index) => (
//                         <Link to="#" key={index}>
//                           {cat}
//                         </Link>
//                       ))}
//                     </div>

//                     <div className="post__meta d-flex">
//                       <span className="post__meta-date">{post.date}</span>
//                       <Link
//                         className="post__meta-author"
//                         to={`/blog/blog-details/${post.id}`}
//                       >
//                         {post.author}
//                       </Link>
//                     </div>

//                     <h4 className="post__title">
//                       <Link to={`/blog/blog-details/${post.id}`}>
//                         {post.title.slice(0, 40)}...
//                       </Link>
//                     </h4>

//                     <p className="post__desc">{post.desc1.slice(0, 120)}...</p>
//                     <Link
//                       to={`/blog/blog-details/${post.id}`}
//                       className="btn btn__secondary btn__link btn__rounded"
//                     >
//                       <span>Read More</span>
//                       <i className="icon-arrow-right"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Pagination */}
//           <div className="row d-none">
//             <div className="col-12 text-center">
//               <nav className="pagination-area">
//                 <ul className="pagination justify-content-center">
//                   <li>
//                     <Link className="current" to="#">
//                       1
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="#">2</Link>
//                   </li>
//                   <li>
//                     <Link to="#">
//                       <i className="icon-arrow-right"></i>
//                     </Link>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Blog;

import React from "react";
import BlogHeroSection from "./BlogHeroSection";
import HealthGuide from "./HealthGuide";
import PatientVideoSection from "./PatientVideoSection";
import HealthInfographics from "./HealthInfographics";

const Blog = () => {
  return (
    <div>
      <BlogHeroSection />
      <HealthGuide />
      <PatientVideoSection />
      <HealthInfographics />
    </div>
  );
};

export default Blog;

// import React, { useState } from "react";
// import styled from "styled-components";

// const Blog = () => {
//   const [activeStep, setActiveStep] = useState(1);

//   const cards = [
//     {
//       id: 1,
//       title: "Card One",
//       image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
//       description: "This is the first card.",
//       demoLink: "https://example.com/demo1",
//     },
//     {
//       id: 2,
//       title: "Card Two",
//       image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
//       description: "This is the second card.",
//       demoLink: "https://example.com/demo2",
//     },
//     {
//       id: 3,
//       title: "Card Three",
//       image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
//       description: "This is the third card.",
//       demoLink: "https://example.com/demo3",
//     },
//     {
//       id: 4,
//       title: "Card Four",
//       image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7",
//       description: "This is the fourth card.",
//       demoLink: "https://example.com/demo4",
//     },
//     {
//       id: 5,
//       title: "Card Five",
//       image: "https://images.unsplash.com/photo-1497366811363-6870744d04b2",
//       description: "This is the fifth card.",
//       demoLink: "https://example.com/demo5",
//     },
//     {
//       id: 6,
//       title: "Card Six",
//       image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
//       description: "This is the sixth card.",
//       demoLink: "https://example.com/demo6",
//     },
//   ];

//   const activeCard = cards.find((card) => card.id === activeStep);

//   return (
//     <Wrapper>
//       <div className="blog-container">
//         {/* ================= TITLE ================= */}
//         <h1 className="text-center mb-4">Card Stepper</h1>

//         {/* ================= STEPPER ================= */}
//         <div className="stepper">
//           {cards.map((card, index) => (
//             <React.Fragment key={card.id}>
//               <button
//                 type="button"
//                 className={`step-button ${
//                   activeStep === card.id ? "active" : ""
//                 }`}
//                 onClick={() => setActiveStep(card.id)}
//               >
//                 {card.id}
//               </button>

//               {index < cards.length - 1 && (
//                 <div
//                   className={`step-line ${
//                     activeStep > card.id ? "completed" : ""
//                   }`}
//                 ></div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>

//         {/* ================= ACTIVE CARD ================= */}
//         <div className="card-wrapper">
//           <div className="demo-card">
//             {/* Image */}
//             <img
//               src={activeCard.image}
//               alt={activeCard.title}
//               className="card-image"
//             />

//             {/* Content */}
//             <div className="card-content">
//               <h2>{activeCard.title}</h2>

//               <p>{activeCard.description}</p>

//               <a
//                 href={activeCard.demoLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="demo-button"
//               >
//                 Live Demo
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* ================= NAVIGATION ================= */}
//         <div className="navigation-buttons">
//           <button
//             type="button"
//             onClick={() => setActiveStep((prev) => Math.max(prev - 1, 1))}
//             disabled={activeStep === 1}
//           >
//             ← Previous
//           </button>

//           <button
//             type="button"
//             onClick={() => setActiveStep((prev) => Math.min(prev + 1, 6))}
//             disabled={activeStep === 6}
//           >
//             Next →
//           </button>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .blog-container {
//     width: 100%;
//     max-width: 1000px;
//     margin: 0px auto;
//     padding: 20px;
//   }

//   /* =========================
//      STEPPER
//   ========================= */

//   .stepper {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 40px 0;
//   }

//   .step-button {
//     width: 45px;
//     height: 45px;
//     border-radius: 50%;
//     border: 2px solid #ccc;
//     background: #ffffff;
//     color: #555;
//     font-size: 18px;
//     font-weight: 600;
//     cursor: pointer;
//     transition: all 0.3s ease;
//   }

//   .step-button.active {
//     background: #6563f1;
//     color: #ffffff;
//     border-color: #6563f1;
//     transform: scale(1.1);
//   }

//   .step-line {
//     width: 80px;
//     height: 3px;
//     background: #dddddd;
//     transition: all 0.3s ease;
//   }

//   .step-line.completed {
//     background: #6563f1;
//   }

//   /* =========================
//      CARD
//   ========================= */

//   .card-wrapper {
//     display: flex;
//     justify-content: center;
//   }

//   .demo-card {
//     width: 600px;
//     background: #ffffff;
//     border-radius: 15px;
//     overflow: hidden;
//     box-shadow: 0 5px 25px rgba(0, 0, 0, 0.12);
//     transition: all 0.3s ease;
//   }

//   .demo-card:hover {
//     transform: translateY(-5px);
//   }

//   .card-image {
//     width: 100%;
//     height: 300px;
//     object-fit: cover;
//     display: block;
//   }

//   .card-content {
//     padding: 25px;
//     text-align: center;
//   }

//   .card-content h2 {
//     margin-bottom: 10px;
//   }

//   .card-content p {
//     color: #666;
//     margin-bottom: 20px;
//   }

//   .demo-button {
//     display: inline-block;
//     padding: 10px 25px;
//     background: #6563f1;
//     color: #ffffff;
//     text-decoration: none;
//     border-radius: 6px;
//     transition: all 0.3s ease;
//   }

//   .demo-button:hover {
//     background: #4e4cd0;
//     color: #ffffff;
//   }

//   /* =========================
//      PREVIOUS / NEXT
//   ========================= */

//   .navigation-buttons {
//     display: flex;
//     justify-content: center;
//     gap: 15px;
//     margin-top: 30px;
//   }

//   .navigation-buttons button {
//     padding: 10px 25px;
//     border: none;
//     border-radius: 6px;
//     background: #6563f1;
//     color: #ffffff;
//     cursor: pointer;
//   }

//   .navigation-buttons button:disabled {
//     background: #cccccc;
//     cursor: not-allowed;
//   }

//   /* =========================
//      RESPONSIVE
//   ========================= */

//   @media (max-width: 768px) {
//     .stepper {
//       overflow-x: auto;
//       justify-content: flex-start;
//       padding: 10px;
//     }

//     .step-line {
//       width: 40px;
//     }

//     .demo-card {
//       width: 100%;
//     }

//     .card-image {
//       height: 220px;
//     }
//   }
// `;

// export default Blog;
