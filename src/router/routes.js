import NewEmployee from 'pages/NewEmployee';
import EmployeeList from 'pages/EmployeeList/EmployeeList';
import Error from 'pages/Error/Error';

export const routes = [
    {
        path: '/',
        exact: true,
        component: NewEmployee
    },
    {
        path: '/employee-list',
        exact: true,
        component: EmployeeList
    },
    {
        path: '/*',
        exact: false,
        component: Error
    },
];
