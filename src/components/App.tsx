import { useEffect } from 'react';

import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import StartScreen from './StartScreen';
import Question from './Question';
import Progress from './Progress';
import FinishScreen from './FinishScreen';
import Footer from './Footer';
import NextButton from './NextButton';
import Timer from './Timer';
import { useQuiz } from '../contexts/QuizContext';

export default function App() {
  const { status } = useQuiz();
  useEffect(function () {
    document.title = 'The React Quiz';
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <ErrorMessage />}
        {status === 'ready' && <StartScreen />}
        {status === 'active' && (
          <>
            <Progress />
            <Question />
          </>
        )}
        {status === 'finished' && <FinishScreen />}
        <Footer>
          {(status === 'active' || status === 'finished') && <NextButton />}
          {status === 'active' && <Timer />}
        </Footer>
      </Main>
    </div>
  );
}
