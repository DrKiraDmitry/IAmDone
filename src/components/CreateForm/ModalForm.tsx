import React, { FC, PropsWithChildren } from "react";
import styles from "./styles/CreateForm.module.scss";

type CreateFormType = {
    onClose: () => void;
} & PropsWithChildren;

export const ModalForm: FC<CreateFormType> = ({ onClose, children }) => {
    return (
        <>
            <div className={styles.TaskContainerCloseBG} onClick={() => onClose()} />
            <div className={styles.TaskContainer}>
                <button onClick={() => onClose()} className={styles.TaskContainer__close}>
                    Закрыть
                </button>
                {children}
            </div>
        </>
    );
};
