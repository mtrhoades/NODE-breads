// RENDERS WHAT TO SHOW FOR EACH BREAD SELECTED:

// IMPORTS
const React = require("react");
const Default = require("./layouts/default");

function Show({ bread, index }) {
  return (
    <Default>
      <h3>{bread.name}</h3>
      <p>
        and it
        {bread.hasGluten ? <span> does </span> : <span> does NOT </span>}
        have gluten.
      </p>
      <img src={bread.image} alt={bread.name}/>
      <p>Baked by {bread.baker}</p>
      <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
      <li>
        <a href='/breads'>Go home</a>
      </li>
      <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
        <input type='submit' value="DELETE"/>
      </form>
    </Default>
  );
}


// EXPORTS
module.exports = Show;