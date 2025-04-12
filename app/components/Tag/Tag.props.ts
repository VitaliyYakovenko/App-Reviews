import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface ITag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: "small" | "medium";
    children: React.ReactNode;
    href?: string;
    color?: "primary" | "ghost" | "grey" | "green" | "red";
}