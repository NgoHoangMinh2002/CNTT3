// import logo from './logo.svg';
import './App.css';
import ClassJSXNHM from './Components/class_JSX_NHM';
import FuncJSXNHM from './Components/func_JSX_NHM';

function App() {
  return (
    <section>
      <h2>Demo JSX</h2>

      <FuncJSXNHM />
      <FuncJSXNHM fullName="Ngo min" age="20"/>
      <ClassJSXNHM />
      <hr/>
      <ClassJSXNHM info="Hoc ReactJS" time="11" />

    </section>
  );
}

export default App;
