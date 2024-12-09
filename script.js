function showContent(page, event) {
    const contentDiv = document.getElementById('content');
    const sidebarLinks = document.querySelectorAll('.sidebar a');

    // Removing active links
    sidebarLinks.forEach(link => link.classList.remove('active'));

    // for clicked link set active class
    event.target.classList.add('active');

    if (page === 'home') {
        contentDiv.innerHTML = 
            '<h1>Welcome to Home Page</h1>';
            
    }
    else if (page === 'about') {
        contentDiv.innerHTML = 
            '<h1>About Us</h1>' +
            '<p>We are a software service provider company, which specialises in E-commerce</p>';
        }
    else if (page === 'contact'){
        contentDiv.innerHTML = 
            '<h1>Contact Us</h1>' +
            '<p>Phone no:- 1111111111 (Kochi)</br>' +
                'Phone no:- 1111111111 (Thiruvananthapuram)</br>' +
                'Phone no:- 1111111111 (Bangalore)</p>';
    }
}

// console.log("Script Loaded");
