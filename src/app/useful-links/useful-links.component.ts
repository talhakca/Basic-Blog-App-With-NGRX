import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StoryService } from 'src/services/story-service/story.service';

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.scss']
})
export class UsefulLinksComponent implements OnInit, AfterViewInit {

  storyData = [
    {
      title: 'ISPAD Society App'
    },
    {
      title: 'ISPAD Newsletter'
    },
    {
      title: 'Interest Groups'
    },
    {
      title: 'Life for a Child'
    }
  ];

  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.storyService.storyData.next(this.storyData);
      this.storyService.isStoryVisible.next(true);
    }, 0)
  }

}
