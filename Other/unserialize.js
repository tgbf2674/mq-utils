function unserialize(str) {
    let items = [];
    const result = {};
    if (str) {
        str.split('&').forEach(item => {
            items = item.split('=');
            result[decodeURIComponent(items[0])] = decodeURIComponent(items[1] || '');
        });
    }
    return result;
}
export default unserialize;