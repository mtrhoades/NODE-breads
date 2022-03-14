// RENDERS ADD NEW BREAD PAGE WITH DEFAULT ADD INS:

// IMPORTS
const React = require('react')
const Default = require('./layouts/default')

// STUB FUNCTION
function New () {
    return (
      <Default>
        <h2>Add a new bread</h2>
        <div className="backButton">
        <a href="/breads"><button>Go back to the index</button></a>
        </div>
        <form action="/breads" method="POST">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"/>
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked
          />
          <br />
          <input type="submit"/>
        </form>
      </Default>
    )
}

// EXPORTS
module.exports = New