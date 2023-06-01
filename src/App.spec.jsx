import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import App from "./App.jsx";
const user = userEvent.setup()

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

  test("Deveria existir um botão que, quando clicado, incrementa o contador de 1 em 1", async () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /contador: 0/i });
    expect(button).toBeInTheDocument();

    user.click(button)

    const counter = await screen.findByText(/contador: 1/i)
    expect(counter).toBeInTheDocument()
  })

})
