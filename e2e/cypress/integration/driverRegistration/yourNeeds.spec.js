//Navigate from 'Personal Info' section to 'Your Needs' section to perform Cypress test
describe("when the 'Next button' in the Personal Info section is clicked", () => {
  it("'Your Needs' Section should be rendered", () => {
    cy.visit("/drivers-registration");
    cy.findByText("Next").click();
  });
});

//There should be three questions in the 'Your Needs' section
describe("when the 'Your Needs' section is rendered", () => {
  it("the following three questions should be displayed", () => {
    cy.findByText(
      "I want to deliver in these communities (select all the apply)"
    ).should("exist");
    cy.findByText("I am available to deliver (select all that apply)").should(
      "exist"
    );
    cy.findByText("I am comfortable with (choose all that apply):").should(
      "exist"
    );
  });
});

//All options from Q1 should exist
describe("For the first question 'I want to deliver in these communities'", () => {
  it("all of the communities that a user can select should be displayed", () => {
    cy.findByText("Downtown Toronto").should("exist");
    cy.findByText("North York East (East of Yonge)").should("exist");
    cy.findByText("North York West (West of Yonge)").should("exist");
    cy.findByText("Mid-Town Toronto (Lawrence to Batherst)").should("exist");
    cy.findByText("East York / Beaches").should("exist");
    cy.findByText("Scarborough (East of Malvern)").should("exist");
    cy.findByText("Scarborough (West of Malvern)").should("exist");
    cy.findByText("North Etobicoke (North of 401)").should("exist");
    cy.findByText("South Etobicoke (South of 401)").should("exist");
  });
});

//All options from Q2 should exist
describe("For the second question 'I am available to deliver'", () => {
  it("hourly time slots between 6 AM and 10 PM should be displayed", () => {
    cy.findByText("6 AM").should("exist");
    cy.findByText("7 AM").should("exist");
    cy.findByText("8 AM").should("exist");
    cy.findByText("9 AM").should("exist");
    cy.findByText("10 AM").should("exist");
    cy.findByText("11 AM").should("exist");
    cy.findByText("12 PM").should("exist");
    cy.findByText("1 PM").should("exist");
    cy.findByText("2 PM").should("exist");
    cy.findByText("3 PM").should("exist");
    cy.findByText("4 PM").should("exist");
    cy.findByText("5 PM").should("exist");
    cy.findByText("6 PM").should("exist");
    cy.findByText("7 PM").should("exist");
    cy.findByText("8 PM").should("exist");
    cy.findByText("9 PM").should("exist");
    cy.findByText("10 PM").should("exist");
  });
});

describe("For the second question 'I am available to deliver'", () => {
  it("all seven days of the week should be displayed", () => {
    cy.findByText("Sunday").should("exist");
    cy.findByText("Monday").should("exist");
    cy.findByText("Tuesday").should("exist");
    cy.findByText("Wednesday").should("exist");
    cy.findByText("Thursday").should("exist");
    cy.findByText("Friday").should("exist");
    cy.findByText("Saturday").should("exist");
  });
});

//All options from Q3 should exist
describe("For the third question 'I am comfortable with'", () => {
  it("all of the options that a user can select should be displayed", () => {
    cy.findByText("Contact-less Delivery").should("exist");
    cy.findByText(
      "Being in contact with high-risk clients during delivery (e.g. seniors)"
    ).should("exist");
    cy.findByText(
      "Being in contact with low-risk clients during delivery"
    ).should("exist");
    cy.findByText("Lifting boxes and bags up to 30 pounds during shift").should(
      "exist"
    );
    cy.findByText("Lifting boxes and bags up to 50 pounds during shift").should(
      "exist"
    );
    cy.findByText("Packing and/sorting items for delivery").should("exist");
  });
});

//Users should be able to select multiple options for each question, and each option should be checked when clicked
describe("When users select the options for each question", () => {
  it("the corresponding checkbox for that option should be checked", () => {
    //Question 1: 'Downtown Toronto' and 'East York / Beaches'
    cy.get("[type=checkbox]:eq(0)").click();
    cy.get("[type=checkbox]:eq(0)").should("be.checked");
    cy.get("[type=checkbox]:eq(4)").click();
    cy.get("[type=checkbox]:eq(4)").should("be.checked");
    //     //Question 2: 'Monday 9 AM' and 'Thursday 7 AM"
    cy.get("[type=checkbox]:eq(20)").click();
    cy.get("[type=checkbox]:eq(20)").should("be.checked");
    cy.get("[type=checkbox]:eq(31)").click();
    cy.get("[type=checkbox]:eq(31)").should("be.checked");
    //     //Question 3: 'Being in contact with low-risk clients during delivery' and 'Lifting boxes and bags up to 50 pounds during shift'
    cy.get("[type=checkbox]:eq(130)").click();
    cy.get("[type=checkbox]:eq(130)").should("be.checked");
    cy.get("[type=checkbox]:eq(132)").click();
    cy.get("[type=checkbox]:eq(132)").should("be.checked");
  });
});

//Save button should exist and can be clicked
describe("The 'Save' button should exist", () => {
  it("and the button can be clicked", () => {
    cy.findByText("Save").should("exist").click();
  });
});

//Back button should exist and when clicked, render the Personal Info section
describe("The 'Back' button should exist and when clicked", () => {
  it("the 'Personal Info' section should be rendered", () => {
    cy.findByText("Back").should("exist").click();
    cy.findByText("First Name").should("exist");
  });
});

//Next button should exist and when clicked, render the Pre-Screen Requirements section
describe("The 'Next' button should exist and when clicked", () => {
  it("the 'Pre-Screen Requirements' section should be rendered", () => {
    cy.findByText("Next").click();
    cy.findByText("Next").click();
    cy.findByText("Police Records Check Requirements").should("exist");
  });
});
