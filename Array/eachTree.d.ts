declare type optionsType = {
    children?: string;
    mapChildren?: string;
};
declare function eachTree(obj: any, iterate: any, options?: optionsType): void;
export default eachTree;
