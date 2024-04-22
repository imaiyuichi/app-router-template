export const fetchJson = async (key: string) => {
  return await fetch(key).then((res) => res.json());
};
