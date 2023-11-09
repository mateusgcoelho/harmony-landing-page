import { Component, Input } from '@angular/core';
import { FaqItemData } from 'src/app/modules/home/home.component';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: [],
})
export class FaqItemComponent {
  @Input() data!: FaqItemData;

  public expanded: boolean = false;

  public toggleExpanded() {
    this.expanded = !this.expanded;
  }
}
