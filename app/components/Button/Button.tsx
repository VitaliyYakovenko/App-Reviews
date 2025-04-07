import { JSX } from "react";
import cn from "classnames";
import IButton from "./Button.props";
import styles from "./Button.module.css";



export default function Button({ children, appearance , className, ...props}: IButton): JSX.Element {
    
    return (<button className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
    })}
    {...props}
    >
        {children}
    </button>);
};