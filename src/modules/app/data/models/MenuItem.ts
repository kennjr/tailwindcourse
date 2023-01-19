import { menuDto } from "../dto/MenuDto";

export class MenuItem{
    item!: menuDto;
    isAvailable!: boolean;

    constructor(item: menuDto, isAvailable: boolean){
        this.item = item
        this.isAvailable = isAvailable
    }
}