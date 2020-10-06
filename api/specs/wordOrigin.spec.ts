import axios from 'axios';
import { expect } from 'chai';

describe('Test word origins', async () => {
  const headers: object = {
    app_id: process.env.APP_ID,
    app_key: process.env.APP_KEY
  };

  it('returns the origin a valid word: positive case', async () => {
    const word = 'Insurance';
    const options: object = {
      method: 'GET',
      url: `${process.env.BASE_URL}/entries/en-gb/${word.toLowerCase()}?strictMatch=false`,
      headers
    };

    await axios(options).then((response) => {
      expect(response).to.be.not.empty;
      expect(response.status).to.equal(200);
      expect(response.statusText).to.equal('OK');
      expect(response.data.results[0].lexicalEntries[0].entries[0].etymologies[0]).to.contain(
        `late Middle English (originally as ensurance in the sense ‘ensuring, assurance, a guarantee’): from Old French enseurance, from enseurer (see ensure). insurance (sense 1) dates from the mid 17th century`
      );
    });
  });

  it('returns 404: NOT FOUND for an invalid word: negative case', async () => {
    const word = 'nonexistentword';
    const options: object = {
      method: 'GET',
      url: `${process.env.BASE_URL}/entries/en-gb/${word.toLowerCase()}&strictMatch=false`,
      headers
    };

    await axios(options).catch((error) => {
      expect(error.response.status).to.equal(404);
      expect(error.response.statusText).to.equal('NOT FOUND');
      expect(error.response.data).to.be.an('object');
      expect(error.response.data.error).to.be.equal(
        'No entry found matching supplied source_lang, word and provided filters'
      );
    });
  });

  it('returns 400: BAD REQUEST for a invalid filter in the request URL: negative case', async () => {
    const word = 'Insurance';
    const filter = 'invalidFilter';
    const options: object = {
      method: 'GET',
      url: `${process.env.BASE_URL}/entries/en-gb/${word.toLowerCase()}?${filter}&strictMatch=false`,
      headers
    };

    await axios(options).catch((error) => {
      expect(error.response.status).to.equal(400);
      expect(error.response.statusText).to.equal('BAD REQUEST');
      expect(error.response.data).to.be.an('object');
      expect(error.response.data.error).to.be.contain(`Invalid filter name found`);
    });
  });
});
