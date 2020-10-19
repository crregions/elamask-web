import HomePage from 'views/home/Home'
import DAppsPage from 'views/dapps/DApps'

export default [
  {
    path: '/',
    page: HomePage,
  },
  {
    path: '/home',
    page: HomePage,
  },
  {
    path: '/dapps',
    page: DAppsPage,
  },
]
