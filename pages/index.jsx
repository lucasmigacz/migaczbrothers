import Image from "next/image";
import NavbarModule from "../components/NavbarModule";

import FirstImage from "../public/maninchair.svg";
import AboutUsImage from "../public/aboutUs.webp";
import customDesign from "../public/customdesign.png";
import development from "../public/development.png";
import maintenence from "../public/maintenence.png";
import wireTransfer from "../public/wireTransfer.svg";
import creditCard from "../public/creditCard.svg";
import crypto from "../public/crypto.svg";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { FaSmileBeam, FaArrowRight } from "react-icons/fa";

import MenuMobile from "../components/menuMobile";
import { useState } from "react";

export default function Home() {
  <Head>
    <style>
      @import
      url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');{" "}
    </style>
  </Head>;

  const [toggle, setToggle] = useState(false);
  const handleCheck = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className={styles.container}>
      <MenuMobile handleCheck={handleCheck} toggle={toggle} />
      <NavbarModule />
      <section className={styles.firstContainer}>
        <div className={styles.firstContent}>
          <div className={styles.firstContentText}>
            <p className={styles.welcome}>
              Welcome! <FaSmileBeam className={styles.FaSmileBeam} />
            </p>
            <h1 className={styles.hwhite}>
              We design <span className={styles.hgreen}>experience</span>
              <br />
              and develop <span className={styles.hgreen}>solutions</span>.
            </h1>
            <p className={styles.firstContentParagraph}>
              Let's build something together!
            </p>
            <Link href="#" className={styles.linksFirstContent}>
              Give us a call! <FaArrowRight className={styles.FaArrowRight} />
            </Link>
          </div>
          <div className={styles.firstContentImage}>
            <Image src={FirstImage} alt="maninchair" />
          </div>
        </div>
      </section>
      <section className={styles.aboutUs}>
        <div className={styles.aboutUsContent}>
          <div className={styles.aboutUsContentText}>
            <h2>About Us</h2>
            <p>
              A team specialized in high-quality software solutions to help
              <br />
              your businesses show their online presence
            </p>
            <button className={styles.aboutUsButton}>
              Get to know us more
            </button>
          </div>
          <div className={styles.aboutUsContentImage}>
            <Image
              src={AboutUsImage}
              className={styles.AboutUsImage}
              alt="about us"
            />
          </div>
        </div>
      </section>
      <section className={styles.agencyContainer}>
        <div className={styles.agencyContent}>
          <div className={styles.agencyContentText}>
            <h1>
              We are an{" "}
              <strong className={styles.gradientAgency}>agency</strong>.
            </h1>
          </div>
          <h2 className={styles.weTake}>We take care of it all</h2>
          <div className={styles.cardsAgency}>
            <div className={styles.customDesign}>
              <Image
                src={customDesign}
                width={340}
                height={440}
                alt="Custom Design"
                className={styles.imageAgency}
                id={styles.imageCustomDesign}
              />
              <div className={styles.cardsAgencyText}>
                <p className={styles.servicesSpacing}>Services</p>
                <h3>Custom design</h3>
                <p>
                  We can create a UI/UX for your business that is backed by
                  multiple tried-and-true design components.
                </p>
              </div>
            </div>
            <div className={styles.development}>
              <Image
                src={development}
                width={340}
                height={440}
                alt="Development"
                className={styles.imageAgency}
                id={styles.imageDevelopment}
              />
              <div className={styles.cardsAgencyText}>
                <p className={styles.servicesSpacing}>Services</p>
                <h3 className={styles.titleCard}>Development</h3>
                <p>
                  Our highly-skilled engineers are prepared to create
                  high-performance, scalable software solutions, covering the
                  full stack from backend to frontend.
                </p>
              </div>
            </div>

            <div className={styles.maintenence}>
              <Image
                src={maintenence}
                width={340}
                height={440}
                alt="Maintenence"
                className={styles.imageAgency}
                id={styles.imageMaintenence}
              />
              <div className={styles.cardsAgencyText}>
                <p className={styles.servicesSpacing}>Services</p>
                <h3>Maintenence</h3>
                <p>
                  If you're looking for a reliable service to maintain your
                  website or system, we'll provide you with the best care at an
                  unbeatable price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.paymentMethodsContainer}>
        <h1>Payment methods</h1>
        <div className={styles.paymentMethodsContent}>
          <div className={styles.paymentUnity}>
            <Image src={wireTransfer} />
            <p>Wire Transfer</p>
          </div>
          <div className={styles.paymentUnity}>
            <Image src={creditCard} />
            <p>Credit Card</p>
          </div>
          <div className={styles.paymentUnity}>
            <Image src={crypto} />
            <p>Crypto</p>
          </div>
        </div>
      </section>
    </div>
  );
}
