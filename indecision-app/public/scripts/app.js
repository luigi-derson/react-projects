console.log('App.js is runinng')

// JSX - Javascript XML
// var template = <p>This is JSX from app.js!</p>;
var template = React.createElement("h1", {
    id: "app"
  }, "This is JSX from app.js!");
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);