export const addPatchObject = (path: string, value: string) => {
    const obj = {
        "value": value,
        "path": path,
        "op": "replace"
    }

    return obj
}