const searchbar = document.querySelector("form.searchbar");

searchbar.addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = e.target.querySelector('input').value;
    const url = window.location.href.split('/');
    url[3] = `search/${query}`;
    window.location.href = [url[0], url[1], url[2], url[3]].join('/')
    console.log(window.location.href.split('/'));
    console.log(window.location.href.split('/').join('/'));
    // const response = await fetch(`/search/${query}`)
});
