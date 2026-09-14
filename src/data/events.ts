export type BandEvent = {
  id: string;
  title: string;
  startsAt: string;
  venue: string;
  address: string;
  mapUrl: string;
  admission?: string;
  bookingUrl?: string;
  timeNote?: string;
};

export const events: BandEvent[] = [
    {
    id: "ghetto-club-2026-09-20",
    title: "Sunny Sunday at Ghetto Club",
    startsAt: "2026-09-20T20:00:00+02:00",
    timeNote: "Start time to be confirmed",
    venue: "Ghetto Club",
    address: "Old Town, Split",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Ghetto+Club+Split",
    admission: "Free entry · Donations welcome",
  },
];