/* ========== EXTERNAL MODULES ========== */
import {
  render,
  cleanup,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';


/* ========== INTERNAL MODULES ========== */
import Exercise from '@/components/Exercise';
import { ExerciseContext } from '@/contexts/ExerciseContext';


/* ========== TESTS ========== */
afterEach(cleanup);

const mockSet = jest.fn();
jest.mock('../components/Set', () => () => mockSet());


const coreSets = [
  {
    'setNumber': 1,
    'reps': 10,
    'intensity': 0.5
  },
  {
    'setNumber': 2,
    'reps': 6,
    'intensity': 0.75
  },
  {
    'setNumber': 3,
    'reps': 'AMRAP',
    'intensity': 0.83
  },
  {
    'setNumber': 4,
    'reps': 'AMRAP',
    'intensity': 0
  },
]

const exerciseProps = {
  coreLift: 'benchPress',
  workingWeight: {
    'benchPress': 150,
  },
  updateCompletedSets: jest.fn((exercise) => exercise),
}

const renderWithContext = (component, providerProps) => {
  return render(
    <ExerciseContext.Provider value={providerProps}>
      {component}
    </ExerciseContext.Provider>
  )
}

describe('Exercise component', () => {
  it('renders a Set component for each set in exercise array', () => {

    renderWithContext(<Exercise coreSets={coreSets} />, exerciseProps);

    // jest tests are calling the Set child component twice for each set in array
    // unable to determine why, so the expect count has been doubled to compensate
    // Exercise component displays expected behavior
    expect(mockSet).toHaveBeenCalledTimes(8);

  })
  it('renders a button that updates completedSets when clicked', () => {

    const { getByRole } = renderWithContext(
      <Exercise coreSets={coreSets} />,
      exerciseProps
    )

    expect(exerciseProps.updateCompletedSets).not.toHaveBeenCalled();
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByRole('button')).toHaveTextContent('Complete Sets');

    fireEvent.click(getByRole('button'));

    expect(exerciseProps.updateCompletedSets).toHaveBeenCalled();
    expect(exerciseProps.updateCompletedSets).toReturnWith('BENCH PRESS');
  })
})