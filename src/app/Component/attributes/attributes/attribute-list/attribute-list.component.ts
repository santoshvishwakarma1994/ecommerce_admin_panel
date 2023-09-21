import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Attribute } from 'src/app/Model/attribute.model';
import { MockDataService } from 'src/app/Service/mock-data.service';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-attribute-list',
  templateUrl: './attribute-list.component.html',
  styleUrls: ['./attribute-list.component.scss'],
  providers: [ConfirmationService, MessageService]

})
export class AttributeListComponent implements OnInit {
  attributes: Attribute[] = [];
  filteredAttributes: Attribute[] = [];
  globalFilter: string = '';
  selectedValues: string[] = [];

  @ViewChild('dt', { static: true }) table!: Table;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private mockDataService: MockDataService, private router: Router) { }

  ngOnInit(): void {
    this.attributes = this.mockDataService.getAttributes();
    this.filterAttributes();
  }

  editAttribute(id: number): void {
    if (id !== undefined && !isNaN(id)) {
      this.router.navigate(['/attributes/update', id]);
    } else {
      alert('Something went wrong');
    }
  }

  deleteAttribute(id: number): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this attribute?',
      icon: 'pi pi-trash',
      accept: () => {
        this.mockDataService.deleteAttribute(id);
        this.attributes = this.mockDataService.getAttributes();
        setTimeout(() => {
        this.filterAttributes();
      }, 1000); 
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Attribute deleted' });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Deletion cancelled' });
      }
    });
  }
  filterAttributes(): void {
    this.filteredAttributes = this.attributes.filter((attribute) => {
      const nameMatch = attribute.name.toLowerCase().includes(this.globalFilter.toLowerCase());
      const idMatch = attribute.id.toString().includes(this.globalFilter);
      const valuesString = attribute.values.join(', ').toLowerCase();
      const valuesMatch = valuesString.includes(this.globalFilter.toLowerCase());
  
      return nameMatch || idMatch || valuesMatch;
    });
  
    this.table.reset();
  }
  
  
}
