import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public FrontendImageArray = [
    {"title":"Angular", "imageUrl":"../../../assets/img/angular-seeklogo.com.svg"},
    {"title":"React", "imageUrl":"../../../assets/img/react-seeklogo.com.svg"},
    {"title":"HTML", "imageUrl":"../../../assets/img/html5-with-wordmark-color.svg"},
    {"title":"Sass", "imageUrl":"../../../assets/img/sass-seeklogo.com.svg"},
    {"title":"Typescript", "imageUrl":"../../../assets/img/typescript-seeklogo.com.svg"},
    {"title":"JavaScript", "imageUrl":"../../../assets/img/javascript-js-seeklogo.com.svg"},
    {"title":"BSootstrap", "imageUrl":"../../../assets/img/bootstrap-seeklogo.com.svg"},
  ]
  public BackendImageArray = [
    {"title":"SpringBoot", "imageUrl":"../../../assets/img/spring-boot-seeklogo.com.svg"},
    {"title":"Maven", "imageUrl":"../../../assets/img/maven-seeklogo.com.svg"},
    {"title":"MongoDb", "imageUrl":"../../../assets/img/mongodb-seeklogo.com.svg"},
    {"title":"Postman", "imageUrl":"../../../assets/img/postman-seeklogo.com.svg"}
  ]
  public OtherImageArray = [
    {"title":"Docker", "imageUrl":"../../../assets/img/docker-seeklogo.com.svg"},
    {"title":"Gitlab", "imageUrl":"../../../assets/img/gitlab-seeklogo.com.svg"},
    {"title":"Jenkins", "imageUrl":"../../../assets/img/jenkins-seeklogo.com.svg"},
    {"title":"Java", "imageUrl":"../../../assets/img/java-seeklogo.com.svg"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
