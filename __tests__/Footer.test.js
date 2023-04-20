/* ========== EXTERNAL MODULES ========== */
import {
  render,
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';


/* ========== INTERNAL MODULES ========== */
import Footer from '@/components/Footer';


/* ========== TESTS ========== */
afterEach(cleanup);

describe('Footer component', () => {
  describe('Compressed variant', () => {
    it('renders only the compressed variant', () => {
      const { getByRole } = render(<Footer variant="compressed"/>)

      expect(getByRole('contentinfo')).toBeInTheDocument();
      expect(getByRole('contentinfo')).toHaveClass('Footer_row___10');
      expect(getByRole('contentinfo')).not.toHaveClass('Footer_column');
    })
    it('displays children as expected', () => {
      const { getByRole }= render(<Footer variant="compressed">Test Compressed Footer</Footer>);

      expect(getByRole('contentinfo')).toBeInTheDocument();
      expect(getByRole('contentinfo')).toHaveTextContent('Test Compressed Footer');
    })
    it('renders passed in props as expected', () => {
      const { getByRole } = render(<Footer variant="compressed" hidden/>);

      expect(getByRole('contentinfo', {hidden: true})).toBeInTheDocument();
    })
  })
  describe('Default variant', () => {
    it('renders only the default variant', () => {
      const { getByRole } = render(<Footer />)

      expect(getByRole('contentinfo')).toBeInTheDocument();
      expect(getByRole('contentinfo')).not.toHaveClass('Footer_row___10');
      expect(getByRole('contentinfo')).toHaveClass('Footer_column');
    })
    it('displays children as expected', () => {
      const { getByRole }= render(<Footer>Test Default Footer</Footer>);

      expect(getByRole('contentinfo')).toBeInTheDocument();
      expect(getByRole('contentinfo')).toHaveTextContent('Test Default Footer');
    })
    it('renders passed in props as expected', () => {
      const { getByRole } = render(<Footer hidden/>);

      expect(getByRole('contentinfo', {hidden: true})).toBeInTheDocument();
    })
  })
})