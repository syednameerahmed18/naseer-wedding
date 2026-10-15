import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import weddingMusic from "../assets/AllahHummaMusic.mp3";

function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.35;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        console.error("Unable to play wedding music:", error);
      }
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={weddingMusic}
        loop
        preload="auto"
      />

      <button
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Turn music off" : "Turn music on"}
        title={isPlaying ? "Turn music off" : "Turn music on"}
        className="fixed bottom-5 right-5 z-[100] flex h-12 w-12 items-center justify-center rounded-full border border-[#DFA5B3] bg-[#FFF7F8]/95 text-[#984D68] shadow-lg transition hover:scale-105 sm:bottom-7 sm:right-7"
      >
        {isPlaying ? <Volume2 size={22} /> : <VolumeX size={22} />}
      </button>
    </>
  );
}

export default BackgroundMusic;