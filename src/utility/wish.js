
import { getReadBooks } from "./ReadStorage";



const getWishBooks = () => {
    const storeBook = localStorage.getItem('wishBook')
    if (storeBook) {
        return JSON.parse(storeBook)
    }
    else {
        return [];
    }
}

const setWishBookById = id => {
    const storeBooks = getReadBooks();

    const macth = storeBooks.find((books) => books === id)
    if (!macth) {
        
        storeBooks.push(id);
        localStorage.setItem('wishBook', JSON.stringify(storeBooks))




    }
    else {
        localStorage.setItem('readBook', JSON.stringify(storeBooks))


    }


}

export { getWishBooks, setWishBookById }