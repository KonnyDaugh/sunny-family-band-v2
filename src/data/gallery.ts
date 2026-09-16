export type GalleryPhoto = {
  id: string;
  src: string;
  alt: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "live-demo",
    src: "/images/live-demo.jpg",
    alt: "Sunny Family Band performing together",
  },
  {
    id: "our-family",
    src: "/images/our-family.jpg",
    alt: "Sunny Family Band family portrait",
  },
  {
    id: "full-band",
    src: "/images/programs/full-band.jpg",
    alt: "Sunny Family Band full ensemble",
  },
  {
    id: "lounge-vocals",
    src: "/images/programs/lounge-vocals.jpg",
    alt: "Sunny Family Band lounge performance",
  },
  {
    id: "solo-saxophone",
    src: "/images/programs/solo-saxophone.jpg",
    alt: "Saxophone performance by Sunny Family Band",
  },
];