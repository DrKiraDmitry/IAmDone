import { action, makeAutoObservable, observable } from "mobx";
import { CreateFormDataType } from "../components/CreateForm/CreateForm";

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
    @observable chooseGoal: string = "";

    constructor() {
        makeAutoObservable(this);
    }

    @action init() {
        const local = localStorage.getItem("IamDone");
        if (!local) return;
        this.goals = JSON.parse(local);
    }

    @action modalSwitch(type: ModalEnum, id?: string) {
        if (id) this.chooseGoal = id;
        this.modal = type;
    }

    copy() {
        navigator.clipboard
            .writeText(JSON.stringify(this.goals))
            .then(() => {
                console.log("Text copied to clipboard");
            })
            .catch((err) => {
                console.error("Error in copying text: ", err);
            });
    }

    @action save({ title, desc }: CreateFormDataType) {
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

    @action
    change({ title, desc }: CreateFormDataType) {
        const data = {
            title,
            desc,
        };
        const newGoals = this.goals.map((el) => (el.id === this.chooseGoal ? { ...el, ...data } : el));
        localStorage.setItem("IamDone", JSON.stringify(newGoals));
        this.goals = newGoals;
        this.modalSwitch(ModalEnum.close);
    }
}
