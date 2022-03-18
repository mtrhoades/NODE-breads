// TO RENDER LIST OF BREADS:

// IMPORTS
const React = require("react");
const Default = require("./layouts/default");

// STUB FUNCTION
function Index({ breads }) {
  return ( // returns the default.jsx file to use as default set-up as: <Default>
    <Default title={'title'}> 
      <h2>Breads Index Page</h2>
      <div className="newButton">
        <a href="/breads/new"><button>Add a new bread</button></a>
        </div>
      {breads.map((bread, index) => {
        return (
          <li key={index}>
            <a href={`/breads/${bread.id}`}>{bread.name}</a>
          </li>
        );
      })}
    </Default>
  );
}


// EXPORTS
module.exports = Index;