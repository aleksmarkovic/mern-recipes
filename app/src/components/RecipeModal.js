import { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const RecipeTable = ({
    showModal,
    setShowModal,
    recipe,
    addRecipe,
    saveEditedRecipe,
}) => {
    const [currentRecipe, setCurrentRecipe] = useState({
        name: '',
        ingredients: [''],
        description: '',
    });

    useEffect(() => {
        if (recipe) {
            setCurrentRecipe(recipe);
        }
    }, [recipe, setCurrentRecipe]);

    const handleClose = () => {
        setShowModal(false);
    };

    const addIngredient = () =>
        setCurrentRecipe({
            ...currentRecipe,
            ingredients: [...currentRecipe.ingredients, ''],
        });

    const ingredientChange = (event, index) => {
        const newCurrentRecipe = { ...currentRecipe };
        newCurrentRecipe.ingredients[index] = event.target.value;
        setCurrentRecipe(newCurrentRecipe);
    };

    const nameChange = (event) => {
        const newCurrentRecipe = { ...currentRecipe };
        newCurrentRecipe.name = event.target.value;
        setCurrentRecipe(newCurrentRecipe);
    };

    const descriptionChange = (event) => {
        const newCurrentRecipe = { ...currentRecipe };
        newCurrentRecipe.description = event.target.value;
        setCurrentRecipe(newCurrentRecipe);
    };

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form
                    onSubmit={() =>
                        recipe
                            ? saveEditedRecipe(currentRecipe)
                            : addRecipe(currentRecipe)
                    }
                >
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            placeholder="Recipe name"
                            onChange={nameChange}
                            defaultValue={currentRecipe?.name}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formIngredients">
                        <Form.Label>Ingredients</Form.Label>
                        {currentRecipe.ingredients.map((ingredient, index) => (
                            <Form.Control
                                className="mb-3"
                                placeholder="Recipe ingredient"
                                key={index}
                                onChange={(event) =>
                                    ingredientChange(event, index)
                                }
                                defaultValue={currentRecipe?.ingredients[index]}
                            />
                        ))}
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Recipe description"
                            onChange={descriptionChange}
                            defaultValue={currentRecipe?.description}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="me-1">
                        Submit
                    </Button>
                    <Button
                        variant="secondary"
                        type="button"
                        onClick={addIngredient}
                    >
                        Add ingredient
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default RecipeTable;
