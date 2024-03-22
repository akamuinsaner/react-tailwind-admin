import { RTPlacement } from '@/src/types/placement';
import { CSSProperties } from 'react';

export const computePlacementStyle = (
    anchor: HTMLElement,
    placement: RTPlacement,
    popup: HTMLDivElement,
): CSSProperties => {
    let offset = 8;
    if (!anchor) return {};
    if (!popup) return {};
    const position = anchor.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    const scrollElement =
        document.scrollingElement || document.documentElement || document.body;
    const scrollTop = scrollElement.scrollTop;
    if (placement === 'bottom-start') {
        return {
            inset: `
                ${position.y + position.height + offset + scrollTop}px 
                auto 
                auto 
                ${position.x}px`,
        };
    }
    if (placement === 'bottom') {
        return {
            inset: `
                ${position.y + position.height + offset + scrollTop}px 
                auto 
                auto 
                ${position.width / 2 + position.x - popupRect.width / 2}px`,
        };
    }
    if (placement === 'bottom-end') {
        return {
            inset: `
                ${position.y + position.height + offset + scrollTop}px 
                auto 
                auto 
                ${position.width + position.x - popupRect.width}px`,
        };
    }
    if (placement === 'top-start') {
        return {
            inset: `
                auto
                auto 
                ${window.innerHeight - position.top + offset - scrollTop}px
                ${position.x}px`,
        };
    }
    if (placement === 'top') {
        return {
            inset: `
                auto
                auto 
                ${window.innerHeight - position.top + offset - scrollTop}px
                ${position.width / 2 + position.x - popupRect.width / 2}px`,
        };
    }
    if (placement === 'top-end') {
        return {
            inset: `
                auto
                auto 
                ${window.innerHeight - position.top + offset - scrollTop}px
                ${position.width + position.x - popupRect.width}px`,
        };
    }
    if (placement === 'left-start') {
        return {
            inset: `
            ${position.y + scrollTop}px 
            ${window.innerWidth - position.right + position.width + offset}px
            auto 
            auto`,
        };
    }
    if (placement === 'left') {
        return {
            inset: `
            ${position.y + position.height / 2 - popupRect.height / 2 + scrollTop}px 
            ${window.innerWidth - position.right + position.width + offset}px
            auto
            auto`,
        };
    }
    if (placement === 'left-end') {
        return {
            inset: `
            auto
            ${window.innerWidth - position.right + position.width + offset}px
            ${window.innerHeight - position.bottom - scrollTop}px  
            auto`,
        };
    }
    if (placement === 'right-start') {
        return {
            inset: `
                ${position.y + scrollTop}px 
                auto 
                auto 
                ${position.x + position.width + offset}px`,
        };
    }
    if (placement === 'right') {
        return {
            inset: `
                ${position.y + position.height / 2 - popupRect.height / 2 + scrollTop}px 
                auto 
                auto 
                ${position.x + position.width + offset}px`,
        };
    }
    if (placement === 'right-end') {
        return {
            inset: `
                auto 
                auto 
                ${window.innerHeight - position.bottom - scrollTop}px  
                ${position.x + position.width + offset}px`,
        };
    }
    return {
        inset: `
            ${position.y + position.height + offset + scrollTop}px 
            auto 
            auto 
            ${position.x}px`,
    };
};

export const computeArrowStyle = (
    anchor: HTMLElement,
    placement: RTPlacement,
    arrow: boolean,
): CSSProperties => {
    if (!anchor) return {};
    if (!arrow) return { display: 'none' };
    const position = anchor.getBoundingClientRect();
    if (placement === 'bottom-start')
        return {
            top: '-4px',
            left: `${Math.min(16, position.width / 2)}px`,
            transform: `rotate(45deg)`,
        };
    if (placement === 'bottom')
        return {
            top: '-4px',
            left: `50%`,
            transform: `translate(-50%, 0) rotate(45deg)`,
        };
    if (placement === 'bottom-end')
        return {
            top: '-4px',
            right: `${Math.min(16, position.width / 2)}px`,
            transform: `rotate(45deg)`,
        };
    if (placement === 'top-start')
        return {
            top: 'calc(100% - 8px)',
            left: `${Math.min(16, position.width / 2)}px`,
            transform: `rotate(45deg)`,
        };
    if (placement === 'top')
        return {
            top: 'calc(100% - 8px)',
            left: `50%`,
            transform: `translate(-50%, 0) rotate(45deg)`,
        };
    if (placement === 'top-end')
        return {
            top: 'calc(100% - 8px)',
            right: `${Math.min(16, position.width / 2)}px`,
            transform: `rotate(45deg)`,
        };
    if (placement === 'left-start')
        return {
            right: '-4px',
            top: `${Math.min(16, position.height / 2)}px`,
            transform: `rotate(45deg)`,
        };
    if (placement === 'left')
        return {
            right: '-4px',
            top: `50%`,
            transform: `translate(0, -50%) rotate(45deg)`,
        };
    if (placement === 'left-end')
        return {
            right: '-4px',
            bottom: `${Math.min(16, position.height / 2)}px`,
            transform: `rotate(45deg)`,
        };
    if (placement === 'right-start')
        return {
            left: '-4px',
            top: `${Math.min(16, position.height / 2)}px`,
            transform: `rotate(45deg)`,
        };
    if (placement === 'right')
        return {
            left: '-4px',
            top: `50%`,
            transform: `translate(0, -50%) rotate(45deg)`,
        };
    if (placement === 'right-end')
        return {
            left: '-4px',
            bottom: `${Math.min(16, position.height / 2)}px`,
            transform: `rotate(45deg)`,
        };
    return {};
};

