export function classListAdd(element, ...classNames) {
    classNames.forEach((className) => {
        element.classList.add(className);
    });
}

export function classListRemove(element, ...classNames) {
    classNames.forEach((className) => {
        element.classList.remove(className);
    });
}
