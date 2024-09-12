describe('OrangeHRM Login and Logout Test', () => {
  const baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

  beforeEach(() => {
    // Visit the login page before each test
    cy.visit(baseUrl);
  });

  it('should successfully log in with valid credentials and log out', () => {
    // Enter username
    cy.get('input[name="username"]').type('Admin');
    
    // Enter password
    cy.get('input[name="password"]').type('admin123');
    
    // Click the login button
    cy.get('button[type="submit"]').click();
    
    // Verify successful login by checking for an element only present after login
    // For example, check if the profile icon is visible
    cy.get('.oxd-userdropdown').should('be.visible');
    
    // Click the profile dropdown to access the logout button
    cy.get('.oxd-userdropdown').click();
    
    // Click the logout button
    cy.get('a[href="/web/index.php/auth/logout"]').click();
    
    // Verify successful logout by checking the URL or login page visibility
    cy.url().should('include', '/auth/login');
    cy.get('input[name="username"]').should('be.visible');
  });

  it('should show an error message with invalid credentials', () => {
    // Enter incorrect username
    cy.get('input[name="username"]').type('wronguser');
    
    // Enter incorrect password
    cy.get('input[name="password"]').type('wrongpassword');
    
    // Click the login button
    cy.get('button[type="submit"]').click();
    
    // Verify error message is shown
    // The error message might vary, check the actual element or text
    cy.get('.oxd-alert-content').should('contain.text', 'Invalid credentials');
  });
});
