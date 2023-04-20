/* ========== EXTERNAL MODULES ========== */
import {
  render,
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';


/* ========== INTERNAL MODULES ========== */
import CurrentDate from '@/components/CurrentDate';


/* ========== TESTS ========== */
afterEach(cleanup);

describe('CurrentDate', () => {
  it('renders the current date', () => {
    const date = new Date(Date.now());
    const testOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const testDate = date.toLocaleDateString(undefined, testOptions);

    const { getByText } = render(<CurrentDate />);

    expect(getByText(testDate)).toBeInTheDocument();
  })
})