// interface of what appears in our nav bar links
export interface NavItem {
  href?: string;
  routerLink?: string;
  label: string;
  active: boolean;
}
