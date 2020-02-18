it("Email Field Validation Works During Signup", () => {
  var emailAddress = [
    "abcdefgh",
    "#$%^&*@.com",
    "@domain.com",
    "email.co.in",
    ".Email@domain.com",
    "email.@domain.com",
    "email....email1@domain.com",
    "email@domain",
    "email@-domain.com",
    "email@12344.4444.555.555",
    "antonioroseanne@gmail.com"
  ];

  cy.visit("https://signup.velpic.com");

  emailAddress.map(function(i) {
    cy.get("input").type(i);
    cy.contains("Get Started").click();
    cy.get("input").clear();
  });
});

it("First And Last Name Field Validation", () => {
  cy.contains("Continue").click();
  cy.get("#name").type("Rose Anne Antonio");
  cy.contains("Continue").click();
});

it("Phone Number Field Validation", () => {
  cy.contains("Continue").click();
  cy.get("#phonenumber").type("+639488321351");
  cy.contains("Continue").click();
});

it("Organisation Field Validation", () => {
  cy.contains("Start using Velpic").click();
  cy.get("#company").type("Shore360");
  cy.contains("Start using Velpic").click();
});

it("Previous Link Validation", () => {
  cy.contains("Previous").click();
  cy.contains("Previous").click();
});

it("First Log in Link Validation", () => {
  cy.contains("Log in").click();
});

it("Second Log in Link Validation", () => {
  cy.visit("https://signup.velpic.com");
  cy.get(".h5")
    .contains("Log in")
    .click();
});

it("Terms and Condition Link Validation", () => {
  cy.visit("https://signup.velpic.com");
  cy.contains("terms and conditions").click();
});
