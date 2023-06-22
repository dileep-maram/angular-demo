import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-child',
  templateUrl: './section-child.component.html',
  styleUrls: ['./section-child.component.scss']
})
export class SectionChildComponent implements OnInit {
  @Input() mainTitle = "";
  ngOnInit(): void {
    
  }

}
