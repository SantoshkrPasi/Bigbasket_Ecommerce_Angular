import { Routes } from '@angular/router';
import { Login } from './pages/admin/login/login';
import { Layout } from './pages/admin/layout/layout';
import { Products } from './pages/admin/products/products';
import { Categories } from './pages/admin/categories/categories';
import { Landing } from './pages/website/landing/landing';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'shop',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component:Login
    },
    {
        path: 'shop',
        component:Landing
    },
    {
        path: '',
        component: Layout,
        children: [
            {
            path: 'products',
            component: Products,
            },
            {
                path: 'category',
                component :Categories,
            }    
    ]
    }
];
