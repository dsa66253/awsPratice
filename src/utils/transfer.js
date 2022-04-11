const nextStatus = (currentStatus, sequential) => {
    const statusList = ['RAW', 'RUNNING', 'DONE'];
    var index;
    if (sequential) {
        index = statusList.indexOf(currentStatus) + 1;
    } else {
        index = statusList.indexOf(currentStatus) - 1;
    }
    if (index < 0) return currentStatus;
    if (index >= statusList.length) return currentStatus;
    console.log(currentStatus + ' -> ' + statusList[index]);

    return statusList[index];
}

const statusToColor = {
    'RAW': '#EA0000',
    'RUNNING': '#FFDC35',
    'DONE': '#00BB00'
};


export { nextStatus, statusToColor };