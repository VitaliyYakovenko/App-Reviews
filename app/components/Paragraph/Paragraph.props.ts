import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface IParagraph extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: "small" | "medium" | "large";
    children: React.ReactNode;
}