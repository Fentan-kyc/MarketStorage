
export const getAllCells = (data) => {
    let cells = []

    Object.entries(data).forEach(([key, value]) => {
        cells.push(key)
    })

    return cells;
}

export const getAllOrders = (data) => {
    let orders = []
    let cells = getAllCells(data);

    cells.map(cell => {
        Object.values(data[cell]).forEach(value => {
            value.map(i => orders.push(i))
        })
    })

    return orders;
}