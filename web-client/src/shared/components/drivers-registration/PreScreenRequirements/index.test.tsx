import { Provider } from 'react-redux';
import { store } from '../../../redux';
import PreScreenRequirements from './index'
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

describe("Pre-Screen", () => {

    describe("with valid inputs", () => {
        const mockOnSubmit = jest.fn()
        const { getByLabelText, getByText } = render(<Provider store={store}><PreScreenRequirements onSubmit={mockOnSubmit} /></Provider>)

        it('calls the onSubmit function', async () => {
            // click on two required options
            const option1 = getByLabelText("I am willing to complete a police records check in order to volunteer as a driver")
            const option2 = getByLabelText("I am willing to complete a drving abstract in order to volunteer as a drvier")

            await act(async () => {
                fireEvent.click(option1)
                fireEvent.click(option2)
            })

            await act(async () => {
                fireEvent.click(getByText('SAVE'))
            })

            expect(mockOnSubmit).toHaveBeenCalled()
        })
    })

    describe("with invalid inputs", () => {
        describe("with missing inputs", () => {
            it("renders the driver abstract validation error", async () => {
                const mockOnSubmit = jest.fn()
                const { getByLabelText, getByText, container } = render(<Provider store={store}><PreScreenRequirements onSubmit={mockOnSubmit} /></Provider>)
                // Only one option clicked, missing drivingAbstractOptions
                const option1 = getByLabelText("I am willing to complete a police records check in order to volunteer as a driver")

                await act(async () => {
                    fireEvent.click(option1)
                    fireEvent.blur(option1)
                })

                await act(async () => {
                    fireEvent.click(getByText('SAVE'))
                })
                expect(container.innerHTML).toMatch("drivingAbstractOptions is a required field")
            })
        })
    })
})