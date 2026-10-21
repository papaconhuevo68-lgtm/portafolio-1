import { type VariantProps } from "class-variance-authority";
import type { buttonVariants } from "./components/atoms/button";

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export type typeVariant = ButtonVariantProps["variant"];
export type typeSize = ButtonVariantProps["size"];

export interface ProjectCTA {
  link: string;
  text: string;
  variant: typeVariant;
  icon: JSX.Element;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  bannerUrl: string;
  stackTech: JSX.Element[];
  ctas: ProjectCTA[];
}
