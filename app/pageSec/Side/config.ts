import HomeIcon from '@heroicons/react/24/solid/HomeIcon';
import {
    CalendarIcon,
    ChartBarIcon,
    Squares2X2Icon,
    ExclamationTriangleIcon,
    CheckCircleIcon,
    ShieldCheckIcon,
    GifIcon,
    Bars3BottomLeftIcon,
} from '@heroicons/react/24/outline';

export type Config = {
    id: string;
    name: string;
    path: string;
    icon?: any;
    parentId?: string;
    children?: Config[];
};

export const config: Config[] = [
    {
        id: '/home',
        name: 'Home',
        path: '/home',
        icon: HomeIcon,
    },
    {
        id: '/components',
        name: 'Components',
        path: '/components',
        icon: CalendarIcon,
        children: [
            {
                id: '/components/dataDisplay',
                name: 'Display',
                path: '/components/dataDisplay',
                children: [
                    {
                        id: '/components/dataDisplay/accordion',
                        name: 'Accordion',
                        path: '/components/dataDisplay/accordion',
                    },
                    {
                        id: '/components/dataDisplay/badge',
                        name: 'Badge',
                        path: '/components/dataDisplay/badge',
                    },
                    {
                        id: '/components/dataDisplay/carousel',
                        name: 'Carousel',
                        path: '/components/dataDisplay/carousel',
                    },
                    {
                        id: '/components/dataDisplay/dataTable',
                        name: 'DataTable',
                        path: '/components/dataDisplay/dataTable',
                    },
                    {
                        id: '/components/dataDisplay/image',
                        name: 'Image',
                        path: '/components/dataDisplay/image',
                    },
                    {
                        id: '/components/dataDisplay/list',
                        name: 'List',
                        path: '/components/dataDisplay/list',
                    },
                    {
                        id: '/components/dataDisplay/popover',
                        name: 'Popover',
                        path: '/components/dataDisplay/popover',
                    },

                    {
                        id: '/components/dataDisplay/table',
                        name: 'Table',
                        path: '/components/dataDisplay/table',
                    },
                    {
                        id: '/components/dataDisplay/tabs',
                        name: 'Tabs',
                        path: '/components/dataDisplay/tabs',
                    },
                    {
                        id: '/components/dataDisplay/timeline',
                        name: 'Timeline',
                        path: '/components/dataDisplay/timeline',
                    },
                    {
                        id: '/components/dataDisplay/tooltip',
                        name: 'Tooltip',
                        path: '/components/dataDisplay/tooltip',
                    },
                ],
            },
            {
                id: '/components/dataInput',
                name: 'Data Input',
                path: '/components/dataInput',
                children: [
                    {
                        id: '/components/dataInput/button',
                        name: 'Button',
                        path: '/components/dataInput/button',
                    },
                    {
                        id: '/components/dataInput/cascader',
                        name: 'Cascader',
                        path: '/components/dataInput/cascader',
                    },
                    {
                        id: '/components/dataInput/checkbox',
                        name: 'Checkbox',
                        path: '/components/dataInput/checkbox',
                    },
                    {
                        id: '/components/dataInput/datePicker',
                        name: 'DatePicker',
                        path: '/components/dataInput/datePicker',
                    },
                    {
                        id: '/components/dataInput/form',
                        name: 'Form',
                        path: '/components/dataInput/form',
                    },
                    {
                        id: '/components/dataInput/input',
                        name: 'Input',
                        path: '/components/dataInput/input',
                    },
                    {
                        id: '/components/dataInput/radio',
                        name: 'Radio',
                        path: '/components/dataInput/radio',
                    },
                    {
                        id: '/components/dataInput/select',
                        name: 'Select',
                        path: '/components/dataInput/select',
                    },
                    {
                        id: '/components/dataInput/slider',
                        name: 'Slider',
                        path: '/components/dataInput/slider',
                    },
                    {
                        id: '/components/dataInput/switch',
                        name: 'Switch',
                        path: '/components/dataInput/switch',
                    },
                    {
                        id: '/components/dataInput/treeSelect',
                        name: 'TreeSelect',
                        path: '/components/dataInput/treeSelect',
                    },
                ],
            },
            {
                id: '/components/feedback',
                name: 'Feedback',
                path: '/components/feedback',
                children: [
                    {
                        id: '/components/feedback/alert',
                        name: 'Alert',
                        path: '/components/feedback/alert',
                    },
                    {
                        id: '/components/feedback/drawer',
                        name: 'Drawer',
                        path: '/components/feedback/drawer',
                    },
                    {
                        id: '/components/feedback/message',
                        name: 'Message',
                        path: '/components/feedback/message',
                    },
                    {
                        id: '/components/feedback/modal',
                        name: 'Modal',
                        path: '/components/feedback/modal',
                    },
                    {
                        id: '/components/feedback/progress',
                        name: 'Progress',
                        path: '/components/feedback/progress',
                    },
                    {
                        id: '/components/feedback/skeleton',
                        name: 'Skeleton',
                        path: '/components/feedback/skeleton',
                    },
                ],
            },
            {
                id: '/components/layout',
                name: 'Layout',
                path: '/components/layout',
                children: [
                    {
                        id: '/components/layout/columns',
                        name: 'Columns',
                        path: '/components/layout/columns',
                    },
                    {
                        id: '/components/layout/divider',
                        name: 'Divider',
                        path: '/components/layout/divider',
                    },
                    {
                        id: '/components/layout/flex',
                        name: 'Flex',
                        path: '/components/layout/flex',
                    },
                    {
                        id: '/components/layout/grid',
                        name: 'Grid',
                        path: '/components/layout/grid',
                    },
                ],
            },
            {
                id: '/components/navigation',
                name: 'Navigation',
                path: '/components/navigation',
                children: [
                    {
                        id: '/components/navigation/dropdown',
                        name: 'Dropdown',
                        path: '/components/navigation/dropdown',
                    },
                    {
                        id: '/components/navigation/segment',
                        name: 'Segment',
                        path: '/components/navigation/segment',
                    },
                    {
                        id: '/components/navigation/stepper',
                        name: 'Stepper',
                        path: '/components/navigation/stepper',
                    },
                    {
                        id: '/components/navigation/pagination',
                        name: 'Pagination',
                        path: '/components/navigation/pagination',
                    },
                ],
            },
        ],
    },
    {
        id: '/commonUI',
        name: 'Common UI',
        path: '/commonUI',
        icon: Squares2X2Icon,
        children: [
            {
                id: '/commonUI/application',
                name: 'Application',
                path: '/commonUI/application',
                children: [
                    {
                        id: '/commonUI/application/header',
                        name: 'Header',
                        path: '/commonUI/application/header',
                    },
                    {
                        id: '/commonUI/application/footer',
                        name: 'Footer',
                        path: '/commonUI/application/footer',
                    },
                ],
            },
        ],
    },
    {
        id: '/uiFeatures',
        name: 'UI features',
        path: '/uiFeatures',
        icon: Squares2X2Icon,
        children: [
            {
                id: '/uiFeatures/carousel',
                name: 'Carousel',
                path: '/uiFeatures/carousel',
            },
            {
                id: '/uiFeatures/dataTable',
                name: 'Datatable',
                path: '/uiFeatures/dataTable',
            },
            {
                id: '/uiFeatures/waterfall',
                name: 'Waterfall',
                path: '/uiFeatures/waterfall',
            },
        ],
    },
    {
        id: '/animation',
        name: 'Animation',
        path: '/animation',
        icon: GifIcon,
        children: [
            {
                id: '/animation/basic',
                name: 'Basic',
                path: '/animation/basic',
            },
        ],
    },
    {
        id: '/charts',
        name: 'Charts',
        path: '/charts',
        icon: ChartBarIcon,
        children: [
            {
                id: '/charts/rechart',
                name: 'Rechart',
                path: '/charts/rechart',
            },
            {
                id: '/charts/chartjs',
                name: 'Chartjs',
                path: '/charts/chartjs',
            },
        ],
    },
    {
        id: '/auth',
        name: 'Auth',
        path: '/auth',
        icon: ShieldCheckIcon,
        children: [
            {
                id: '/auth/login',
                name: 'Login',
                path: '/auth/login',
            },
            {
                id: '/auth/signUp',
                name: 'Sign Up',
                path: '/auth/signUp',
            },
            {
                id: '/auth/password',
                name: 'Password',
                path: '/auth/password',
            },
        ],
    },
    {
        id: '/results',
        name: 'Results',
        path: '/results',
        icon: CheckCircleIcon,
        children: [
            {
                id: '/results/success',
                name: 'Success',
                path: '/results/success',
            },
            {
                id: '/results/info',
                name: 'Info',
                path: '/results/info',
            },
            {
                id: '/results/warning',
                name: 'Warning',
                path: '/results/warning',
            },
            {
                id: '/results/danger',
                name: 'Danger',
                path: '/results/danger',
            },
        ],
    },
    {
        id: '/exceptions',
        name: 'Exceptions',
        path: '/exceptions',
        icon: ExclamationTriangleIcon,
        children: [
            {
                id: '/exceptions/403',
                name: '403',
                path: '/exceptions/403',
            },
            {
                id: '/exceptions/404',
                name: '404',
                path: '/exceptions/404',
            },
            {
                id: '/exceptions/500',
                name: '500',
                path: '/exceptions/500',
            },
        ],
    },
    {
        id: '/hirarchy',
        name: 'Hirarchy',
        path: '/hirarchy',
        icon: Bars3BottomLeftIcon,
        children: [
            {
                id: '/hirarchy/1',
                name: 'Hirarchy/1',
                path: '/hirarchy/1',
                children: [
                    {
                        id: '/hirarchy/1/1',
                        name: 'Hirarchy/1/1',
                        path: '/hirarchy/1/1',
                    },
                    {
                        id: '/hirarchy/1/2',
                        name: 'Hirarchy/1/2',
                        path: '/hirarchy/1/2',
                    },
                ],
            },
            {
                id: '/hirarchy/2',
                name: 'Hirarchy/2',
                path: '/hirarchy/2',
                children: [
                    {
                        id: '/hirarchy/2/1',
                        name: 'Hirarchy/2/1',
                        path: '/hirarchy/2/1',
                    },
                    {
                        id: '/hirarchy/2/2',
                        name: 'Hirarchy/2/2',
                        path: '/hirarchy/2/2',
                    },
                ],
            },
        ],
    },
];
