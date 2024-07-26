const parseisFavourite = (isFavourite) => {
  const isBool = typeof JSON.parse(isFavourite) === 'boolean';
  if (!isBool) return;
  return JSON.parse(isFavourite);
};

const parsecontactType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;

 const isContactType = (contactType) =>
   ['work', 'home', 'personal'].includes(contactType);

 if (isContactType(contactType)) return contactType;
};

export const parseFilterParams = (query) => {
  const { isFavourite, contactType } = query;

  const parsedisFavourite = parseisFavourite(isFavourite);
 const parsecontactType = parsecontactType(contactType);
  return {
    isFavourite: parsedisFavourite,
    contactType: parsecontactType,
  };
};
