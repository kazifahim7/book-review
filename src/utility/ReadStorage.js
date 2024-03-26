

const getReadBooks = () => {
    const storeBook = localStorage.getItem('readBook')
    if (storeBook) {
        return JSON.parse(storeBook)
    }
    else {
        return [];
    }
}

const setReadBookById = id => {
    const storeBooks = getReadBooks();

    const macth = storeBooks.find((books) => books === id)
    if (!macth) {
        storeBooks.push(id);
        localStorage.setItem('readBook', JSON.stringify(storeBooks))
        


    }
    

}

export { getReadBooks,setReadBookById }