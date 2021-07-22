import { SearchPage } from "../pages/search/search.page";
import { UserPageComponent } from "../pages/user.page/user.page.component";

export const mainRoutes = [
    { 
        path: '', 
        component: SearchPage,
        pathMatch: 'full'
    },
    { 
      path: 'user', 
      component: UserPageComponent,
  },
]