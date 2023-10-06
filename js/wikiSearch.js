
    // Define the number of results to show per page
    const resultsPerPage = 10;

    function searchWikipedia() {
        const queryParam = new URLSearchParams(window.location.search).get("query");
        const searchResults = document.getElementById('searchResults');
        const pagination = document.getElementById('pagination');

        // Clear previous search results and pagination
        searchResults.innerHTML = '';
        pagination.innerHTML = '';

        // Check if a search query is provided
        if (queryParam) {
            // Define the search terms for ICT, Computer System Servicing, and Animation
            const searchTerms = ['computer science', 'information technology', 'networking', 'programming', 'software development', 'database management', 'cybersecurity'];

            // Create an array to hold search promises
            const searchPromises = [];

            // Perform a Wikipedia search for each term and collect the promises
            searchTerms.forEach(term => {
                // Construct the Wikipedia API URL with the search term, 'origin=*' for CORS, and pagination parameters
                const apiUrl = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&list=search&srsearch=${encodeURIComponent(term + ' ' + queryParam)}&srlimit=${resultsPerPage}&sroffset=${(currentPage - 1) * resultsPerPage}&srwhat=text`;

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

                    // Calculate the total number of pages
                    const totalResults = flattenedResults.length;
                    const totalPages = Math.ceil(totalResults / resultsPerPage);

                    // Display the current page of search results as links
                    const startIndex = (currentPage - 1) * resultsPerPage;
                    const endIndex = startIndex + resultsPerPage;
                    const currentResults = flattenedResults.slice(startIndex, endIndex);

                    currentResults.forEach(result => {
                        const title = result.title;
                        const snippet = result.snippet;
                        const pageId = result.pageid; // Unique identifier for the Wikipedia page
                        const resultDiv = document.createElement('div');

                        // Modify the link to point to the Wikipedia page
                        resultDiv.innerHTML = `<h2><a href="https://en.wikipedia.org/wiki/${title}" target="_blank">${title}</a></h2><p>${snippet}</p>`;
                        searchResults.appendChild(resultDiv);
                    });

                    // Display pagination links
                    for (let i = 1; i <= totalPages; i++) {
                        const pageLink = document.createElement('a');
                        pageLink.href = `results.html?query=${encodeURIComponent(queryParam)}&page=${i}`;
                        pageLink.textContent = i;
                        if (i === currentPage) {
                            pageLink.classList.add('active');
                        }
                        pagination.appendChild(pageLink);
                    }
                });
        }
    }

    // Parse the "page" query parameter from the URL to determine the current page
    const currentPage = parseInt(new URLSearchParams(window.location.search).get("page")) || 1;

    // Call the search function when the page loads
    window.addEventListener('load', searchWikipedia);