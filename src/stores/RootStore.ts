import { makeAutoObservable, observable } from "mobx";
import { MainPageStore } from "./MainPageStore";
// import { RouteNames, Routes } from "src/routes";

export class RootStore {
    mainPageStore;
    constructor() {
        this.mainPageStore = new MainPageStore();
        makeAutoObservable(this);
    }
    // @observable routerStore = new RouterStore(this, Routes, new RouterState(RouteNames.notFound));
}
