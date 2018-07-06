import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardSearchViewComponent } from '../cards/components/card-search-view/card-search-view.component';
import { CardViewComponent } from '../cards/components/card-view/card-view.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'card-search'
    },
    {
        path: 'card-search',
        component: CardSearchViewComponent
    },
    {
        path: 'card/:cardName',
        component: CardViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
