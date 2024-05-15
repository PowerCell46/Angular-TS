import { Component } from "@angular/core";


@Component({
    selector: "app-nav",
    template: `<div id="nav-wrapper">{{title}}</div>`,
    styles: ["#nav-wrapper: {background-color: pink}"]  
})
export class NavComponent {
    public title: string = "Hello dynamic title!";
}