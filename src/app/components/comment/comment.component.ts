import { Component, Input } from '@angular/core';
import { CommentData } from 'src/app/modules/home/home.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: [],
})
export class CommentComponent {
  @Input() data!: CommentData;
}
