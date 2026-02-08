import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import { MemoryRouter } from "react-router";


describe("App", () => {
    it('should render the App title', () => {
        render(<MemoryRouter><App /></MemoryRouter>)

        expect(screen.getByText("App")).not.toBeVisible()
    })
})