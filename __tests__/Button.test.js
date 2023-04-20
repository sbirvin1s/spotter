/* ========== EXTERNAL MODULES ========== */
import {
  render,
  cleanup,
  fireEvent
} from '@testing-library/react';
import '@testing-library/jest-dom';


/* ========== INTERNAL MODULES ========== */
import Button from '@/components/Button';

/* ========== TESTS ========== */
afterEach(cleanup);

describe('Button Component', () => {
  describe('Default Button variant', () => {
    it('only renders the default button variant', () => {
      const { queryByTestId, getByRole } = render(<Button />);

      expect(queryByTestId('default')).toBeInTheDocument();
      expect(getByRole('button')).toBeInTheDocument();

      expect(queryByTestId('link')).not.toBeInTheDocument();
      expect(queryByTestId('workout')).not.toBeInTheDocument();
      expect(queryByTestId('workout+')).not.toBeInTheDocument();
      expect(queryByTestId('workout-')).not.toBeInTheDocument();
    })
    it('correctly renders passed in children', () => {
      const { getByRole } = render(<Button>Default Button</Button>);

      expect(getByRole('button')).toHaveTextContent('Default Button');
    })
    it('fires onClick functions as expected', () => {
      let clicked = 0;
      const updateClicked = () => clicked++;

      const { getByRole } = render(<Button onClick={updateClicked} />);
      expect(clicked).toEqual(0)

      fireEvent.click(getByRole('button'));

      expect(clicked).toEqual(1);
    })
  })
  describe('Link Button variant', () => {
    it('only renders the link button variant', () => {
      const { queryByTestId, getByRole } = render(<Button variant={'link'} />);

      expect(queryByTestId('link')).toBeInTheDocument();
      expect(getByRole('link')).toBeInTheDocument();

      expect(queryByTestId('default')).not.toBeInTheDocument();
      expect(queryByTestId('workout')).not.toBeInTheDocument();
      expect(queryByTestId('workout+')).not.toBeInTheDocument();
      expect(queryByTestId('workout-')).not.toBeInTheDocument();
    })
    it('correctly renders passed in children', () => {
      const { getByRole } = render(<Button variant={'link'}>Link!</Button>);

      expect(getByRole('link')).toHaveTextContent('Link!');
    })
    it('fires onClick functions as expected', () => {
      let clicked = 0;
      const updateClicked = () => clicked++;

      const { getByRole } = render(<Button variant={'link'} onClick={updateClicked} />);
      expect(clicked).toEqual(0)

      fireEvent.click(getByRole('link'));

      expect(clicked).toEqual(1);
    })
  })
  describe('Workout Button variant', () => {
    it('only renders the workout button', () => {
      const { queryByTestId, getByRole } = render(<Button variant={'workout'} />);

      expect(queryByTestId('workout')).toBeInTheDocument();
      expect(getByRole('button')).toBeInTheDocument();

      expect(queryByTestId('default')).not.toBeInTheDocument();
      expect(queryByTestId('link')).not.toBeInTheDocument();
      expect(queryByTestId('workout+')).not.toBeInTheDocument();
      expect(queryByTestId('workout-')).not.toBeInTheDocument();
    })
    it('correctly renders passed in children', () => {
      const { getByRole } = render(<Button variant={'workout'}>Workout!</Button>);

      expect(getByRole('button')).toHaveTextContent('Workout!');
    })
    it('fires handleClick functions when clicked', () => {
      let clicked = 0;
      const updateClicked = () => clicked++;

      const { getByRole } = render(<Button variant={'workout'} handleClick={updateClicked}/>);

      expect(clicked).toEqual(0)

      fireEvent.click(getByRole('button'));

      expect(clicked).toEqual(1);
    })
    it('correctly updates the button when selected', () => {
      let clicked = 0;
      const updateClicked = () => clicked++;

      const { getByRole } = render(<Button variant={'workout'} handleClick={updateClicked}/>);

      expect(getByRole('button').selected).toBe(false);

      fireEvent.click(getByRole('button'));

      expect(getByRole('button').selected).toBe(true);
    })
  })
  describe('Workout+ Button variant', () => {
    it('only renders the workout+ button', () => {
      const { queryByTestId, getByRole } = render(<Button variant={'workout+'} />);

      expect(queryByTestId('workout+')).toBeInTheDocument();
      expect(getByRole('button')).toBeInTheDocument();

      expect(queryByTestId('default')).not.toBeInTheDocument();
      expect(queryByTestId('link')).not.toBeInTheDocument();
      expect(queryByTestId('workout')).not.toBeInTheDocument();
      expect(queryByTestId('workout-')).not.toBeInTheDocument();
    })
    it('correctly renders passed in children', () => {
      const { getByRole } = render(<Button variant={'workout+'}>Workout+!</Button>);

      expect(getByRole('button')).toHaveTextContent('Workout+!');
    })
    it('fires handleClick functions when clicked', () => {
      let clicked = 0;
      const updateClicked = () => clicked++;

      const { getByRole } = render(<Button variant={'workout+'} handleClick={updateClicked}/>);

      expect(clicked).toEqual(0)

      fireEvent.click(getByRole('button'));

      expect(clicked).toEqual(1);
    })
    it('correctly updates the button when selected', () => {
      let clicked = 0;
      const updateClicked = () => clicked++;

      const { getByRole } = render(<Button variant={'workout+'} handleClick={updateClicked}/>);

      expect(getByRole('button').selected).toBe(false);

      fireEvent.click(getByRole('button'));

      expect(getByRole('button').selected).toBe(true);
    })
  })
  describe('Workout- Button variant', () => {
    it('only renders the workout button', () => {
      const { queryByTestId, getByRole } = render(<Button variant={'workout-'} />);

      expect(queryByTestId('workout-')).toBeInTheDocument();
      expect(getByRole('button')).toBeInTheDocument();

      expect(queryByTestId('default')).not.toBeInTheDocument();
      expect(queryByTestId('link')).not.toBeInTheDocument();
      expect(queryByTestId('workout+')).not.toBeInTheDocument();
      expect(queryByTestId('workout')).not.toBeInTheDocument();
    })
    it('correctly renders passed in children', () => {
      const { getByRole } = render(<Button variant={'workout-'}>Workout-!</Button>);

      expect(getByRole('button')).toHaveTextContent('Workout-!');
    })
    it('fires handleClick functions when clicked', () => {
      let clicked = 0;
      const updateClicked = () => clicked++;

      const { getByRole } = render(<Button variant={'workout-'} handleClick={updateClicked}/>);

      expect(clicked).toEqual(0)

      fireEvent.click(getByRole('button'));

      expect(clicked).toEqual(1);
    })
    it('correctly updates the button when selected', () => {
      let clicked = 0;
      const updateClicked = () => clicked++;

      const { getByRole } = render(<Button variant={'workout-'} handleClick={updateClicked}/>);

      expect(getByRole('button').selected).toBe(false);

      fireEvent.click(getByRole('button'));

      expect(getByRole('button').selected).toBe(true);
    })
  })
})