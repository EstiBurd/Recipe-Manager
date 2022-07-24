import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DetailsRComponent } from './details-r/details-r.component';
import {Routes,RouterModule} from '@angular/router';
import { DetailesComponent } from './detailes/detailes.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditComponent } from './edit/edit.component';
import { HoursPipe } from './hours.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AllRecipesComponent,
    DetailsRComponent,
    DetailesComponent,
    AddRecipeComponent,
    EditComponent,
    HoursPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
