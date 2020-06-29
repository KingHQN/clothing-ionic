import { Component, OnInit, Input } from '@angular/core';
import { ClothingService } from 'src/app/services/clothing.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Clothes } from 'src/app/models/clothing.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clothing-list',
  templateUrl: './clothing-list.component.html',
  styleUrls: ['./clothing-list.component.scss'],
})
export class ClothingListComponent implements OnInit {

  @Input() clothes$: Observable<Clothes[]>;
  @Input() paramsUrl: string;

  // tslint:disable-next-line: max-line-length
  constructor(private clothingService: ClothingService) { }

  ngOnInit() {
  }

}
