import { JSX } from "react";
import cn from "classnames"
import IParagraph from "./Paragraph.props";
import styles from "./Paragraph.module.css";


export default function Paragraph({children, size, className, ...props}:IParagraph ): JSX.Element {

    return (<p className={cn(styles.p, className, {
        [styles.mediumText]: size === "medium",
        [styles.smallText]: size === "small",
        [styles.largeText]: size === "large",
    })}
    {...props}
    >
        {children}
    </p>);
};





// import { JSX } from "react";
// import IParagraph from "./Paragraph.props";
// import styles from "./Paragraph.module.css";


// export default function Paragraph({children, size}:IParagraph ): JSX.Element {

//     switch (size) {
//         case ("small"): 
//             return <p className={styles.smallText}>{children}</p>
//         case ("medium"):
//             return <p className={styles.mediumText}>{children}</p>
//         case ("large"):
//             return <p className={styles.largeText}>{children}</p>;
//         default:
//             return<></>
//     }
// };

