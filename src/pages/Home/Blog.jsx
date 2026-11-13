// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import blogsArray from "../../blogs.js";

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     setBlogs(blogsArray);
//   }, []);

//   return (
//     <section className="blog-grid pb-50">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6 offset-lg-3">
//             <div className="heading text-center mb-40">
//               <h3 className="heading__title">LATEST BLOGS</h3>
//             </div>
//           </div>
//         </div>

//         <Swiper
//           modules={[Autoplay]}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           spaceBetween={30}
//           slidesPerView={3}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {blogs.map((post) => (
//             <SwiperSlide key={post.id}>
//               <div className="post-item">
//                 <div className="post__img">
//                   <Link to={`/blog/blog-details/${post.id}`}>
//                     <img src={post.img} alt={post.title} loading="lazy" />
//                   </Link>
//                 </div>

//                 <div className="post__body">
//                   <div className="post__meta-cat">
//                     {post.categories.map((cat, index) => (
//                       <Link key={index} to="#">
//                         {cat}
//                       </Link>
//                     ))}
//                   </div>

//                   <div className="post__meta d-flex">
//                     <span className="post__meta-date">{post.date}</span>
//                     <Link className="post__meta-author" to="#">
//                       {post.author}
//                     </Link>
//                   </div>

//                   <h4 className="post__title">
//                     <Link to={`/blog/blog-details/${post.id}`}>
//                       {post.title.slice(0, 40)}...
//                     </Link>
//                   </h4>

//                   <p className="post__desc">{post.desc1.slice(0, 120)}...</p>
//                   <Link
//                     to={`/blog/blog-details/${post.id}`}
//                     className="btn btn__secondary btn__link btn__rounded"
//                   >
//                     <span>Read More</span>
//                     <i className="icon-arrow-right"></i>
//                   </Link>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Blog;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const blogData = [
  {
    id: 1,
    title: "AO Alliance — Fracture Management",
    subtitle: "Clinical Training & Workshop",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    alt: "AO Alliance — Fracture Management",
  },
  {
    id: 2,
    title: "Orthopedic Practice & Patient Care",
    subtitle: "Dr Deen Spine Care",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
    alt: "Orthopedic Practice & Patient Care",
  },
  {
    id: 3,
    title: "Medical Education & Professional Development",
    subtitle: "Professional Training & Development",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    alt: "Medical Education and Professional Development",
  },
];

const Blog = () => {
  return (
    <Wrapper className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end flex-wrap gap-2 mb-4">
          <div>
            <h2 className="section-title mb-1">
              কোর্স, ওয়ার্কশপ ও পেশাগত কার্যক্রম
            </h2>

            <p className="section-subtitle mb-0">
              আধুনিক জ্ঞান ও প্রযুক্তির সাথে নিয়মিত সম্পৃক্ততা
            </p>
          </div>

          <Link to="/blog-details/" className="top-link">
            সব দেখুন →
          </Link>
        </div>

        <div className="row g-4">
          {blogData.map((blog) => (
            <div key={blog.id} className="col-12 col-md-4">
              <Link to={`/blog-details/${blog.id}`} className="blog-card-link">
                <div className="custom-card h-100">
                  <div className="card-img-wrapper">
                    <img src={blog.image} alt={blog.alt} />
                  </div>

                  <div className="p-4">
                    <h3 className="card-item-title mb-2">{blog.title}</h3>

                    <p className="card-item-subtitle mb-0">{blog.subtitle}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  / .section-title {
    color: #08485a;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.3px;
  }

  .section-subtitle {
    color: var(--subtitle-color);
    font-size: 18px;
    font-weight: 500;
  }

  .see-all-link {
    color: #008c99;
    font-weight: 700;
    font-size: 18px;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .see-all-link:hover {
    color: var(--brand-teal-hover);
    transform: translateX(4px);
  }

  .top-link {
    color: #0b4f6c;
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
  }

  .top-link:hover {
    color: var(--color-primary);
  }

  .blog-card-link {
    display: block;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }

  .custom-card {
    background: #ffffff;
    border: 1.5px solid #82d1d8;
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.25s ease;
  }

  .custom-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(7, 78, 102, 0.08);
    border-color: #b9dbe6;
  }

  .card-img-wrapper {
    width: 100%;
    height: 240px;
    overflow: hidden;
    background: #eef4f7;
  }

  .card-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .card-item-title {
    color: #08485a;
    font-family: "Inter", "Hind Siliguri", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.35;
  }

  .card-item-subtitle {
    color: var(--card-subtitle-color);
    font-family: "Inter", "Hind Siliguri", sans-serif;
    font-size: 16px;
    font-weight: 500;
  }

  /* RESPONSIVE DESIGN */
  @media (max-width: 767.98px) {
    .section-title {
      font-size: 26px;
    }

    .section-subtitle {
      font-size: 15px;
    }

    .card-img-wrapper {
      height: 200px;
    }

    .card-item-title {
      font-size: 18px;
    }
  }
`;

export default Blog;
