describe('Test Nav Menus', () => {
  const footerText = 'Commonwealth Bank of Australia ABN 48 123 123 124 AFSL and Australian credit licence 234945';
  context('Test all tabs in 720p resolution', () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
      cy.visit('/');
    });

    it('Displays full header and nav menus', () => {
      cy.get('.nav-wrapper').find('[title="Banking"]').should('be.visible');
      cy.get('.nav-wrapper').find('[title="Home loans"]').should('be.visible');
      cy.get('.nav-wrapper').find('[title="Insurance"]').should('be.visible');
      cy.get('.nav-wrapper').find('[title="Investing & super"]').should('be.visible');
      cy.get('.nav-wrapper').find('[title="Business"]').should('be.visible');
      cy.get('.nav-wrapper').find('[title="Institutional"]').should('be.visible');
    });

    it('Navigates to Banking menu', () => {
      cy.get('.nav-wrapper').find('[title="Banking"]').click();
      cy.url().should('include', '/banking');
      cy.get('.banner').should('contain.text', 'Banking');
      cy.get('.footer').should('be.visible').and('contain.text', footerText);
    });

    it('Navigates to Home Loans menu', () => {
      cy.get('.nav-wrapper').find('[title="Home loans"]').click();
      cy.url().should('include', '/home-loans');
      cy.title().should('equal', 'Home loans - calculators, guides and more – CommBank');
      cy.get('.banner').should('contain.text', 'Home loans');
      cy.get('.footer').should('be.visible').and('contain.text', footerText);
    });

    it('Navigates to Insurance menu', () => {
      cy.get('.nav-wrapper').find('[title="Insurance"]').click();
      cy.url().should('include', '/insurance');
      cy.get('.banner').should('contain.text', 'Insurance');
      cy.get('.footer').should('be.visible').and('contain.text', footerText);
    });

    it('Navigates to Investing & Super menu', () => {
      cy.get('.nav-wrapper').find('[data-tracker-id="Investin"]').click();
      cy.title().should('equal', 'Investing & Super - CommBank');
      cy.url().should('include', '/investing-and-super');
      cy.get('.banner').should('contain.text', 'Investing & Super');
      cy.get('.footer').should('be.visible').and('contain.text', footerText);
    });

    it('Navigates to Business menu', () => {
      cy.get('.nav-wrapper').find('[data-tracker-id="Business"]').click();
      cy.title().should('equal', 'Business - CommBank');
      cy.url().should('include', '/business');
      cy.get('.banner').should('contain.text', 'Business banking');
      cy.get('.footer').should('be.visible').and('contain.text', footerText);
    });

    it('Navigates to Institutional menu', () => {
      cy.get('.nav-wrapper').find('[data-tracker-id="Institutional"]').click();
      cy.title().should('equal', 'Institutional - CommBank');
      cy.url().should('include', '/institutional');
      cy.get('.banner').should('contain.text', 'Institutional banking');
      cy.get('.footer').should('be.visible').and('contain.text', footerText);
    });
  });

  // https://docs.cypress.io/api/commands/viewport.html#Arguments
  const sizes: any = [
    'iphone-x',
    'ipad-mini',
    'samsung-note9',
    [320, 568],
    [411, 731]
    // 'iphone-3',
    // 'iphone-4',
    // 'iphone-5',
    // 'iphone-6',
    // 'iphone-6+',
    // 'samsung-s10',
    // 'iphone-xr',
  ];

  context('Test nav menus in various resolutions/viewports', () => {
    sizes.forEach((size: any) => {
      describe(`Test all tabs in ${size} resolution`, () => {
        beforeEach(() => {
          if (Cypress._.isArray(size)) {
            cy.viewport(size[0], size[1]);
          } else {
            cy.viewport(size);
          }
          cy.visit('/');
          cy.get('nav .icon-cross').should('be.visible').click();
        });

        it(`Navigates to Banking menu for ${size} resolution`, () => {
          cy.get('.mobile-navigation').find('[data-tracker-id="Banking"]').click();
          cy.title().should('equal', 'Banking - CommBank');
          cy.url().should('include', '/banking');
          cy.get('.banner').should('contain.text', 'Banking');
          cy.get('.footer').should('be.visible').and('contain.text', footerText);
        });

        it(`Navigates to Home Loans menu for ${size} resolution`, () => {
          cy.get('.mobile-navigation').find('[data-tracker-id="Hom"]').click();
          cy.title().should('equal', 'Home loans - calculators, guides and more – CommBank');
          cy.url().should('include', '/home-loans');
          cy.get('.banner').should('contain.text', 'Home loans');
          cy.get('.footer').should('be.visible').and('contain.text', footerText);
        });

        it(`Navigates to Insurance menu for ${size} resolution`, () => {
          cy.get('.mobile-navigation').find('[data-tracker-id="Insurance"]').click();
          cy.title().should('equal', 'Insurance - CommBank');
          cy.url().should('include', '/insurance');
          cy.get('.banner').should('contain.text', 'Insurance');
          cy.get('.footer').should('be.visible').and('contain.text', footerText);
        });

        it(`Navigates to Investing & Super menu for ${size} resolution`, () => {
          cy.get('.mobile-navigation').find('[data-tracker-id="Investin"]').click();
          cy.title().should('equal', 'Investing & Super - CommBank');
          cy.url().should('include', '/investing-and-super');
          cy.get('.banner').should('contain.text', 'Investing & Super');
          cy.get('.footer').should('be.visible').and('contain.text', footerText);
        });

        it(`Navigates to Business menu for ${size} resolution`, () => {
          cy.get('.mobile-navigation').find('[data-tracker-id="Business"]').click();
          cy.title().should('equal', 'Business - CommBank');
          cy.url().should('include', '/business');
          cy.get('.banner').should('contain.text', 'Business banking');
          cy.get('.footer').should('be.visible').and('contain.text', footerText);
        });

        it(`Navigates to Institutional menu for ${size} resolution`, () => {
          cy.get('.mobile-navigation').find('[data-tracker-id="Institutional"]').click();
          cy.title().should('equal', 'Institutional - CommBank');
          cy.url().should('include', '/institutional');
          cy.get('.banner').should('contain.text', 'Institutional banking');
          cy.get('.footer').should('be.visible').and('contain.text', footerText);
        });
      });
    });
  });
});
