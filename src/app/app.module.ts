import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { TechnologyComponent } from './technology/technology.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { SkillsComponent } from './skills/skills.component';
import { MySkillComponent } from './my-skill/my-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    TechnologyComponent,
    MyProjectComponent,
    SkillsComponent,
    MySkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
