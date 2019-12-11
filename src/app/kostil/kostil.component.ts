import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-kostil',
  templateUrl: './kostil.component.html',
  styleUrls: ['./kostil.component.css']
})
export class KostilComponent implements OnInit {
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}
