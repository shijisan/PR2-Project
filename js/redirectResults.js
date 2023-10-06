function redirectToResults() {
    const searchInput = document.getElementById('searchInput').value;

    // Redirect to "results.html" with the search query as a query parameter
    window.location.href = `pages/results.html?query=${encodeURIComponent(searchInput)}`;
}