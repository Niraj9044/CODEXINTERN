async function summarizeArticle() {
    const articleUrl = document.getElementById('articleUrl').value;
    const outputDiv = document.getElementById('output');

    if (!articleUrl) {
        outputDiv.textContent = 'Please enter a valid URL.';
        return;
    }

    outputDiv.textContent = 'Summarizing...';

    try {
        const response = await fetch("https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=" + encodeURIComponent(articleUrl) + "&length=3", {
            method: "GET",
            headers: {
                "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
                "X-RapidAPI-Key": "25072d15c3msh3b315749401df60p1dbc04jsnecfffbd9d7c1"
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch summary. Please check the URL or try again later.');
        }

        const data = await response.json();
        outputDiv.innerHTML = `<h3>Summary:</h3><p>${data.summary}</p>`;
    } catch (error) {
        outputDiv.textContent = `Error: ${error.message}`;
    }
}