// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const newsContainer = document.getElementById('news-container');
    const paginationContainer = document.querySelector('.pagination');
    const newsPerPage = 5;
    const totalNews = 50; // Total number of news items
    const totalPages = Math.ceil(totalNews / newsPerPage);
    const queryParams = new URLSearchParams(window.location.search);
    const page = parseInt(queryParams.get('page')) || 1;

    function loadNews(page) {
        newsContainer.innerHTML = '';

        for (let i = (page - 1) * newsPerPage; i < page * newsPerPage && i < totalNews; i++) {
            const newsItem = document.createElement('article');
            newsItem.className = 'news-item';

            newsItem.innerHTML = `
                <img src="https://via.placeholder.com/600x400" alt="News Image ${i + 1}" class="news-image">
                <div class="news-content">
                    <h3>News Title ${i + 1}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
                    <p class="news-likes">Likes: <span>${Math.floor(Math.random() * 1000)}</span></p>
                    <p class="news-comments">Comments: <span>${Math.floor(Math.random() * 100)}</span></p>
                    <p class="news-shares">Shares: <span>${Math.floor(Math.random() * 500)}</span></p>
                    <video controls>
                        <source src="https://www.example.com/video${i + 1}.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <a href="#" class="read-more">Read more</a>
                </div>
            `;

            newsContainer.appendChild(newsItem);
        }
    }

    function setupPagination() {
        paginationContainer.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement('a');
            pageLink.href = `?page=${i}`;
            pageLink.textContent = i;
            if (i === page) {
                pageLink.style.fontWeight = 'bold';
            }
            paginationContainer.appendChild(pageLink);
        }
    }

    loadNews(page);
    setupPagination();
});
