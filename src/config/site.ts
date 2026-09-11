type NavigationItem = {
  label: string;
  href: string;
};

type SiteConfig = {
  name: string;
  location: string;
  navigation: NavigationItem[];
};

export const siteConfig: SiteConfig = {
  name: "Sunny Family Band",
  location: "Split, Croatia",
  navigation: [
    { label: "Music", href: "#music" },
    { label: "Our family", href: "#family" },
    { label: "Live dates", href: "#live" },
    { label: "Your event", href: "#booking" },
  ],
};