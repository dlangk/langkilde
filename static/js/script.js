document.addEventListener("DOMContentLoaded", function () {

    // Initial state for the content area and path
    const contentArea = document.querySelector('.content');
    const initialContent = contentArea.innerHTML;
    const initialPath = location.pathname;


    history.replaceState({path: initialPath, content: initialContent}, '', initialPath);

    // Setup sidebar links for AJAX content loading
    const links = document.querySelectorAll('.sidebar .post-link');  // Ensure it targets links within sidebar correctly
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            fetchPostContent(link.getAttribute('href'));
        });
    });

    // Handle back and forward navigation using history state
    window.onpopstate = function (event) {
        if (event.state) {
            contentArea.innerHTML = event.state.content;
        } else {
            contentArea.innerHTML = initialContent;
        }
    };

    // Fetch post content using AJAX
    function fetchPostContent(url) {
        fetch(url, {headers: {'X-Requested-With': 'XMLHttpRequest'}})
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                contentArea.innerHTML = `
                    <h1>${data.title}</h1>
                    <p>
                        <small>Published on: ${data.pub_date}</small>
                        <a href="${url}" class="post-link">permalink</a>
                    </p>
                    <div>${data.content}</div>
                `;
                if (history.pushState) {
                    history.pushState({path: url, content: contentArea.innerHTML}, '', url);
                }
            })
            .catch(error => console.error('Error loading the post:', error));

        // Scroll to top of the page once content is loaded
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // For a smooth scroll
        });

    }
});