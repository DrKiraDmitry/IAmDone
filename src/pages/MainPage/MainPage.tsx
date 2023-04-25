import React, { useEffect } from "react";
import styles from "./styles/MainPage.module.scss";
import { Goal, GoalListHeader } from "../../components/Goal/Goal";
import { CreateForm } from "../../components/CreateForm/CreateForm";
import { useRootStore } from "../../utils/rootStoreUtils";
import { observer } from "mobx-react-lite";
import { ModalEnum } from "../../stores/MainPageStore";
import { ChangeForm } from "../../components/CreateForm/ChangeForm";

const Header = () => {
    const { mainPageStore: store } = useRootStore();
    return (
        <header className={styles.Header}>
            <button onClick={() => store.modalSwitch(ModalEnum.new)}>Новая</button>
            <button onClick={() => store.copy()}>Сохранить</button>
            <button onClick={() => store.modalSwitch(ModalEnum.new)}>Загрузить</button>
        </header>
    );
};

const Modals = observer(() => {
    const { mainPageStore: store } = useRootStore();
    return (
        <>
            {
                {
                    [ModalEnum.new]: (
                        <CreateForm
                            callback={(x) => store.save(x)}
                            onClose={() => store.modalSwitch(ModalEnum.close)}
                        />
                    ),
                    [ModalEnum.change]: (
                        <ChangeForm
                            callback={(x) => store.change(x)}
                            onClose={() => store.modalSwitch(ModalEnum.close)}
                            data={store.goals.find((el) => el.id === store.chooseGoal)}
                        />
                    ),
                    [ModalEnum.close]: <></>,
                }[store.modal]
            }
        </>
    );
});

export const MainPage = observer(() => {
    const { mainPageStore: store } = useRootStore();

    useEffect(() => {
        store.init();
    }, []);

    return (
        <div className={styles.MainPage}>
            <Header />
            {store.goals && (
                <div className={styles.GoalList}>
                    <GoalListHeader />
                    {store.goals.map((el, i) => (
                        <Goal
                            key={el.id}
                            order={i + 1}
                            item={el}
                            change={() => store.modalSwitch(ModalEnum.change, el.id)}
                        />
                    ))}
                </div>
            )}
            <Modals />
        </div>
    );
});
