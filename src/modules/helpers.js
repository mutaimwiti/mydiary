/*
Check if an object contains a property and the property is not null.
 */
export const has = (prop, object) => {
    return object && object[prop] !== undefined && object[prop] !== null;
};

/*
Credit to https://stackoverflow.com/questions/3177836
 */
export const timeSince = (date) => {
    let seconds = Math.floor((new Date() - Date.parse(date)) / 1000);
    let elapsed = Math.floor(seconds / 31536000);
    if (elapsed > 1) {
        return elapsed + " years ago";
    }
    elapsed = Math.floor(seconds / 2592000);
    if (elapsed > 1) {
        return elapsed + " months ago";
    }
    elapsed = Math.floor(seconds / 86400);
    if (elapsed > 1) {
        return elapsed + " days ago";
    }
    elapsed = Math.floor(seconds / 3600);
    if (elapsed > 1) {
        return elapsed + " hours ago";
    }
    elapsed = Math.floor(seconds / 60);
    if (elapsed > 1) {
        return elapsed + " minutes ago";
    }
    return Math.floor(seconds) + " seconds  ago";
};
