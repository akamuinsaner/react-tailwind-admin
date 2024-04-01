import dayjs, { Dayjs } from 'dayjs';
import { memo, useEffect, useState } from 'react';
import { styles } from './styles';
import {
    ChevronLeftIcon,
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { MonthMap, getRenderList, WeekList } from './configs';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import isToday from 'dayjs/plugin/isToday';
dayjs.extend(isToday);

const DatePickerPanelHeader = ({
    current,
    setCurrent,
    setMode,
}: {
    current: { year: number; month: number };
    setCurrent: (current: { year: number; month: number }) => void;
    setMode: (mode: number) => void;
}) => {
    const prevYear = () => {
        setCurrent({ ...current, year: current.year - 1 });
    };
    const prevMonth = () => {
        setCurrent({
            ...current,
            month: current.month === 1 ? 12 : current.month - 1,
            year: current.month === 1 ? current.year - 1 : current.year,
        });
    };
    const afterMonth = () => {
        setCurrent({
            ...current,
            month: current.month === 12 ? 1 : current.month + 1,
            year: current.month === 12 ? current.year + 1 : current.year,
        });
    };
    const afterYear = () => {
        setCurrent({ ...current, year: current.year + 1 });
    };
    const setYearMode = () => {
        setMode(1);
    };
    const setDecadeMode = () => {
        setMode(2);
    };
    return (
        <div
            className={styles.panel.header.base}
            onClick={e => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
            }}
        >
            <ChevronDoubleLeftIcon
                onClick={prevYear}
                className={styles.panel.header.icon}
            />
            <ChevronLeftIcon
                onClick={prevMonth}
                className={styles.panel.header.icon}
            />
            <span className={styles.panel.header.display}>
                <span onClick={setYearMode}>{MonthMap[current.month]}</span>
                <span onClick={setDecadeMode}>{current.year}</span>
            </span>
            <ChevronRightIcon
                onClick={afterMonth}
                className={styles.panel.header.icon}
            />
            <ChevronDoubleRightIcon
                onClick={afterYear}
                className={styles.panel.header.icon}
            />
        </div>
    );
};

const DatePickerPanelBody = ({
    current,
    value,
    setValue,
    minDate,
    maxDate,
}: {
    current: { year: number; month: number };
    value: Dayjs;
    setValue: (value: Dayjs) => void;
    minDate?: Dayjs;
    maxDate?: Dayjs;
}) => {
    const renderList = getRenderList(current);
    const itemClassName = (item: any) => {
        const filterByLimit =
            (minDate && dayjs(item.date).isBefore(minDate)) ||
            (maxDate && dayjs(item.date).isAfter(maxDate));
        return twMerge(
            styles.panel.body.item,
            classNames({
                [styles.panel.body.notInMonth]: !item.inMonth,
                [styles.panel.body.isToday]: dayjs(item.date).isToday(),
                [styles.panel.body.selected]: dayjs(item.date).isSame(value),
                [styles.panel.body.outOfRange]: filterByLimit,
            }),
        );
    };
    return (
        <div className={styles.panel.body.base}>
            <div className={styles.panel.body.wrapper}>
                {WeekList.map(day => (
                    <div key={day} className={styles.panel.body.header}>
                        {day}
                    </div>
                ))}
                {renderList.map(item => (
                    <div
                        key={item.date}
                        className={itemClassName(item)}
                        onClick={e => setValue(item.value)}
                    >
                        {item.day}
                    </div>
                ))}
            </div>
        </div>
    );
};

const DatePickerPanelFooter = ({
    setValue,
}: {
    setValue: (value: Dayjs) => void;
}) => {
    const setToday = () => setValue(dayjs());
    return (
        <div className={styles.panel.footer.base}>
            <span onClick={setToday}>Today</span>
        </div>
    );
};

