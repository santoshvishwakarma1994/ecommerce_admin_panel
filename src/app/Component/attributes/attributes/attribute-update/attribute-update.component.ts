import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Attribute } from 'src/app/model/attribute.model';
import { MockDataService } from 'src/app/Service/mock-data.service';

@Component({
  selector: 'app-attribute-update',
  templateUrl: './attribute-update.component.html',
  styleUrls: ['./attribute-update.component.scss']
})
export class AttributeUpdateComponent implements OnInit {
  attribute: Attribute = { id: 0, name: '', values: [] };
  allAttributeValues: string[] = [];
  selectedAttributeValues: string[] = [];

  constructor(
    private attributeService: MockDataService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService

  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const attributeId = +params['id'];
      if (attributeId) {
        this.attribute = this.attributeService.getAttributeById(attributeId) || this.attribute;
        this.allAttributeValues = this.attributeService.getAllAttributeValues();
        this.selectedAttributeValues = [...this.attribute.values];
      }
    });
  }

  updateAttribute(): void {
    this.attribute.values = this.selectedAttributeValues; 
    this.attributeService.updateAttribute(this.attribute);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Attributes updated successfully',
    });
  setTimeout(() => {
    this.router.navigate(['/attributes/list']);
  }, 1000);
 }   
}
