"use client";

import styles from "@/app/_styles/footer.module.css";
import Link from "next/link";
import { scrollToTop } from "@/app/_utils/scroll-to-top";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.links}>
          <div className={styles.contact}>
            <h4>Contact</h4>
            <Link href="callto:+919801134889">+91 9801134889</Link>
            <Link href="mailto:maciej@bernatowicz.dev">
            thee.shadow.dev@gmail.com
            </Link>
          </div>

          <div className={styles.socialQuick}>
            <div className={styles.social}>
              <h4 className={styles.desktopH4}>Connect with Me</h4>
              <h4 className={styles.mobileH4}>Socials</h4>
              <Link href="https://www.linkedin.com/in/devkaushalprakash/" target="_blank">
                LinkedIn
              </Link>
              <Link href="https://github.com/kaushal-Prakash" target="_blank">
                GitHub
              </Link>
              <Link
                href="MB_resume_og_pers.pdf"
                type="application/pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </div>

            <div className={styles.quick}>
              <h4>Quick Links</h4>
              <Link href="#home">Home</Link>
              <Link href="#about">About Me</Link>
              <Link href="#projects">Projects</Link>
              {/* <Link href="#experience">Experience</Link> */}
            </div>
          </div>
        </div>

        <div className={styles.copy}>
          <h4>&copy; 2024 Kaushal Prakash</h4>
          <h4 onClick={scrollToTop}>Go back to top</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
