import './helper';

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      signOut(): void;
      createLearnerAccount(email: string, password?: string): void;
    }
  }
}

Cypress.Commands.add('signOut', () => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

Cypress.Commands.add('createLearnerAccount', (email: string, password?: string) => {
  password = password || 'Password1234';

  const options: object = {
    method: 'POST',
    url: `${Cypress.env('apiBaseUrl')}/register/learner`,
    headers: {
      accept: 'application/json',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
      'content-type': 'application/json',
      locale: 'en-GB',
      origin: Cypress.config().baseUrl,
      referer: Cypress.config().baseUrl,
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site'
    },
    body: { email, password }
  };

  cy.request(options).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('redirect');
    expect(response.body).to.have.property('token');
  });
});

export {};
