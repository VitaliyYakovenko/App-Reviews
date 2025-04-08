import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export default interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
    appearance: "primary" | "ghost";
    arrow?: "right" | "down" | "none";
}

