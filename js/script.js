document.addEventListener('DOMContentLoaded', function ( ) {
      const recipeSections = document.querySelectorAll('.recipe-section');
      const tryAnotherButtons = document.querySelectorAll('.try-another-btn');
      let currentRecipeIndex = 0;

      function showRecipe(index) {

        recipeSections.forEach(section => {
          section.classList.remove('active');
        });

        recipeSections[index].classList.add('active');
      }

      tryAnotherButtons.forEach(button => {
        button.addEventListener('click', () => {

          currentRecipeIndex = (currentRecipeIndex + 1) % recipeSections.length;
          showRecipe(currentRecipeIndex);
        });
      });
      showRecipe(currentRecipeIndex);
    });