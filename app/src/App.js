import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import { RecipeTable, RecipeModal } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function RecordList() {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/recipes`).then(async (response) => {
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
            }

            const data = await response.json();
            setRecipes(data);
        });
    }, [setRecipes]);

    const deleteRecipe = (id) => {
        fetch(`http://localhost:5000/recipes/${id}`, {
            method: 'DELETE',
        });

        const newRecipes = recipes.filter((recipe) => recipe._id !== id);
        setRecipes(newRecipes);
    };

    const editRecipe = (recipe) => {
        setSelectedRecipe(recipe);
        setShowModal(true);
    };

    const saveEditedRecipe = (recipe) => {
        const { _id, ...editedRecipe } = recipe;

        fetch('http://localhost:5000/recipes/' + _id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedRecipe),
        }).catch((error) => console.error(error));
    };

    const addRecipe = (recipe) => {
        fetch('http://localhost:5000/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipe),
        }).catch((error) => console.error(error));
    };

    return (
        <div>
            <h3>Recipe list</h3>
            {recipes.length > 0 && (
                <RecipeTable
                    recipes={recipes}
                    editRecipe={editRecipe}
                    deleteRecipe={deleteRecipe}
                />
            )}
            <RecipeModal
                showModal={showModal}
                setShowModal={setShowModal}
                recipe={selectedRecipe}
                addRecipe={addRecipe}
                saveEditedRecipe={saveEditedRecipe}
            />
            <Button onClick={() => setShowModal(true)} variant="primary">
                Add Recipe
            </Button>
        </div>
    );
}
