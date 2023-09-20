const htmlTemplate = `
<div class="homewikicont container-fluid">
    <h1>ICTpedia Search!</h1>
    <input type="text" id="searchInput" placeholder="Search for ICT related topics!">
    <button onclick="searchWikipedia()">Search</button>
    <div id="searchResults"></div>

</div>
`;

// Inject the HTML template into the section with class "homeWiki"
document.addEventListener("DOMContentLoaded", function () {
    const homeWikiSection = document.querySelector('.homeWiki');
    if (homeWikiSection) {
        homeWikiSection.innerHTML = htmlTemplate;
    }
});
