describe('API User Management', () => {
  let authToken; // Declare a variable to store the auth token

  before(() => {
    // Authenticate and get the token
    cy.request({
      method: 'POST',
      url: 'https://qa-30-api.nanolocksecurity.nl/api/Auth/AuthenticateUser',
      headers: {
        'accept': '*/*',
        'Nl-Platform': 'MOT',
        'Content-Type': 'application/json'
      },
      body: {
        UserName: 'admin',
        Password: 'Aa123456!'
      }
    }).then((response) => {
      // Extract token from Set-Cookie header
      const cookies = response.headers['set-cookie'];
      const tokenCookie = cookies.find(cookie => cookie.startsWith('X-Access-Token='));
      authToken = tokenCookie.split(';')[0].split('=')[1]; // Extract the token value
    });
  });

  // Now use the stored token to create a user
  it('should create a new user successfully', () => {
    cy.request({
      method: 'POST',
      url: 'https://qa-30-api.nanolocksecurity.nl/api/Users/CreateUser',
      headers: {
        'accept': '*/*',
        'Nl-Platform': 'MOT',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}` // Include the auth token in the request
      },
      body: {
        "FirstName": "automateuser",
        "IsMfaEnabled": false,
        "LastName": "automate",
        "UserName": "automateprog",
        "PhoneCode": "972",
        "PhoneNumber": "0502729993",
        "Email": "auto@gmail.com",
        "Password": "Aa123456!",
        "RoleId": "787b125b-85c9-4edb-8a50-ece273c29b88"
      }
    }).then((response) => {
      // Add assertions here to check the response
      expect(response.status).to.eq(201); // Assuming 201 is the success status code
      // Add more assertions based on expected response
    });
  });
});