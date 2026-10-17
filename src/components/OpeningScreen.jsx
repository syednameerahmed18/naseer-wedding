import { motion } from "motion/react";
import FallingFlowers from "./FallingFlowers";

import openingScreen from "../assets/wedding_invitation_design_1.png";
import openingScreenPCImage from "../assets/wedding_invitation_pc_design_1.png";

function OpeningScreen({ onNext }) {
  return (
    <div className="fixed inset-0 h-[100dvh] w-full overflow-hidden bg-[#FCEEF1]">
      {/* Mobile Background */}
      <img
        src={openingScreen}
        alt="Wedding Invitation"
        className="absolute inset-0 h-full w-full object-fill md:hidden"
      />

      {/* Tablet / PC Background */}
      <img
        src={openingScreenPCImage}
        alt="Wedding Invitation"
        className="absolute inset-0 hidden h-full w-full object-fill md:block"
      />

      {/* Falling Pink Flowers */}
      <FallingFlowers />

      {/* MOBILE LAYOUT - Screens Below 768px */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="
          absolute top-[15%] sm:top-[10%]
          left-0 w-full px-4 sm:px-8
          flex flex-col items-center text-center
          md:hidden
        "
      >
        {/* Arabic Bismillah */}
        <motion.p
          dir="rtl"
          lang="ar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-4 text-xl text-[#87435B] sm:mb-4 sm:text-3xl"
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </motion.p>

        {/* English Translation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-sm leading-6 text-[#8E6673] sm:text-base sm:leading-7"
        >
          In the name of Allah,
          <br />
          the Most Gracious,
          <br />
          the Most Merciful
        </motion.p>

        {/* First Decorative Separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="
            mt-3 mb-3 flex w-full max-w-[230px]
            items-center justify-center gap-2
            sm:mt-6 sm:mb-5 sm:max-w-sm sm:gap-3
          "
        >
          <div className="h-px flex-1 bg-[#C99A8A]" />

          <span className="text-base text-[#B78391] sm:text-xl">
            ♡ ❀ ♡
          </span>

          <div className="h-px flex-1 bg-[#C99A8A]" />
        </motion.div>

        {/* Invitation Heading */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
          className="mb-3 font-serif text-sm italic tracking-wide text-[#8E6673] sm:mb-4 sm:text-base"
        >
          You are invited to the Valima of
        </motion.p>


        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex flex-col items-center"
        >
          <h1 className="font-wedding text-4xl leading-tight text-[#984D68] sm:text-5xl">
            Dr. Syed Naseer Ahmed
          </h1>

          <p className="my-2 text-sm tracking-widest text-[#B78391] sm:my-4 sm:text-lg">
            ♡ WEDS ♡
          </p>

          <h2 className="font-wedding text-4xl leading-tight text-[#984D68] sm:text-5xl">
            Dr. Ayesha Mohammedi
          </h2>
        </motion.div>

        {/* Second Decorative Separator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="
            mt-3 mb-3 flex w-full max-w-[230px]
            items-center justify-center gap-2
            sm:mt-6 sm:mb-5 sm:max-w-sm sm:gap-3
          "
        >
          <div className="h-px flex-1 bg-[#C99A8A]" />

          <span className="text-base text-[#B78391] sm:text-xl">
            ♡ ❀ ♡
          </span>

          <div className="h-px flex-1 bg-[#C99A8A]" />
        </motion.div>

        {/* Invitation Message */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
          className="
            mt-2 max-w-sm text-sm leading-6
            text-[#805C68] sm:text-base sm:leading-8
          "
        >
          With hearts full of love and gratitude,
          <br />
          we invite you to be a part of
          <br />
          a beautiful new beginning.
        </motion.p>

        {/* Mobile Heart Button */}
        {/* Mobile Heart Button */}
        <motion.button
          type="button"
          onClick={onNext}
          aria-label="Go to the next invitation screen"
          initial={{ opacity: 0, y: 8 }}
          animate={{
            opacity: 1,
            y: [0, -3, 0],
            rotate: [0, 0, -2, 2, -2, 2, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 1 },
            y: {
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            },
            rotate: {
              duration: 0.45,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
              delay: 4,
            },
          }}
          whileHover={{
            scale: 1.1,
            filter: "brightness(1.06)",
          }}
          whileTap={{ scale: 0.93 }}
          className="
    relative mt-4 flex h-[72px] w-[108px]
    shrink-0 items-center justify-center
    cursor-pointer
    drop-shadow-[0_5px_7px_rgba(135,67,91,0.30)]
    focus-visible:outline-2 focus-visible:outline-offset-4
    focus-visible:outline-[#984D68]
    sm:h-[80px] sm:w-[120px]
  "
        >
          <svg
            viewBox="0 0 120 105"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="heartGradient"
                x1="0"
                y1="0"
                x2="0.8"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0%" stopColor="#FCE0E7" />
                <stop offset="50%" stopColor="#F4BFD0" />
                <stop offset="100%" stopColor="#E89BB5" />
              </linearGradient>
            </defs>

            <path
              d="M60 96 C49 84 8 57 8 32 C8 5 39 2 60 27 C81 2 112 5 112 32 C112 57 71 84 60 96 Z"
              fill="url(#heartGradient)"
              stroke="#B75D78"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Subtle highlight for a glossy button effect */}
            <path
              d="M25 27 C28 13 43 12 51 22"
              fill="none"
              stroke="#FFF0F5"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.8"
            />
          </svg>

          <span
            className="
      relative mt-1 font-wedding text-base font-semibold
      text-[#78334D]
      drop-shadow-[0_1px_1px_rgba(255,255,255,0.45)]
      sm:text-lg
    "
          >
            Click Me
          </span>
        </motion.button>

      </motion.div>

      {/* TABLET / DESKTOP LAYOUT - 768px and Wider */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="
          absolute inset-0 hidden
          flex-col items-center
          px-6 pt-[16vh] pb-[16vh]
          md:flex lg:px-8 xl:px-12
        "
      >
        {/* Arabic Bismillah */}
        <motion.p
          dir="rtl"
          lang="ar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="
            shrink-0 text-xl text-[#87435B]
            md:text-2xl xl:text-3xl 2xl:text-4xl
          "
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </motion.p>

        {/* Main Horizontal Row */}
        <div className="flex w-full flex-1 items-center justify-center">
          <div
            className="
              flex w-full max-w-fit
              items-center justify-center gap-2
              lg:gap-3 2xl:gap-4
            "
          >
            {/* English Translation */}
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="
                w-[17%] shrink-0 text-center
                font-serif text-xs italic leading-relaxed
                text-[#8E6673]
                md:text-sm lg:text-base
                xl:w-[18%] xl:text-lg
              "
            >
              In the name of Allah,
              <br />
              the Most Gracious,
              <br />
              the Most Merciful
            </motion.p>

            {/* First Vertical Floral Separator */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0.7 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              aria-hidden="true"
              className="
                flex h-36 w-6 shrink-0
                flex-col items-center justify-center
                gap-1 text-base text-[#B78391]
                md:h-44 md:w-7 md:gap-2 md:text-lg
                lg:h-52 lg:w-8 lg:text-xl
                xl:h-56 xl:w-10 xl:gap-3 xl:text-2xl
                2xl:h-64
              "
            >
              <div className="w-px flex-1 bg-[#C99A8A]" />

              <span>♡</span>
              <span>❀</span>
              <span>♡</span>

              <div className="w-px flex-1 bg-[#C99A8A]" />
            </motion.div>
            <motion.div className="flex flex-col">
              {/* Invitation Heading */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="
    mb-3 font-serif italic tracking-wide
    text-sm text-[#8E6673]
    md:text-base lg:text-lg xl:text-xl
  "
              >
                You are invited to the Valima of
              </motion.p>

              {/* Couple Names */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="
                flex min-w-0 flex-1
                flex-col items-center justify-center
                text-center
              "
              >
                <h1
                  className="
                  whitespace-nowrap font-wedding
                  text-xl leading-tight text-[#984D68]
                  md:text-2xl lg:text-3xl
                  xl:text-4xl 2xl:text-5xl
                "
                >
                  Dr. Syed Naseer Ahmed
                </h1>

                <p
                  className="
                  my-2 text-xs tracking-widest
                  text-[#B78391]
                  md:my-3 md:text-sm
                  lg:my-4 lg:text-base
                  2xl:text-lg
                "
                >
                  ♡ WEDS ♡
                </p>

                <h2
                  className="
                  whitespace-nowrap font-wedding
                  text-xl leading-tight text-[#984D68]
                  md:text-2xl lg:text-3xl
                  xl:text-4xl 2xl:text-5xl
                "
                >
                  Dr. Ayesha Mohammedi
                </h2>
              </motion.div>
            </motion.div>

            {/* Second Vertical Floral Separator */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0.7 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              aria-hidden="true"
              className="
                flex h-36 w-6 shrink-0
                flex-col items-center justify-center
                gap-1 text-base text-[#B78391]
                md:h-44 md:w-7 md:gap-2 md:text-lg
                lg:h-52 lg:w-8 lg:text-xl
                xl:h-56 xl:w-10 xl:gap-3 xl:text-2xl
                2xl:h-64
              "
            >
              <div className="w-px flex-1 bg-[#C99A8A]" />

              <span>♡</span>
              <span>❀</span>
              <span>♡</span>

              <div className="w-px flex-1 bg-[#C99A8A]" />
            </motion.div>

            {/* Invitation Message */}
            <motion.p
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.1 }}
              className="
                w-[20%] shrink-0 text-center
                font-serif text-xs italic leading-relaxed
                text-[#8E6673]
                md:text-sm lg:text-base
                xl:w-[21%] xl:text-lg
                2xl:text-xl
              "
            >
              With hearts full of love and gratitude,
              <br />
              we invite you to be a part of
              <br />
              a beautiful new beginning.
            </motion.p>
          </div>
        </div>

        {/* Tablet / Desktop Heart Button */}
        <motion.button
          type="button"
          onClick={onNext}
          aria-label="Go to the next invitation screen"
          initial={{ opacity: 0, y: 8 }}
          animate={{
            opacity: 1,
            y: [0, -2, 0],
            rotate: [0, 0, -2, 2, -2, 2, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 4 },
            y: {
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.6,
            },
            rotate: {
              duration: 0.45,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: "easeInOut",
              delay: 4.8,
            },
          }}
          whileHover={{ scale: 1.08, brightness: 1.05 }}
          whileTap={{ scale: 0.94 }}
          className="
    relative mt-[-2vh] flex h-[68px] w-[106px]
    shrink-0 items-center justify-center
    cursor-pointer
    drop-shadow-[0_5px_7px_rgba(135,67,91,0.30)]
    focus-visible:outline-2
    focus-visible:outline-offset-4
    focus-visible:outline-[#984D68]
    md:h-[76px] md:w-[120px]
    xl:h-[84px] xl:w-[130px]
  "
        >
          <svg
            viewBox="0 0 120 105"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="desktopHeartGradient"
                x1="0"
                y1="0"
                x2="0.8"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0%" stopColor="#FCE0E7" />
                <stop offset="50%" stopColor="#F4BFD0" />
                <stop offset="100%" stopColor="#E89BB5" />
              </linearGradient>
            </defs>

            <path
              d="M60 96 C49 84 8 57 8 32 C8 5 39 2 60 27 C81 2 112 5 112 32 C112 57 71 84 60 96 Z"
              fill="url(#desktopHeartGradient)"
              stroke="#B75D78"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            <path
              d="M25 27 C28 13 43 12 51 22"
              fill="none"
              stroke="#FFF0F5"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.8"
            />
          </svg>

          <span
            className="
      relative mt-1 font-wedding font-semibold
      text-[#78334D]
      drop-shadow-[0_1px_1px_rgba(255,255,255,0.45)]
      text-sm md:text-base xl:text-lg
    "
          >
            Click Me
          </span>
        </motion.button>

      </motion.div>
    </div>
  );
}

export default OpeningScreen;
