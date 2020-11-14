import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-view',
  templateUrl: './next-view.component.html',
  styleUrls: ['./next-view.component.scss']
})
export class NextViewComponent implements OnInit {
  @Output('Unselectnext') UnSelectNext = new EventEmitter<boolean>();
  constructor() { }

  selectChangeHandler() {
    let x = true;
    this.UnSelectNext.emit(x)
  }
  ngOnInit(): void {
  }

}
