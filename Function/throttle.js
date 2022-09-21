function throttle(fn, wait = 1000) {
    let prevTime = 0;
    return (...args) => {
        const now = Date.now();
        if (now - prevTime >= wait) {
            fn.apply(args);
            prevTime = now;
        }
    };
}
export default throttle;