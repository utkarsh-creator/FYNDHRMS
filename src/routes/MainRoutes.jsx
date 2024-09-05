import { lazy } from 'react';

import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

const Calender = Loadable(lazy(() => import('pages/calender/Calender.jsx')));

const LandingPage = Loadable(lazy(() => import('pages/landingPage/LandingPage.jsx')));

const OrgChart = Loadable(lazy(() => import('pages/orgChart/OrgChart.jsx')));

const ProfileDetails = Loadable(lazy(() => import('pages/profileDetails/ProfileDetails.jsx')));

// Other existing imports
const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'profile-details',
      element: <ProfileDetails />
    },
    {
      path: 'calendar',
      element: <Calender />
    },
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: 'landing-page',
      element: <LandingPage />
    },
    {
      path: 'org-chart',
      element: <OrgChart />
    }
    
  ]
};

export default MainRoutes;
