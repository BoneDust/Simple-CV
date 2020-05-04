import { Component } from '@angular/core';

@Component({
    selector: 'side-panel',
    templateUrl: './sidePanel.component.html',
    styleUrls: ['./sidePanel.component.scss']
})

export class SidePanelComponent {
    title = 'angular-simple-cv';
    contactDetails: { imageUrl: string; text: string; email: string }[] = [
      {"imageUrl": "assets/images/email.png","text": "", "email":"gktshekela@gmail.com"},
      {"imageUrl": "assets/images/mobile.png","text": "+27 652 206 736", "email":""}
    ];
    links: {image: string; url: string}[] = [
      {"image": "assets/images/linkedIn.png", "url":"https://za.linkedin.com/in/goodwill-tshekela-a0675351"},
      {"image": "assets/images/github.png", "url":"https://github.com/BoneDust"}
    ];
    skills: {skillHeading: string, skills: string[]}[] = [
      {"skillHeading": "Languages", "skills": ["Java", "JavaScript", "TypeScript", "NodeJS", "C", "C++", "SQL"]},
      {"skillHeading": "Web Technologies", "skills": ["HTML/HTML5", "CSS 3", "AngularJS/Angular"]},
      {"skillHeading": "Data Management", "skills": ["MySQL", "DynamoDB"]},
      {"skillHeading": "Testing", "skills": ["JUnit", "Mockito", "JasmineJS"]},
      {"skillHeading": "Cloud Services", "skills": ["AWS Lambda", "AWS S3", "Serverless Framework"]},
      {"skillHeading": "Web Application Frameworks", "skills": ["Spring Boot", "Express"]}
    ];
    certificates: string[] = ["OCA, Java SE 8 Programmer"];

    getString = (array: string[]): string => {
      return array.join(', ');
    };


}
