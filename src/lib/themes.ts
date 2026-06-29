export interface ThemeLink {
  href: string;
  label: string;
}

export interface ThemeConfig {
  noGlass: boolean;
  dataTheme: string;
  links: ThemeLink[];
}

export type ThemeKey = "win7";

export const THEMES: Record<ThemeKey, ThemeConfig> = {
  win7: {
    noGlass: false,
    dataTheme: "win7",
    links: [{ href: "/", label: "Win 7" }],
  },
};
