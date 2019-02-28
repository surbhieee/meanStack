import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { QuestionsComponent } from './categories/questions/questions.component';
import { QuestionsAndAnswersComponent } from './categories/questions-and-answers/questions-and-answers.component';
import { AboutComponent } from './about/about.component';
import { topicExtract } from './categories/topicExtract'


const appRoutes: Routes = [
  { path: '', redirectTo: 'About', pathMatch: 'full' },
  { path: 'About', component:  AboutComponent},
  { path: 'Categories',
    component:  CategoriesComponent
    // ,
    // children: [
    //   { path: 'Angular5', component:  QuestionsComponent},
    //   { path: 'ReactJs', component:  AboutComponent},
    //   { path: 'Vue.js', component:  QuestionsAndAnswersComponent}
    // ]
  },
    { path: 'Categories/Angular5', component:  QuestionsComponent},
    { path: 'Categories/ReactJs', component:  QuestionsComponent},
    { path: 'Categories/Vue.js', component:  QuestionsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    QuestionsComponent,
    QuestionsAndAnswersComponent,
    AboutComponent,
    topicExtract
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
       appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
