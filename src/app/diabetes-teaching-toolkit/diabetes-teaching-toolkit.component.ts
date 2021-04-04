import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StoryService } from 'src/services/story-service/story.service';

@Component({
  selector: 'app-diabetes-teaching-toolkit',
  templateUrl: './diabetes-teaching-toolkit.component.html',
  styleUrls: ['./diabetes-teaching-toolkit.component.scss']
})
export class DiabetesTeachingToolkitComponent implements OnInit, AfterViewInit {

  storyData = [
    {
      title: 'Basic'
    },
    {
      title: 'Advanced'
    }
  ];

  constructor(
    private storyService: StoryService
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.storyService.storyData.next(this.storyData);
      this.storyService.isStoryVisible.next(true);
    }, 0)
  }

}
