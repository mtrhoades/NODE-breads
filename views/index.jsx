// TO RENDER LIST OF BREADS:

// IMPORTS
const React = require("react");
const Default = require("./layouts/default");

// STUB FUNCTION
function Index({ breads, bakers, title }) {
  return ( // returns the default.jsx file to use as default set-up as: <Default>
    <Default title={'title'}> 
      <h2>Breads Index Page</h2>
      <h3>Bakers</h3>
        <ul>
          {
            bakers.map((baker) => {
              return (
                <li key={baker.id}>
                  <a href={`/bakers/${baker.id}`}>{baker.name}</a>
                </li>
              )
            })
          }
        </ul>
        <h3>Breads</h3>
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