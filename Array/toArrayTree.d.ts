declare type optionsType = {
    strict?: boolean;
    parentKey?: string;
    key?: string;
    children?: string;
    mapChildren?: string;
    data?: string;
};
declare function toArrayTree(array?: any, options?: optionsType): any[];
export default toArrayTree;
