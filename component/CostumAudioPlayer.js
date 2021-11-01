import React, { useState, useEffect } from "react";
import Image from "next/image";

const CostumAudioPlayer = ({ audioSource }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="items-center">
      <audio
        src={audioSource}
        id={`${audioSource}`}
        onEnded={() => {
          setIsPlaying(false);
        }}
        onPause={() => {
          if (document.getElementById(audioSource).currentTime == 0) {
            setIsPlaying(false);
          }
        }}
        onCanPlayThrough={() => setIsLoading(false)}
      />
      <div
        className="flex flex-row items-center gap-x-2"
        style={{ minWidth: "24px" }}
      >
        <button
          hidden={isPlaying}
          onClick={() => {
            setIsLoading(true);
            Array.from(document.querySelectorAll("audio")).forEach((item) => {
              item.pause();
              item.currentTime = 0;
            });
            if (!isPlaying) {
              document.getElementById(audioSource).play();
              setIsPlaying(true);
            }
          }}
        >
          <Image
            src={`/musicplayer/play_arrow.svg`}
            width="28px"
            height="28px"
          />
        </button>
        <button
          onClick={() => {
            document.getElementById(audioSource).pause();
            document.getElementById(audioSource).currentTime = 0;
            setIsPlaying(false);
          }}
          hidden={!isPlaying}
          disabled={isLoading}
        >
          {isLoading ? (
            <svg
              fill="none"
              className="w-7 h-7 animate-spin flex justify-center items-center"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                fill="#007794"
                fillRule="evenodd"
              />
            </svg>
          ) : (
            <Image src="/musicplayer/stop.svg" width="28px" height="28px" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CostumAudioPlayer;
