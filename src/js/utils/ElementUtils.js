export function classListAdd(element, ...classNames) {
    for (var i = 0; i < classNames.length; i++) {
        let className = classNames[i];

        element.classList.add(className);
    }
}

export function classListRemove(element, ...classNames) {
    for (var i = 0; i < classNames.length; i++) {
        let className = classNames[i];

        element.classList.remove(className);
    }
}
