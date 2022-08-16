export const getTheme = (data) => async (dispatch) => {
    try {
        dispatch({ type: 'CHANGE', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}