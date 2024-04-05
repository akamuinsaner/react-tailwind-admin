import HomeIcon from '@heroicons/react/24/solid/HomeIcon';
import {
    CalendarIcon,
    ChartBarIcon,
    Squares2X2Icon,
    ExclamationTriangleIcon,
    CheckCircleIcon,
} from '@heroicons/react/24/outline';

export type Config = {
    name: string;
    path: string;
    icon?: any;
    children?: Config[];
};

export const config: Config[] = [
    {
        name: 'Home',
        path: '/',
        icon: HomeIcon,
    },
    {
        name: 'Components',
        path: '/components/dataDisplay/accordion',
        icon: CalendarIcon,
        children: [
            {
                name: 'Display',
                path: '/components/dataDisplay/accordion',
                children: [
                    {
                        name: 'Accordion',
                        path: '/components/dataDisplay/accordion',
                    },
                    {
                        name: 'Badge',
                        path: '/components/dataDisplay/badge',
                    },
                    {
                        name: 'Carousel',
                        path: '/components/dataDisplay/carousel',
                    },
                    {
                        name: 'DataTable',
                        path: '/components/dataDisplay/dataTable',
                    },
                    {
                        name: 'Image',
                        path: '/components/dataDisplay/image',
                    },
                    {
                        name: 'List',
                        path: '/components/dataDisplay/list',
                    },
                    {
                        name: 'Popover',
                        path: '/components/dataDisplay/popover',
                    },

                    {
                        name: 'Table',
                        path: '/components/dataDisplay/table',
                    },
                    {
                        name: 'Tabs',
                        path: '/components/dataDisplay/tabs',
                    },
                    {
                        name: 'Timeline',
                        path: '/components/dataDisplay/timeline',
                    },
                    {
                        name: 'Tooltip',
                        path: '/components/dataDisplay/tooltip',
                    },
                ],
            },
            {
                name: 'Data Input',
                path: '/components/dataInput/button',
                children: [
                    {
                        name: 'Button',
                        path: '/components/dataInput/button',
                    },
                    {
                        name: 'Cascader',
                        path: '/components/dataInput/cascader',
                    },
                    {
                        name: 'Checkbox',
                        path: '/components/dataInput/checkbox',
                    },
                    {
                        name: 'DatePicker',
                        path: '/components/dataInput/datePicker',
                    },
                    {
                        name: 'Form',
                        path: '/components/dataInput/form',
                    },
                    {
                        name: 'Input',
                        path: '/components/dataInput/input',
                    },
                    {
                        name: 'Radio',
                        path: '/components/dataInput/radio',
                    },
                    {
                        name: 'Select',
                        path: '/components/dataInput/select',
                    },
                    {
                        name: 'Slider',
                        path: '/components/dataInput/slider',
                    },
                    {
                        name: 'Switch',
                        path: '/components/dataInput/switch',
                    },
                    {
                        name: 'TreeSelect',
                        path: '/components/dataInput/treeSelect',
                    },
                ],
            },
            {
                name: 'Feedback',
                path: '/components/feedback/alert',
                children: [
                    {
                        name: 'Alert',
                        path: '/components/feedback/alert',
                    },
                    {
                        name: 'Drawer',
                        path: '/components/feedback/drawer',
                    },
                    {
                        name: 'Message',
                        path: '/components/feedback/message',
                    },
                    {
                        name: 'Modal',
                        path: '/components/feedback/modal',
                    },
                    {
                        name: 'Progress',
                        path: '/components/feedback/progress',
                    },
                    {
                        name: 'Skeleton',
                        path: '/components/feedback/skeleton',
                    },
                ],
            },
            {
                name: 'Layout',
                path: '/components/layout/columns',
                children: [
                    {
                        name: 'Columns',
                        path: '/components/layout/columns',
                    },
                    {
                        name: 'Divider',
                        path: '/components/layout/divider',
                    },
                    {
                        name: 'Flex',
                        path: '/components/layout/flex',
                    },
                    {
                        name: 'Grid',
                        path: '/components/layout/grid',
                    },
                ],
            },
            {
                name: 'Navigation',
                path: '/components/navigation/dropdown',
                children: [
                    {
                        name: 'Dropdown',
                        path: '/components/navigation/dropdown',
                    },
                    {
                        name: 'Segment',
                        path: '/components/navigation/segment',
                    },
                    {
                        name: 'Stepper',
                        path: '/components/navigation/stepper',
                    },
                    {
                        name: 'Pagination',
                        path: '/components/navigation/pagination',
                    },
                ],
            },
        ],
    },
    {
        name: 'Common UI',
        path: '/commonUI/application/header',
        icon: Squares2X2Icon,
        children: [
            {
                name: 'Application',
                path: '/commonUI/application/header',
                children: [
                    {
                        name: 'Header',
                        path: '/commonUI/application/header',
                    },
                    {
                        name: 'Footer',
                        path: '/commonUI/application/footer',
                    },
                ],
            },
        ],
    },
    {
        name: 'UI features',
        path: '/uiFeatures/carousel',
        icon: Squares2X2Icon,
        children: [
            {
                name: 'Carousel',
                path: '/uiFeatures/carousel',
            },
            {
                name: 'Datatable',
                path: '/uiFeatures/dataTable',
            },
            {
                name: 'Waterfall',
                path: '/uiFeatures/waterfall',
            },
        ],
    },
    {
        name: 'Animation',
        path: '/animation/basic',
        icon: ChartBarIcon,
        children: [
            {
                name: 'Basic',
                path: '/animation/basic',
            },
        ],
    },
    {
        name: 'Charts',
        path: '/charts/rechart',
        icon: ChartBarIcon,
        children: [
            {
                name: 'Rechart',
                path: '/charts/rechart',
            },
            {
                name: 'Chartjs',
                path: '/charts/chartjs',
            },
        ],
    },
    {
        name: 'Results',
        path: '/results/success',
        icon: CheckCircleIcon,
        children: [
            {
                name: 'success',
                path: '/results/success',
            },
            {
                name: 'info',
                path: '/results/info',
            },
            {
                name: 'warning',
                path: '/results/warning',
            },
            {
                name: 'danger',
                path: '/results/danger',
            },
        ],
    },
    {
        name: 'Exceptions',
        path: '/exceptions/403',
        icon: ExclamationTriangleIcon,
        children: [
            {
                name: '403',
                path: '/exceptions/403',
            },
            {
                name: '404',
                path: '/exceptions/404',
            },
            {
                name: '500',
                path: '/exceptions/500',
            },
        ],
    },
];
