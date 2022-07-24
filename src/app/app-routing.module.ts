import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { DetailesComponent } from './detailes/detailes.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:LoginComponent },
  {path:'allRecipe',component:AllRecipesComponent},
  {path:'register',component:RegisterComponent},
  {path:'detailes',component:DetailesComponent},
  {path:'login',component:LoginComponent},
{path:'addRecipe',component:AddRecipeComponent},
{path:'app-edit',component:EditComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
