import React from "react";
import Image from "next/image";
import mapImg from "../../../../assets/bd map.png";
import styles from "./BlurredImageSection.module.css";

const GetInTouch = () => {
  return (
    <section className="mt-12 mb-26">
      <div>
        <h3 className="text-4xl text-orange-500 text-center mb-8 font-bold font-sans py-2">
          Get In Touch
        </h3>
        <section className="md:relative">
          <div className={styles.sectionContainer}>
            <div className={styles.backgroundImage}></div>
            <div className={styles.blurOverlay}></div>
            <div className={styles.imageOverlay}></div>
            <div className={styles.rightBlurOverlay}></div>
            {/* Your content for the section */}
          </div>
          <div className="bg-orange-300 p-10 w-[450px] h-full text-left md:absolute top-0 right-5">
            <div className="">
              <h2>Contact Info</h2>
              <p>56 Banasree - Staff Quarter - Demra Rd, Dhaka</p>
              <p>Call : +880123698574</p>
              <p>Email : fixyourmotoro@gmail.com</p>
              <h2>Opening Ours</h2>
              <p>Sun-Thurs : 9:00 AM - 11:00 PM </p>
              <p>Fri : CLOSED</p>
              <p>Sat : 2:00 PM - 9:00 PM</p>
            </div>
          </div>
          <div className="bg-orange-300 p-10 w-96 h-full text-left md:absolute top-0 left-4">
            <h2>Our Branches</h2>
            <p>Divisions -</p>
            <li>Dhaka</li>
            <li>Chittogong</li>
            <li>Rajshahi</li>
            <li>Barishal</li>
            <li>Khulna</li>
            <li>Shylet</li>
            <li>Maymansingh</li>
            <li>Rangpur</li>
          </div>
        </section>
      </div>
    </section>
  );
};

export default GetInTouch;
