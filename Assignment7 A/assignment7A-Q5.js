function filterUniqueStrings(array) {
    const uniqueSet = new Set();

    return uniqueArray = array.filter(item => {

        if (!uniqueSet.has(item)) {
            uniqueSet.add(item);
            return true;
        }
        return false;
    });
}

const strings = ['apple', 'banana', 'orange', 'apple', 'grape', 'banana'];
const uniqueStrings = filterUniqueStrings(strings);
console.log(uniqueStrings);
