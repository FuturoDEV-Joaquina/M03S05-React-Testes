import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("App", () => {

  test("Deveria existir uma logo do React", () => {
    render(<App />);
    const logo = screen.getByAltText(/react logo/i);
    expect(logo).toBeInTheDocument();
  })

  test("Deveria existir um título com o texto Vite + React", () => {
    render(<App />);
    const title = screen.getByRole("heading", { name: /vite \+ react/i });
    expect(title).toBeInTheDocument();
  })

  test.todo("Deveria existir um botão de incremento")

})
