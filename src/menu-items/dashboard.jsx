// assets
import { DashboardOutlined, CalendarOutlined, HomeOutlined, ApartmentOutlined, UserOutlined } from '@ant-design/icons'; // Import the icons

// icons
const icons = {
  DashboardOutlined,
  CalendarOutlined,  // Add the Calendar icon
  HomeOutlined,      // Add the Home icon
  ApartmentOutlined, // Add the OrgChart icon
  UserOutlined       // Add the Profile icon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'landing-page',
      title: 'Dashboard',
      type: 'item',
      url: '/landing-page',
      icon: icons.HomeOutlined,
      breadcrumbs: false
    },
    {
      id: 'profile-details',
      title: 'Profile Details',
      type: 'item',
      url: '/profile-details',
      icon: icons.UserOutlined,
      breadcrumbs: false
    },
    {
      id: 'calendar',
      title: 'Calendar',
      type: 'item',
      url: '/calendar',
      icon: icons.CalendarOutlined,
      breadcrumbs: false
    },
    {
      id: 'org-chart',
      title: 'Organization Chart',
      type: 'item',
      url: '/org-chart',
      icon: icons.ApartmentOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
