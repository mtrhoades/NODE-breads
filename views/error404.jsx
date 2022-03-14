// ERROR 404 PAGE FOR ANYTHING ELSE TYPED IN URL OTHER THAN PAGES WE HAVE TO VIEW.

// IMPORTS
const React = require("react");
const Default = require("./layouts/default");

// STUB FUNCTION
function error404({ breads }) {
  return (
    <Default title={'title'}>
      <h2>404 Error</h2>
      <a href={`/breads`}>Return to Breads Page</a>

    </Default>
  );
}

// EXPORTS
module.exports = error404;