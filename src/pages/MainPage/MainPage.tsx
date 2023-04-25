import React, { FC, useEffect, useState } from "react";
import styles from "./styles/MainPage.module.scss";
import { Goal, GoalListHeader } from "../../components/Goal/Goal";
import { CreateForm } from "../../components/CreateForm/CreateForm";
import { useRootStore } from "../../utils/rootStoreUtils";
import { observable } from "mobx";

const Header = () => {
    return (
        <header>
            <button onClick={}></button>
        </header>
    );
};

const Modals = () => {
    return (
        <>
            {
                {
                    [ModalEnum.new]: (
                        <CreateForms callback={() => store.save()} onClose={() => setModal(ModalEnum.close)} />
                    ),
                    [ModalEnum.change]: (
                        <CreateForm
                            goals={goals}
                            setGoals={(x) => setGoals(x)}
                            onClose={() => setModal(ModalEnum.close)}
                        />
                    ),
                    [ModalEnum.close]: <></>,
                }[modal]
            }
        </>
    );
};

export const MainPage = observable(() => {
    const { mainPageStore: store } = useRootStore();

    useEffect(() => {
        store.init();
    }, []);

    return (
        <div className={styles.MainPage}>
            {store.goals && (
                <div className={styles.GoalList}>
                    <GoalListHeader />
                    {store.goals.map((el, i) => (
                        <Goal key={el.id} order={i + 1} item={el} />
                    ))}
                </div>
            )}
            <Modals />
        </div>
    );
});
