"use client";

import { useState } from "react";
import styles from "./page.module.css";

const gifs = [
  "/gif1.gif",
  "/gif2.gif",
  "/gif3.gif",
  "/gif4.gif",
  "/gif11.gif",
  "/gif6.gif",
  "/gif7.gif",
  "/gif8.gif",
  "/gif9.gif",
];

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  // 음악 재생 함수
  const startMusic = () => {
    const audio = new Audio("/song1.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch((error) => console.error("음악 재생 실패:", error));
  };

  return (
    <div
      className={styles.page}
      onClick={() => {
        if (!isPlaying) startMusic();
      }}
    >
      {/* 배경 텍스트 */}
      

      {/* GIF 그리드 */}
      <div className={styles.grid}>
        {gifs.map((src, index) => (
          <div
            key={index}
            className={styles["grid-item"]}
            onClick={() => {
              // GIF 11 클릭 시 팝업 표시
              if (index === 4) {
                setPopupVisible(true);
              }
            }}
          >
            <img src={src} alt={`GIF ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* 팝업 메시지 */}
      {popupVisible && (
        <div className={styles.popup}>
          <p>쏟아지는 자극에 잠식당한 우리는, 스스로 생각할 능력을 잃어간다.</p>
          <button onClick={() => setPopupVisible(false)}>Close</button>
        </div>
      )}
    </div>
  );
}