export const getInsetData = (
    anchor: HTMLElement,
    placement: RTPlacement,
    popup: HTMLDivElement,
): {
    top: number | 'auto';
    right: number | 'auto';
    bottom: number | 'auto';
    left: number | 'auto';
} => {
    let offset = 8;
    if (!anchor) return null;
    if (!popup) return null;
    const position = anchor.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    const scrollElement =
        document.scrollingElement || document.documentElement || document.body;
    const scrollTop = scrollElement.scrollTop;
    if (placement === 'bottom-start') {
        return {
            top: position.y + position.height + offset + scrollTop,
            right: 'auto',
            bottom: 'auto',
            left: position.x,
        };
    }
    if (placement === 'bottom') {
        return {
            top: position.y + position.height + offset + scrollTop,
            right: 'auto',
            bottom: 'auto',
            left: position.width / 2 + position.x - popupRect.width / 2,
        };
    }
    if (placement === 'bottom-end') {
        return {
            top: position.y + position.height + offset + scrollTop,
            right: 'auto',
            bottom: 'auto',
            left: position.width + position.x - popupRect.width,
        };
    }
    if (placement === 'top-start') {
        return {
            top: 'auto',
            right: 'auto',
            bottom: window.innerHeight - position.top + offset - scrollTop,
            left: position.x,
        };
    }
    if (placement === 'top') {
        return {
            top: 'auto',
            right: 'auto',
            bottom: window.innerHeight - position.top + offset - scrollTop,
            left: position.width / 2 + position.x - popupRect.width / 2,
        };
    }
    if (placement === 'top-end') {
        return {
            top: 'auto',
            right: 'auto',
            bottom: window.innerHeight - position.top + offset - scrollTop,
            left: position.width + position.x - popupRect.width,
        };
    }
    if (placement === 'left-start') {
        return {
            top: position.y + scrollTop,
            right: window.innerWidth - position.right + position.width + offset,
            bottom: 'auto',
            left: 'auto',
        };
    }
    if (placement === 'left') {
        return {
            top:
                position.y +
                position.height / 2 -
                popupRect.height / 2 +
                scrollTop,
            right: window.innerWidth - position.right + position.width + offset,
            bottom: 'auto',
            left: 'auto',
        };
    }
    if (placement === 'left-end') {
        return {
            top: 'auto',
            right: window.innerWidth - position.right + position.width + offset,
            bottom: window.innerHeight - position.bottom - scrollTop,
            left: 'auto',
        };
    }
    if (placement === 'right-start') {
        return {
            top: position.y + scrollTop,
            right: 'auto',
            bottom: 'auto',
            left: position.x + position.width + offset,
        };
    }
    if (placement === 'right') {
        return {
            top:
                position.y +
                position.height / 2 -
                popupRect.height / 2 +
                scrollTop,
            right: 'auto',
            bottom: 'auto',
            left: position.x + position.width + offset,
        };
    }
    if (placement === 'right-end') {
        return {
            top: 'auto',
            right: 'auto',
            bottom: window.innerHeight - position.bottom - scrollTop,
            left: position.x + position.width + offset,
        };
    }
    return {
        top: position.y + position.height + offset + scrollTop,
        right: 'auto',
        bottom: 'auto',
        left: position.width / 2 + position.x - popupRect.width / 2,
    };
};
