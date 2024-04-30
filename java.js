document.addEventListener("DOMContentLoaded", function() {
    const objectsContainer = document.getElementById("objects-container");
    const objectForm = document.getElementById("object-form");
    let objects = [];

    function renderObjects() {
        objectsContainer.innerHTML = "";
        objects.forEach((object, index) => {
            const objectElement = document.createElement("div");
            objectElement.classList.add("object");
            objectElement.innerHTML = `
                <strong>${object.name}</strong> - ${object.description}
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            `;
            objectsContainer.appendChild(objectElement);

            const editButton = objectElement.querySelector(".edit-btn");
            const deleteButton = objectElement.querySelector(".delete-btn");

            editButton.addEventListener("click", function() {
                const newName = prompt("Введити новое имя:");
                const newDescription = prompt("Введите новое описание:");
                if (newName && newDescription) {
                    objects[index].name = newName;
                    objects[index].description = newDescription;
                    renderObjects();
                }
            });

            deleteButton.addEventListener("click", function() {
                objects.splice(index, 1);
                renderObjects();
            });
        });
    }

    objectForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const nameInput = document.getElementById("name");
        const descriptionInput = document.getElementById("description");
        const name = nameInput.value.trim();
        const description = descriptionInput.value.trim();
        if (name && description) {
            const newObject = { name, description };
            objects.push(newObject);
            renderObjects();
            nameInput.value = "";
            descriptionInput.value = "";
        } else {
            alert("Пожалуйста, введите имя и описание.");
        }
    });
});