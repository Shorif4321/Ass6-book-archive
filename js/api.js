
// collect data from input text
const loadData = () => {
    const getInput = document.getElementById('search-field');
    const searchText = getInput.value;
    getInput.value = '';

    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = allBooks => {
    const books = allBooks.docs;
    const myCustomDiv = document.getElementById('boot-card')
    myCustomDiv.innerText = '';
    books.forEach(book => {
        //console.log(book)
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="col">
                <div class="card h-100">
                    <img height="300" img-fluid src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" class="card-img-top" alt="...">

                    <div class="card-body">
                        <h3 class="card-title"> ${book.title} </h3>
                    <h6 class="card-title">Author: ${book.author_name} </h6>
                    <p> First Publish Year : ${book.first_publish_year}</p>
                    <p> Publisher : ${book.publisher}</p>
                    </div>
                </div>
            </div>`;
        myCustomDiv.appendChild(div)

    });
}