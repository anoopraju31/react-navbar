export const theme = (data = false, action) => {
    switch (action.type) {
        case 'CHANGE': return action.payload
        default: return data
    }
}