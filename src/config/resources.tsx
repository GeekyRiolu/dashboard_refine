import { DashboardOutlined, ProjectOutlined, ShopOutlined } from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

export const resources: IResourceItem[] = [
    {
        name: 'dashboard',
        list:'/',
        meta:{
            label:'Dashboard',
            icon:<DashboardOutlined />
        }
    },
    {
        name: 'hospital',
        list: '/hospital',
        show: '/hospital/:id',
        create: '/hospital/new',
        edit: 'hospital/edit/:id',
        meta:{
            label:'Hospital',
            icon: <ShopOutlined />
        }
    },
    {
        name: 'tasks',
        list: '/tasks',
        create: '/tasks/new',
        edit: 'tasks/edit/:id',
        meta:{
            label:'Tasks',
            icon: <ProjectOutlined />
        }
    }
]
