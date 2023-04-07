
const url = "https://hoblist.com/api/movieList";

export const GetMovies = async (category,language,genre,sort) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          category,
          language,
          genre,
          sort
        })
      })
    const data = await response.json();
    return data;
}
