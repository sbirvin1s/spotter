/* ========== EXTERNAL MODULES ========== */
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';


/* ========== INTERNAL MODULES ========== */
import Alert from '@/components/Alert';

/* ========== TESTS ========== */
afterEach(cleanup);

it('renders the default alert', () => {
  const { getByTestId } = render(<Alert />);

  expect(getByTestId('default')).toBeInTheDocument()
})

it('renders the fail alert', () => {
  const { getByTestId } = render(<Alert variant={'fail'} />);

  expect(getByTestId('fail')).toBeInTheDocument()
})

it('renders the warn alert', () => {
  const { getByTestId } = render(<Alert variant={'warn'} />);

  expect(getByTestId('warn')).toBeInTheDocument()
})

it('renders the success alert', () => {
  const { getByTestId } = render(<Alert variant={'success'} />);

  expect(getByTestId('success')).toBeInTheDocument()
})