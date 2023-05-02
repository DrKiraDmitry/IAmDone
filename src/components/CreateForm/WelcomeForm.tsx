import React, { FC, useState } from "react";
import styles from "./styles/CreateForm.module.scss";
import { GoalType } from "../../stores/MainPageStore";
import { ModalForm } from "./ModalForm";
import { toast } from "react-toastify";

export type CreateFormDataType = {
    title: string;
    desc: string;
};

type CreateFormType = {
    callback: (data: CreateFormDataType) => void;
    data?: GoalType;
};

export const WelcomeForm: FC<CreateFormType> = ({ callback, data }) => {
    const [title, setTitle] = useState(data?.title ?? "");
    const [desc, setDesc] = useState(data?.desc ?? "");

    const save = () => {
        if (!title && !desc) return toast.error("Чтоб сохранить надо заполнить хоть одно поле");
        callback({ title, desc });
    };

    return (
        <div className={styles.Welcome}>
            <div className={styles.TaskContainer__header}>
                <h1 className={styles.Welcome__title}>Здраствуй!</h1>
                <div className={styles.Welcome__desc}>
                    Этот сервис поможет вам отслеживать ваш положительный опыт, и когда вы усомнитесь в себе, зайди и
                    вспомни что ты можешь
                    <ul>
                        <li>
                            Все данные введенные вами не отсылаются на сервер, они храняться только на вашем копьютере,
                            пока вы не отчистите локальные данные в браузере, чтоб перенести данные между устройствами,
                            или сохранить их в документе на черный день, нажмите кнопку скопировать, и он скопирует ваши
                            данные и вставьте их где вам удобнее будет их сохранить
                        </li>
                        <li>
                            Чтоб загрузить ваше сохранение, просто нажмите кнопку загрузить, и вставите туда ваши ранее
                            сохраненные данные
                        </li>
                        <li>
                            кнопка "случайный опыт" поможет тебе если список большой, и ты хочешь прочитать случайно
                            выбранную запись
                        </li>
                        <li>
                            по сути это просто таблица для записей пиши, что хочешь и пускай рандом тебе подскажет на
                            что обратить внимание)
                        </li>
                    </ul>
                    Давайте сделаем вашу первую запись!!!
                </div>
            </div>
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
        </div>
    );
};
