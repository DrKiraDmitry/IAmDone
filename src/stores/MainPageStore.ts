﻿import { action, makeAutoObservable, observable } from "mobx";
import { CreateFormDataType } from "../components/CreateForm/CreateForm";
import { toast } from "react-toastify";

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

    randomExp() {
        const getRandom = Math.floor(Math.random() * this.goals.length);
        this.modalSwitch(ModalEnum.change, this.goals[getRandom].id);
    }

    copy() {
        navigator.clipboard
            .writeText(JSON.stringify(this.goals))
            .then(() => {
                toast.success("Скопирован в буфер обмена");
            })
            .catch((err) => {
                toast.error("Не удалось скопировать в буфер обмена");
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
