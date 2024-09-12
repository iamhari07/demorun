// commenting
describe('Navigate to the facebook', () => {
  it('Should perform login', () => {
  cy.visit('https://www.facebook.com');
  cy.wait(3000);
  cy.get("#email").type("demotest@gmail.com");
  cy.get("#pass").type("demotest");
  cy.get('[data-testid="royal_login_button"]').click();
  });
}); 