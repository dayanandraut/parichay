import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { MySkillComponent } from './my-skill/my-skill.component';
import { KnowMeMoreComponent } from './know-me-more/know-me-more.component';
import { MyFooterComponent } from './my-footer/my-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,    
    MyProjectComponent,    
    MySkillComponent,
    KnowMeMoreComponent,
    MyFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }