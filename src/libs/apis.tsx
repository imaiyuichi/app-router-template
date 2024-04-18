export const getPosts = async () => {
  const response = await fetch(
    `https://public-api.wordpress.com/rest/v1.1/sites/test85446.wordpress.com/posts`,
  );
  const data = await response.json();

  return data;
};

export const fetchJson = async (key: string) => {
  return await fetch(key).then((res) => res.json());
};
