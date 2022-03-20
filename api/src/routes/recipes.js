import express from 'express';

import controllers from '../controllers/index.js';

const routes = express.Router();

routes.route('/recipes').get(controllers.getRecipes);
routes.route('/recipes/:id').get(controllers.getRecipe);
routes.route('/recipes').post(controllers.saveRecipe);
routes.route('/recipes/:id').patch(controllers.updateRecipe);
routes.route('/recipes/:id').delete(controllers.deleteRecipe);

export default routes;
