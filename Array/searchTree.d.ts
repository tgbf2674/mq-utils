declare type optionsType = {
    children?: string;
    mapChildren?: string;
};
declare function searchTree(obj: any, iterate: any, options?: optionsType): any[];
export default searchTree;
