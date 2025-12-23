import { useState } from "react";

const songs = [
  {
    id: 1,
    title: "Breaching",
    artist: "EchoBR",
    url: "/songs/Breaching.wav",
    duration: "3:45",
  },
];
export const useMusic = () => {
  const [allSongs, setAllSongs] = useState([]);
};
