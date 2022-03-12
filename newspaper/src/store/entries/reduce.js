const initialState = {
    entries: [
        {id: 1, title: "Title1", link: "Link"},
        {id: 2, title: "Title2", link: "Link"},
        {id: 3, title: "Title3", link: "Link"},
        {id: 4, title: "Title4", link: "Link"},
        {id: 5, title: "Title5", link: "Link"}
    ]
};

export default (state = initialState, action) => {

    console.log('Estoy en el reducer');
    if(action.type === "GET_ALL_ENTRIES"){
        console.log('Estoy en el reducer');
        return{
            ...state,
            entries: action.payload
        }
    }

    return state;
};

export const selectCurrentEntries = (state = initialState) => {
    return state.entries;
}