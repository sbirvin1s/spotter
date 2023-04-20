/* ========== EXTERNAL MODULES ========== */
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';


/* ========== INTERNAL MODULES ========== */
import Alert from '@/components/Alert';

/* ========== TESTS ========== */
afterEach(cleanup);

it('only renders the default alert', () => {
  const { queryByTestId, getByRole } = render(<Alert />);

  expect(queryByTestId('default')).toBeInTheDocument();
  expect(getByRole('alert')).toBeInTheDocument();

  expect(queryByTestId('fail')).not.toBeInTheDocument();
  expect(queryByTestId('warn')).not.toBeInTheDocument();
  expect(queryByTestId('success')).not.toBeInTheDocument();
})

it('only renders the fail alert', () => {
  const { queryByTestId, getByRole } = render(<Alert variant={'fail'} />);

  expect(queryByTestId('fail')).toBeInTheDocument();
  expect(getByRole('alert')).toBeInTheDocument();

  expect(queryByTestId('default')).not.toBeInTheDocument();
  expect(queryByTestId('warn')).not.toBeInTheDocument();
  expect(queryByTestId('success')).not.toBeInTheDocument();
})

it('only renders the warn alert', () => {
  const { queryByTestId, getByRole } = render(<Alert variant={'warn'} />);

  expect(queryByTestId('warn')).toBeInTheDocument();
  expect(getByRole('alert')).toBeInTheDocument();

  expect(queryByTestId('default')).not.toBeInTheDocument();
  expect(queryByTestId('fail')).not.toBeInTheDocument();
  expect(queryByTestId('success')).not.toBeInTheDocument();
})

it('only renders the success alert', () => {
  const { queryByTestId, getByRole } = render(<Alert variant={'success'} />);

  expect(queryByTestId('success')).toBeInTheDocument();
  expect(getByRole('alert')).toBeInTheDocument();

  expect(queryByTestId('default')).not.toBeInTheDocument();
  expect(queryByTestId('fail')).not.toBeInTheDocument();
  expect(queryByTestId('warn')).not.toBeInTheDocument();
})