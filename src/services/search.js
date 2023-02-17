import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch('Y672DYSBC6', '8547ec03ae3c8fe47d1547b86e93dbb2');
const index = client.initIndex('prod_comics');

export const search = async ({ query }) => {
  const { hits } = await index.search(query, {
    attributesToRetrieve: ['id', 'title', 'img', 'alt'],
    hitsPerPage: 10,
  });
  return { results: hits };
};
