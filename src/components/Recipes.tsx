const Recipes: React.FC = () => {
  return (
    <div>
      <h1>Recipes</h1>
      <p>
        Here are some of my favorite recipes that I've collected over the years!
      </p>

      <div className="recipe">
        <h3>Chicken Fajita Quesadilla</h3>

        <div className="recipe-section">
          <h4>Ingredients</h4>
          <ul>
            <li>1 tablespoon olive oil</li>
            <li>1/2 lb chicken breast, cut into thin strips</li>
            <li>1/2 teaspoon salt</li>
            <li>1/2 teaspoon pepper</li>
            <li>1/2 tablespoon chili powder</li>
            <li>1/2 teaspoon cumin</li>
            <li>1/4 teaspoon cayenne</li>
            <li>1/4 teaspoon garlic powder</li>
            <li>
              1/2 cup bell pepper, green, red, or yellow peppers, julienned
            </li>
            <li>1/2 cup white onion, julienned</li>
            <li>2 large flour tortillas</li>
            <li>1 cup shredded cheddar cheese, double for 2 quesadillas</li>
            <li>
              1 cup shredded monterey jack cheese, double for 2 quesadillas
            </li>
          </ul>
        </div>

        <div className="recipe-section">
          <h4>Garnish</h4>
          <ul>
            <li>fresh cilantro</li>
            <li>guacamole</li>
            <li>sour cream</li>
            <li>pico de gallo, or salsa</li>
          </ul>
        </div>

        <div className="recipe-section">
          <h4>Preparation</h4>
          <ol>
            <li>
              In a large skillet, heat olive oil on Medium heat for about 2
              minutes.
            </li>
            <li>
              Add chicken to skillet and coat chicken with salt, pepper, chili
              powder, cumin, cayenne, and garlic powder. Cook 5-7 minutes.
            </li>
            <li>
              Add the peppers and onions and cook for 5-7 minutes, or until they
              are soft. Remove chicken, onions and peppers from the pan and set
              aside.
            </li>
            <li>
              Place the tortilla in the skillet and add a layer of cheese on
              half of the tortilla.
            </li>
            <li>
              Add cooked chicken, peppers and onions. Top with more cheese and
              fold the tortilla in half.
            </li>
            <li>Cook for 6 minutes over medium heat, flipping half way.</li>
            <li>
              Garnish with fresh cilantro and serve with pico de gallo,
              guacamole, and sour cream on the side.
            </li>
          </ol>
        </div>
      </div>

      <div className="recipe">
        <h3>アイスコーヒー (Japanese-style Iced Coffee)</h3>
        <p>
          <em>
            Adapted from{" "}
            <a
              href="https://www.youtube.com/watch?v=PApBycDrPo0"
              target="_blank"
              rel="noopener noreferrer"
            >
              James Hoffmann's recipe
            </a>
            .
          </em>
        </p>

        <div className="recipe-section">
          <h4>Equipment</h4>
          <ul>
            <li>Pourover dripper</li>
            <li>Decanter</li>
            <li>Pourover coffee filter</li>
            <li>Scale that measures grams</li>
            <li>Kettle</li>
          </ul>
        </div>

        <div className="recipe-section">
          <h4>What I Used</h4>
          <ul>
            <li>
              <a
                href="https://www.hario-usa.com/collections/drippers/products/v60-ceramic-coffee-dripper-02-classic"
                target="_blank"
                rel="noopener noreferrer"
              >
                V60 ceramic coffee dripper 02
              </a>
            </li>
            <li>
              <a
                href="https://www.hario-usa.com/collections/servers/products/v60-range-server?variant=32575164252293"
                target="_blank"
                rel="noopener noreferrer"
              >
                V60 02 XGS coffee server with lid
              </a>
            </li>
            <li>
              <a
                href="https://www.hario-usa.com/collections/filters/products/copy-of-paper-filter-for-01-drippers?variant=32472393416837"
                target="_blank"
                rel="noopener noreferrer"
              >
                V60 paper filter, natural brown, untabbed
              </a>
            </li>
            <li>
              <a
                href="https://www.hario-usa.com/collections/scales/products/v60-drip-scale"
                target="_blank"
                rel="noopener noreferrer"
              >
                V60 drip scale
              </a>
            </li>
            <li>
              <a
                href="https://www.walmart.com/ip/Willsence-Gooseneck-Kettle-Temperature-Control-Pour-Over-Electric-Coffee-Tea-100-Stainless-Steel-Inner-1200W-Rapid-Heating-0-8L-Built-in-Stopwatch-Bl/870059197?athbdg=L1700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Electric gooseneck kettle
              </a>
            </li>
          </ul>
        </div>

        <div className="recipe-section">
          <h4>Coffee for One</h4>
          <h5>Ingredients</h5>
          <ul>
            <li>120g ice</li>
            <li>180g water</li>
            <li>20g coffee, ground medium-fine</li>
          </ul>

          <h5>Preparation</h5>
          <ol>
            <li>Heat water to 205 degrees in kettle.</li>
            <li>
              While water is heating, place filter in dripper and rinse in sink.
            </li>
            <li>Once water is heated, place ice in decanter and tare scale.</li>
            <li>Start a timer and pour 40g of water to bloom grounds.</li>
            <li>At 0:45, pour 70g of water, bringing total to 110g.</li>
            <li>
              At 1:30, pour the final 70g of water, bringing total to 180g.
            </li>
            <li>
              Stir final pour and grounds once clockwise, once counter-clockwise
              with spoon.
            </li>
            <li>Remove the dripper and set aside.</li>
            <li>Swirl the decanter until the remaining ice melts.</li>
            <li>Pour into highball glass over additional ice and serve.</li>
          </ol>
        </div>

        <div className="recipe-section">
          <h4>Coffee for Two</h4>
          <h5>Ingredients</h5>
          <ul>
            <li>240g ice</li>
            <li>360g water</li>
            <li>40g coffee, ground medium-fine</li>
          </ul>

          <h5>Preparation</h5>
          <ol>
            <li>Heat water to 205 degrees in kettle.</li>
            <li>
              While water is heating, place filter in dripper and rinse in sink.
            </li>
            <li>Once water is heated, place ice in decanter and tare scale.</li>
            <li>Start a timer and pour 80g of water to bloom grounds.</li>
            <li>At 0:45, pour 140g of water, bringing total to 220g.</li>
            <li>
              At 1:30, pour the final 140g of water, bringing total to 360g.
            </li>
            <li>
              Stir final pour and grounds once clockwise, once counter-clockwise
              with spoon.
            </li>
            <li>Remove the dripper and set aside.</li>
            <li>Swirl the decanter until the remaining ice melts.</li>
            <li>
              Pour into two highball glasses over additional ice and serve.
            </li>
          </ol>
        </div>
      </div>

      <div className="recipe">
        <h3>Butter Chicken</h3>

        <div className="recipe-section">
          <h4>Ingredients</h4>
          <ul>
            <li>2lb boneless, skinless chicken thighs</li>
            <li>4tsp kosher salt</li>
            <li>Black pepper, to taste</li>
            <li>3tbsp unsalted butter</li>
            <li>1 cup onion, finely chopped</li>
            <li>3 cloves garlic, minced</li>
            <li>Ginger 2in peeled and minced</li>
            <li>2 teaspoons paprika</li>
            <li>1.5 tablespoons garam masala</li>
            <li>1 tablespoon curry powder</li>
            <li>28 oz crushed tomato</li>
            <li>1 cup plain whole milk yogurt</li>
            <li>2 cups of basmati rice</li>
            <li>naan bread, for serving</li>
          </ul>
        </div>

        <div className="recipe-section">
          <h4>Garnish</h4>
          <ul>
            <li>fresh cilantro</li>
          </ul>
        </div>

        <div className="recipe-section">
          <h4>Preparation</h4>

          <h5>The Rice</h5>
          <ol>
            <li>
              Measure the two cups of Basmati rice into a strainer and rinse
              thoroughly, dump into Instant Pot.
            </li>
            <li>
              Close the lid and vent and set to Rice setting on Less, cook for
              8min. While this is cooking, you can begin preparing the
              ingredients for the chicken.
            </li>
            <li>
              Turn off the Instant Pot and let it vent naturally for 10min. Then
              transfer the rice to a medium bowl and set aside.
            </li>
            <li>Clean out the Instant Pot and prepare to make the chicken.</li>
          </ol>

          <h5>The Chicken</h5>
          <ol>
            <li>On a cutting board, prepare all vegetables and set aside.</li>
            <li>
              Pat the chicken thighs dry with paper towels. Season chicken on
              both sides with 1 teaspoon salt and black pepper to taste. Set
              aside.
            </li>
            <li>
              Set Instant Pot to high on the sauté setting. Melt the butter in
              the pot, then add the onion and sauté until it begins to soften, 4
              minutes. Add the garlic and ginger and cook until softened,
              stirring occasionally, 2 minutes.
            </li>
            <li>
              Add the remaining 3 teaspoons salt, the paprika, garam masala, and
              curry powder. Cook, stirring, until the spices are aromatic and
              toasted, about 1 minute.
            </li>
            <li>
              Add the crushed tomatoes and the chicken and stir to combine.
              Place the lid on the Instant Pot and seal to close. Set the
              machine to pressure cook on high and cook for 8 minutes.
            </li>
            <li>
              Turn off the Instant Pot and let it vent naturally for 10 minutes.
              Then turn the quick release seal to "vent" and allow any remaining
              steam to vent.
            </li>
            <li>
              Remove the lid. Using tongs, transfer the chicken to a cutting
              board. When cool enough to handle, cut into bite-sized pieces.
            </li>
            <li>
              Set the machine to high on the sauté setting. Cook sauce until it
              is reduced by half, 10–15 minutes.
            </li>
            <li>
              Add the yogurt to the sauce and stir to combine. Return the
              chicken to the pot and stir to coat completely with sauce.
            </li>
            <li>
              Serve chicken with basmati rice and naan and garnish with
              cilantro.
            </li>
            <li>Enjoy!</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
