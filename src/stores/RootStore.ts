import { makeAutoObservable, observable } from "mobx";
import { MainPageStore } from "./MainPageStore";
// import { RouteNames, Routes } from "src/routes";

export class RootStore {
    @observable mainPageStore = new MainPageStore();
    constructor() {
        makeAutoObservable(this);
    }
    // @observable routerStore = new RouterStore(this, Routes, new RouterState(RouteNames.notFound));
}
