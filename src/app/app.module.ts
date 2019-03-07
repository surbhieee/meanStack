import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { QuestionsComponent } from './categories/questions/questions.component';
import { QuestionsAndAnswersComponent } from './categories/questions-and-answers/questions-and-answers.component';
import { AboutComponent } from './about/about.component';
import { topicExtract } from './categories/topicExtract'
//import {MatDialogModule} from '@angular/material/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material';
//import { MatInputModule } from '@angular/material';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';
const appRoutes: Routes = [
  //{ path: '', redirectTo: 'About', pathMatch: 'full' },
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
    { path: 'Categories/Angular5', component:  QuestionsComponent, data: {title: 'Angular5'}},
    { path: 'Categories/ReactJs', component:  QuestionsComponent, data: {title: 'ReactJs'}},
    { path: 'Categories/Vue.js', component:  QuestionsComponent, data: {title: 'Vue.js'}}
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
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
       appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  entryComponents: [
        QuestionsAndAnswersComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
