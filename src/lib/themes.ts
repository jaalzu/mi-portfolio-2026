export interface ThemeLink {
  href: string;
  label: string;
}

export interface ThemeConfig {
  noGlass: boolean;
  dataTheme: string;
  links: ThemeLink[];
}

export type ThemeKey = "win7" | "xp";

export const THEMES: Record<ThemeKey, ThemeConfig> = {
  win7: {
    noGlass: false,
    dataTheme: "win7",
    links: [
      { href: "/", label: "Win 7" },
      { href: "/retro-xp", label: "Win XP" },
    ],
  },
  xp: {
    noGlass: true,
    dataTheme: "xp",
    links: [
      { href: "/", label: "Win 7" },
      { href: "/retro-xp", label: "Win XP" },
    ],
  },
};
