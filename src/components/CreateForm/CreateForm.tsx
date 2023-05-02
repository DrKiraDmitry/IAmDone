import React, { FC, useState } from "react";
import styles from "./styles/CreateForm.module.scss";
import { ModalForm } from "./ModalForm";

export type CreateFormDataType = {
    title: string;
    desc: string;
};

type CreateFormType = {
    onClose: () => void;
    callback: (data: CreateFormDataType) => void;
};

export const CreateForm: FC<CreateFormType> = ({ onClose, callback }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const save = () => {
        callback({ title, desc });
    };

    return (
        <ModalForm onClose={onClose}>
            <>
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
                    <button className={styles.Button_save + " " + styles.Button} onClick={() => save()}>
                        Сохранить
                    </button>
                </div>
            </>
        </ModalForm>
    );
};
