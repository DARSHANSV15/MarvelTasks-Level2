const recipeSteps = [
  "Step 0: Set the oven to the temperature specified in your recipe.",
  "Step 1: Grease and flour the cake pans to prevent sticking.",
  "Step 2: Combine the dry ingredients (flour, sugar, baking powder, salt) in one bowl.",
  "Step 3: Combine the wet ingredients (eggs, milk, oil, vanilla extract) in another bowl.",
  "Step 4: Gradually mix the wet ingredients into the dry until well combined.",
  "Step 5: Divide the batter evenly between the prepared cake pans.",
  "Step 6: Place the pans in the preheated oven and bake for the time specified in your recipe, or until a toothpick inserted into the center comes out clean.",
  "Step 7: Allow the cakes to cool in the pans for about 10 minutes.Transfer the cakes to a wire rack to cool completely.",
  "Step 8: Frost the cakes with your favorite frosting or icing.",
  "Step 9: Add any decorations or toppings you like, such as sprinkles, fruit, or chocolate shavings.",
  "Step 10: Slice and serve your delicious homemade cake!"
];

const displayStep = (step) => {
  return new Promise(resolve => {
    const recipeStepsElement = document.getElementById('recipe-steps');
    const stepDiv = document.createElement('div');
    stepDiv.textContent = step;
    recipeStepsElement.appendChild(stepDiv);
    setTimeout(resolve, 2000);
  });
};

function autoScrollDown() { 
  window.scrollBy(0, 100); // You can adjust the second parameter to control the speed of the scroll 
  setTimeout(autoScrollDown, 10); // You can adjust the time interval based on your preference 
} 


const startRecipe = async () => {
  for (const step of recipeSteps) {
    await displayStep(step);
    autoScrollDown();
  }
  alert("Recipe completed!");
};

document.getElementById('start-btn').addEventListener('click', startRecipe);