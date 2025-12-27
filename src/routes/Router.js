import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))
const AddCategory = Loadable(lazy(() => import('../views/sample-page/AddCategory')))
const AddSubcategory = Loadable(lazy(() => import('../views/sample-page/AddSubcategory')))
const TaxHsn = Loadable(lazy(() => import('../views/sample-page/TaxHsn')))
const AddProduct = Loadable(lazy(() => import('../views/sample-page/AddProduct')))
const AddNews = Loadable(lazy(() => import('../views/sample-page/AddNews')))
const AddBlog = Loadable(lazy(() => import('../views/sample-page/AddBlog')))
const AddAds = Loadable(lazy(() => import('../views/sample-page/AddAds')))
const AddUser = Loadable(lazy(() => import('../views/sample-page/AddUser')))
const AddDesk = Loadable(lazy(() => import('../views/sample-page/AddDesk')))
const DeskManagement = Loadable(lazy(() => import('../views/sample-page/DeskManagement')))
const AllOpportunities = Loadable(lazy(() => import('../views/sample-page/AllOpportunities')))
const ManageBlog = Loadable(lazy(() => import('../views/sample-page/ManageBlog')))
const AllBusinesses = Loadable(lazy(() => import('../views/sample-page/AllProduct')))
const AddPackage = Loadable(lazy(() => import('../views/sample-page/AddPackage')))
const Allpackage = Loadable(lazy(() => import('../views/sample-page/AllPackage')))
const AllDonation = Loadable(lazy(() => import('../views/sample-page/AllDonation')))
const AllNgo = Loadable(lazy(() => import('../views/sample-page/AllNgo')))
const AllUser = Loadable(lazy(() => import('../views/sample-page/AllUser')))
const AllVolunteer = Loadable(lazy(() => import('../views/sample-page/AllVolunteer')))
const AllGallery = Loadable(lazy(() => import('../views/sample-page/AllGallery')))
const TopList = Loadable(lazy(() => import('../views/sample-page/TopList')))
const VerifyNgo = Loadable(lazy(() => import('../views/sample-page/VerifyNgo')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));


const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/auth/login" /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },
      { path: '/addcategory', exact: true, element: <AddCategory /> },
      { path: '/addsubcategory', exact: true, element: <AddSubcategory /> },
      { path: '/taxhsn', exact: true, element: <TaxHsn /> },
      { path: '/addproduct', exact: true, element: <AddProduct /> },
      { path: '/addnews', exact: true, element: <AddNews /> },
      { path: '/addblog', exact: true, element: <AddBlog /> },
      { path: '/adduser', exact: true, element: <AddUser /> },
      { path: '/addads', exact: true, element: <AddAds /> },
      { path: '/adddesk', exact: true, element: <AddDesk /> },
      { path: '/addpackage', exact: true, element: <AddPackage /> },
      { path: '/allpackage', exact: true, element: <Allpackage /> },
      { path: '/dm', exact: true, element: <DeskManagement /> },
      { path: '/all-oppo', exact: true, element: <AllOpportunities /> },
      { path: '/all-blog', exact: true, element: <ManageBlog /> },
      { path: '/all-business', exact: true, element: <AllBusinesses /> },
      { path: '/all-donation', exact: true, element: <AllDonation /> },
      { path: '/all-ngo', exact: true, element: <AllNgo /> },
      { path: '/all-user', exact: true, element: <AllUser/> },
      { path: '/all-volu', exact: true, element: <AllVolunteer /> },
      { path: '/all-gallery', exact: true, element: <AllGallery /> },
      { path: '/top-list', exact: true, element: <TopList /> },
      { path: '/verify-ngo', exact: true, element: <VerifyNgo /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
