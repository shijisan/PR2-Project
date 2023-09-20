// In your script.js file

// Define global variables for pagination
let currentPage = 1;
const resultsPerPage = 10; // Number of results to display per page

function searchWikipedia() {
    const searchInput = document.getElementById('searchInput').value;
    const searchResults = document.getElementById('searchResults');

    // Clear previous search results
    searchResults.innerHTML = '';

    // Define the search terms for ICT, Computer System Servicing, and Animation
    const searchTerms = ['ICT', 'Computer System Servicing', 'Animation'];

    // Create an array to hold search promises
    const searchPromises = [];

    // Perform a Wikipedia search for each term and collect the promises
    searchTerms.forEach(term => {
        // Construct the Wikipedia API URL with the search term, 'origin=*' for CORS, and pagination parameters
        const apiUrl = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&list=search&srsearch=${encodeURIComponent(term + ' ' + searchInput)}&srlimit=${resultsPerPage}&sroffset=${(currentPage - 1) * resultsPerPage}`;

        // Fetch and process the search results
        const promise = fetch(apiUrl)
            .then(response => response.json())
            .then(data => data.query.search)
            .catch(error => {
                console.error('Error:', error);
                return [];
            });

        searchPromises.push(promise);
    });

    // Wait for all search promises to resolve
    Promise.all(searchPromises)
        .then(results => {
            // Flatten the array of search results
            const flattenedResults = results.flat();

            // Display the current page of search results as links
            const startIndex = (currentPage - 1) * resultsPerPage;
            const endIndex = startIndex + resultsPerPage;
            const currentResults = flattenedResults.slice(startIndex, endIndex);

            currentResults.forEach(result => {
                const title = result.title;
                const snippet = result.snippet;
                const pageId = result.pageid; // Unique identifier for the Wikipedia page
                const resultDiv = document.createElement('div');
                resultDiv.innerHTML = `<h2><a href="https://en.wikipedia.org/wiki?curid=${pageId}" target="_blank">${title}</a></h2><p>${snippet}</p>`;
                searchResults.appendChild(resultDiv);
            });

            // Add pagination controls
            addPaginationControls(flattenedResults.length);
        });
}

// Function to add pagination controls
function addPaginationControls(totalResults) {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(totalResults / resultsPerPage);

    if (totalPages > 1) {
        const prevButton = document.createElement('button');
        prevButton.textContent = 'Previous';
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                searchWikipedia();
            }
        });

        const nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                searchWikipedia();
            }
        });

        paginationContainer.appendChild(prevButton);
        paginationContainer.appendChild(nextButton);
    }
}
