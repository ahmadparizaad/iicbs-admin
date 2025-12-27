import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  
  // {
  //   navlabel: true,
  //   subheader: 'Auth',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Login',
  //   icon: IconLogin,
  //   href: '/auth/login',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Register',
  //   icon: IconUserPlus,
  //   href: '/auth/register',
  // },
  {
    navlabel: true,
    subheader: 'Pages',
  },
  // {
  //   navlabel: true,
  //   subheader: 'Manage User',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Add User',
  //   icon: IconAperture,
  //   href: '/adduser',
  // },
  {
    id: uniqueId(),
    title: 'All User',
    icon: IconAperture,
    href: '/all-user',
  },
  // {
  //   navlabel: true,
  //   subheader: 'Manage Products',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Add Products',
  //   icon: IconAperture,
  //   href: '/addproduct',
  // },
  {
    id: uniqueId(),
    title: 'All Products',
    icon: IconAperture,
    href: '/all-business',
  },
  // {
  //   navlabel: true,
  //   subheader: 'Manage Tax & HSN',
  // },
  {
    id: uniqueId(),
    title: 'Tax & Hsn',
    icon: IconAperture,
    href: '/taxhsn',
  },
  // {
  //   navlabel: true,
  //   subheader: 'Manage Payments',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'All Payments',
  //   icon: IconAperture,
  //   href: '/all-donation',
  // },
  // {
  //   navlabel: true,
  //   subheader: 'Manage Ads',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Add Ads',
  //   icon: IconAperture,
  //   href: '/addads',
  // },
  {
    id: uniqueId(),
    title: 'All Ads',
    icon: IconAperture,
    href: '/all-ngo',
  },
  // {
  //   navlabel: true,
  //   subheader: 'Manage News',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Add News',
  //   icon: IconAperture,
  //   href: '/addnews',
  // },
  {
    id: uniqueId(),
    title: 'All News',
    icon: IconAperture,
    href: '/all-oppo',
  },
  // {
  //   navlabel: true,
  //   subheader: 'Manage Blogs',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Add Blogs',
  //   icon: IconAperture,
  //   href: '/addblog',
  // },
  {
    id: uniqueId(),
    title: 'All Blogs',
    icon: IconAperture,
    href: '/all-blog',
  },
  // {
  //   navlabel: true,
  //   subheader: 'Manage Categories',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Add Categories',
  //   icon: IconAperture,
  //   href: '/addcategory',
  // },  
  // {
  //   id: uniqueId(),
  //   title: 'Add SubCategories',
  //   icon: IconAperture,
  //   href: '/addsubcategory',
  // }, 
  {
    id: uniqueId(),
    title: 'All Categories',
    icon: IconAperture,
    href: '/top-list',
  },
  {
    id: uniqueId(),
    title: 'All Packages',
    icon: IconAperture,
    href: '/allpackage',
  },
  {
    id: uniqueId(),
    title: 'Desk Management',
    icon: IconAperture,
    href: '/dm',
  },
  // {
  //   navlabel: true,
  //   subheader: 'Manage SubCategories',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'All SubCategories',
  //   icon: IconAperture,
  //   href: '/Allsubcategory',
  // },

];

export default Menuitems;
