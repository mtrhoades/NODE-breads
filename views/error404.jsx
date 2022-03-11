const React = require("react");
const Default = require("./layouts/default");

function error404({ breads }) {
  return (
    <Default title={'title'}>
      <h2>404 Error</h2>
      <a href={`/breads`}>Return to Breads Page</a>

    </Default>
  );
}

module.exports = error404;