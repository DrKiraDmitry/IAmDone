import React, { FC, useCallback, useRef, useState } from "react";
import styles from "./styles/Goal.module.scss";
import { GoalType } from "../../pages/MainPage/MainPage";
import Marquee from "react-fast-marquee";
import { useOverflow } from "./useOverflow";

const GoalString: FC<{ text: string | number; className: string }> = ({ text, className }) => {
    const Box = useRef<HTMLDivElement | null>(null);
    const onRefChange = useCallback((node: HTMLDivElement) => {
        setDomNode(node); // trigger re-render on changes
    }, []);
    const [domNode, setDomNode] = useState<HTMLDivElement | null>(null);
    const overflow = useOverflow(Box.current?.clientWidth, domNode?.clientWidth);

    return (
        <div className={className} ref={Box}>
            <Marquee autoFill={false} pauseOnHover={true} play={overflow}>
                <div style={{ paddingRight: "5px" }} ref={onRefChange}>
                    {text}
                </div>
            </Marquee>
        </div>
    );
};

export const Goal: FC<{ item: GoalType; order: number }> = ({ item, order }) => {
    return (
        <div className={styles.Goal} key={item.id}>
            <div className={styles.Goal__header}>
                <GoalString text={order} className={styles.Goal__headerOrder} />
                <GoalString text={item.title} className={styles.Goal__headerTitle} />
                <GoalString text={item.desc} className={styles.Goal__headerDesc} />
                <GoalString text={item.date.toString()} className={styles.Goal__headerDate} />
                <button className={styles.Goal__change}>Изменить</button>
            </div>
        </div>
    );
};

export const GoalListHeader = () => {
    return (
        <div className={styles.Goal}>
            <div className={styles.Goal__header}>
                <div className={styles.Goal__headerOrder}>#</div>
                <div className={styles.Goal__headerTitle}>Название</div>
                <div className={styles.Goal__headerDesc}>Подробнее</div>
                <div className={styles.Goal__headerDate}>Время создания</div>
                <div className={styles.Goal__change} />
            </div>
        </div>
    );
};
