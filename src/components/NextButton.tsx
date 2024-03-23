import { useQuiz } from '../contexts/QuizContext';

export default function NextButton() {
  const { status, numQuestions, index, answer, dispatch } = useQuiz();

  if (answer === null && status !== 'finished') return null;

  let context;

  switch (true) {
    case status === 'finished':
      context = {
        callback: () => dispatch({ type: 'restart' }),
        text: 'Restart Quizz',
      };
      break;
    case index < numQuestions - 1:
      context = {
        callback: () => dispatch({ type: 'nextQuestion' }),
        text: 'Next',
      };
      break;
    case index === numQuestions - 1:
      context = {
        callback: () => dispatch({ type: 'finished' }),
        text: 'Results',
      };
      break;
    default:
      throw new Error('Problem solving click handle in finish screen');
  }

  return (
    <button className="btn btn-ui" onClick={context.callback}>
      {context.text}
    </button>
  );
}
