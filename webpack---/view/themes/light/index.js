import {
    palette
} from "view/themes/palette"

export const lightTheme = {
    body: {
        bg: palette.grey50,
        bg2: palette.white,
        color: palette.black,
    },

    main: {
        bg1: palette.info200,
        color1: palette.black,
        bg2: palette.white,
        color2: palette.black,
    },

    scroll: {
        bg: palette.grey200,
        color: palette.grey600,
    },

    // UI kit
    button: {
        default: {
            bg: palette.grey100,
            color: palette.black,
            shadowColor: palette.grey100,

            hover: {
                bg: palette.grey200,
                color: palette.black,
            },

            focus: {
                borderColor: palette.grey300,
            },

            disabled: {
                bg: palette.grey200,
                color: palette.grey300,
            },
        },

        primary: {
            bg: palette.primary500,
            color: palette.black,
            shadowColor: palette.grey100,

            hover: {
                bg: palette.primary600,
                color: palette.black,
            },

            focus: {
                bg: palette.primary400,
                borderColor: palette.primary600,
            },

            disabled: {
                bg: palette.grey200,
                color: palette.grey300,
            },
        },

        additional: {
            bg: palette.transparent,
            color: palette.black,

            hover: {
                bg: palette.grey200,
                color: palette.black,
            },

            focus: {
                bg: palette.transparent,
                borderColor: palette.transparent,
            },

            disabled: {
                bg: palette.transparent,
                color: palette.grey300,
            },
        },
    },

    applePayButton: {
        bg: palette.black,
        color: palette.white,
    },

    checkbox: {
        check: {
            bg: palette.white,
            borderColor: palette.grey400,
            iconColor: palette.black,

            hover: {
                borderColor: palette.black,
            },
            focus: {
                borderColor: palette.grey500,
            },
            checked: {
                bg: palette.primary500,
                borderColor: palette.primary500,
            },
        },
        label: {
            color: palette.grey500,
        },
    },

    link: {
        color: palette.info500,
    },

    tooltip: {
        color: palette.white,
        bg: palette.black,
    },

    input: {
        bg: palette.white,
        color: palette.black,
        placeholderColor: palette.grey300,
        borderColor: palette.grey200,

        label: {
            color: palette.grey500,
        },

        hover: {
            borderColor: palette.grey500,
            iconColor: palette.grey800,
        },

        focus: {
            borderColor: palette.grey500,
        },

        error: {
            color: palette.error500,
            borderColor: palette.error500,
        },
    },

    search: {
        color: palette.grey300,
    },

    icon: {
        bg: palette.white,
        default: {
            fill: palette.info400,
        },
        error: {
            fill: palette.error400,
        },
        success: {
            fill: palette.success400,
        },
    },

    // Components
    top: {
        default: {
            bg: palette.info200,
            bgStart: palette.info200,
            bgEnd: palette.white,
        },
        error: {
            bg: palette.error50,
            bgStart: palette.error50,
            bgEnd: palette.white,
        },
        success: {
            bg: palette.success100,
            bgStart: palette.success100,
            bgEnd: palette.white,
        },

        title: {
            color: palette.black,
        },
        description: {
            color: palette.grey500,
        },

        wallet: {
            label: {
                color: palette.grey500,
            },
            address: {
                color: palette.grey500,
            },
        },
    },

    rateBlock: {
        color: palette.black,
        color2: palette.grey500,
    },

    errorBlock: {
        bg: palette.error50,
        color: palette.black,
        borderColor: palette.error300,
    },

    amountCurrencyInput: {
        bg: palette.white,
        color: palette.black,
        secondColor: palette.grey500,
        borderColor: palette.transparent,
        hover: {
            borderColor: palette.grey500,
        },
        focus: {
            borderColor: palette.grey500,
        },
        error: {
            borderColor: palette.error500,
        },
        disabled: {
            color: palette.grey300,
        },
        delimiterColor: palette.grey100,

        label: {
            color: palette.grey500,
        },
        currencyBlock: {
            hover: {
                bg: palette.grey100,
            },
            focus: {
                borderColor: palette.grey500,
            },
        },
    },

    summaryBlock: {
        color: palette.grey500,
        borderColor: palette.grey200,
        expandTextColor: palette.info500,
        iconHoverColor: palette.grey700,
    },

    amountBlock: {
        color: palette.black,
        borderColor: palette.grey200,
        iconBg: palette.grey100,
        loaderBg: palette.grey500,
    },

    bottomText: {
        color: palette.grey500,
    },

    currencyItem: {
        hover: {
            bg: palette.grey100,
        },
        focus: {
            bg: palette.grey100,
            borderColor: palette.grey500,
        },
    },

    methodsListItem: {
        descriptionColor: palette.info500,
        hover: {
            bg: palette.grey50,
        },
        focus: {
            bg: palette.grey50,
        },
        info: {
            color: palette.grey500,
        },
    },

    codeInput: {
        bg: palette.white,
        color: palette.black,
        borderColor: palette.info400,
        caretColor: palette.info500,

        error: {
            borderColor: palette.error500,
            color: palette.error500,
        },
    },

    statusIcon: {
        top: {
            bg: palette.white,
        },
        common: {
            bg: palette.grey200,
        },
    },

    datepicker: {
        bg: palette.white,
        color: palette.black,
        activeColor: palette.black,
        borderColor: palette.grey200,
        arrowColor: palette.grey500,
        weekDayColor: palette.grey500,
        itemColor: palette.black,
        itemDisabledColor: palette.grey300,
        itemHoverBg: palette.grey100,
        itemActiveBg: palette.primary500,
        weekendColor: palette.error500,
        weekendDisabledColor: palette.error300,
    },

    header: {
        color: palette.grey500,
        iconBg: palette.white,
    },

    footer: {
        color: palette.grey400,
    },

    layout: {
        borderColor: palette.grey200,
    },
}