import { JSX } from "react";
import cn from "classnames";
import ArrowIcon  from './arrow.svg';
import IButton from "./Button.props";
import styles from "./Button.module.css";



export default function Button({ children, arrow = "none", appearance , className, ...props}: IButton): JSX.Element {
    
    return (<button className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
    })}
    {...props}
    >
        {children}
        {arrow !== "none" && <span className={cn(styles.arrow, {
            [styles.down] : arrow === "down"
        })}><ArrowIcon/></span>}
    </button>);
};