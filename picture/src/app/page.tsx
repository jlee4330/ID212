"use client";

import { useState } from "react";
import styles from "./page.module.css";

const scrollGifs = [
  "/gif11.gif",
  "/gif2.gif",
  "/gif3.gif",
  "/gif4.gif",
  "/gif5.gif",
  "/gif6.gif",
  "/gif7.gif",
  "/gif8.gif",
  "/gif9.gif",
  "/gif1.gif",
];

const gridGifs = [
  "/gif1.gif",
  "/gif2.gif",
  "/gif3.gif",
  "/gif4.gif",
  "/gif6.gif",
  "/gif7.gif",
  "/gif8.gif",
  "/gif9.gif",
  "/gif1.gif",
  "/gif7.gif",
  "/gif9.gif",
  "/gif2.gif",
  "/gif3.gif",
  "/gif4.gif",
  "/gif5.gif",
  "/gif7.gif",
  "/gif6.gif",
  "/gif9.gif",
  "/gif3.gif",
  "/gif8.gif",
  "/gif1.gif",
  "/gif2.gif",
  "/gif3.gif",
  "/gif8.gif",
  
  
  

];

export default function Home() {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null); // 타입 지정

  const handleAudioPlay = () => {
    if (!audio) {
      const newAudio = new Audio("/song1.mp3");
      newAudio.loop = true;
      newAudio.volume = 0.5;
      newAudio
        .play()
        .catch((error: any) => console.error("음악 재생 실패:", error)); // error 타입 명시
      setAudio(newAudio);
    } else if (audio.paused) {
      audio.play().catch((error: any) => console.error("음악 재생 실패:", error)); // error 타입 명시
    }
  };

  return (
    <div className={styles.page} onClick={handleAudioPlay}>
      {/* 왼쪽 스크롤 영역 */}
      <div className={styles["scroll-container"]}>
        {scrollGifs.map((src, index) => (
          <div key={index} className={styles.section}>
            <img src={src} alt={`GIF ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* 오른쪽 고정 그리드 */}
      <div className={styles["grid-container"]}>
        {gridGifs.map((src, index) => (
          <div key={index} className={styles["grid-item"]}>
            <img src={src} alt={`Grid GIF ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
