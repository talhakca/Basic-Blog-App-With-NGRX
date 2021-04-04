import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StoryService } from 'src/services/story-service/story.service';

@Component({
  selector: 'app-e-learning',
  templateUrl: './e-learning.component.html',
  styleUrls: ['./e-learning.component.scss']
})
export class ELearningComponent implements OnInit, AfterViewInit {

  storyData = [
    {
      title: 'Personal Desktop'
    },
    {
      title: 'Contents'
    },
    {
      title: 'Learning Progress'
    }
  ]

  constructor(
    private storyService: StoryService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.storyService.isStoryVisible.next(true);
      this.storyService.storyData.next(this.storyData);
    })
  }
}
