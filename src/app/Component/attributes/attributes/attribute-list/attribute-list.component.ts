import { Component, OnInit } from '@angular/core';
import { Attribute } from 'src/app/Model/attribute.model';
import { AttributeService } from 'src/app/Service/attributes/attribute.service';
import { MockDataService } from 'src/app/Service/mock-data.service';

@Component({
  selector: 'app-attribute-list',
  templateUrl: './attribute-list.component.html',
  styleUrls: ['./attribute-list.component.scss'],
})
export class AttributeListComponent implements OnInit {
  attributes: Attribute[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.attributes = this.mockDataService.getAttributes();
  }
}
