const getAllEntries = () => {
    console.log('Hola')
    return {
        type: "GET_ALL_ENTRIES",
        payload: [
            {id: 5, title: "Title5", link: "Link"},
            {id: 6, title: "Title6", link: "Link"},
            {id: 7, title: "Title7", link: "Link"},
            {id: 8, title: "Title8", link: "Link"},
            {id: 9, title: "Title9", link: "Link"}
        ]
    };
};

export { getAllEntries };