console.log('App.js is runinng')

// JSX - Javascript XML
const app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault()

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderApp();
}

const removeOptions = () => {
  app.options = [];
  renderApp();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum]
  alert(option);
}

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
      <button onClick={removeOptions}>Remove options</button>
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit} autoComplete="off">
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot)
}

renderApp();


/* babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

cd Desktop/react-course/indecision-app

live-server public --browser=FIREFOX */
