import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';
import { NguCarouselConfig } from '@ngu/carousel';
import { slider } from './carousel.animation';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CarouselComponent implements OnInit {
  @Input() name: string;
  imgags = [
    'assets/bg.jpg',
    'assets/car.png',
    'assets/canberra.jpg',
    'assets/holi.jpg'
  ];
  public carouselTileItems$: Observable<number[]>;
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    speed: 250,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 3000 },
    animation: 'lazy'
  };
  tempData: any[];
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.tempData = [];
    this.carouselTileItems$ = interval(1).pipe(
      startWith(-1),
      take(4),
      map(val => {
        const data = (this.tempData = [
          ...this.tempData,
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        ]);
        return data;
      })
    );
  }
}
