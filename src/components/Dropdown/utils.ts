import { RTPlacement } from '@/src/types/placement';
import { CSSProperties } from 'react';

export const computePlacementStyle = (anchor: HTMLElement, placement: RTPlacement): CSSProperties => {
    let gap = 8;
    if (!anchor) return {};
    const position = anchor.getBoundingClientRect();
    if (placement === 'bottom-start') {
        return {
            inset: `${position.y + position.height + gap}px auto auto ${position.x}px`,
            transform: `translate(0, 0)`,
            transformOrigin: 'top left',
        };
    }
    if (placement === 'bottom') {
        return {
            inset: `${position.y + position.height + gap}px auto auto ${position.width / 2 + position.x}px`,
            transform: `translate(-50%, 0)`,
            transformOrigin: 'top center',
        }
    }
    if (placement === 'bottom-end') {
        return {
            inset: `${position.y + position.height + gap}px auto auto ${position.width + position.x}px`,
            transform: `translate(-100%, 0)`,
            transformOrigin: 'top right',
        };
    }
    if (placement === 'top-start') {
        return {
            inset: `${position.y - gap}px auto auto ${position.x}px`,
            transform: `translate(0, -100%)`,
            transformOrigin: 'bottom left',
        };
    }
    if (placement === 'top') {
        return {
            inset: `${position.y - gap}px auto auto ${position.x + position.width / 2}px`,
            transform: `translate(-50%, -100%)`,
            transformOrigin: 'bottom center',
        };
    }
    if (placement === 'top-end') {
        return {
            inset: `${position.y - gap}px auto auto ${position.x + position.width}px`,
            transform: `translate(-100%, -100%)`,
            transformOrigin: 'bottom end',
        };
    }
    if (placement === 'left-start') {
        return {
            inset: `${position.y}px auto auto ${position.x - gap}px`,
            transform: `translate(-100%, 0)`,
            transformOrigin: 'top right',
        };
    }
    if (placement === 'left') {
        return {
            inset: `${position.y + position.height / 2}px auto auto ${position.x - gap}px`,
            transform: `translate(-100%, -50%)`,
            transformOrigin: 'center right',
        };
    }
    if (placement === 'left-end') {
        return {
            inset: `${position.y + position.height}px auto auto ${position.x - gap}px`,
            transform: `translate(-100%, -100%)`,
            transformOrigin: 'bottom right',
        };
    }
    if (placement === 'right-start') {
        return {
            inset: `${position.y}px auto auto ${position.x + position.width + gap}px`,
            transform: `translate(0, 0)`,
            transformOrigin: 'top left',
        };
    }
    if (placement === 'right') {
        return {
            inset: `${position.y + position.height / 2}px auto auto ${position.x + position.width + gap}px`,
            transform: `translate(0, -50%)`,
            transformOrigin: 'center left',
        };
    }
    if (placement === 'right-end') {
        return {
            inset: `auto auto ${window.innerHeight - position.bottom + gap}px  ${position.x + position.width + gap}px`,
            transform: `translate(0, 0)`,
            transformOrigin: 'bottom left',
        };
    }
    return {
        inset: `${position.y + position.height + gap}px auto auto ${position.x}px`,
        transform: `translate(0, 0)`
    };;
}

export const computeArrowStyle = (anchor: HTMLElement, placement: RTPlacement, arrow: boolean): CSSProperties => {
    if (!anchor) return {};
    if (!arrow) return { display: 'none' };
    const position = anchor.getBoundingClientRect();
    if (placement === 'bottom-start') return {
        top: '-4px',
        left: `${Math.min(16, position.width / 2)}px`,
        transform: `rotate(45deg)`
    };
    if (placement === 'bottom') return {
        top: '-4px',
        left: `50%`,
        transform: `translate(-50%, 0) rotate(45deg)`
    };
    if (placement === 'bottom-end') return {
        top: '-4px',
        right: `${Math.min(16, position.width / 2)}px`,
        transform: `rotate(45deg)`
    };
    if (placement === 'top-start') return {
        top: 'calc(100% - 8px)',
        left: `${Math.min(16, position.width / 2)}px`,
        transform: `rotate(45deg)`
    };
    if (placement === 'top') return {
        top: 'calc(100% - 8px)',
        left: `50%`,
        transform: `translate(-50%, 0) rotate(45deg)`
    };
    if (placement === 'top-end') return {
        top: 'calc(100% - 8px)',
        right: `${Math.min(16, position.width / 2)}px`,
        transform: `rotate(45deg)`
    };
    if (placement === 'left-start') return {
        right: '-4px',
        top: `${Math.min(16, position.height / 2)}px`,
        transform: `rotate(45deg)`
    };
    if (placement === 'left') return {
        right: '-4px',
        top: `50%`,
        transform: `translate(0, -50%) rotate(45deg)`
    };
    if (placement === 'left-end') return {
        right: '-4px',
        bottom: `${Math.min(16, position.height / 2)}px`,
        transform: `rotate(45deg)`
    };
    if (placement === 'right-start') return {
        left: '-4px',
        top: `${Math.min(16, position.height / 2)}px`,
        transform: `rotate(45deg)`
    };
    if (placement === 'right') return {
        left: '-4px',
        top: `50%`,
        transform: `translate(0, -50%) rotate(45deg)`
    };
    if (placement === 'right-end') return {
        left: '-4px',
        bottom: `${Math.min(16, position.height / 2)}px`,
        transform: `rotate(45deg)`
    };
    return {};
}