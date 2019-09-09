let visibility = false;

const toggleVisibility = function() {
  visibility = !visibility;
  renderApp();
}

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (
        <div>
          <p>Hey, these are some details you can now see!</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderApp();
