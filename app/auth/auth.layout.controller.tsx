export const fetchBackground = async () => {
  const res = await fetch(
    'https://api.unsplash.com/photos/random?query=architecture',
    {
      headers: {
        Authorization: 'Client-ID O02os0iUVSm5t7yuWkt9PPSG29SX9ip54zT8oVTMSxE',
      },
    }
  );
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  const image = data.urls.full;
  return image;
};
