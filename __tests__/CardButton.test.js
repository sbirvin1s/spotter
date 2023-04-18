/* ========== EXTERNAL MODULES ========== */
import {
  render,
  cleanup,
  fireEvent
} from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';


/* ========== INTERNAL MODULES ========== */
import CardButton from '@/components/CardButton';
import { CardButtonProvider } from '@/contexts/CardButtonContext';


/* ========== TESTS ========== */
afterEach(cleanup);

describe('CardButton', () => {
  describe('workout variant', () => {
    it('only renders the workout variant', () => {
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton variant={'workout'}/>
        </CardButtonProvider>
      )

      expect(getByRole('button')).toBeInTheDocument();
      expect(getByRole('button')).toHaveClass('Button_workout');
      expect(getByRole('button')).not.toHaveClass('Button_tiny');
      expect(getByRole('button')).not.toHaveClass('Button_small');
      expect(getByRole('button')).not.toHaveClass('Button_medium');
      expect(getByRole('button')).not.toHaveClass('Button_large');
    })
    it('renders given children', () => {
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton variant={'workout'}>
            Card Button!
          </CardButton>
        </CardButtonProvider>
      )

      expect(getByRole('button')).toHaveTextContent('Card Button!');
    })
    it('correctly applies passed in props', () => {
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton variant={'workout'} hidden/>
        </CardButtonProvider>
      )

      expect(getByRole('button', {hidden: true})).toBeInTheDocument();
    })
    it('correctly triggers onClick/whenClicked functions', () => {
      const testFunction = jest.fn();
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton variant={'workout'} whenClicked={testFunction} />
        </CardButtonProvider>
      )

      expect(testFunction).not.toHaveBeenCalled();

      fireEvent.click(getByRole('button'));

      expect(testFunction).toHaveBeenCalled();
      expect(testFunction).toHaveBeenCalledTimes(1);
    })
  })
  describe('tiny variant', () => {
    it('only renders the tiny variant', () => {
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton variant={'tiny'}/>
        </CardButtonProvider>
      )

      expect(getByRole('button')).toBeInTheDocument();
      expect(getByRole('button')).toHaveClass('Button_tiny');
      expect(getByRole('button')).not.toHaveClass('Button_workout');
      expect(getByRole('button')).not.toHaveClass('Button_small');
      expect(getByRole('button')).not.toHaveClass('Button_medium');
      expect(getByRole('button')).not.toHaveClass('Button_large');
    })
    it('renders given children', () => {
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton variant={'tiny'}>
            Tiny Card Button!
          </CardButton>
        </CardButtonProvider>
      )

      expect(getByRole('button')).toHaveTextContent('Tiny Card Button!');
    })
    it('correctly applies passed in props', () => {
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton variant={'tiny'} hidden/>
        </CardButtonProvider>
      )

      expect(getByRole('button', {hidden: true})).toBeInTheDocument();
    })
    it('correctly triggers onClick/whenClicked functions', () => {
      const testFunction = jest.fn();
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton variant={'tiny'} whenClicked={testFunction} />
        </CardButtonProvider>
      )

      expect(testFunction).not.toHaveBeenCalled();

      fireEvent.click(getByRole('button'));

      expect(testFunction).toHaveBeenCalled();
      expect(testFunction).toHaveBeenCalledTimes(1);
    })
    it('uses and updates local state', () => {
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton name={'testButton'} value={'testButton'} variant={'tiny'}/>
        </CardButtonProvider>
      )
      expect(getByRole('button')).toHaveClass('Button Button_tiny Button___default');

      fireEvent.click(getByRole('button'));

      expect(getByRole('button')).toHaveClass('Button Button_tiny Button___selected');
    })
    it('correctly toggles active buttons when clicked', () => {
      const { container } = render(
        <CardButtonProvider>
          <CardButton name={'testButton1'} value={'testButton1'} variant={'tiny'}/>
          <CardButton name={'testButton2'} value={'testButton2'} variant={'tiny'}/>
        </CardButtonProvider>
      )
      const button1 = container.querySelector('button[name="testButton1"]');
      const button2 = container.querySelector('button[name="testButton2"]');

      expect(button1).toHaveClass('Button Button_tiny Button___default');
      expect(button2).toHaveClass('Button Button_tiny Button___default');

      fireEvent.click(button1);

      expect(button1).toHaveClass('Button Button_tiny Button___selected');
      expect(button2).toHaveClass('Button Button_tiny Button___default');

      fireEvent.click(button2);

      expect(button1).toHaveClass('Button Button_tiny Button___default');
      expect(button2).toHaveClass('Button Button_tiny Button___selected');

    })
  })
  describe('small variant', () => {
    it('only renders the small variant', () => {
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton variant={'small'}/>
        </CardButtonProvider>
      )

      expect(getByRole('button')).toBeInTheDocument();
      expect(getByRole('button')).toHaveClass('Button_small');
      expect(getByRole('button')).not.toHaveClass('Button_workout');
      expect(getByRole('button')).not.toHaveClass('Button_tiny');
      expect(getByRole('button')).not.toHaveClass('Button_medium');
      expect(getByRole('button')).not.toHaveClass('Button_large');
    })
    it('renders given children', () => {
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton variant={'small'}>
            Small Card Button!
          </CardButton>
        </CardButtonProvider>
      )

      expect(getByRole('button')).toHaveTextContent('Small Card Button!');
    })
    it('correctly applies passed in props', () => {
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton variant={'small'} hidden/>
        </CardButtonProvider>
      )

      expect(getByRole('button', {hidden: true})).toBeInTheDocument();
    })
    it('correctly triggers onClick/whenClicked functions', () => {
      const testFunction = jest.fn();
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton variant={'small'} whenClicked={testFunction} />
        </CardButtonProvider>
      )

      expect(testFunction).not.toHaveBeenCalled();

      fireEvent.click(getByRole('button'));

      expect(testFunction).toHaveBeenCalled();
      expect(testFunction).toHaveBeenCalledTimes(1);
    })
    it('uses and updates local state', () => {
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton name={'testButton'} value={'testButton'} variant={'small'}/>
        </CardButtonProvider>
      )
      expect(getByRole('button')).toHaveClass('Button Button_small Button___default');

      fireEvent.click(getByRole('button'));

      expect(getByRole('button')).toHaveClass('Button Button_small Button___selected');
    })
    it('correctly toggles active buttons when clicked', () => {
      const { container } = render(
        <CardButtonProvider>
          <CardButton name={'testButton1'} value={'testButton1'} variant={'small'}/>
          <CardButton name={'testButton2'} value={'testButton2'} variant={'small'}/>
        </CardButtonProvider>
      )
      const button1 = container.querySelector('button[name="testButton1"]');
      const button2 = container.querySelector('button[name="testButton2"]');

      expect(button1).toHaveClass('Button Button_small Button___default');
      expect(button2).toHaveClass('Button Button_small Button___default');

      fireEvent.click(button1);

      expect(button1).toHaveClass('Button Button_small Button___selected');
      expect(button2).toHaveClass('Button Button_small Button___default');

      fireEvent.click(button2);

      expect(button1).toHaveClass('Button Button_small Button___default');
      expect(button2).toHaveClass('Button Button_small Button___selected');

    })
  })
  describe('medium variant', () => {
    it('only renders the medium variant', () => {
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton variant={'medium'}/>
        </CardButtonProvider>
      )

      expect(getByRole('button')).toBeInTheDocument();
      expect(getByRole('button')).toHaveClass('Button_medium');
      expect(getByRole('button')).not.toHaveClass('Button_workout');
      expect(getByRole('button')).not.toHaveClass('Button_tiny');
      expect(getByRole('button')).not.toHaveClass('Button_small');
      expect(getByRole('button')).not.toHaveClass('Button_large');
    })
    it('renders given children', () => {
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton variant={'medium'}>
            Medium Card Button!
          </CardButton>
        </CardButtonProvider>
      )

      expect(getByRole('button')).toHaveTextContent('Medium Card Button!');
    })
    it('correctly applies passed in props', () => {
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton variant={'medium'} hidden/>
        </CardButtonProvider>
      )

      expect(getByRole('button', {hidden: true})).toBeInTheDocument();
    })
    it('correctly triggers onClick/whenClicked functions', () => {
      const testFunction = jest.fn();
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton variant={'medium'} whenClicked={testFunction} />
        </CardButtonProvider>
      )

      expect(testFunction).not.toHaveBeenCalled();

      fireEvent.click(getByRole('button'));

      expect(testFunction).toHaveBeenCalled();
      expect(testFunction).toHaveBeenCalledTimes(1);
    })
    it('uses and updates local state', () => {
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton name={'testButton'} value={'testButton'} variant={'medium'}/>
        </CardButtonProvider>
      )
      expect(getByRole('button')).toHaveClass('Button Button_medium Button___default');

      fireEvent.click(getByRole('button'));

      expect(getByRole('button')).toHaveClass('Button Button_medium Button___selected');
    })
    it('correctly toggles active buttons when clicked', () => {
      const { container } = render(
        <CardButtonProvider>
          <CardButton name={'testButton1'} value={'testButton1'} variant={'medium'}/>
          <CardButton name={'testButton2'} value={'testButton2'} variant={'medium'}/>
        </CardButtonProvider>
      )
      const button1 = container.querySelector('button[name="testButton1"]');
      const button2 = container.querySelector('button[name="testButton2"]');

      expect(button1).toHaveClass('Button Button_medium Button___default');
      expect(button2).toHaveClass('Button Button_medium Button___default');

      fireEvent.click(button1);

      expect(button1).toHaveClass('Button Button_medium Button___selected');
      expect(button2).toHaveClass('Button Button_medium Button___default');

      fireEvent.click(button2);

      expect(button1).toHaveClass('Button Button_medium Button___default');
      expect(button2).toHaveClass('Button Button_medium Button___selected');
    })
  })
  describe('large variant', () => {
    it('only renders the large variant', () => {
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton variant={'large'}/>
        </CardButtonProvider>
      )

      expect(getByRole('button')).toBeInTheDocument();
      expect(getByRole('button')).toHaveClass('Button_large');
      expect(getByRole('button')).not.toHaveClass('Button_workout');
      expect(getByRole('button')).not.toHaveClass('Button_tiny');
      expect(getByRole('button')).not.toHaveClass('Button_small');
      expect(getByRole('button')).not.toHaveClass('Button_medium');
    })
    it('renders given children', () => {
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton variant={'large'}>
            Large Card Button!
          </CardButton>
        </CardButtonProvider>
      )

      expect(getByRole('button')).toHaveTextContent('Large Card Button!');
    })
    it('correctly applies passed in props', () => {
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton variant={'large'} hidden/>
        </CardButtonProvider>
      )

      expect(getByRole('button', {hidden: true})).toBeInTheDocument();
    })
    it('correctly triggers onClick/whenClicked functions', () => {
      const testFunction = jest.fn();
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton variant={'large'} whenClicked={testFunction} />
        </CardButtonProvider>
      )

      expect(testFunction).not.toHaveBeenCalled();

      fireEvent.click(getByRole('button'));

      expect(testFunction).toHaveBeenCalled();
      expect(testFunction).toHaveBeenCalledTimes(1);
    })
    it('uses and updates local state', () => {
      const { getByRole } = render(
        <CardButtonProvider>
          <CardButton name={'testButton'} value={'testButton'} variant={'large'}/>
        </CardButtonProvider>
      )
      expect(getByRole('button')).toHaveClass('Button Button_large Button___default');

      fireEvent.click(getByRole('button'));

      expect(getByRole('button')).toHaveClass('Button Button_large Button___selected');
    })
    it('correctly toggles active buttons when clicked', () => {
      const { container } = render(
        <CardButtonProvider>
          <CardButton name={'testButton1'} value={'testButton1'} variant={'large'}/>
          <CardButton name={'testButton2'} value={'testButton2'} variant={'large'}/>
        </CardButtonProvider>
      )
      const button1 = container.querySelector('button[name="testButton1"]');
      const button2 = container.querySelector('button[name="testButton2"]');

      expect(button1).toHaveClass('Button Button_large Button___default');
      expect(button2).toHaveClass('Button Button_large Button___default');

      fireEvent.click(button1);

      expect(button1).toHaveClass('Button Button_large Button___selected');
      expect(button2).toHaveClass('Button Button_large Button___default');

      fireEvent.click(button2);

      expect(button1).toHaveClass('Button Button_large Button___default');
      expect(button2).toHaveClass('Button Button_large Button___selected');
    })
  })
})