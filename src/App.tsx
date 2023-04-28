import React from "react";
import { RootStore } from "src/stores/RootStore";
import { observer, Provider } from "mobx-react";
import "mobx-react-lite/batchingForReactDom";
import { MainPage } from "./pages/MainPage/MainPage";
import { MainShell } from "./components/MainShell/MainShell";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let root: RootStore;

const ensureInitialized = () => {
    if (root) return;
    root = new RootStore();
    // const historyAdapter = new HistoryAdapter(root.routerStore, createBrowserHistory());
    // historyAdapter.observeRouterStateChanges();
};

export const App = observer(() => {
    ensureInitialized();
    return (
        <Provider rootStore={root}>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <MainShell>
                <MainPage />
            </MainShell>
        </Provider>
    );
});
