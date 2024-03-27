'use client';
import classNames from 'classnames';
import Viewer from 'react-viewer';
import {
    FC,
    ImgHTMLAttributes,
    ReactNode,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { styles } from './styles';
import { EyeIcon } from '@heroicons/react/24/outline';
import ViewerProps from 'react-viewer/lib/ViewerProps';

export type RTImageProps = {
    preview?: boolean | ViewerProps;
    placeholder?: ReactNode;
    lazy?: boolean;
} & ImgHTMLAttributes<HTMLImageElement>;

const Image: FC<RTImageProps> = ({
    preview,
    placeholder,
    lazy = true,
    style,
    className,
    ...imgProps
}) => {
    const [loadFail, setLoadFail] = useState<boolean>(false);
    const [hovering, setHovering] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const imgRef = useRef<HTMLImageElement>(null);
    const isMaskVisible = !!preview && hovering;
    const maskClassName = twMerge(
        styles.mask.base,
        classNames({
            [styles.mask.show]: isMaskVisible,
        }),
    );
    const wrapperClassName = twMerge(styles.wrapper, classNames({}), className);

    const imageProps = useMemo(() => {
        const { src, ...extraProps } = imgProps;
        if (lazy) {
            return { ...extraProps, 'data-src': src };
        }
        return imgProps;
    }, [imgProps, lazy]);

    useEffect(() => {
        if (lazy) {
            let observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target as HTMLImageElement;
                        element.setAttribute(
                            'src',
                            element.getAttribute('data-src'),
                        );
                    }
                });
            });
            observer.observe(imgRef.current);
            return () => {
                if (imgRef.current) {
                    observer.unobserve(imgRef.current);
                }
            };
        }
    }, []);

    const onMouseEnter = () => {
        if (!preview) return;
        setHovering(true);
    };

    const onMouseLeave = () => {
        if (!preview) return;
        setHovering(false);
    };

    const viewerProps = useMemo(() => {
        if (typeof preview === 'boolean') return {};
        return preview;
    }, [preview]);

    const onError = e => {
        if (imageProps.onError) imageProps.onError(e);
        setLoadFail(true);
    };

    return (
        <div
            style={style}
            className={wrapperClassName}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {loadFail ? placeholder : null}
            {!loadFail ? (
                <img
                    draggable='false'
                    style={style}
                    className={className}
                    {...imageProps}
                    ref={imgRef}
                    onError={onError}
                />
            ) : null}
            {!loadFail ? (
                <div className={maskClassName} onClick={() => setOpen(true)}>
                    <EyeIcon className={styles.icon} />
                    preview
                </div>
            ) : null}
            <Viewer
                visible={open}
                onClose={() => setOpen(false)}
                images={[
                    {
                        src: imgProps.src,
                        alt: imgProps.alt,
                    },
                ]}
                {...viewerProps}
            />
        </div>
    );
};

export default Image;
