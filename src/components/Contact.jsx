
import React from "react";
import styled from "styled-components";
export default function Contact() {
  return (
    <Section id="Contact">
      <div className="title">
        <h2>Contact Us</h2>
      </div>
      
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            
            <div className="details">
              <h4>Kishan Sheth</h4>
              <span>CEO - Shashaan Web Solutions</span>
            </div>
            <div class="col-lg-6">
        <div class="row">
          <div class="col-lg-6 info">
            <i class="fas fa-map"></i>
            <h4>Address</h4>
            <p>lorem ipsum Street,<br>Sao Paulo, SP 456879</p>
          </div>
          <div class="col-lg-6 info">
            <i class="fas fa-phone"></i>
            <h4>Call Us</h4>
            <p>+55 61 12365478<br>+55 61 23154687</br></p>
          </div>
          <div class="col-lg-6 info">
            <i class="fas fa-envelope"></i>
            <h4>Email Us</h4>
            <p>contact@test.com<br>test@example.com</br></p>
          </div>
          </div>
        </div>
        </div>
    
        </div>
    </Section>
  );
}
const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
