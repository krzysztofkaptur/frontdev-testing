import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "./App";

describe("App", () => {
	it("should render the App title", () => {
		const test = {}

		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>,
		);

		expect(screen.getByText("App")).toBeVisible();
	});
});
