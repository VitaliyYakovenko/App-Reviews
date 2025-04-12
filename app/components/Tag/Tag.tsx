import { JSX } from "react";
import cn from "classnames";
import ITag from "./Tag.props";
import styles from "./Tag.module.css";




export default function Tag({size = "small", color, className, children , href, ...props}:ITag): JSX.Element { 

    return (<div className={cn(styles.tag, className, {
        [styles.medium]: size === "medium",
        [styles.small]: size === "small",
        [styles.ghost]: color === "ghost",
        [styles.primary]: color === "primary",
        [styles.red]: color === "red",
        [styles.grey]: color === "grey",
        [styles.green]: color === "green",
    })}
        {...props}
    > {href ? (
        <a href={href} className={styles.link}>
            {children}
        </a>
    ) : (
        children
    )}
    </div>);
};


