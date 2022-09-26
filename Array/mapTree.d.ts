declare type optionsType = {
    children?: string;
    mapChildren?: string;
};
declare function mapTree(obj: any, iterate: any, options?: optionsType): any[];
export default mapTree;
