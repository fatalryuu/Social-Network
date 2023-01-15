export const updateObjectInArray = (items, itemID, property, newObjProps) => {
    return items.map(el => {
        if (el[property] === itemID)
            return {...el, ...newObjProps}
        return el;
    })
}