



const getBooks = () => {
    const storeBook = localStorage.getItem('book')
    if (storeBook) {
        return JSON.parse(storeBook)
    }
    else {
        return [];
    }
}

const setBookById = id => {
    const storeBooks = getBooks()
    

    const macth = storeBooks.find((books) => books === id)
    if (!macth) {
        storeBooks.push(id);
        localStorage.setItem('book', JSON.stringify(storeBooks))
        
        // toast.success('This book is added to list.');




    }
    // else{
    //     toast.error('This book is already added to  list.');
    // }





}

export { getBooks, setBookById }