function capitalize(string) {
    if (string === '') return '';

    const firstChar = string.slice(0, 1).toUpperCase();
    const rest = string.slice(1).toLowerCase();

    return firstChar + rest;
}


// const newString = capitalize('test');
// console.log(newString);
export default capitalize;