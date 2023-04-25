import { action, makeAutoObservable, observable } from "mobx";

export type GoalType = {
    title: string;
    desc: string;
    date: Date;
    id: string;
};

export enum ModalEnum {
    close,
    new,
    change,
}

export class MainPageStore {
    @observable goals: GoalType[] = [];
    @observable modal: ModalEnum = ModalEnum.close;

    constructor() {
        makeAutoObservable(this);
    }

    @action init() {
        const local = localStorage.getItem("IamDone");
        if (!local) return;
        this.goals = JSON.parse(local);
    }

    @action modalSwitch(type: ModalEnum) {
        this.modal = type;
    }

    @action save(title: string, desc: string) {
        const data = {
            title,
            desc,
            date: new Date(),
            id: `${new Date()}__${title}`,
        };
        const newGoals = [data, ...this.goals];
        localStorage.setItem("IamDone", JSON.stringify(newGoals));
        this.goals = newGoals;
        this.modalSwitch(ModalEnum.close);
    }
}
