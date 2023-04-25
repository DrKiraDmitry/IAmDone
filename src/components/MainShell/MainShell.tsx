import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import styles from "./styles/MainShell.module.scss";

export const MainShell: FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles.MainShell}>{children}</div>;
};
