import { Routes } from '@angular/router';
import { Cartographie } from './cartographie/cartographie';
import { Dashboard } from './dashboard/dashboard';
import { Forum } from './forum/forum';
import { PRessource } from './pressource/pressource';
import { Communication } from './communication/communication';
import { ProjetCours } from './projet-cours/projet-cours';
import { Authentification } from './authentification/authentification';
import { Accueil } from './accueil/accueil';

export const routes: Routes = [
    {
  path: '',
    component: Dashboard,
    children: [
      { path: 'cartographie', component: Cartographie },
      { path: 'forum', component: Forum },
      { path: 'partage', component: PRessource  },
      { path: 'communication', component: Communication },
      { path: 'projet', component: ProjetCours },
      { path: 'login', component: Authentification},
      { path: 'accueil', component: Accueil} 
    ]
    }  

];
