export const fetcher = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('API error');
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
