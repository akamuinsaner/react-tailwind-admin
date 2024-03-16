import dayjs, { Dayjs } from "dayjs";
import { memo, useContext, useEffect, useState } from "react";
import { styles } from './styles';
import {
    ChevronLeftIcon,
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { MonthMap, getRenderList, WeekList } from './configs';
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import isToday from 'dayjs/plugin/isToday';
dayjs.extend(isToday)


const DatePickerPanelHeader = ({
    index,
    current,
    setCurrent,
    setMode
}: {
    index: number;
    current: [{ year: number, month: number }, { year: number, month: number }];
    setCurrent: (current: { year: number, month: number }) => void;
    setMode: (mode: number) => void;
}) => {
    const prevYear = () => {
        setCurrent({ ...current[index], year: current[index].year - 1 });
    }
    const prevMonth = () => {
        setCurrent({
            ...current,
            month: current[index].month === 1 ? 12 : (current[index].month - 1),
            year: current[index].month === 1 ? (current[index].year - 1) : current[index].year
        });
    }
    const afterMonth = () => {
        setCurrent({
            ...current,
            month: current[index].month === 12 ? 1 : (current[index].month + 1),
            year: current[index].month === 12 ? (current[index].year + 1) : current[index].year
        });
    }
    const afterYear = () => {
        setCurrent({ ...current[index], year: current[index].year + 1 });
    }
    const setYearMode = () => {
        setMode(1);
    }
    const setDecadeMode = () => {
        setMode(2);
    }

    const preIconClassNames = twMerge(styles.panel.header.icon, classNames({
        [styles.panel.header.disabledIcon]: index === 1
            && ((current[1].year < current[0].year) || ((current[1].year == current[0].year) && (current[1].month <= current[0].month)))
    }))

    const afterIconClassNames = twMerge(styles.panel.header.icon, classNames({
        [styles.panel.header.disabledIcon]: index === 0 
            && ((current[0].year > current[1].year) || ((current[0].year == current[1].year) && (current[0].month >= current[1].month)))
    }))
    return (
        <div className={styles.panel.header.base} onClick={e => {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
        }}>
            <ChevronDoubleLeftIcon onClick={prevYear} className={preIconClassNames} />
            <ChevronLeftIcon onClick={prevMonth} className={preIconClassNames} />
            <span className={styles.panel.header.display}>
                <span onClick={setYearMode}>{MonthMap[current[index].month]}</span>
                <span onClick={setDecadeMode}>{current[index].year}</span>
            </span>
            <ChevronRightIcon onClick={afterMonth} className={afterIconClassNames} />
            <ChevronDoubleRightIcon onClick={afterYear} className={afterIconClassNames} />
        </div>
    )
}

const DatePickerPanelBody = ({
    index,
    current,
    value,
    setValue,
    minDate,
    maxDate
}: {
    index: number;
    current: [{ year: number, month: number }, { year: number, month: number }];
    value: [Dayjs, Dayjs];
    setValue: (value: Dayjs) => void;
    minDate?: Dayjs;
    maxDate?: Dayjs;
}) => {
    const renderList = getRenderList(current[index]);
    const itemClassName = (item: any) => {
        const filterByLimit = (minDate && dayjs(item.date).isBefore(minDate)) || (maxDate && dayjs(item.date).isAfter(maxDate))
        const filterByCompare = index === 0 ? dayjs(item.date).isAfter(value[1]) : dayjs(item.date).isBefore(value[0]);
        return twMerge(
            styles.panel.body.item,
            classNames({
                [styles.panel.body.notInMonth]: !item.inMonth,
                [styles.panel.body.isToday]: dayjs(item.date).isToday(),
                [styles.panel.body.selected]: dayjs(item.date).isSame(value[index]),
                [styles.panel.body.outOfRange]: filterByLimit || filterByCompare,
            })
        )
    }
    return (
        <div className={styles.panel.body.base} onClick={e => {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
        }}>
            <div className={styles.panel.body.wrapper}>
                {WeekList.map(day =>
                    <div key={day} className={styles.panel.body.header}>{day}</div>)}
                {renderList.map(item =>
                    <div
                        key={item.date}
                        className={itemClassName(item)}
                        onClick={(e) => setValue(item.value)}
                    >{item.day}</div>)}
            </div>
        </div>
    )
}

const DatePickerYearMode = ({
    curIndex,
    current,
    setCurrent,
    setMode,
    minDate,
    maxDate
}: {
    curIndex: number;
    current: [{ year: number, month: number }, { year: number, month: number }];
    setCurrent: (current: { year: number, month: number }) => void;
    setMode: (mode: number) => void;
    minDate?: Dayjs;
    maxDate?: Dayjs;
}) => {
    const prevYear = () => {
        setCurrent({ ...current[curIndex], year: current[curIndex].year - 1 });
    }
    const afterYear = () => {
        setCurrent({ ...current[curIndex], year: current[curIndex].year + 1 });
    }
    const setMonthMode = (month: number) => () => {
        setMode(0);
        setCurrent({ ...current[curIndex], month });
    }

    const setDecadeMode = () => {
        setMode(2);
    }

    const itemClassName = (month: number) => {
        const filterByLimit = (minDate && month < minDate.month() + 1) || (maxDate && month > maxDate.month() + 1);
        const filterByCompare = curIndex === 0
        ? ((current[0].year > current[1].year) || ((current[0].year === current[1].year) && (month > current[1].month)))
        : ((current[1].year < current[0].year) || ((current[0].year === current[1].year) && (month < current[0].month)))
        return twMerge(
            styles.panel.year.item,
            classNames({
                [styles.panel.year.selected]: current[curIndex].month === month,
                [styles.panel.body.outOfRange]: filterByLimit || filterByCompare
            })
        )
    }
    return (
        <div onClick={e => {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
        }}>
            <div className={styles.panel.header.base}>
                <ChevronDoubleLeftIcon onClick={prevYear} className={styles.panel.header.icon} />
                <span className={styles.panel.header.display}>
                    <span onClick={setDecadeMode}>{current[curIndex].year}</span>
                </span>
                <ChevronDoubleRightIcon onClick={afterYear} className={styles.panel.header.icon} />
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
    )
}

const DatePickerDecadeMode = ({
    curIndex,
    current,
    setCurrent,
    setMode,
    minDate,
    maxDate
}: {
    curIndex: number;
    current: [{ year: number, month: number }, { year: number, month: number }];
    setCurrent: (current: { year: number, month: number }) => void;
    setMode: (mode: number) => void;
    minDate?: Dayjs;
    maxDate?: Dayjs;
}) => {
    const [curDecade, setCurDecade] = useState([]);

    useEffect(() => {
        let startYear = current[curIndex].year;
        while (startYear % 10 !== 0) startYear -= 1;
        const decades = Array(10).fill(0).map((item, index) => ({
            year: startYear + index,
            inDecades: true,
        }));
        decades.unshift({ year: startYear - 1, inDecades: false });
        decades.push({ year: startYear + 10, inDecades: false });
        setCurDecade(decades);
    }, [current[curIndex].year]);
    const prevDecade = () => {
        setCurDecade(curDecade.map(item => ({ ...item, year: item.year - 10 })));
    }
    const afterDecade = () => {
        setCurDecade(curDecade.map(item => ({ ...item, year: item.year + 10 })));
    }
    const setYearMode = (year: number) => () => {
        setMode(1);
        setCurrent({ ...current[curIndex], year });
    }

    const setCenturyMode = () => {
        setMode(3);
    }

    const itemClassName = (item: any) => {
        const filterByLimit = (minDate && item.year < minDate.year()) || (maxDate && item.year > maxDate.year());
        const filterByCompare = curIndex === 0 ? (item.year > current[1].year) : (item.year < current[0].year)
        return twMerge(
            styles.panel.year.item,
            classNames({
                [styles.panel.year.notIn]: !item.inDecades,
                [styles.panel.year.selected]: current[curIndex].year === item.year,
                [styles.panel.body.outOfRange]: filterByLimit || filterByCompare
            })
        )
    }
    if (!curDecade.length) return;
    return (
        <div onClick={e => {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
        }}>
            <div className={styles.panel.header.base}>
                <ChevronDoubleLeftIcon onClick={prevDecade} className={styles.panel.header.icon} />
                <span className={styles.panel.header.display}>
                    <span onClick={setCenturyMode}>{curDecade[1].year}-{curDecade[10].year}</span>
                </span>
                <ChevronDoubleRightIcon onClick={afterDecade} className={styles.panel.header.icon} />
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
    )
}

const DatePickerCenturyMode = ({
    curIndex,
    current,
    setCurrent,
    setMode,
    minDate,
    maxDate
}: {
    curIndex: number;
    current: [{ year: number, month: number }, { year: number, month: number }];
    setCurrent: (current: { year: number, month: number }) => void;
    setMode: (mode: number) => void;
    minDate?: Dayjs;
    maxDate?: Dayjs;
}) => {
    const [curCentury, setCurCentury] = useState([]);

    useEffect(() => {
        let startYear = current[curIndex].year;
        while (startYear % 100 !== 0) startYear -= 1;
        const centurys = Array(10).fill(0).map((item, index) => ({
            start: startYear + index * 10,
            end: startYear + index * 10 + 9,
            inCentury: true,
        }));
        centurys.unshift({ start: startYear - 10, end: startYear - 1, inCentury: false });
        centurys.push({ start: startYear + 100, end: startYear + 109, inCentury: false });
        setCurCentury(centurys);
    }, [current[curIndex].year]);
    const prevCentury = () => {
        setCurCentury(curCentury.map(item => ({ ...item, start: item.start - 100, end: item.end - 100 })));
    }
    const afterCentury = () => {
        setCurCentury(curCentury.map(item => ({ ...item, start: item.start + 100, end: item.end + 100 })));
    }
    const setDecadeYearMode = (year: number) => () => {
        setMode(2);
        setCurrent({ ...current[curIndex], year });
    }

    const itemClassName = (item: any) => {
        const filterByLimit = (minDate && item.end < minDate.year()) || (maxDate && item.start > maxDate.year());
        const filterByCompare = curIndex === 0 ? (item.start > current[1].year) : (item.end < current[0].year)
        return twMerge(
            styles.panel.year.item,
            classNames({
                [styles.panel.year.notIn]: !item.inCentury,
                [styles.panel.year.selected]: current[curIndex].year > item.start && current[curIndex].year < item.end,
                [styles.panel.body.outOfRange]: filterByLimit || filterByCompare
            })
        )
    }
    if (!curCentury.length) return;
    return (
        <div onClick={e => {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
        }}>
            <div className={styles.panel.header.base}>
                <ChevronDoubleLeftIcon onClick={prevCentury} className={styles.panel.header.icon} />
                <span className={styles.panel.header.display}>
                    <span>{curCentury[1].start}-{curCentury[10].end}</span>
                </span>
                <ChevronDoubleRightIcon onClick={afterCentury} className={styles.panel.header.icon} />
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
    )
}


const DateRangePickerPanel = ({
    value = [null, null],
    setValue,
    minDate,
    maxDate
}: {
    value: [Dayjs, Dayjs];
    setValue: (value: [Dayjs, Dayjs]) => void;
    minDate?: Dayjs;
    maxDate?: Dayjs;
}) => {
    const [curIndex, setCurIndex] = useState<number>(0);
    const [current, setCurrent] = useState<[
        { year: number, month: number }, { year: number, month: number }
    ]>([null, null]);
    const [mode, setMode] = useState(0);

    useEffect(() => {
        let current: [{ year: number, month: number }, { year: number, month: number }] = [null, null];
        if (value?.[0]) current[0] = { year: dayjs(value[0]).year(), month: dayjs(value[0]).month() + 1 };
        else current[0] = { year: dayjs().year(), month: dayjs().month() + 1 };
        if (value?.[1]) current[1] = { year: dayjs(value[1]).year(), month: dayjs(value[1]).month() + 1 };
        else current[1] = { year: dayjs().year(), month: dayjs().month() + 1 };
        setCurrent(current)
    }, []);

    if (!current[0]) return null;

    const setCurrentFunc = index => value => {
        setCurrent(current.map((cur, i) => {
            return i === index ? value : cur;
        }) as any)
    }

    const setValueFunc = index => (v: Dayjs) => {
        setValue(value.map((val, i) => {
            return i === index ? v : val;
        }) as [Dayjs, Dayjs]);
    }
    return (
        <div className={styles.panel.base}>
            {mode === 0 ? (<div className={styles.range.wrapper}>
                <div>
                    <DatePickerPanelHeader
                        index={0}
                        current={current}
                        setCurrent={setCurrentFunc(0)}
                        setMode={(mode) => {
                            setMode(mode);
                            setCurIndex(0);
                        }}
                    />
                    <DatePickerPanelBody
                        index={0}
                        current={current}
                        value={value}
                        setValue={setValueFunc(0)}
                        maxDate={maxDate}
                        minDate={minDate}
                    />
                </div>,
                <div>
                    <DatePickerPanelHeader
                        index={1}
                        current={current}
                        setCurrent={setCurrentFunc(1)}
                        setMode={(mode) => {
                            setMode(mode);
                            setCurIndex(1);
                        }}
                    />
                    <DatePickerPanelBody
                        index={1}
                        current={current}
                        value={value}
                        setValue={setValueFunc(1)}
                        maxDate={maxDate}
                        minDate={minDate}
                    />
                </div>
            </div>) : null}
            {mode === 1 ? <DatePickerYearMode
                curIndex={curIndex}
                current={current}
                setCurrent={setCurrentFunc(curIndex)}
                setMode={setMode}
                maxDate={maxDate}
                minDate={minDate}
            /> : null}
            {mode === 2 ? <DatePickerDecadeMode
                curIndex={curIndex}
                current={current}
                setCurrent={setCurrentFunc(curIndex)}
                setMode={setMode}
                maxDate={maxDate}
                minDate={minDate}
            /> : null}
            {mode === 3 ? <DatePickerCenturyMode
                curIndex={curIndex}
                current={current}
                setCurrent={setCurrentFunc(curIndex)}
                setMode={setMode}
                maxDate={maxDate}
                minDate={minDate}
            /> : null}
        </div>
    )
}

export default memo(DateRangePickerPanel);