const DatePickerYearMode = ({
    current,
    setCurrent,
    setMode,
    minDate,
    maxDate,
}: {
    current: { year: number; month: number };
    setCurrent: (current: { year: number; month: number }) => void;
    setMode: (mode: number) => void;
    minDate?: Dayjs;
    maxDate?: Dayjs;
}) => {
    const prevYear = () => {
        setCurrent({ ...current, year: current.year - 1 });
    };
    const afterYear = () => {
        setCurrent({ ...current, year: current.year + 1 });
    };
    const setMonthMode = (month: number) => () => {
        setMode(0);
        setCurrent({ ...current, month });
    };

    const setDecadeMode = () => {
        setMode(2);
    };

    const itemClassName = (month: number) => {
        const filterByLimit =
            (minDate && month < minDate.month() + 1) ||
            (maxDate && month > maxDate.month() + 1);
        return twMerge(
            styles.panel.year.item,
            classNames({
                [styles.panel.year.selected]: current.month === month,
                [styles.panel.body.outOfRange]: filterByLimit,
            }),
        );
    };
    return (
        <div
            className={styles.panel.base}
            onClick={e => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
            }}
        >
            <div className={styles.panel.header.base}>
                <ChevronDoubleLeftIcon
                    onClick={prevYear}
                    className={styles.panel.header.icon}
                />
                <span className={styles.panel.header.display}>
                    <span onClick={setDecadeMode}>{current.year}</span>
                </span>
                <ChevronDoubleRightIcon
                    onClick={afterYear}
                    className={styles.panel.header.icon}
                />
            </div>
            <div className={styles.panel.year.wrapper}>
                {Object.keys(MonthMap).map(key => (
                    <div
                        key={key}
                        className={itemClassName(Number(key))}
                        onClick={setMonthMode(Number(key))}
                    >
                        {MonthMap[key]}
                    </div>
                ))}
            </div>
        </div>
    );
};

const DatePickerDecadeMode = ({
    current,
    setCurrent,
    setMode,
    minDate,
    maxDate,
}: {
    current: { year: number; month: number };
    setCurrent: (current: { year: number; month: number }) => void;
    setMode: (mode: number) => void;
    minDate?: Dayjs;
    maxDate?: Dayjs;
}) => {
    const [curDecade, setCurDecade] = useState([]);

    useEffect(() => {
        let startYear = current.year;
        while (startYear % 10 !== 0) startYear -= 1;
        const decades = Array(10)
            .fill(0)
            .map((item, index) => ({
                year: startYear + index,
                inDecades: true,
            }));
        decades.unshift({ year: startYear - 1, inDecades: false });
        decades.push({ year: startYear + 10, inDecades: false });
        setCurDecade(decades);
    }, [current.year]);
    const prevDecade = () => {
        setCurDecade(
            curDecade.map(item => ({ ...item, year: item.year - 10 })),
        );
    };
    const afterDecade = () => {
        setCurDecade(
            curDecade.map(item => ({ ...item, year: item.year + 10 })),
        );
    };
    const setYearMode = (year: number) => () => {
        setMode(1);
        setCurrent({ ...current, year });
    };

    const setCenturyMode = () => {
        setMode(3);
    };

    const itemClassName = (item: any) => {
        const filterByLimit =
            (minDate && item.year < minDate.year()) ||
            (maxDate && item.year > maxDate.year());
        return twMerge(
            styles.panel.year.item,
            classNames({
                [styles.panel.year.notIn]: !item.inDecades,
                [styles.panel.year.selected]: current.year === item.year,
                [styles.panel.body.outOfRange]: filterByLimit,
            }),
        );
    };
    if (!curDecade.length) return;
    return (
        <div
            className={styles.panel.base}
            onClick={e => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
            }}
        >
            <div className={styles.panel.header.base}>
                <ChevronDoubleLeftIcon
                    onClick={prevDecade}
                    className={styles.panel.header.icon}
                />
                <span className={styles.panel.header.display}>
                    <span onClick={setCenturyMode}>
                        {curDecade[1].year}-{curDecade[10].year}
                    </span>
                </span>
                <ChevronDoubleRightIcon
                    onClick={afterDecade}
                    className={styles.panel.header.icon}
                />
            </div>
            <div className={styles.panel.year.wrapper}>
                {curDecade.map(item => (
                    <div
                        key={item.year}
                        className={itemClassName(item)}
                        onClick={setYearMode(item.year)}
                    >
                        {item.year}
                    </div>
                ))}
            </div>
        </div>
    );
};

