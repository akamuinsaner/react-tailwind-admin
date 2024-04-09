'use client';
import Flex from '@/src/components/Flex';
import Text from '@/src/components/Text';
import GithubIcon from '@/app/utils/icons/GithubIcon';
import Link from 'next/link';
import {
    GITHUBLINK,
    LNKEDINLINK,
    MAILTOLINK,
    PORTFOLIOLINK,
} from '@/app/utils/constants';
import LinkedinIcon from '@/app/utils/icons/LinkedinIcon';
import { GlobeAltIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '@/app/globalContext';

const Footer = () => {
    const footerRef = useRef<HTMLDivElement>(null);
    const context = useContext(GlobalContext);
    const { footerHeight, setFooterHeight } = context;
    useEffect(() => {
        setFooterHeight(footerRef.current.offsetHeight);
    }, []);
    return (
        <Flex
            className='w-full py-4 px-8 text-mainText text-center absolute bottom-0 left-0'
            align='center'
            direction='column'
            gap='medium'
            ref={footerRef}
            style={{ height: `${footerHeight}px` }}
        >
            <Flex gap='medium'>
                <Link href={MAILTOLINK} target='__blank'>
                    <EnvelopeIcon className='h-6 w-6 text-mainText' />
                </Link>
                <Link href={GITHUBLINK} target='__blank'>
                    <GithubIcon className='h-6 w-6 text-mainText' />
                </Link>
                <Link href={LNKEDINLINK} target='__blank'>
                    <LinkedinIcon className='h-6 w-6 text-mainText' />
                </Link>
                <Link href={PORTFOLIOLINK} target='__blank'>
                    <GlobeAltIcon className='h-6 w-6 text-mainText' />
                </Link>
            </Flex>

            <Text>
                RTA is an admin template for building large scale web
                applications,powered by NextJs, Tailwindcss,made by akamuinsaner
            </Text>
        </Flex>
    );
};

export default Footer;
