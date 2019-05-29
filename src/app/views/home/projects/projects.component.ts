import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';
import { ProjectService } from '../../../shared/services/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class PortfolioCarouselComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  projects:any
  constructor(private projectService: ProjectService, private route:ActivatedRoute){
    
  }
  public carouselOptions: NguCarousel;

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
      slide: 2,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    }
    this.projects = this.route.snapshot.data['projects']
  }
}
