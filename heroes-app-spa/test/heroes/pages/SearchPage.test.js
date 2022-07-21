import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("test over search component", () => {
  test("should show search component rendered", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />;
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test("should show input text with serch term and image of hero", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />;
      </MemoryRouter>
    );

    const inputText = screen.getByRole("textbox");
    expect(inputText.value).toBe("batman");

    const img = screen.getByRole("img");
    expect(img.src).toContain("http://localhost/assets/heroes/dc-batman.jpg");
  });

  test("should show alert of search hero", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />;
      </MemoryRouter>
    );

    const alertDoSearch = screen.getByLabelText("show-search");
    expect(alertDoSearch.style).toBeTruthy();
  });

  test("should show alert of error if don't find hero (vatnan) ", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=vatnan"]}>
        <SearchPage />;
      </MemoryRouter>
    );

    const alertErrorNotFinded = screen.getByLabelText("show-error");
    expect(alertErrorNotFinded.style.display).toBe("");
  });

  test("should call navigate with submit form", () => {
    const superhero = "superman";
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />;
      </MemoryRouter>
    );

    const inputValue = screen.getByRole("textbox");
    fireEvent.change(inputValue, { target: { value: superhero } });

    const form = screen.getByLabelText("form");
    fireEvent.submit(form);
    expect(mockUseNavigate).toHaveBeenCalledWith(`?q=${superhero}`);
  });
});
