import dayjs from 'dayjs';

export const MonthMap = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
};

export const WeekList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const getRenderList = (current: { year: number; month: number }) => {
    const { year, month } = current;
    const startDayOfMonth = dayjs(`${year}-${month}`).startOf('month');
    const endDayofMonth = dayjs(`${year}-${month}`).endOf('month');
    const daysOfMonth = endDayofMonth.diff(startDayOfMonth, 'd') + 1;
    const list = Array(daysOfMonth)
        .fill({})
        .map((item, index) => ({
            beforeMonth: false,
            inMonth: true,
            date: startDayOfMonth.add(index, 'd').format('YYYY-MM-DD'),
            day: startDayOfMonth.add(index, 'd').date(),
            value: startDayOfMonth.add(index, 'd'),
        }));
    const daysBeforeFirstDay = startDayOfMonth.day() - 0;
    let daysAfterLastDay = 6 - endDayofMonth.day();
    Array(daysBeforeFirstDay)
        .fill({})
        .map((item, index) => {
            list.unshift({
                beforeMonth: true,
                inMonth: false,
                date: startDayOfMonth
                    .subtract(index + 1, 'd')
                    .format('YYYY-MM-DD'),
                day: startDayOfMonth.subtract(index + 1, 'd').date(),
                value: startDayOfMonth.subtract(index + 1, 'd'),
            });
        });
    if (Math.ceil(list.length / 7) === 5) {
        daysAfterLastDay += 7;
    }
    Array(daysAfterLastDay)
        .fill({})
        .map((item, index) => {
            list.push({
                beforeMonth: false,
                inMonth: false,
                date: endDayofMonth.add(index + 1, 'd').format('YYYY-MM-DD'),
                day: endDayofMonth.add(index + 1, 'd').date(),
                value: endDayofMonth.add(index + 1, 'd'),
            });
        });
    return list;
};
