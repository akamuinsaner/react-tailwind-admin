import { createContext } from 'react';
import {
    RTTImelineLocate,
    RTTimelineTokenColor,
    RTTImelineVariant,
} from './index';

export type RTTimelineContext = {
    locate?: RTTImelineLocate;
    color: RTTimelineTokenColor;
    variant: RTTImelineVariant;
};

export const TimelineContext = createContext<RTTimelineContext>(null);
