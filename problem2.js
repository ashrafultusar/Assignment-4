
function checkName(name) {
    if (typeof name !== "string") {
        return "invalid"
    }
    const lowercaseName = name.toLowerCase();
    const validEndingLetters = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];;

    if (validEndingLetters.includes(lowercaseName[lowercaseName.length - 1])) {
        return "Good name"
    } else {
        return "Bad name"
    }
}

console.log(checkName(name))