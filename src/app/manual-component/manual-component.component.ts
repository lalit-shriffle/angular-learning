import {Component,Input} from "@angular/core";


@Component({
    standalone:true,
    selector:'app-manual-component',
    templateUrl: "./manual-component.component.html",
    styleUrl: "./manual-component.component.css"
})

export class ManualComponent{
    @Input() item: string;
} 