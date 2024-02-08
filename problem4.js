
function password(obj) {
    if (Object.keys(obj).length !== 3 || obj.birthYear.toString().length !== 4) {
        return "invalid"
    }

    const {name, birthYear, siteName} = obj

    const passwordFirst = siteName.charAt(0).toUpperCase() + siteName.slice(1);

    const autoPassword = `${passwordFirst}#${name}@${birthYear}`

    return autoPassword
}

console.log(password(obj))