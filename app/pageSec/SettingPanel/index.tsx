import { GlobalState, SIDEBARLOCALE, THEME } from '@/app/globalStore/state';
import DesertIcon from '@/app/utils/icons/DesertIcon';
import ForestIcon from '@/app/utils/icons/ForestIcon';
import SkyIcon from '@/app/utils/icons/SkyIcon';
import IconButton from '@/src/components/Button/IconButton';
import Divider from '@/src/components/Divider';
import Drawer from '@/src/components/Drawer';
import Flex from '@/src/components/Flex';
import Switch from '@/src/components/Switch';
import Text from '@/src/components/Text';
import Tooltip from '@/src/components/Tooltip';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { useContext } from 'react';
import { flushSync } from 'react-dom';
import { twMerge } from 'tailwind-merge';
import { GlobalContext } from '../../globalContext';
import Layout1 from './layouts/layout1';
import Layout2 from './layouts/layout2';
import SideBar from './sideBar';

const THEMECONFIG = [
    { theme: THEME['light'], icon: <SunIcon /> },
    { theme: THEME['dark'], icon: <MoonIcon /> },
    { theme: THEME['forest'], icon: <ForestIcon /> },
    { theme: THEME['desert'], icon: <DesertIcon /> },
    { theme: THEME['sky'], icon: <SkyIcon /> },
];

const SettingPanel = () => {
    const context = useContext(GlobalContext);
    const {
        settingPanelOpen,
        setSettingPanelOpen,
        settingOptions,
        setSettingOptions,
    } = context;
    const closePanel = () => {
        setSettingPanelOpen(false);
    };

    const changeSettingOption = (
        key: keyof GlobalState['settingOptions'],
        value: any,
    ) => {
        setSettingOptions({
            ...settingOptions,
            [key]: value,
        });
    };

    const onThemelick = theme => e => {
        flushSync(() => {
            if (!document.startViewTransition) {
                setSettingOptions({ ...settingOptions, theme });
                return;
            }

            const transition = document.startViewTransition(() => {
                setSettingOptions({ ...settingOptions, theme });
            });
            const pageX = e.pageX,
                pageY = e.pageY;
            const endRadius = Math.hypot(
                Math.max(pageX, innerWidth - pageX),
                Math.max(pageY, innerHeight - pageY),
            );
            transition.ready.then(() => {
                document.documentElement.animate(
                    {
                        clipPath: [
                            `circle(0 at ${pageX}px ${pageY}px)`,
                            `circle(${endRadius}px at ${pageX}px ${pageY}px)`,
                        ],
                    },
                    {
                        duration: 500,
                        easing: 'ease-in',
                        pseudoElement: '::view-transition-new(root)',
                    },
                );
            });
        });
    };

    return (
        <Drawer
            className='w-80'
            open={settingPanelOpen}
            closable
            onClose={closePanel}
        >
            <Flex direction='column' gap='medium' className='p-4'>
                <Text>Setting</Text>
                <Divider gap={0} />
                <Text>SideBar</Text>
                <Flex justify='center' gap='large'>
                    <SideBar
                        active={
                            settingOptions.sideBarLocale ===
                            SIDEBARLOCALE['left']
                        }
                        position={SIDEBARLOCALE['left']}
                        onClick={() =>
                            changeSettingOption(
                                'sideBarLocale',
                                SIDEBARLOCALE['left'],
                            )
                        }
                    />
                    <SideBar
                        active={
                            settingOptions.sideBarLocale ===
                            SIDEBARLOCALE['right']
                        }
                        position={SIDEBARLOCALE['right']}
                        onClick={() =>
                            changeSettingOption(
                                'sideBarLocale',
                                SIDEBARLOCALE['right'],
                            )
                        }
                    />
                </Flex>
                <Divider gap={0} />
                <Text>Themes</Text>
                <Flex gap='medium'>
                    {THEMECONFIG.map(item => (
                        <Tooltip title={item.theme} placement='bottom' arrow>
                            <IconButton
                                className={
                                    item.theme === settingOptions.theme
                                        ? 'text-primary'
                                        : ''
                                }
                                onClick={onThemelick(item.theme)}
                            >
                                {item.icon}
                            </IconButton>
                        </Tooltip>
                    ))}
                </Flex>
                <Divider gap={0} />
                <Text>System</Text>
                <Switch
                    checked={settingOptions.grayMode}
                    onChange={e =>
                        changeSettingOption('grayMode', e.target.checked)
                    }
                >
                    Gray Mode
                </Switch>
                <Switch
                    checked={settingOptions.blindMode}
                    onChange={e =>
                        changeSettingOption('blindMode', e.target.checked)
                    }
                >
                    Blind Mode
                </Switch>
                <Switch
                    checked={settingOptions.footerVisible}
                    onChange={e =>
                        changeSettingOption('footerVisible', e.target.checked)
                    }
                >
                    Footer Visible
                </Switch>
                <Switch
                    checked={settingOptions.navVisible}
                    onChange={e =>
                        changeSettingOption('navVisible', e.target.checked)
                    }
                >
                    Nav Visible
                </Switch>
                <Switch
                    checked={settingOptions.fullScreen}
                    onChange={e =>
                        changeSettingOption('fullScreen', e.target.checked)
                    }
                >
                    Full Screen
                </Switch>
                <Switch
                    checked={settingOptions.rtl}
                    onChange={e => changeSettingOption('rtl', e.target.checked)}
                >
                    RTL
                </Switch>
            </Flex>
        </Drawer>
    );
};

export default SettingPanel;
