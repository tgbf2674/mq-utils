declare type optionsType = {
    children?: string;
};
declare function filterTree(obj: any, iterate: any, options?: optionsType): any[];
export default filterTree;
