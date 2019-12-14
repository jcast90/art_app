export const fetchPaintings = (paginationsToken?: string) => {
  const query = paginationsToken ? `MostViewedPaintings?paginationToken=${paginationsToken}` : 'MostViewedPaintings'
  fetch(`https://www.wikiart.org/en/api/2/${query}`)
    .then(res => res.json())
    .then(res => {
      if (res.status === "error") {
        throw Error(res.message);
      }
      return res.json();
    })
    .catch(error => {
      return error
    })

}