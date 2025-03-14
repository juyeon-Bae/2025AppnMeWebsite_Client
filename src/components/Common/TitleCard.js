import React from "react";
import Button from "./Button";
import styles from "../../styles/TitleCard.module.css"
export default function TitleCard({ infoTitle = "2025 App & Me Website", mainTitle, mainTitle2, subTitle1, subTitle2, btnText, btnWeight, btnHeight, fontSize, borderRadius }) {
    return (
        <div className={styles["all-container"]}>
            <div className={styles["infoTitle"]}>
                <Button width={btnWeight} height={btnHeight} text={btnText} fontSize={fontSize} borderRadius={borderRadius} />
                <span style={{ whiteSpace: "nowrap" }}>{infoTitle}</span>
            </div>
            <img src="/images/Logo/logo.png" style={{ zIndex: "1" }}></img>
            <div style={{ zIndex: "1", fontWeight: "480" }} className={styles.mainTitle} >{mainTitle}</div>
            <div className={styles.mainTitle}>{mainTitle2}</div>
            <div style={{ zIndex: "1", fontWeight: "480" }} className={styles["subTitle"]}>
                <p>{subTitle1}</p>
                <p>{subTitle2}</p>
            </div>
        </div>
    )
}