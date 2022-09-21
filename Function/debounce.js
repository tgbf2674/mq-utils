function debounce(fn, wait = 1000) {
    let timer = null;
    return (...args) => {
        if (!timer)
            fn.apply(args);
        else {
            timer = setTimeout(() => {
                timer = null;
            }, wait);
        }
    };
}
export default debounce;