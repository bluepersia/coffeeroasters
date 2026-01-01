export type BaseProps = {
  styles?: Record<string, string>;
};

export type NavItem = {
  text: string;
  to: string;
};

export type MainNavProps = {
  variant: "header" | "footer";
};
