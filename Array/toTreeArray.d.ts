declare type optionsType = {
    children?: string;
    data?: string;
    clear?: boolean;
};
declare function toTreeArray(array?: any, options?: optionsType): any[];
export default toTreeArray;
