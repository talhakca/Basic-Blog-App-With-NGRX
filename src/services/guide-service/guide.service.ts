import { Injectable } from '@angular/core';
import { Guideline } from 'src/app/models/guideline';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  guidelines: Guideline[] = [
    {
      id: '1',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim nisl et augue dapibus, vitae dictum quam consequat. Etiam finibus pellentesque ex ut placerat',
      writers: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim nisl et augue dapibus,',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim nisl et augue dapibus, vitae dictum quam consequat. Etiam finibus pellentesque ex ut placerat. Sed molestie leo malesuada, hendrerit leo dignissim, convallis elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec dui leo, iaculis in mollis rhoncus, efficitur vitae justo. Praesent ac nisl sed lorem efficitur malesuada. Aenean et nunc suscipit mauris venenatis ultrices eget nec enim. Curabitur metus velit, consectetur nec lacinia et, faucibus a justo. Aliquam vel blandit magna. In vel ipsum in ex pharetra ultricies ac ut lacus. Duis eget justo molestie, tempus sem suscipit, ultricies ipsum. Integer aliquet dapibus sollicitudin.'
    },
    {
      id: '2',
      title: 'Searchable title',
      writers: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim nisl et augue dapibus,',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim nisl et augue dapibus, vitae dictum quam consequat. Etiam finibus pellentesque ex ut placerat. Sed molestie leo malesuada, hendrerit leo dignissim, convallis elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec dui leo, iaculis in mollis rhoncus, efficitur vitae justo. Praesent ac nisl sed lorem efficitur malesuada. Aenean et nunc suscipit mauris venenatis ultrices eget nec enim. Curabitur metus velit, consectetur nec lacinia et, faucibus a justo. Aliquam vel blandit magna. In vel ipsum in ex pharetra ultricies ac ut lacus. Duis eget justo molestie, tempus sem suscipit, ultricies ipsum. Integer aliquet dapibus sollicitudin.'
    }
  ]

  constructor() { }

  getGuidelines() {
    return this.guidelines;
  }

  getGuidelineById(id: string) {
    return <Guideline>this.guidelines.find(item => item.id == id);
  }
}
