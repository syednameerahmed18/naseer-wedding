import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import FallingFlowers from "./FallingFlowers";
import secondScreen from "../assets/wedding_invitation_design_2.png";
import secondScreenPCImage from "../assets/wedding_invitation_pc_design_2.png";

function SecondScreen({onBack, onLocation}) {
    const canvasRef = useRef(null);
    const isScratchingRef = useRef(false);
    const lastPointRef = useRef(null);

    // Wedding date: 27 November 2026, at midnight local time.
    const weddingDate = new Date(2026, 10, 28, 0, 0, 0);

    const calculateTimeLeft = () => {
        const difference = Math.max(0, weddingDate.getTime() - Date.now());

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Draw the scratchable pink cover.
    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        const drawCover = () => {
            const rect = canvas.getBoundingClientRect();

            if (!rect.width || !rect.height) return;

            const pixelRatio = window.devicePixelRatio || 1;

            canvas.width = Math.round(rect.width * pixelRatio);
            canvas.height = Math.round(rect.height * pixelRatio);

            ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            ctx.globalCompositeOperation = "source-over";

            // Pink scratchable surface.
            ctx.fillStyle = "#fddada";
            ctx.fillRect(0, 0, rect.width, rect.height);

            // Decorative inner border.
            ctx.strokeStyle = "rgba(152, 77, 104, 0.45)";
            ctx.lineWidth = 1;
            ctx.strokeRect(10, 10, rect.width - 20, rect.height - 20);

            // Scratch instructions.
            const fontSize = Math.min(
                22,
                Math.max(13, rect.width * 0.045)
            );

            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            ctx.fillStyle = "#984D68";
            ctx.font = `600 ${fontSize}px Georgia, serif`;

            ctx.fillText(
                "✧ Scratch to Reveal ✧",
                rect.width / 2,
                rect.height / 2 - fontSize * 0.7
            );

            ctx.font = `${Math.max(11, fontSize * 0.7)}px Georgia, serif`;

            ctx.fillStyle = "#805C68";

            ctx.fillText(
                "A special date awaits you",
                rect.width / 2,
                rect.height / 2 + fontSize * 0.9
            );
        };

        drawCover();

        // Keep the canvas correctly sized on screen changes.
        const resizeObserver = new ResizeObserver(drawCover);

        resizeObserver.observe(canvas);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    // Scratch away the cover using mouse or touch.
    const handlePointerDown = (event) => {
        event.preventDefault();

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");

        if (!canvas || !ctx) return;

        isScratchingRef.current = true;
        canvas.setPointerCapture(event.pointerId);

        const rect = canvas.getBoundingClientRect();

        const point = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        };

        lastPointRef.current = point;

        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(
            point.x,
            point.y,
            Math.max(15, Math.min(26, rect.width * 0.045)),
            0,
            Math.PI * 2
        );
        ctx.fill();
    };

    const handlePointerMove = (event) => {
        if (!isScratchingRef.current || !lastPointRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");

        if (!canvas || !ctx) return;

        event.preventDefault();

        const rect = canvas.getBoundingClientRect();

        const currentPoint = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        };

        // Erase a smooth path as the user scratches.
        ctx.globalCompositeOperation = "destination-out";
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.lineWidth = Math.max(30, rect.width * 0.09);

        ctx.beginPath();
        ctx.moveTo(
            lastPointRef.current.x,
            lastPointRef.current.y
        );
        ctx.lineTo(currentPoint.x, currentPoint.y);
        ctx.stroke();

        lastPointRef.current = currentPoint;
    };

    const handlePointerUp = () => {
        isScratchingRef.current = false;
        lastPointRef.current = null;
    };

    return (
        <div className="fixed inset-0 h-[100dvh] w-full overflow-hidden bg-[#FCEEF1]">
            {/* Mobile Background: Below 760px */}
            <motion.img
                src={secondScreen}
                alt="Wedding Invitation - Second Screen"
                className="absolute inset-0 h-full w-full object-fill min-[760px]:hidden"
                initial={{
                    opacity: 0,
                    scale: 1.08,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    opacity: {
                        duration: 0.8,
                        ease: "easeOut",
                    },
                    scale: {
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1],
                    },
                }}
            />

            {/* Desktop / PC Background: 760px and Above */}
            <motion.img
                src={secondScreenPCImage}
                alt="Wedding Invitation - Second Screen"
                className="absolute inset-0 hidden h-full w-full object-fill min-[760px]:block"
                initial={{
                    opacity: 0,
                    scale: 1.08,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    opacity: {
                        duration: 0.8,
                        ease: "easeOut",
                    },
                    scale: {
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1],
                    },
                }}
            />

            {/* Falling Flowers */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1.2,
                    delay: 0.3,
                }}
            >
                <FallingFlowers />
            </motion.div>

            {/* Soft Romantic Reveal */}
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-white/10 via-transparent to-pink-100/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1.2,
                    delay: 0.2,
                }}
            />

            {/* Center Scratch-to-Reveal Card */}
            {/* <div className="absolute inset-0 z-20 flex items-center justify-center px-5 sm:px-8"> */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-5 px-5 py-6 sm:gap-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: "easeOut",
                    }}
                    className="
            relative
            h-[170px] w-full max-w-[340px]
            overflow-hidden rounded-2xl
            border-2 border-[#984D68]
            bg-[#FFF7F8]/95
            shadow-[0_8px_35px_rgba(152,77,104,0.22)]
            sm:h-[200px] sm:max-w-[440px]
            md:h-[220px] md:max-w-[500px]
            xl:h-[240px] xl:max-w-[560px]
          "
                >
                    {/* Decorative Content Behind the Scratch Layer */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-3 text-center">
                        <span className="mb-1 sm:mb-1 text-xl text-[#B78391] sm:text-2xl">
                            ♡ ❀ ♡
                        </span>

                        <p className="font-wedding text-xl text-[#984D68] sm:text-2xl md:text-3xl">
                            Save the Date
                        </p>

                        <p className="font-wedding text-sm text-[#984D68] sm:text-xl md:text-2xl">
                            Join us on
                        </p>

                        <p className="mt-1 sm:mt-3 break-words font-serif text-lg font-semibold tracking-wide text-[#805C68] sm:text-2xl md:text-3xl">
                            28th-November-2026
                        </p>

                        <p className="font-wedding text-xl text-[#984D68] sm:text-2xl md:text-3xl">
                            7:00 PM Onwards
                        </p>

                    </div>


                    {/* Scratchable Cover */}
                    <canvas
                        ref={canvasRef}
                        aria-label="Scratch this pink cover to reveal the wedding date"
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={handlePointerUp}
                        onPointerCancel={handlePointerUp}
                        onLostPointerCapture={handlePointerUp}
                        className="
              absolute inset-0
              h-full w-full
              cursor-crosshair
              touch-none
            "
                    />
                </motion.div>
                {/* Wedding Countdown Timer */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="w-full max-w-[440px] text-center"
                >
                    <p className="mb-3 font-wedding text-xl text-[#984D68] sm:text-2xl">
                        Counting Down to Forever
                    </p>

                    <div className="grid grid-cols-4 gap-2 sm:gap-4">
                        {[
                            { label: "Days", value: timeLeft.days },
                            { label: "Hours", value: timeLeft.hours },
                            { label: "Minutes", value: timeLeft.minutes },
                            { label: "Seconds", value: timeLeft.seconds },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="rounded-xl border border-[#DFA5B3] bg-[#FFF7F8]/90 px-1 py-3 shadow-md sm:py-4"
                            >
                                <p className="font-serif text-2xl font-semibold text-[#984D68] sm:text-3xl md:text-4xl">
                                    {String(item.value).padStart(2, "0")}
                                </p>

                                <p className="mt-1 text-[10px] uppercase tracking-wider text-[#805C68] sm:text-xs">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    {timeLeft.days === 0 &&
                        timeLeft.hours === 0 &&
                        timeLeft.minutes === 0 &&
                        timeLeft.seconds === 0 && (
                            <p className="mt-3 font-wedding text-lg text-[#984D68]">
                                The special day is here! ♡
                            </p>
                        )}
                </motion.div>
                
                {/* Elegant Navigation Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex items-center justify-center gap-4 sm:gap-6"
                >
                    {/* Back Button */}
                    <motion.button
                        type="button"
                        onClick={onBack}
                        whileHover={{
                            scale: 1.06,
                            y: -3,
                            boxShadow: "0 8px 20px rgba(152, 77, 104, 0.2)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="
            group relative flex items-center justify-center gap-2
            overflow-hidden rounded-full
            border border-[#C88A9C]
            bg-[#FFF7F8]/90
            px-6 py-3 sm:px-8 sm:py-3.5
            font-serif text-sm font-semibold tracking-wide
            text-[#984D68]
            shadow-[0_4px_12px_rgba(152,77,104,0.12)]
            transition-colors duration-300
            hover:bg-[#F8E0E7]
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-[#984D68]
            focus-visible:ring-offset-2
        "
                    >
                        <motion.span
                            aria-hidden="true"
                            className="inline-block"
                            whileHover={{ x: -3 }}
                        >
                            ←
                        </motion.span>
                        Back
                        <span
                            aria-hidden="true"
                            className="text-[#C88A9C] transition-transform duration-300 group-hover:scale-125"
                        >
                            ♡
                        </span>
                    </motion.button>

                    {/* Location Button */}
                    <motion.button
                        type="button"
                        onClick={onLocation}
                        whileHover={{
                            scale: 1.06,
                            y: -3,
                            boxShadow: "0 8px 24px rgba(152, 77, 104, 0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="
            group relative flex items-center justify-center gap-2
            overflow-hidden rounded-full
            border border-[#984D68]
            bg-gradient-to-r from-[#984D68] to-[#B66F87]
            px-6 py-3 sm:px-8 sm:py-3.5
            font-serif text-sm font-semibold tracking-wide
            text-white
            shadow-[0_5px_16px_rgba(152,77,104,0.24)]
            transition-all duration-300
            hover:from-[#85415B] hover:to-[#A85D78]
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-[#984D68]
            focus-visible:ring-offset-2
        "
                    >
                        <span
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:-translate-y-0.5"
                        >
                            ♡
                        </span>
                        Location
                        <span aria-hidden="true">→</span>
                    </motion.button>
                </motion.div>
                
            </div>
        </div>
    );
}

export default SecondScreen;
