const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function fetchEntries(contentType) {
  const entries = await client.getEntries({ content_type: contentType });
  if (entries.items) return entries.items;
  console.error(`Error getting Entries for ${contentType}.`);
}

export default { fetchEntries };
