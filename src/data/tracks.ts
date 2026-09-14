export type MusicMood = "relax" | "swing" | "dance";

export type Track = {
  id: string;
  title: string;
  src: string;
  mood: MusicMood;
};

export const tracks: Track[] = [
  {
    id: "fever",
    title: "Fever",
    src: "/audio/fever.mp3",
    mood: "relax",
  },
  {
    id: "it-dont-mean-a-thing",
    title: "It Don’t Mean a Thing",
    src: "/audio/it-dont-mean-a-thing.mp3",
    mood: "swing",
  },
  {
    id: "i-feel-good",
    title: "I Feel Good",
    src: "/audio/i-feel-good.mp3",
    mood: "dance",
  },
];