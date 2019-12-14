export const startSession = () => {
  console.log('test')
  return fetch(`https://www.wikiart.org/en/Api/2/login?accessCode=a4869c81b2504094&secretCode=aa16c933da7f0356`,
    {
      mode: 'no-cors',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(res => {
      console.log('test:', res)
      if (res.status === "error") {
        throw Error(res.message);
      }
      return res.json();
    })
    .catch(error => {
      console.log('testing::')
      return error
    })

}