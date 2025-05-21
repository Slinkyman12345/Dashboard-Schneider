
import { useEffect, useRef } from "react";

interface SoundMap {
  [key: string]: string;
}

const soundPaths: SoundMap = {
  "boot-up": "/sounds/boot-up.mp3",
  "key-press": "/sounds/key-press.mp3",
  "terminal-beep": "/sounds/terminal-beep.mp3",
  "access-granted": "/sounds/access-granted.mp3",
  "access-denied": "/sounds/access-denied.mp3",
  "error": "/sounds/error.mp3",
  "alert": "/sounds/alert.mp3",
  "alert-siren": "/sounds/alert-siren.mp3",
  "click": "/sounds/click.mp3",
  "notification": "/sounds/notification.mp3"
};

const useSound = () => {
  const audioElements = useRef<{ [key: string]: HTMLAudioElement }>({});

  useEffect(() => {
    // Pre-create audio elements
    Object.entries(soundPaths).forEach(([id, path]) => {
      const audio = new Audio();
      audio.src = path;
      audio.preload = "auto";
      audioElements.current[id] = audio;
    });

    return () => {
      // Clean up audio elements
      Object.values(audioElements.current).forEach((audio) => {
        audio.pause();
        audio.src = "";
      });
    };
  }, []);

  const playSound = (id: string, volume = 0.5, loop = false) => {
    try {
      // For now, just console log since we don't have the actual sound files
      console.log(`Playing sound: ${id}`);
      
      // This would be the actual implementation if we had sound files
      /*
      const audio = audioElements.current[id];
      if (audio) {
        audio.currentTime = 0;
        audio.volume = volume;
        audio.loop = loop;
        audio.play().catch(e => console.error("Error playing sound:", e));
      }
      */
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  };

  const stopSound = (id: string) => {
    try {
      console.log(`Stopping sound: ${id}`);
      
      /*
      const audio = audioElements.current[id];
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      */
    } catch (error) {
      console.error("Error stopping sound:", error);
    }
  };

  return { playSound, stopSound };
};

export default useSound;
