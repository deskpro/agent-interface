import "jest-dom/extend-expect";

interface ExtendedMatchers extends jest.Matchers<void> {
  toHaveAttribute: (attr: string, value?: string) => void;
  toHaveTextContent: (htmlElement: string) => object;
  toBeInTheDOM: () => void;
}
