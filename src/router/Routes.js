import User from '../pages/user';
import Home from '../pages/home';
import { About } from '../pages/about';

export const routes = [
    {
      name: 'home',
      label: 'Home',
      path: '/',
      component: { Home }
    },
    { name: 'access',
      label: 'Access',
      path: '',
      items: [
        { name: 'user', label: 'User', path: '/user', component: { User } },
      ],
    },
    {
      name: 'about',
      label: 'About',
      path: '/about',
      component: { About }
    }
  ]