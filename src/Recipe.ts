import AddRecipe from "./AddRecipe";
import { from, fromEvent } from "rxjs";

class Recipe {

    submitNewRecipe: HTMLButtonElement;
    table: HTMLTableElement;
    listRecipes: Array<object>;

    private newRecipe: AddRecipe;

    constructor() {
        this.initialize();
        this.selectElements();
        this.addEventListeners();

       // this.listRecipes = JSON.parse(sessionStorage.getItem('listRecipes') || "[]");

        from(this.listRecipes).subscribe((data: any) => {
            let row = document.createElement('tr') as HTMLTableRowElement;
            this.table.append(row);

            let nameCol = document.createElement('td') as HTMLTableDataCellElement;
            this.table.append(nameCol);
            nameCol.innerText = data.name;
            nameCol.setAttribute('class', 'text-center');

            let ingCol = document.createElement('td') as HTMLTableDataCellElement;
            this.table.append(ingCol);
            ingCol.innerText = data.ingredients;
            ingCol.setAttribute('class', 'text-center');
        })
    }

    private initialize = () : void => {
        this.newRecipe = new AddRecipe();
        this.listRecipes = [
            {
                id: 0,
                name: 'Pizza',
                ingredients: 'Cheese, ketchup, ham, mushrooms'
            },
            {
                id: 1,
                name: 'Cake',
                ingredients: 'Chocolate, vanilla, eggs'
            }
        ]

        localStorage.setItem('listRecipes', JSON.stringify(this.listRecipes));
    };

    private selectElements = () : void => {
        this.submitNewRecipe = document.querySelector('.modal-footer button');
        this.table = document.querySelector('table tbody');
    };

    private addEventListeners = () : void => {
        fromEvent(this.submitNewRecipe, 'click').subscribe(() => this.newRecipe.addNewRecipe());
    };
}

export default Recipe;
