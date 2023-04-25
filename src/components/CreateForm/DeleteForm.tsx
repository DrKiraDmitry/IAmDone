import React, { FC } from "react";
import styles from "./styles/CreateForm.module.scss";

type CreateFormType = {
    onClose: () => void;
    onDelete: () => void;
};

export const DeleteForm: FC<CreateFormType> = ({ onClose, onDelete }) => {
    return (
        <div className={styles.TaskContainer}>
            <button onClick={() => onClose()} className={styles.TaskContainer__close}>
                Закрыть
            </button>
            <div className={styles.TaskContainer__header}>Удалить?</div>
            <div className={styles.TaskContainer__bottom}>
                <button className={styles.Button_delete} onClick={() => onDelete()}>
                    Удалить
                </button>
                <button className={styles.Button_save} onClick={() => onClose()}>
                    Сохранить
                </button>
            </div>
        </div>
    );
};
