import React from 'react';
import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import { NavItemConfig } from '@/models';

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig: NavItemConfig[] = [
    {
        title: 'dashboard',
        path: '/dashboard/app',
        icon: getIcon(pieChart2Fill)
    },
    {
        title: 'User Settings',
        path: '/dashboard/user',
        icon: getIcon(peopleFill)
    },
    {
        title: 'Role',
        path: '/dashboard/products',
        icon: getIcon(shoppingBagFill)
    },
    {
        title: 'Department',
        path: '/404',
        icon: getIcon(fileTextFill)
    },
    {
        title: 'Companies',
        path: '/404',
        icon: getIcon(lockFill)
    },
    {
        title: 'Leave Type',
        path: '',
        icon: getIcon(personAddFill)
    },
    {
        title: 'Public Holidays',
        path: '/404',
        icon: getIcon(alertTriangleFill)
    },

    {
        title: 'Time in',
        path: '/404',
        icon: getIcon(alertTriangleFill)
    },
    {
        title: 'Leave Policy',
        path: '/404',
        icon: getIcon(alertTriangleFill)
    },
    {
        title: 'report',
        path: '/404',
        icon: getIcon(alertTriangleFill)
    }
];

export default sidebarConfig;
