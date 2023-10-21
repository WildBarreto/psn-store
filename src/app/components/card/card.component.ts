import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  gameCover: string = '';
  @Input()
  gameLabel: string = '';
  constructor() {}
  @Input()
  gameType: string = 'Digital | PS5';
  @Input()
  gamePrice: string = 'R$ 399,90';

  ngOnInit(): void {}
}
