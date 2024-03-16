import HomeIcon from '@heroicons/react/24/solid/HomeIcon';
import CalendarIcon from '@heroicons/react/24/solid/CalendarIcon';

export type Config = {
    name: string;
    path: string;
    icon?: any;
    children?: Config[]
}

export const config: Config[] = [
    {
        name: 'Home',
        path: '/',
        icon: HomeIcon
    },
    {
        name: 'Components',
        path: '/components',
        icon: CalendarIcon,
        children: [
            {
                name: 'Accordion',
                path: '/components/accordion',
            },
            {
                name: 'Alert',
                path: '/components/alert',
            },
            {
                name: 'Button',
                path: '/components/button',
            },
            {
                name: 'Checkbox',
                path: '/components/checkbox',
            },
            {
                name: 'DatePicker',
                path: '/components/datePicker',
            },
            {
                name: 'Dropdown',
                path: '/components/dropdown',
            },
            {
                name: 'Input',
                path: '/components/input',
            },
            {
                name: 'List',
                path: '/components/list',
            },
            {
                name: 'Modal',
                path: '/components/modal',
            },
            {
                name: 'Radio',
                path: '/components/radio',
            },
            {
                name: 'Select',
                path: '/components/select',
            },
            {
                name: 'Stepper',
                path: '/components/stepper',
            },
            {
                name: 'Switch',
                path: '/components/switch',
            },
            {
                name: 'Tabs',
                path: '/components/tabs',
            }
        ]
    }
]