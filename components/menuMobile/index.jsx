import styles from "./menuMobile.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { FiMail, FiLinkedin } from "react-icons/fi";

export default function MenuMobile({ handleCheck, toggle }) {
  return (
    <>
      <AnimatePresence>
        {toggle ? (
          <motion.div
            key="menuMobile"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <nav className={styles.navbar}>
                <motion.button
                  id={styles.navButton}
                  onClick={handleCheck}
                  initial={{
                    rotate: "0deg",
                  }}
                  animate={{
                    rotate: "180deg",
                  }}
                  exit={{
                    rotate: "180deg",
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <IoClose size={45} color="#00796b" />
                </motion.button>
              
              <div className={styles.navItems}>
                <ul>
                  <motion.li
                    initial={{
                      opacity: 0,
                      y: -60,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -60,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0,
                    }}
                  >
                    <Link href="/" className={styles.itensNav}>
                      Home
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{
                      opacity: 0,
                      y: -60,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -60,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1,
                    }}
                  >
                    <Link href="/" className={styles.itensNav}>
                      About
                    </Link>
                  </motion.li>
                  <motion.li
                    initial={{
                      opacity: 0,
                      y: -60,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -60,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.2,
                    }}
                  >
                    <Link href="/" className={styles.itensNav}>
                      Contact
                    </Link>
                  </motion.li>
                </ul>
                <motion.div
                  key="iconsNavbar"
                  className={styles.iconsNav}
                  initial={{
                    opacity: 0,
                    y: -60,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -60,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3,
                  }}
                >
                  <FiMail color="#00796b" className={styles.iconNav} />
                  <FiLinkedin color="#00796b" className={styles.iconNav} />
                </motion.div>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
