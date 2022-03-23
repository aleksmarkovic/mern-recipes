import { Table, Button } from 'react-bootstrap';

const RecipeTable = ({ recipes, editRecipe, deleteRecipe }) => {
    return (
        <Table striped bordered>
            <thead>
                <tr>
                    {Object.keys(recipes[0])
                        .filter((recipeField) => recipeField !== '_id')
                        .map((recipeField) => (
                            <th key={recipeField}>{recipeField}</th>
                        ))}
                </tr>
            </thead>
            <tbody>
                {recipes.map((recipe) => (
                    <tr key={recipe._id}>
                        <td>{recipe.name}</td>
                        <td>{recipe.ingredients.join(', ')}</td>
                        <td>{recipe.description}</td>
                        <td>
                            <Button
                                onClick={() => editRecipe(recipe)}
                                variant="secondary"
                            >
                                Edit
                            </Button>{' '}
                            <Button
                                onClick={() => deleteRecipe(recipe._id)}
                                variant="danger"
                            >
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default RecipeTable;
