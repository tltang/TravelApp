export function checkForInput(inputText) {
    // console.log("::: Running checkForInput :::", inputText);
    if (inputText === "") {
        return false;
    } else
    {
        return true;
    }
}

export function checkForURL(inputText) {
    // console.log("::: Running checkForURL :::", inputText);
    let url;

    try {
        url = new URL(inputText);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

export function checkForZip(inputText) {
    // console.log("::: Running checkForURL :::", inputText);
    const isValid = /^[0-9]{5}(?:-[0-9]{4})?$/.test(inputText);
    if (isValid) {
        return true;
    }
    else {
        return false;
    }
}
