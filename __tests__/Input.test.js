/* ========== EXTERNAL MODULES ========== */
import {
  render,
  cleanup,
  prettyDOM,
} from '@testing-library/react';
import '@testing-library/jest-dom';


/* ========== INTERNAL MODULES ========== */
import Input from '@/components/Input';


/* NOTE :
  - [ ] Store relevant information in local state
  - [x] Correctly mark returned component with expected aria and accessibility requirements for each variant
  - [x] Display passed in props as expected
  - [x] Does NOT contain child elements
  - [ ] Trigger onClick functions as expected
*/

/* ========== TESTS ========== */
afterEach(cleanup);

describe('Input component', () => {
  it('has all required aria and accessibility requirements', () => {
    const { getByRole } = render(<Input name="testInput" labelName="Test Input"/>)


    expect(getByRole('textbox')).toBeInTheDocument();
    expect(getByRole('textbox', {id: 'testInput'})).toBeInTheDocument();
    expect(getByRole('textbox', {for: 'testInput'})).toBeInTheDocument();
    expect(getByRole('textbox', {label: 'testInput'})).toBeInTheDocument();
    expect(getByRole('textbox', {LabelText: 'Test Input'})).toBeInTheDocument();
    // NOTE: add this test after refactoring to Material UI.
    // expect(getByRole('textbox', {name: 'testInput'})).toBeInTheDocument();
  })
  it('does NOT contain child elements', () => {
    const { getByRole } = render(<Input name='noChildInput' labelName='No Children'/>)

    expect(getByRole('textbox')).not.toHaveTextContent();
  })
  it('correctly displays passed in props as expected', () => {
    const { getByRole } = render(
      <Input
        name="testInput"
        labelName="Test Input"
        type='email'
        placeholder='Placeholder Text test'
      />
    )

    expect(getByRole('textbox', {type: 'email'})).toBeInTheDocument();
    expect(getByRole('textbox', {PlaceholderText: 'Placeholder Text test'})).toBeInTheDocument();
  })
})