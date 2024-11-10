import { Component, EventEmitter, Input, Output, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { ChallengeModel } from '../models/hike.model';
import { DistanceModel } from '../models/distance.model';
import { outputToObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-hike-item',
  templateUrl: './hike-item.component.html',
  styleUrl: './hike-item.component.css',
})
export class HikeItemComponent {
  @Input() challenge: ChallengeModel | undefined;
  @Output() selectionChanged = new EventEmitter<void>();

  apply(distance: DistanceModel, applied: boolean): void{
    this.challenge?.distances.forEach(d => d.applied = false);

    distance.applied = applied;
    this.selectionChanged.emit();
  }
}
