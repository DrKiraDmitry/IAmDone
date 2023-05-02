import React, { FC, PropsWithChildren } from "react";
import closeIcon from "./clear.svg";
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
                    <img src={closeIcon} alt="Закрыть" />
                </button>
                {children}
            </div>
        </>
    );
};
