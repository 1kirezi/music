const resultBox = document.getElementById("result");

async function fetchArtist(artist) {
  try {
    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(artist)}`);
    if (!response.ok) throw new Error('Artist not found');

    const data = await response.json();

    resultBox.innerHTML = `
      <div class="artist-card">
        <img src="${data.thumbnail ? data.thumbnail.source : ''}" alt="${data.title}" />
        <h2>${data.title}</h2>
        <p>${data.extract}</p>
        <a href="${data.content_urls.desktop.page}" target="_blank">Read more on Wikipedia</a>
      </div>
    `;
  } catch (error) {
    resultBox.innerHTML = `<p>Could not find information about "${artist}". Please try another artist.</p>`;
  }
}

document.getElementById("search-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const artist = document.getElementById("artist-input").value.trim();
  if (artist) {
    resultBox.innerHTML = "<p>Loading...</p>";
    fetchArtist(artist);
  }
});
