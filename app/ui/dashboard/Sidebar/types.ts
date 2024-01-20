export type TMenuLink = {
  title: string;
  path: string;
  icon: React.ReactNode;
}

export type TMenuItem = {
  title: string;
  list: TMenuLink[];
};
