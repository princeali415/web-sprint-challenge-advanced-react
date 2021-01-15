import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render (<CheckoutForm />)
});

test("form shows success message on submit with form details", async () => {
    render (<CheckoutForm />)

    // Act:
    // 1. Get our firstName, lastName, email, and message input feilds.
    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i) 
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    // 2. Type the values into out input feilds
    userEvent.type(firstNameInput, 'Hussain');
    userEvent.type(lastNameInput, 'Ali');
    userEvent.type(addressInput, '9999 Hacker Av. ');
    userEvent.type(cityInput, 'Fremont');
    userEvent.type(stateInput, 'California');
    userEvent.type(zipInput, '94303');

    // 3. Push the submit button
    const button = screen.getByRole('button');
    userEvent.click(button);

    //Assert
    // Shows Success Message test
    const successMessage = await screen.findByTestId(/successMessage/)
    expect(successMessage).toBeInTheDocument();

    

});
