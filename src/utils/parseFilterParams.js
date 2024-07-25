const parseisFavourite = (isFavourite) => {
  const isBool = typeof JSON.parse(isFavourite) === 'boolean';
  if (!isBool) return;
  console.log(JSON.parse(isFavourite));
  return JSON.parse(isFavourite);
};

export const parseFilterParams = (query) => {
  const { isFavourite } = query;

  const parsedisFavourite = parseisFavourite(isFavourite);

  return {
    isFavourite: parsedisFavourite,
  };
};
