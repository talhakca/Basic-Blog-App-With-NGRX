import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoryService } from 'src/services/story-service/story.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

  mail: string | null = null;
  content: string | null = null;

  userVerified = false;

  constructor(
    private storyService: StoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.checkIfUserAuthenticatedToSendMail();
  }

  ngAfterViewInit(): void {
    this.storyService.isStoryVisible.next(false);
  }

  checkIfUserAuthenticatedToSendMail() {
    if (localStorage.getItem('userId') && localStorage.getItem('userDataCollected') === 'true') {
      this.userVerified = true
    } else {
      this.userVerified = false;
    }
  }

  navigateToLoginPage() {
    this.router.navigateByUrl('');
  }

  submitForm() {

  }
}