const DatePickerCenturyMode = ({
    current,
    setCurrent,
    setMode,
    minDate,
    maxDate,
}: {
    current: { year: number; month: number };
    setCurrent: (current: { year: number; month: number }) => void;
    setMode: (mode: number) => void;
    minDate?: Dayjs;
    maxDate?: Dayjs;
}) => {
    const [curCentury, setCurCentury] = useState([]);

    useEffect(() => {
        let startYear = current.year;
        while (startYear % 100 !== 0) startYear -= 1;
        const centurys = Array(10)
            .fill(0)
            .map((item, index) => ({
                start: startYear + index * 10,
                end: startYear + index * 10 + 9,
                inCentury: true,
            }));
        centurys.unshift({
            start: startYear - 10,
            end: startYear - 1,
            inCentury: false,
        });
        centurys.push({
            start: startYear + 100,
            end: startYear + 109,
            inCentury: false,
        });
        setCurCentury(centurys);
    }, [current.year]);
    const prevCentury = () => {
        setCurCentury(
            curCentury.map(item => ({
                ...item,
                start: item.start - 100,
                end: item.end - 100,
            })),
        );
    };
    const afterCentury = () => {
        setCurCentury(
            curCentury.map(item => ({
                ...item,
                start: item.start + 100,
                end: item.end + 100,
            })),
        );
    };
    const setDecadeYearMode = (year: number) => () => {
        setMode(2);
        setCurrent({ ...current, year });
    };

    const itemClassName = (item: any) => {
        const filterByLimit =
            (minDate && item.end < minDate.year()) ||
            (maxDate && item.start > maxDate.year());
        return twMerge(
            styles.panel.year.item,
            classNames({
                [styles.panel.year.notIn]: !item.inCentury,
                [styles.panel.year.selected]:
                    current.year > item.start && current.year < item.end,
                [styles.panel.body.outOfRange]: filterByLimit,
            }),
        );
    };
    if (!curCentury.length) return;
    return (
        <div
            className={styles.panel.base}
            onClick={e => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
            }}
        >
            <div className={styles.panel.header.base}>
                <ChevronDoubleLeftIcon
                    onClick={prevCentury}
                    className={styles.panel.header.icon}
                />
                <span className={styles.panel.header.display}>
                    <span>
                        {curCentury[1].start}-{curCentury[10].end}
                    </span>
                </span>
                <ChevronDoubleRightIcon
                    onClick={afterCentury}
                    className={styles.panel.header.icon}
                />
            </div>
            <div className={styles.panel.year.wrapper}>
                {curCentury.map(item => (
                    <div
                        key={item.start}
                        className={itemClassName(item)}
                        onClick={setDecadeYearMode(item.start)}
                    >
                        {item.start}-{item.end}
                    </div>
                ))}
            </div>
        </div>
    );
};

const DatePickerPanel = ({
    value,
    setValue,
    minDate,
    maxDate,
}: {
    value: Dayjs;
    setValue: (value: Dayjs) => void;
    minDate?: Dayjs;
    maxDate?: Dayjs;
}) => {
    const [current, setCurrent] = useState(null);
    const [mode, setMode] = useState(0);

    useEffect(() => {
        let current;
        if (value)
            current = {
                year: dayjs(value).year(),
                month: dayjs(value).month() + 1,
            };
        else
            current = {
                year: dayjs().year(),
                month: dayjs().month() + 1,
            };
        setCurrent(current);
    }, []);

    if (!current) return null;
    return (
        <div className={twMerge(styles.panel.base)}>
            {mode === 0 ? (
                <>
                    <DatePickerPanelHeader
                        current={current}
                        setCurrent={setCurrent}
                        setMode={setMode}
                    />
                    <DatePickerPanelBody
                        current={current}
                        value={value}
                        setValue={setValue}
                        maxDate={maxDate}
                        minDate={minDate}
                    />
                    <DatePickerPanelFooter setValue={setValue} />
                </>
            ) : null}
            {mode === 1 ? (
                <DatePickerYearMode
                    current={current}
                    setCurrent={setCurrent}
                    setMode={setMode}
                    maxDate={maxDate}
                    minDate={minDate}
                />
            ) : null}
            {mode === 2 ? (
                <DatePickerDecadeMode
                    current={current}
                    setCurrent={setCurrent}
                    setMode={setMode}
                    maxDate={maxDate}
                    minDate={minDate}
                />
            ) : null}
            {mode === 3 ? (
                <DatePickerCenturyMode
                    current={current}
                    setCurrent={setCurrent}
                    setMode={setMode}
                    maxDate={maxDate}
                    minDate={minDate}
                />
            ) : null}
        </div>
    );
};

export default memo(DatePickerPanel);
