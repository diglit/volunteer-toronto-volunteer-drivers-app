import { Provider } from 'react-redux';
import { store } from '../../../redux';
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import AgreementSection from './index';

describe("Agreement Section", () => {

    describe("with valid inputs", () => {
        const mockOnSubmit = jest.fn()
        const { getByLabelText, getByText, getByRole } = render(<Provider store={store}><AgreementSection onSubmit={mockOnSubmit} /></Provider>)

        it('calls the onSubmit function', async () => {
            // click on two required options
            const option1 = getByLabelText("I understand the Volunteer Toronto will provide my information to the non-profit organization that best matches my profile")
            const option2 = getByLabelText("I understand that I will still be required to complete screening steps outlined by the organization I am reffered to")
            const option3 = getByLabelText("I expect to receive contact from my matched organization within 2 weeks")
            const option4 = getByLabelText("I agree to complete a follow-up evaluation of my experience in this Matching Program")
            const signiture = getByRole('textbox')

            await act(async () => {
                fireEvent.click(option1)
                fireEvent.click(option2)
                fireEvent.click(option3)
                fireEvent.click(option4)
                fireEvent.change(signiture, { target: { value: 'james' } })
            })

            await act(async () => {
                fireEvent.click(getByText('SAVE'))
            })

            expect(mockOnSubmit).toHaveBeenCalled()
        })
    })

    describe("with invalid inputs", () => {
        describe("with missing inputs", () => {
            it("renders the agreement options validation error", async () => {
                const mockOnSubmit = jest.fn()
                const { getByLabelText, getByText, container } = render(<Provider store={store}><AgreementSection onSubmit={mockOnSubmit} /></Provider>)
                // Only one option clicked. Should select all options
                const option1 = getByLabelText("I understand the Volunteer Toronto will provide my information to the non-profit organization that best matches my profile")

                await act(async () => {
                    fireEvent.click(option1)
                    fireEvent.blur(option1)
                })

                await act(async () => {
                    fireEvent.click(getByText('SAVE'))
                })
                expect(container.innerHTML).toMatch("Please comfirm")
            })
        })
    })
})