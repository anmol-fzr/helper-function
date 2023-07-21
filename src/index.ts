import objectWKeys from "./interface/common"

function queryBuilder(path: string, params: objectWKeys): string {
    if (typeof params === "object") {
        path = path.endsWith("/") ? path.slice(0, path.length - 1) : path;

        const queryString = new URLSearchParams(removeFalsyValues(params));
        return path + "?" + queryString.toString();
    }
    return path;
}

function removeFalsyValues(obj: objectWKeys): objectWKeys {
    Object.keys(obj).map((key) => {
        if (!Boolean(obj[key])) delete obj[key];
    });
    return obj;
}


export { removeFalsyValues, queryBuilder }