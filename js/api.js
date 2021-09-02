/* -------------====Error massage Id===== ------------------------- */
const errorDiv = document.getElementById('error');

const loadData = () => {
    const getInput = document.getElementById('search-field');
    const searchText = getInput.value;

    /*------------- -------input Field conditon---------------  */
    if (searchText === '') {
        errorDiv.innerHTML = `<h6 class="text-center text-danger mt-5 fs-1"> Search Field Is Empty</h6>`
        const myCustomDiv = document.getElementById('book-items')
        myCustomDiv.textContent = '';
        const totalFound = document.getElementById('books-quentity');
        totalFound.textContent = "";
        return;
    }
    getInput.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
};

const displayData = allBooks => {
    /* ---------------------error massage----------------------- */
    if (allBooks.numFound === 0) {
        errorDiv.innerHTML = `<h6 class="text-center text-danger mt-5 fs-1">No Result Found</h6>`
        const myCustomDiv = document.getElementById('book-items')
        myCustomDiv.textContent = '';
        const totalFound = document.getElementById('books-quentity');
        totalFound.textContent = "";
        return;
    }
    else {
        errorDiv.textContent = '';
    }

    /*-------------------search result Quentity ------------ */
    const totalFound = document.getElementById('books-quentity');
    totalFound.innerHTML = `<h3 class="text-center text-info">Total Books Found : ${allBooks.numFound}</h3>`;

    /* --------------- Dynamic value and image Set --------------- */
    const books = allBooks.docs;
    const myCustomDiv = document.getElementById('book-items')
    myCustomDiv.textContent = '';
    books.forEach(book => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="col">
                <div class="card h-100">
                    <img height="350" img-fluid src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title"> ${book.title} </h3>
                    <h6 class="card-title">Author: ${book.author_name ? book.author_name : 'Here is no author-name'} </h6>
                    <p> First Publish Year : ${book.first_publish_year}</p>
                    <p> Publisher : ${book.publisher}</p>
                    </div>
                </div>
            </div>`;
        myCustomDiv.appendChild(div)

    });
}


