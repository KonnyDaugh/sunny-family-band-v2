export type Program = {
  id: string;
  title: string;
  description: string;
  lineup: string;
  featured: boolean;
  image: string;
  imageAlt: string;
};

export const programs: Program[] = [
  {
    id: "full-band",
    title: "Sunny Family Band",
    description:
      "Jazz, swing and feel-good favourites for a warm welcome or a lively celebration.",
    lineup:
      "4 musicians · Vocals, keys, guitar, saxophone & trumpet",
    featured: true,
    image: "/images/programs/full-band.jpg",
imageAlt: "Sunny Family Band performing together",
  },
  {
    id: "solo-saxophone",
    title: "Solo Saxophone",
    description:
      "Laid-back lounge or upbeat dance favourites, with saxophone taking the lead.",
    lineup: "Solo saxophone · With backing tracks",
    featured: false,
    image: "/images/programs/solo-saxophone.jpg",
    imageAlt: "Saxophone solo performance",
  },
  {
    id: "lounge-vocals",
    title: "Lounge Vocals",
    description:
      "Warm vocals and relaxed favourites to set the mood for your evening.",
    lineup: "Solo vocals · With backing tracks",
    featured: false,
    image: "/images/programs/lounge-vocals.jpg",
    imageAlt: "Natalia singing with a microphone",
  },
];