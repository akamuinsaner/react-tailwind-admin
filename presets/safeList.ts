let columnsSafeList = [];
let gapSafeList = [];
let spaceSafeList = [];
let dividerGapList = [];
Array(1000)
    .fill(0)
    .forEach((a, i) => {
        columnsSafeList = [
            ...columnsSafeList,
            `columns-${i + 1}`,
            `sm:columns-${i + 1}`,
            `md:columns-${i + 1}`,
            `lg:columns-${i + 1}`,
            `xl:columns-${i + 1}`,
            `2xl:columns-${i + 1}`,
        ];
        gapSafeList = [
            ...gapSafeList,
            `gap-[${i + 1}px]`,
            `sm:gap-[${i + 1}px]`,
            `md:gap-[${i + 1}px]`,
            `lg:gap-[${i + 1}px]`,
            `xl:gap-[${i + 1}px]`,
            `2xl:gap-[${i + 1}px]`,
        ];
        spaceSafeList = [...spaceSafeList, `[&>*]:mb-[${i + 1}px]`];
        dividerGapList = [
            ...dividerGapList,
            `mx-[${i + 1}px]`,
            `my-[${i + 1}px]`,
        ];
    });

module.exports = {
    safelist: [
        ...columnsSafeList,
        ...gapSafeList,
        ...spaceSafeList,
        ...dividerGapList,
    ],
};
