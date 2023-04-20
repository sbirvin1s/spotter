/* ========== EXTERNAL MODULES ========== */
import {
  render,
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';


/* ========== INTERNAL MODULES ========== */
import Header from '@/components/Header';


/* ========== TESTS ========== */
afterEach(cleanup);

describe('Header component', () => {
  describe('Compressed variant', () => {
    it('renders only the compressed variant', () => {
      const { getByRole } = render(<Header variant="compressed"/>)

      expect(getByRole('heading')).toBeInTheDocument();
      expect(getByRole('heading')).toHaveClass('Header_10___row');
      expect(getByRole('heading')).not.toHaveClass('Header_column');
    })
    it('displays children as expected', () => {
      const { getByRole }= render(<Header variant="compressed">Test Compressed Header</Header>);

      expect(getByRole('heading')).toBeInTheDocument();
      expect(getByRole('heading')).toHaveTextContent('Test Compressed Header');
    })
    it('renders passed in props as expected', () => {
      const { getByRole } = render(<Header variant="compressed" hidden/>);

      expect(getByRole('heading', {hidden: true})).toBeInTheDocument();
    })
  })
  describe('Default variant', () => {
    it('renders only the default variant', () => {
      const { getByRole } = render(<Header />)

      expect(getByRole('heading')).toBeInTheDocument();
      expect(getByRole('heading')).not.toHaveClass('Header_10___row');
      expect(getByRole('heading')).toHaveClass('Header_column');
    })
    it('displays children as expected', () => {
      const { getByRole }= render(<Header>Test Default Header</Header>);

      expect(getByRole('heading')).toBeInTheDocument();
      expect(getByRole('heading')).toHaveTextContent('Test Default Header');
    })
    it('renders passed in props as expected', () => {
      const { getByRole } = render(<Header hidden/>);

      expect(getByRole('heading', {hidden: true})).toBeInTheDocument();
    })
  })
})