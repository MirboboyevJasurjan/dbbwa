"use client";

import React, { useState, useRef, useEffect } from "react";
import { IconButton, Row, Text } from "@once-ui-system/core";
import styles from "./MusicPlayer.module.scss";

const tracks = [
  { title: "Chicago Bulls", src: "/music/Chicago_Bulls.mp3" },
  { title: "Aytmadim", src: "/music/Aytmadim.mp3" },
  { title: "Dao", src: "/music/Dao.mp3" },
  { title: "Otvor", src: "/music/Otvor.mp3" },
  { title: "Mendan Qoch Slow", src: "/music/MendanqochSlow.m4a" },
  { title: "Mendan Qoch", src: "/music/Mendan_qoch.m4a" },
  { title: "The Last of us", src: "/music/TheLastofus.m4a" },
  { title: "Uzoq ket", src: "/music/Uzoqket.m4a" },
  { title: "Расслабся", src: "/music/relax.m4a" },
  { title: "enolavibes", src: "/music/enolavibes.m4a" },
];

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // --- User interaction orqali avtomatik start ---
  useEffect(() => {
    const startMusic = async () => {
      try {
        await audioRef.current?.play();
        setIsPlaying(true);
      } catch {
        console.log("Autoplay bloklandi, user interaction kerak.");
      }
    };

    const handleUserInteraction = () => {
      if (!isPlaying) {
        startMusic();
      }
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("mousemove", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("mousemove", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("mousemove", handleUserInteraction);
    };
  }, [isPlaying]);

  // --- Play / Pause boshqarish ---
  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentTrack]);

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };

  return (
    <Row
      className={styles.player}
      horizontal="between"
      vertical="center"
      padding="8"
      radius="l"
      background="brand-alpha-weak"
      border="brand-alpha-medium"
      gap="12"
    >
      <audio ref={audioRef} src={tracks[currentTrack].src} onEnded={nextTrack} />

      {/* Title with scrolling effect */}
      <div className={styles.titleWrapper}>
        <Text variant="body-default-s" onBackground="brand-strong">
          {tracks[currentTrack].title}
        </Text>
      </div>

      <Row gap="8" vertical="center">
        <IconButton
          size="m"
          icon={isPlaying ? "pause" : "play"}
          variant="secondary"
          onClick={() => setIsPlaying(!isPlaying)}
        />
        <IconButton
          size="m"
          icon="chevronRight"
          variant="secondary"
          onClick={nextTrack}
        />
      </Row>
    </Row>
  );
}
