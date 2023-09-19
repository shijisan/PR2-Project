// Create a function to generate the navigation bar HTML
function createNavbar() {
    // Create the main elements
    const nav = document.createElement("nav");
    nav.className = "navbar navbar-expand-lg bg-body-tertiary";
    nav.setAttribute("data-bs-theme", "dark"); // Set data-bs-theme attribute

    const container = document.createElement("div");
    container.className = "container-fluid";

    // Create a div to hold the logo and brand name
    const logoAndBrandDiv = document.createElement("div");
    logoAndBrandDiv.className = "d-flex align-items-center"; // Use Bootstrap classes to align items horizontally

    // Create the logo image
    const logoImg = document.createElement("img");
    logoImg.src = "logo/logo.png"; // Set the image source
    logoImg.alt = "Logo"; // Set an alt text for accessibility (describe the image)
    logoImg.classList.add("logo"); // Add the "logo" class to the image

    // Create the brand link
    const brandLink = document.createElement("a");
    brandLink.className = "navbar-brand";
    brandLink.href = "#";
    brandLink.textContent = "ICTpedia";

    // Append the logo and brand name to the logoAndBrandDiv
    logoAndBrandDiv.appendChild(logoImg);
    logoAndBrandDiv.appendChild(brandLink);

    const togglerButton = document.createElement("button");
    togglerButton.className = "navbar-toggler";
    togglerButton.type = "button";
    togglerButton.setAttribute("data-bs-toggle", "collapse");
    togglerButton.setAttribute("data-bs-target", "#navbarNav");
    togglerButton.setAttribute("aria-controls", "navbarNav");
    togglerButton.setAttribute("aria-expanded", "false");
    togglerButton.setAttribute("aria-label", "Toggle navigation");

    const togglerIcon = document.createElement("span");
    togglerIcon.className = "navbar-toggler-icon";

    const collapseDiv = document.createElement("div");
    collapseDiv.className = "collapse navbar-collapse";
    collapseDiv.id = "navbarNav";

    const ul = document.createElement("ul");
    ul.className = "navbar-nav";

    // Create individual list items with different links
    const navItems = [
        { text: "Home", link: "./index.html" },
        { text: "Game", link: "./game/game.html" },
        { text: "A.I", link: "ai.html" },
        { text: "Survey", link: "survey.html" },
        { text: "Login", link: "login.html" }
    ];

    navItems.forEach((item) => {
        const li = document.createElement("li");
        li.className = "nav-item";

        const link = document.createElement("a");
        link.className = "nav-link";
        link.href = item.link; // Set the link from the object
        link.textContent = item.text; // Set the text from the object

        li.appendChild(link);
        ul.appendChild(li);
    });

    // Build the navigation bar structure
    togglerButton.appendChild(togglerIcon);
    container.appendChild(logoAndBrandDiv); // Append the logoAndBrandDiv
    container.appendChild(togglerButton);
    collapseDiv.appendChild(ul);
    container.appendChild(collapseDiv);
    nav.appendChild(container);

    return nav;
}

// Call the function to create the navigation bar and append it to the body
const navbar = createNavbar();
document.body.appendChild(navbar);
