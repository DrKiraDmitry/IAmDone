declare module "*.module.css" {
    const exports: { [exportName: string]: string };
    export = exports;
}

declare module "*.module.sass";

declare module "*.module.scss";

declare module "*.png" {
    const src: string;
    export default src;
}

declare module "*.mp3" {
    const src: string;
    export default src;
}

declare module "*.svg" {
    const src: string;
    export default src;
}
