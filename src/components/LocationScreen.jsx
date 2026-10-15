import { motion } from "motion/react";
import FallingFlowers from "./FallingFlowers";

import thirdScreen from "../assets/wedding_invitation_design_3.png";
import thirdScreenPCImage from "../assets/wedding_invitation_pc_design_3.png";

// Replace these with your actual venue details
const venueName = "AMC GRAND";
const venueAddress = "16/4, Nagawara Main Rd, opposite to glass factory, Umar Nagar, Govindapura, Nagavara, Bengaluru, Karnataka 560045";

const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    venueAddress
)}&travelmode=driving`;

function LocationScreen({ onBack }) {
    return (
        <div className="fixed inset-0 h-[100dvh] w-full overflow-hidden bg-[#FCEEF1]">

            {/* Mobile Background */}
            <motion.img
                src={thirdScreen}
                alt="Wedding invitation background"
                className="absolute inset-0 h-full w-full object-fill min-[760px]:hidden"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            />

            {/* Desktop Background */}
            <motion.img
                src={thirdScreenPCImage}
                alt="Wedding invitation background"
                className="absolute inset-0 hidden h-full w-full object-fill min-[760px]:block"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            />

            {/* Falling Flowers */}
            <div className="pointer-events-none absolute inset-0 z-10">
                <FallingFlowers />
            </div>

            {/* Romantic Overlay */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-white/10 via-transparent to-pink-100/20" />

            {/* Location Content */}

            {/* Location Content */}
            <div className="absolute inset-0 z-20 flex items-center justify-center overflow-y-auto px-4 py-6">

                {/* MOBILE LAYOUT - unchanged */}
                <motion.div
                    className="w-full max-w-[320px] rounded-[1.5rem] border border-[#E8C4CF]/80 bg-[#FFF8FA]/90 px-5 py-5 text-center shadow-[0_12px_35px_rgba(152,77,104,0.15)] backdrop-blur-md sm:max-w-[350px] sm:px-7 sm:py-6 min-[760px]:hidden"
                    initial={{ opacity: 0, y: 20, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <motion.p
                        className="mb-1 text-lg tracking-[0.3em] text-[#C58B9C]"
                        animate={{ opacity: [0.65, 1, 0.65] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        ❀ ♡ ❀
                    </motion.p>

                    <p className="mb-1 text-[10px] uppercase tracking-[0.25em] text-[#B78391] sm:text-xs">
                        We warmly invite you to
                    </p>

                    <h1 className="font-wedding text-2xl leading-relaxed text-[#984D68] sm:text-3xl">
                        Wedding Venue
                    </h1>

                    <div className="mx-auto my-3 h-px w-16 bg-[#DDB0BE]" />

                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#E8C4CF] bg-[#FCEEF1]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="1.5"
                            className="h-6 w-6 text-[#984D68]" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                            <circle cx="12" cy="10" r="2.5" />
                        </svg>
                    </div>

                    <h2 className="mb-2 text-lg font-semibold leading-snug text-[#984D68] sm:text-xl">
                        {venueName}
                    </h2>

                    <p className="mx-auto max-w-[270px] text-xs leading-5 text-[#805665] sm:text-sm">
                        {venueAddress}
                    </p>

                    <p className="mt-3 font-wedding text-base italic text-[#B78391]">
                        We look forward to celebrating with you
                    </p>

                    <motion.a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Get directions to ${venueName} using Google Maps`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#B78391] to-[#984D68] px-4 py-3 text-xs font-semibold tracking-wide text-white shadow-md sm:text-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="1.8"
                            className="h-5 w-5" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                            <circle cx="12" cy="10" r="2.5" />
                        </svg>
                        Open in Google Maps ↗
                    </motion.a>

                    <p className="mt-2 text-[10px] leading-4 text-[#AD8290]">
                        Tap above to get directions
                    </p>

                    <motion.button
                        type="button"
                        onClick={onBack}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        className="mt-3 rounded-full border border-[#DDB0BE] px-5 py-2 text-xs font-medium text-[#984D68] hover:bg-[#FCEEF1]"
                    >
                        ← Back to Invitation
                    </motion.button>

                    <p className="mt-3 text-base tracking-[0.3em] text-[#C58B9C]">
                        ♡ ❀ ♡
                    </p>
                </motion.div>

                {/* PC LAYOUT - horizontal card */}

                <motion.div
                    className="hidden w-full max-w-4xl overflow-hidden rounded-[1.5rem] border border-[#E8C4CF]/90 bg-[#FFF8FA]/90 p-6 text-center shadow-[0_15px_45px_rgba(152,77,104,0.18)] backdrop-blur-md min-[760px]:block min-[760px]:p-7 lg:max-w-[850px] lg:p-8"
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    {/* Centered Heading */}
                    <motion.p
                        className="mb-1 text-lg tracking-[0.4em] text-[#C58B9C]"
                        animate={{ opacity: [0.65, 1, 0.65] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        ❀ ♡ ❀
                    </motion.p>

                    <p className="mb-1 text-[11px] uppercase tracking-[0.35em] text-[#B78391] lg:text-xs">
                        We warmly invite you to
                    </p>

                    <h1 className="font-wedding text-3xl leading-relaxed text-[#984D68] lg:text-4xl">
                        Wedding Venue
                    </h1>

                    <div className="mx-auto my-4 h-px w-24 bg-[#DDB0BE]" />

                    {/* Horizontal Content */}
                    <div className="mx-auto grid max-w-3xl grid-cols-2 items-stretch">

                        {/* Left: Venue Information */}
                        <div className="flex flex-col items-center justify-center border-r border-[#E8C4CF] px-5 py-3 lg:px-7">

                            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#E8C4CF] bg-[#FCEEF1]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    className="h-6 w-6 text-[#984D68]"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                                    />
                                    <circle cx="12" cy="10" r="2.5" />
                                </svg>
                            </div>

                            <h2 className="mb-2 text-xl font-semibold text-[#984D68] lg:text-2xl">
                                {venueName}
                            </h2>

                            <p className="max-w-sm text-xs leading-6 text-[#805665] lg:text-sm">
                                {venueAddress}
                            </p>

                            <p className="mt-3 font-wedding text-base italic text-[#B78391] lg:text-lg">
                                We look forward to celebrating with you
                            </p>
                        </div>

                        {/* Right: Directions */}
                        <div className="flex flex-col items-center justify-center px-5 py-3 lg:px-7">

                            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#E8C4CF] bg-[#FCEEF1]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    className="h-6 w-6 text-[#984D68]"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 11.5 11.5 3a2.1 2.1 0 0 1 3 0l6.5 6.5a2.1 2.1 0 0 1 0 3L12.5 21a2.1 2.1 0 0 1-3 0L3 14.5a2.1 2.1 0 0 1 0-3Z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12h6m-3-3 3 3-3 3"
                                    />
                                </svg>
                            </div>

                            <h2 className="mb-2 text-lg font-semibold text-[#984D68] lg:text-xl">
                                Join Us Here
                            </h2>

                            <p className="mb-4 max-w-xs text-xs leading-5 text-[#805665] lg:text-sm">
                                We can't wait to celebrate this special occasion with you.
                                Find your route to our venue below.
                            </p>

                            <motion.a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Get directions to ${venueName} using Google Maps`}
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow: "0 6px 18px rgba(152,77,104,0.22)",
                                }}
                                whileTap={{ scale: 0.96 }}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#B78391] to-[#984D68] px-5 py-3 text-xs font-semibold tracking-wide text-white shadow-md lg:px-6 lg:text-sm"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                                    />
                                    <circle cx="12" cy="10" r="2.5" />
                                </svg>
                                Open in Google Maps ↗
                            </motion.a>

                            <p className="mt-2 text-[10px] text-[#AD8290]">
                                Tap to get directions
                            </p>
                        </div>
                    </div>

                    {/* Back Button */}
                    <motion.button
                        type="button"
                        onClick={onBack}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        className="mt-5 rounded-full border border-[#DDB0BE] px-6 py-2 text-xs font-medium text-[#984D68] transition-colors hover:bg-[#FCEEF1] lg:text-sm"
                    >
                        ← Back to Invitation
                    </motion.button>

                    <p className="mt-3 text-base tracking-[0.35em] text-[#C58B9C]">
                        ♡ ❀ ♡
                    </p>
                </motion.div>

            </div>
        </div>
    );
}

export default LocationScreen;
