"use client"
import { JSX, useState, useEffect , KeyboardEvent} from "react";
import cn from "classnames";
import styles from "./Rating.module.css";
import StarIcon from "./star.svg";
import IRating from "./Ratings.props";

export default function Rating({ isEditable = false, rating, setRating, ...props }: IRating): JSX.Element {
    const [ratingArr, setRatingArr] = useState<JSX.Element[]>([]);

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

       const constructRating = (currentRating: number) => {
    const updatedArr = new Array(5).fill(null).map((_, i) => (
        <span key={i}
           className={cn(styles.star, {
                    [styles.filled]: i < currentRating,  
                    [styles.editable]: isEditable,
                })}
                onMouseEnter={() => changeDisplay(i + 1)}
                onMouseLeave={() => changeDisplay(rating)}
                onClick={() => onClick(i + 1)}
        >
            <StarIcon
                tabIndex={isEditable ? 0 : -1}
                onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
            />
        </span>
       ));

    setRatingArr(updatedArr);
    };
    
    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
         }
        constructRating(i);
    }

    const onClick = (i: number) => {
         if (!isEditable || !setRating) {
            return;
         }
        setRating(i);
    };
     
    const handleSpace = (i: number, e:KeyboardEvent<SVGAElement>) => {
        if (e.code !== "Space" || !setRating) {
            return;
        }
        
        setRating(i);
    }

    
    return (
        <div {...props}>
            {ratingArr.map((r, i) => (
                <span key={i}>{r}</span>
            ))}
        </div>
    );

}




