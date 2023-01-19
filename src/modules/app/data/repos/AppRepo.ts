import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FakeService } from "../../domain/services/fake/fake.service";
import { MenuItem } from "../models/MenuItem";

@Injectable({
    providedIn: 'root'
})
export class AppRepo{
    constructor( private tempService: FakeService ){}

    public getMenuItems(): Observable<MenuItem[]>{
        return this.tempService.getMenu()
    }
}