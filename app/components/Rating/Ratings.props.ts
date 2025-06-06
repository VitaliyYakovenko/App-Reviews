import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface IRating extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
}