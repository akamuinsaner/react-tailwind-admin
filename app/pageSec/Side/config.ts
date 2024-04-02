import HomeIcon from '@heroicons/react/24/solid/HomeIcon';
import {
    CalendarIcon,
    ChartBarIcon,
    Squares2X2Icon,
} from '@heroicons/react/24/solid';

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
        path: '/components',
        icon: CalendarIcon,
        children: [
            {
                name: 'Display',
                path: '/components/dataDisplay',
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
                path: '/components/dataInput',
                children: [
                    {
                        name: 'Button',
                        path: '/components/dataInput/button',
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
                ],
            },
            {
                name: 'Feedback',
                path: '/components/feedback',
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
                        name: 'Modal',
                        path: '/components/feedback/modal',
                    },
                ],
            },
            {
                name: 'Layout',
                path: '/components/layout',
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
                path: '/components/navigation',
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
        path: '/commonUI',
        icon: Squares2X2Icon,
        children: [
            {
                name: 'Application',
                path: '/commonUI/application',
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
        path: '/uiFeatures',
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
        path: '/animation',
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
        path: '/charts',
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
];
