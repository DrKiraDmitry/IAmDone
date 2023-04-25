import React, { FC, useState } from "react";
import styles from "./styles/CreateForm.module.scss";
import { GoalType } from "../../pages/MainPage/MainPage";

type CreateFormType = {
    onClose: () => void;
    goals: GoalType[];
    setGoals: (newGoals: GoalType[]) => void;
};

export const CreateForm: FC<CreateFormType> = ({ onClose, goals, setGoals }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const saveHandler = () => {
        const data = {
            title,
            desc,
            date: new Date(),
            id: `${new Date()}__${title}`,
        };
        const newGoals = [data, ...goals];
        localStorage.setItem("IamDone", JSON.stringify(newGoals));
        setGoals(newGoals);
        onClose();
    };

    return (
        <div className={styles.TaskContainer}>
            <button onClick={() => onClose()} className={styles.TaskContainer__close}>
                Закрыть
            </button>
            <div className={styles.TaskContainer__header}>Мой положительный опыт</div>
            <div className={styles.TaskContainer__form}>
                <label className={styles.TaskContainer__label}>
                    <div className={styles.TaskContainer__labelTitle}>Я сделал</div>
                    <input
                        className={styles.TaskContainer__labelInput}
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label className={styles.TaskContainer__label}>
                    <div className={styles.TaskContainer__labelTitle}>Подробнее</div>
                    <textarea
                        className={styles.TaskContainer__labelTextarea}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </label>
                <div className={styles.TaskContainer__bottom}>
                    <button className={styles.Button_delete}>Удалить</button>
                    <button className={styles.Button_save} onClick={() => saveHandler()}>
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    );
};
