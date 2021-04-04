import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StoryService } from 'src/services/story-service/story.service';

@Component({
  selector: 'app-under-resourced-countries',
  templateUrl: './under-resourced-countries.component.html',
  styleUrls: ['./under-resourced-countries.component.scss']
})
export class UnderResourcedCountriesComponent implements OnInit, AfterViewInit {

  constructor(
    private storyService: StoryService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.storyService.storyData.next([]);
      this.storyService.isStoryVisible.next(false);
    }, 0)
  }

}
