function isPersian(text) {
    const persianRange = /[\u0600-\u06FF]/g;
    const englishRange = /[a-zA-Z]/g;

    const persianMatches = text.match(persianRange) || [];
    const englishMatches = text.match(englishRange) || [];

    if (persianMatches.length > englishMatches.length) {
        return true;
    } else if (englishMatches.length > persianMatches.length) {
        return false;
    } else {
        return undefined;
    }
}


export default isPersian