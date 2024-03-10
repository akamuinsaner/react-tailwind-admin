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
        name: 'Display',
        path: '/display',
        icon: CalendarIcon,
        children: [
            {
                name: 'Stepper',
                path: '/display/stepper',
            },
            {
                name: 'List',
                path: '/display/list',
            },
            {
                name: 'Accordion',
                path: '/display/accordion',
            },
            {
                name: 'Tabs',
                path: '/display/tabs',
            }
        ]
    }
]