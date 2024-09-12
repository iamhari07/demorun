describe('Altoromutual Login and Search Tests', () => {
  
    // Replace with the actual URL
    const baseUrl = 'http://demo.testfire.net'; 
  
    // Test case for successful login
    it('Logs in with valid credentials', () => {
      cy.visit(baseUrl);
  
      // Click on the login link or button if needed
      cy.get('a[href="login.jsp"]').click();
  
      // Enter username
      cy.get('#uid').type('admin'); // Replace 'admin' with your valid username
  
      // Enter password
      cy.get('#passw').type('admin'); // Replace 'admin' with your valid password
  
      // Click on the Login button
      cy.get('input[name="btnSubmit"]').click();
  
      // Assert successful login by checking if the user dashboard or logout is visible
      cy.get('a[href="logout.jsp"]').should('be.visible');
    });
  
    // Test case for search functionality
    it('Searches for account-related information', () => {
      cy.visit(baseUrl);
  
      // Assuming the user is already logged in or call the login logic here if needed
  
      // Perform a search action
      cy.get('#query').type('banking'); // Adjust selector and search query based on actual functionality
  
      // Submit search
      cy.get('input[type="submit"]').click();
  
      // Assert results are displayed
      cy.get('.resultsTable').should('be.visible'); // Adjust this to match your result element
    });
  
    // Test case for invalid login
    it('Fails login with invalid credentials', () => {
      cy.visit(baseUrl);
      cy.get('a[href="login.jsp"]').click();
  
      // Enter invalid username and password
      cy.get('#uid').type('invalid_user');
      cy.get('#passw').type('wrong_password');
  
      // Attempt login
      cy.get('input[name="btnSubmit"]').click();
  
      // Assert error message is shown
      cy.contains('Login Failed').should('be.visible'); // Adjust this message if it's different
    });
  
  });
  