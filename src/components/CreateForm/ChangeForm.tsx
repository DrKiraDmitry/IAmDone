import React, { FC, useState } from "react";
import styles from "./styles/CreateForm.module.scss";
import { GoalType } from "../../stores/MainPageStore";

export type CreateFormDataType = {
    title: string;
    desc: string;
};

type CreateFormType = {
    onClose: () => void;
    callback: (data: CreateFormDataType) => void;
    data?: GoalType;
};

export const ChangeForm: FC<CreateFormType> = ({ onClose, callback, data }) => {
    const [title, setTitle] = useState(data?.title ?? "");
    const [desc, setDesc] = useState(data?.desc ?? "");

    const save = () => {
        callback({ title, desc });
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
            </div>
            <div className={styles.TaskContainer__bottom}>
                <button className={styles.Button_save} onClick={() => save()}>
                    Удалить
                </button>
                <button className={styles.Button_save} onClick={() => save()}>
                    Сохранить
                </button>
            </div>
        </div>
    );
};
