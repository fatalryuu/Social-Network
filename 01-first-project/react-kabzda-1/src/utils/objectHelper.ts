export const updateObjectInArray = (items: Array<any>, itemID: number, property: string, newObjProps: Object) => {
    return items.map(el => {
        if (el[property] === itemID)
            return {...el, ...newObjProps}
        return el;
    })
}