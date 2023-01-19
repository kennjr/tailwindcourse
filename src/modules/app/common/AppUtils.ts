import { menuDto } from "../data/dto/MenuDto"
import { MenuItem } from "../data/models/MenuItem"

// this is where we'll have all utility stuff that's used by diff. components and services
export class AppUtils{
    // we can have endpoints in this class
    private static BASE_URL: string = "https://mode-cafe.com/"
    public static HOME_ENDPOINT: string = "home"
    public static MENU_ENDPOINT: string = "menu"
}

export class TestMenuItems{
    public static coffee_MenuDtoItem: menuDto = {
        itemName: "Espresso",
        itemCategory: "beverage",
        itemPrice: 12.50,
        itemIngredients: ["milk", "honey", "water", "cream", "granulated coffee"]
    }
    public static tea_MenuDtoItem: menuDto = {
        itemName: "Tea",
        itemCategory: "beverage",
        itemPrice: 9.99,
        itemIngredients: ["milk", "honey", "water", "azerbaijan tea concentrate"]
    }
    public static stb_shake_MenuDtoItem: menuDto = {
        itemName: "Strawberry milkshake",
        itemCategory: "drinks",
        itemPrice: 14.10,
        itemIngredients: ["milk", "strawberries"]
    }

    public static choco_shake_MenuDtoItem: menuDto = {
        itemName: "Chocolate milkshake",
        itemCategory: "drinks",
        itemPrice: 16.10,
        itemIngredients: ["milk", "cocoa"]
    }

    public static bagel_MenuDtoItem: menuDto = {
        itemName: "Bagel",
        itemCategory: "snacks",
        itemPrice: 4.10,
        itemIngredients: ["milk", "wheat", "eggs", "yeast"]
    }

    public static TEST_ITEM_1 = new MenuItem( this.coffee_MenuDtoItem, true );
    public static TEST_ITEM_2 = new MenuItem( this.stb_shake_MenuDtoItem, true );
    public static TEST_ITEM_3 = new MenuItem( this.tea_MenuDtoItem, true );
    public static TEST_ITEM_4 = new MenuItem( this.choco_shake_MenuDtoItem, false );
    public static TEST_ITEM_5 = new MenuItem( this.bagel_MenuDtoItem, true );
}