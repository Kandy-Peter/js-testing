function stringLength(string) {
    if (string.length > 1 && string.length <= 10) { 
    return string.length; 
    } else {
        return 'write a string with length between1 and 10';
    }
}

module.exports = stringLength;