import { Routes } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { ManualComponent } from './manual-component/manual-component.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

export const routes: Routes = [
    {path:"first", component:MyComponentComponent,children:[
        {path:"child1",component:Child1Component},
        {path:"child2",component: Child2Component}
    ]},
    {path: "second", component: ManualComponent}
];
