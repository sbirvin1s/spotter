/* ========== EXTERNAL MODULES ========== */
import {
  render,
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';


/* ========== INTERNAL MODULES ========== */
import Input from '@/components/Input';


/* NOTE:
  - [ ] Store relevant information in local state
  - [ ] Correctly mark returned component with expected aria and accessibility requirements for each variant
  - [ ] Display children as expected
  - [ ] Display passed in props as expected
  - [ ] Trigger onClick functions as expected
*/

/* ========== TESTS ========== */
afterEach(cleanup);

describe('Input component', () => {
  it('has all required aria and accessibility requirements', () => {
    const { getByRole } = render(<Input name="testInput" labelName="Test Input"/>)

    expect(getByRole('textbox')).toBeInTheDocument();
    expect(getByRole('textbox', {id: 'testInput'})).toBeInTheDocument();
    expect(getByRole('textbox', {for: 'testInput'})).toBeInTheDocument();;
    expect(getByRole('textbox', {name: 'Test Input'})).toBeInTheDocument();
  })
  // expect(getByRole('heading')).toHaveClass('Input_10___row');
  // expect(getByRole('heading')).not.toHaveClass('Input_column');
})