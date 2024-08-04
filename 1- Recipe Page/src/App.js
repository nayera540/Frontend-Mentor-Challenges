
function App() {
  return (
    <Page />
  )
}

function Page() {
  return (
    <div className='main--recipe'>
      <Header />
      <Preparation />
      <Ingredients />
      <Instructions />
      <Nutrition />
    </div>
  );
}

function Header() {
  return (
    <div className='header--recipe--section'>
      <div className='img--recipe' title='omelette recipe'>
        <img src='/image-omelette.jpeg' alt='omelette' />
      </div>
      <div className='header--recipe'>
        <h1>Simple Omelette Recipe</h1>
        <p className='recipe--intro'>
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
          to perfection, optionally filled with your choice of cheese, vegetables, or meats.
        </p>
      </div>
    </div>
  )
}

function Preparation() {
  return (
    <div className="prepare--recipe">
      <h3>Preparation time</h3>
      <ul>
        <li><span id="recipe--bold">Total:</span> Approximately 10 minutes</li>
        <li><span id="recipe--bold">Preparation:</span> 5 minutes</li>
        <li><span id="recipe--bold">Cooking:</span> 5 minutes</li>
      </ul>
    </div>
  )
}

function Ingredients() {
  return (
    <div className="ingredients--recipe">
      <h2>Ingredients</h2>
      <ul>
        <li>2-3 large eggs</li>
        <li>Salt, to taste</li>
        <li>Pepper, to taste</li>
        <li>1 tablespoon of butter or oil</li>
        <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
      </ul>
    </div>
  )
}

function Instructions() {
  return (
    <div className="instructions--recipe">
      <h2>Instructions</h2>
      <ol>
        <li><span id="recipe--bold">Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
          You can add a tablespoon of water or milk for a fluffier texture.</li>
        <li><span id="recipe--bold">Heat the pan:</span> IPlace a non-stick frying pan over medium heat and add butter or oil.</li>
        <li><span id="recipe--bold">Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
          the eggs evenly coat the surface.</li>
        <li><span id="recipe--bold">Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the
          middle, sprinkle your chosen fillings over one half of the omelette.</li>
        <li><span id="recipe--bold">Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the
          fillings. Let it cook for another minute, then slide it onto a plate.</li>
        <li><span id="recipe--bold">Enjoy:</span> Serve hot, with additional salt and pepper if needed.</li>
      </ol>
    </div>
  )
}

function Nutrition() {
  return (
    <>
      <div className="nutrition--recipe">
        <h2>Nutrition</h2>
        <p>The table below shows nutritional values per serving without the additional fillings.</p>
        <table className="nutrition--table--recipe">
          <tr>
            <td>Calories</td>
            <td className="table--column2">277kcal</td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td className="table--column2">0g</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td className="table--column3">20g</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td className="table--column4">22g</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default App;
