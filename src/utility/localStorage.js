const getBooks = ()=>{
    const storeBook = localStorage.getItem('book')
    if(storeBook){
        return JSON.parse(storeBook)
    }
    else{
        return [];
    }
}

const setBookById = id =>{
    const storeBooks = getBooks()

    const macth =storeBooks.find((books)=>books ===id)
    if(!macth){
        storeBooks.push(id);
        localStorage.setItem('book',storeBooks)

    }
    
}