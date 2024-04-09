import { GlobalState } from '@/app/globalStore/state';
import Divider from '@/src/components/Divider';
import Drawer from '@/src/components/Drawer';
import Flex from '@/src/components/Flex';
import Switch from '@/src/components/Switch';
import Text from '@/src/components/Text';
import { useContext } from 'react';
import { GlobalContext } from '../../globalContext';
import Layout1 from './layouts/layout1';
import Layout2 from './layouts/layout2';

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
