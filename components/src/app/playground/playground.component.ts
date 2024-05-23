import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit, OnDestroy {
  isToggle: boolean = false;
  imgUrl: string = "https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg";
  badCurly: string = "div-wrapper-img"
 
  @Input("color") colorValue = "white";
  @Output() onTestOutput = new EventEmitter<string>();

  ngOnInit() {
    console.log("Init");
  }

  ngAfterViewInit() {
    console.log("After init");
  }

  ngOnDestroy() {
    console.log("On destroy");
  }

  ngDoCheck() {
    if (this.isToggle === true) {
      console.log({isToggle: this.isToggle});
    }
  }

  handleClick(event: Event): void {
    console.log(event.target);
    this.isToggle = !this.isToggle;
  }

  handleInput(username: string): void {
    console.log(username);
    console.log(this.colorValue);
    this.onTestOutput.emit(username);   
  }

  logMessage = (): void => {
    console.log("CLICKED");
  }
}
