import React, { useEffect } from "react";
import styles from "./styles/MainPage.module.scss";
import { Goal, GoalListHeader } from "../../components/Goal/Goal";
import { CreateForm } from "../../components/CreateForm/CreateForm";
import { useRootStore } from "../../utils/rootStoreUtils";
import { observer } from "mobx-react-lite";
import { ModalEnum } from "../../stores/MainPageStore";
import { ChangeForm } from "../../components/CreateForm/ChangeForm";
import { WelcomeForm } from "../../components/CreateForm/WelcomeForm";

const Header = () => {
    const { mainPageStore: store } = useRootStore();
    return (
        <header className={styles.Header}>
            <div>
                <button onClick={() => store.modalSwitch(ModalEnum.new)}>Новая</button>
                <button onClick={() => store.copy()}>Скопировать</button>
                <button onClick={() => store.randomExp()}>Случайный Опыт</button>
                <button onClick={() => store.copy()}>F.A.Q</button>
            </div>
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
            {!!store.goals.length ? (
                <>
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
                </>
            ) : (
                <>
                    <WelcomeForm callback={(x) => store.save(x)} />
                </>
            )}
        </div>
    );
});
