import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { CardSearchViewComponent } from '../cards/components/card-search-view/card-search-view.component';
import { OptionsComponent } from '../options/options.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'card-search',
    },
    {
        path: 'card-search',
        component: CardSearchViewComponent,
    },
    {
        path: 'preferences',
        component: OptionsComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
