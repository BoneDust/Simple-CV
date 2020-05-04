import { Component } from '@angular/core';

@Component({
    selector: 'main-panel',
    templateUrl: './mainPanel.component.html',
    styleUrls: ['./mainPanel.component.scss']
})

export class MainPanelComponent {

    summaryItems: {header:string; paragraphs: string[]}[] = [
        {header:"About me", paragraphs:["I’m a junior software developer with more than one year of experience in the  FinTech field. I’m always ready to play my part and go the extra mile should the need arise. I aim to contribute towards delivering quality software solutions to clients."]},
        {header:"What do I want from my next job?", paragraphs:["I'd like to be in a Full Stack position where I would primarily work with Spring Boot and AngularJS/Angular. I would also appreciate the opportunity to do cloud related development.","Ideally, I’d like to be in a team of no more than six developers. I want to have colleagues whom I’ll learn from and who are open to critics and will similarly criticize me."]}
    ];
    experiences: {title: string; duration: string; area: string; details:string[]}[] =[
        {title: "BBD - Software Developer", duration: "July 2019 - Present", area: "Johannesburg Area, South Africa", details:["I assumed a junior full stack developer role in July 2019, working on the same business banking project I've been working on since I started at BBD.", "I write server-side source code using Java and Spring Boot. This is coupled with testing tools like JUnit and Mockito. On the client-side, the project is transitioning from AngularJS to Angular 8, so that's the framework I'll be working with to realise the required user interfaces."]},
        {title: "BBD - Software Developer Intern", duration: "February 2019 - June 2019", area: "Johannesburg Area, South Africa", details:["I started out at BBD in an internship role which essentially formed as part of my probation at BBD (Feb 2019 - Jun 2019).", "I was part of a four-man team that's working on one of BBD's client's business banking project. In this project, a colleague and myself were responsible for implementing all of the front-end work needed. I mostly wrote source code in JavaScript, HTML, AngularJS and write unit tests using technologies like Karma, Protractor and JasmineJS."]},
        {title: "BCX - Software Developer Intern", duration: "February 2018 - May 2018", area: "Centurion, South Africa", details:["This internship was more inclined towards self-learning. My team was responsible for creating a cross-platform mobile app that will allow users to buy tickets to a certain event and be able to view schedules, FAQs etc. I was on the backend team that had to code the necessary containerised microservices in C#, test the endpoints with Postman and finally create swagger documentation for the API."]}
    ];
    education: {institute: string; course:string, duration: string}[]=[
        {institute: "University of South Africa", course: "BSc Applied Mathematics & Computer Science", duration: "2019 - 2022"},
        {institute: "WeThinkCode_", course: "Software Engineering", duration: "2017 - 2019"}
    ];
}
