
import img1 from '../../../assets/images/profile/user-1.jpg';
import img2 from '../../../assets/images/profile/user-2.jpg';
import img3 from '../../../assets/images/profile/user-3.jpg';
import img4 from '../../../assets/images/profile/user-4.jpg';

import icon1 from '../../../assets/images/svgs/icon-account.svg'
import icon2 from '../../../assets/images/svgs/icon-inbox.svg'
import icon3 from '../../../assets/images/svgs/icon-tasks.svg'

import ddIcon1 from '../../../assets/images/svgs/icon-dd-chat.svg'
import ddIcon2 from '../../../assets/images/svgs/icon-dd-cart.svg'
import ddIcon3 from '../../../assets/images/svgs/icon-dd-invoice.svg'
import ddIcon4 from '../../../assets/images/svgs/icon-dd-date.svg'
import ddIcon5 from '../../../assets/images/svgs/icon-dd-mobile.svg'
import ddIcon6 from '../../../assets/images/svgs/icon-dd-lifebuoy.svg'
import ddIcon7 from '../../../assets/images/svgs/icon-dd-message-box.svg'
import ddIcon8 from '../../../assets/images/svgs/icon-dd-application.svg'

// normalize imported image objects to URLs for runtime usage (works in CRA and Next.js)
const img1Url = img1?.src ?? img1;
const img2Url = img2?.src ?? img2;
const img3Url = img3?.src ?? img3;
const img4Url = img4?.src ?? img4;

const icon1Url = icon1?.src ?? icon1;
const icon2Url = icon2?.src ?? icon2;
const icon3Url = icon3?.src ?? icon3;

const ddIcon1Url = ddIcon1?.src ?? ddIcon1;
const ddIcon2Url = ddIcon2?.src ?? ddIcon2;
const ddIcon3Url = ddIcon3?.src ?? ddIcon3;
const ddIcon4Url = ddIcon4?.src ?? ddIcon4;
const ddIcon5Url = ddIcon5?.src ?? ddIcon5;
const ddIcon6Url = ddIcon6?.src ?? ddIcon6;
const ddIcon7Url = ddIcon7?.src ?? ddIcon7;
const ddIcon8Url = ddIcon8?.src ?? ddIcon8; 

//
// Notifications dropdown
//
const notifications = [
  {
    avatar: img1Url,
    title: 'Roman Joined the Team!',
    subtitle: 'Congratulate him',
  },
  {
    avatar: img2Url,
    title: 'New message received',
    subtitle: 'Salma sent you new message',
  },
  {
    avatar: img3Url,
    title: 'New Payment received',
    subtitle: 'Check your earnings',
  },
  {
    avatar: img4Url,
    title: 'Jolly completed tasks',
    subtitle: 'Assign her new tasks',
  },
  {
    avatar: img1Url,
    title: 'Roman Joined the Team!',
    subtitle: 'Congratulate him',
  },
  {
    avatar: img2Url,
    title: 'New message received',
    subtitle: 'Salma sent you new message',
  },
  {
    avatar: img3Url,
    title: 'New Payment received',
    subtitle: 'Check your earnings',
  },
  {
    avatar: img4Url,
    title: 'Jolly completed tasks',
    subtitle: 'Assign her new tasks',
  },
];

//
// Profile dropdown
//
const profile = [
  {
    href: '/user-profile',
    title: 'My Profile',
    subtitle: 'Account Settings',
    icon: icon1Url,
  },
  {
    href: '/apps/email',
    title: 'My Inbox',
    subtitle: 'Messages & Emails',
    icon: icon2Url,
  },
  {
    href: '/apps/notes',
    title: 'My Tasks',
    subtitle: 'To-do and Daily Tasks',
    icon: icon3Url,
  },
];

// apps dropdown

const appsLink = [
  {
    href: '/apps/chats',
    title: 'Chat Application',
    subtext: 'Messages & Emails',
    avatar: ddIcon1Url
  },
  {
    href: '/apps/ecommerce/shop',
    title: 'eCommerce App',
    subtext: 'Messages & Emails',
    avatar: ddIcon2Url
  },
  {
    href: '/',
    title: 'Invoice App',
    subtext: 'Messages & Emails',
    avatar: ddIcon3Url
  },
  {
    href: '/apps/calendar',
    title: 'Calendar App',
    subtext: 'Messages & Emails',
    avatar: ddIcon4Url
  },
  {
    href: '/apps/contacts',
    title: 'Contact Application',
    subtext: 'Account settings',
    avatar: ddIcon5Url
  },
  {
    href: '/apps/tickets',
    title: 'Tickets App',
    subtext: 'Account settings',
    avatar: ddIcon6Url
  },
  {
    href: '/apps/email',
    title: 'Email App',
    subtext: 'To-do and Daily tasks',
    avatar: ddIcon7Url
  },
  {
    href: '/',
    title: 'Kanban Application',
    subtext: 'To-do and Daily tasks',
    avatar: ddIcon8Url
  },
]

const pageLinks = [
  {
    href: '/pricing',
    title: 'Pricing Page'
  },
  {
    href: '/auth/login',
    title: 'Authentication Design'
  },
  {
    href: '/auth/register',
    title: 'Register Now'
  },
  {
    href: '/404',
    title: '404 Error Page'
  },
  {
    href: '/apps/notes',
    title: 'Notes App'
  },
  {
    href: '/user-profile',
    title: 'User Application'
  },
  {
    href: '/apps/blog/posts',
    title: 'Blog Design'
  },
  {
    href: '/apps/ecommerce/eco-checkout',
    title: 'Shopping Cart'
  },
]

export { notifications, profile, pageLinks, appsLink };
