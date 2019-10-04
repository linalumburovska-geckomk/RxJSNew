class AddRecipe {

    table: HTMLTableElement;
    name: HTMLInputElement;
    ingredients: HTMLInputElement;

    constructor() {
        this.selectElements();
    }

    private selectElements = () : void => {
        this.table = document.querySelector('table tbody');
        this.name = document.querySelector('.name');
        this.ingredients = document.querySelector('.ingredients');
    };

    addNewRecipe = () : void => {
        let listRecipes : Array<object> = JSON.parse(sessionStorage.getItem('listRecipes') || "[]");

        const newRecipe = {
            id: listRecipes.length,
            name: this.name.value,
            ingredients: this.ingredients.value
        }

        listRecipes.push(newRecipe);
        let row = document.createElement('tr') as HTMLTableRowElement;
        this.table.append(row);

        let nameCol = document.createElement('td') as HTMLTableDataCellElement;
        this.table.append(nameCol);
        nameCol.innerText = newRecipe.name;
        nameCol.setAttribute('class', 'text-center');

        let ingCol = document.createElement('td') as HTMLTableDataCellElement;
        this.table.append(ingCol);
        ingCol.innerText = newRecipe.ingredients;
        ingCol.setAttribute('class', 'text-center');

        localStorage.setItem('listRecipes', JSON.stringify(listRecipes));
    };

}

export default AddRecipe;
