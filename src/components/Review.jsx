import React from "react";
import { Container } from "react-bootstrap";
import image11 from "./images/img1.png";
import Image from "react-bootstrap/Image";
import image_11 from "./images/img11.png";
import image_12 from "./images/img12.png";
import image_13 from "./images/img13.png";
import image_14 from "./images/img14.png";

const Review = () => {
  return (
    <>
      <Image className="img-11" src={image11} />
      <section className="reviewMain text-center">
        <p className="reviewPara ">
          “A great deal for the space and location. The restaurants available
          were all very good. Friendly staff, helpful disposition made our
          overall experience wonderful. a great deal for the space and location.
          We will be going again next year.”
        </p>
        <span className="reviewName mt-4 fs-5">Joseph Hart</span>
        <span className="reviewName mt-0">TRIPADVISOR</span>
      </section>
      <Container className="padding">
        <section className="d-flex padding">
          <div className="w-45 me-5">
            <span className="text-uppercase fontSmall">
              Stay Tuned with CozyStay
            </span>
            <h1 className="mt-3 lh-base">
              Sign up for our newsletter to receive our news, deals and special
              offers.
            </h1>
          </div>
          <div className="w-50 ms-4">
            <div className="reviewInputMain">
              <div>
                <input
                  type="email"
                  name="email"
                  id=""
                  className="reviewEmail"
                  placeholder="Your Email Address"
                />
                <button className="reviewBtn">Subscribe</button>
              </div>
              <hr />
              <div>
                <p className="">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id=""
                    className="reviewCheckbox"
                  />
                  I agree to the
                  <p href="#" className="reviewA">
                    Privace Policy
                  </p>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Container>
        <div className="d-flex justify-content-between gap-4">
          <Image src={image_11} className="reviewImages" />
          <Image src={image_12} className="reviewImages" />
          <Image src={image_13} className="reviewImages" />
          <Image src={image_14} className="reviewImages" />
        </div>
        <div className="padding text-center">
          <button className="reviewBtn2">Follow Us On Instagram</button>
        </div>
      </Container>
    </>
  );
};

export default Review;
