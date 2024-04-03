export function fetchInfo(searchWord) {
  const params = {
    q: searchWord,
    key: '43138861-aa01fee7d014e33c8f4078e7d',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  return fetch(
    `https://pixabay.com/api/?key=${params.key}&q=${params.q}&image_type=${params.image_type}&orientation=${params.orientation}&safesearch=${params.safesearch}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(json => {
      return json;
    });
}