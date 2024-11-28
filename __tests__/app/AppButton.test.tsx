import { render, screen } from "@testing-library/react";
import {AppButton} from '../../src/components'; // adjust the path as needed

describe("AppButton", () => {
  it('renders correctly', () => {
    render(<AppButton>Test Button</AppButton>);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });
});