import { screen, render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import App from ".";

describe("App page | Unit test", () => {
  it("Should render page content", () => {
    const text = "Welcome to the page!";
    const ViewMock = () => <h1>{text}</h1>;

    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<ViewMock />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const header = screen.getByRole("banner");
    const message = screen.getByRole("heading", { level: 1 });

    expect(header).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });
});
