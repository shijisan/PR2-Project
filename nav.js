function nav() {
    document.getElementById('nav').innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="navElementCont container-fluid">
                <!-- Logo and Brand -->
                <a class="navbar-brand" href="#">
                    <img src="images/logo.png" alt="Logo" width="50" height="50">
                    <label style="font-size: 2rem;margin: auto;padding: 0 1rem;">ICTpedia</label>
                </a>
                
                <!-- Toggler/collapsible Button for mobile -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <!-- Navbar Links -->
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link 2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link 3</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link 4</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link 5</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
}

nav();