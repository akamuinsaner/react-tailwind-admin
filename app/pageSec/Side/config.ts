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
                name: 'List',
                path: '/components/list',
            },
            {
                name: 'Stepper',
                path: '/components/stepper',
            },

            {
                name: 'Tabs',
                path: '/components/tabs',
            }
        ]
    }
]