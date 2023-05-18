import {
    palette
} from "view/themes/palette"

export const darkTheme = {
    body: {
        bg: palette.grey900,
        bg2: palette.grey700,
        color: palette.grey200,
    },

    main: {
        bg1: palette.grey800,
        color1: palette.grey200,
        bg2: palette.grey900,
        color2: palette.grey200,
        additionalTextColor: palette.grey500,
    },

    scroll: {
        bg: palette.grey700,
        color: palette.grey600,
    },

    // UI kit
    button: {
        default: {
            bg: palette.grey800,
            color: palette.grey200,
            shadowColor: palette.grey100,

            hover: {
                bg: palette.grey700,
                color: palette.grey200,
            },

            focus: {
                borderColor: palette.grey600,
            },

            disabled: {
                bg: palette.grey800,
                color: palette.grey700,
            },
        },

        primary: {
            bg: palette.primary500,
            color: palette.black,
            shadowColor: palette.grey100,

            hover: {
                bg: palette.primary400,
                color: palette.black,
            },

            focus: {
                bg: palette.primary600,
                borderColor: palette.primary400,
            },

            disabled: {
                bg: palette.grey800,
                color: palette.grey700,
            },
        },

        additional: {
            bg: palette.transparent,
            color: palette.grey200,

            hover: {
                bg: palette.grey700,
                color: palette.grey200,
            },

            disabled: {
                bg: palette.transparent,
                color: palette.grey700,
            },
        },
    },

    applePayButton: {
        bg: palette.white,
        color: palette.black,
    },

    checkbox: {
        check: {
            bg: palette.grey900,
            borderColor: palette.grey600,
            iconColor: palette.black,

            hover: {
                borderColor: palette.primary500,
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
        color: palette.primary500,
    },

    tooltip: {
        color: palette.grey200,
        bg: palette.grey700,
    },

    input: {
        bg: palette.grey900,
        color: palette.grey200,
        placeholderColor: palette.grey600,
        borderColor: palette.grey700,

        label: {
            color: palette.grey500,
        },

        hover: {
            borderColor: palette.grey500,
            iconColor: palette.grey200,
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
        bg: palette.grey900,
        default: {
            fill: palette.grey900,
        },
        error: {
            fill: palette.error700,
        },
        success: {
            fill: palette.success700,
        },
    },

    // Components
    top: {
        default: {
            bg: palette.grey800,
            bgStart: palette.grey800,
            bgEnd: palette.grey900,
        },
        error: {
            bg: palette.grey800,
            bgStart: palette.grey800,
            bgEnd: palette.grey900,
        },
        success: {
            bg: palette.success100,
            bgStart: palette.grey800,
            bgEnd: palette.grey900,
        },

        title: {
            color: palette.grey200,
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
        color: palette.grey200,
        color2: palette.grey500,
    },

    errorBlock: {
        bg: palette.error50,
        color: palette.error500,
        borderColor: palette.error300,
    },

    amountCurrencyInput: {
        bg: palette.grey900,
        color: palette.grey200,
        secondColor: palette.grey500,
        borderColor: palette.grey700,
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
            color: palette.grey500,
        },
        delimiterColor: palette.grey700,

        label: {
            color: palette.grey500,
        },
        currencyBlock: {
            hover: {
                bg: palette.grey800,
            },
            focus: {
                borderColor: palette.grey500,
            },
        },
    },

    summaryBlock: {
        color: palette.grey500,
        borderColor: palette.grey700,
        expandTextColor: palette.primary500,
        iconHoverColor: palette.grey300,
    },

    amountBlock: {
        color: palette.grey200,
        borderColor: palette.grey700,
        iconBg: palette.grey800,
        loaderBg: palette.grey500,
    },

    bottomText: {
        color: palette.grey500,
    },

    currencyItem: {
        hover: {
            bg: palette.grey800,
        },
        focus: {
            bg: palette.grey800,
            borderColor: palette.grey500,
        },
    },

    methodsListItem: {
        descriptionColor: palette.primary500,
        hover: {
            bg: palette.grey700,
        },
        focus: {
            bg: palette.grey700,
            borderColor: palette.grey500,
        },
        info: {
            color: palette.grey500,
        },
    },

    codeInput: {
        bg: palette.grey900,
        color: palette.grey200,
        borderColor: palette.grey600,
        caretColor: palette.primary500,

        error: {
            borderColor: palette.error500,
            color: palette.error500,
        },
    },

    statusIcon: {
        top: {
            bg: palette.grey900,
        },
        common: {
            bg: palette.grey800,
        },
    },

    datepicker: {
        bg: palette.grey900,
        color: palette.grey200,
        activeColor: palette.black,
        borderColor: palette.grey700,
        arrowColor: palette.grey500,
        weekDayColor: palette.grey500,
        itemColor: palette.grey200,
        itemDisabledColor: palette.grey600,
        itemHoverBg: palette.grey800,
        itemActiveBg: palette.primary500,
        weekendColor: palette.error400,
        weekendDisabledColor: palette.error700,
    },

    header: {
        color: palette.grey300,
        iconBg: palette.grey800,
    },

    footer: {
        color: palette.grey300,
    },

    layout: {
        borderColor: palette.grey800,
    },
}