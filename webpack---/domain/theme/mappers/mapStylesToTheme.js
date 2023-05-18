export const mapStylesToTheme = (styles, theme) => ({
    ...theme,
    body: {
        ...theme.body,
        bg: styles.bodyBg,
    },
    main: {
        ...theme.main,
        bg1: styles.mainBg1,
        bg2: styles.mainBg2,
    },
    button: {
        ...theme.button,
        primary: {
            ...theme.button.primary,
            bg: styles.primaryBg,
            color: styles.primaryColor,
            hover: {
                ...theme.button.primary.hover,
                bg: styles.primaryHoverBg,
                color: styles.primaryHoverColor,
            },
            focus: {
                ...theme.button.primary.focus,
                bg: styles.primaryFocusBg,
                borderColor: styles.primaryFocusBorderColor,
            },
        },
    },
    checkbox: {
        ...theme.checkbox,
        check: {
            ...theme.checkbox.check,
            bg: styles.checkboxCheckBg,
            iconColor: styles.checkboxCheckIconColor,
            checked: {
                ...theme.checkbox.check.checked,
                bg: styles.checkboxCheckedBg,
                borderColor: styles.checkboxCheckedBorderColor,
            },
            hover: {
                ...theme.checkbox.check.hover,
                borderColor: styles.checkboxCheckHoverBorderColor,
            },
        },
    },
    link: {
        ...theme.link,
        color: styles.linkColor,
    },
    input: {
        ...theme.input,
        bg: styles.inputBg,
    },
    icon: {
        ...theme.icon,
        bg: styles.iconBg,
        default: {
            ...theme.icon.default,
            fill: styles.iconDefaultFill,
        },
    },
    top: {
        ...theme.top,
        default: {
            ...theme.top.default,
            bg: styles.topDefaultBg,
            bgStart: styles.topDefaultBgStart,
            bgEnd: styles.topDefaultBgEnd,
        },
        error: {
            ...theme.top.error,
            bg: styles.topErrorBg,
            bgStart: styles.topErrorBgStart,
            bgEnd: styles.topErrorBgEnd,
        },
        success: {
            ...theme.top.success,
            bgStart: styles.successBgEnd,
            bgEnd: styles.successBgEnd,
        },
    },
    amountCurrencyInput: {
        ...theme.amountCurrencyInput,
        bg: styles.amountCurrencyInputBg,
    },
    summaryBlock: {
        ...theme.summaryBlock,
        expandTextColor: styles.summaryBlockExpandTextColor,
    },
    methodsListItem: {
        ...theme.methodsListItem,
        descriptionColor: styles.methodsListItemDescriptionColor,
    },
    codeInput: {
        ...theme.codeInput,
        bg: styles.codeInputBg,
        caretColor: styles.codeInputCaretColor,
    },
    statusIcon: {
        ...theme.statusIcon,
        top: {
            ...theme.statusIcon.top,
            bg: styles.statusIconBg,
        },
    },
    datepicker: {
        ...theme.datepicker,
        itemActiveBg: styles.datepickerDateActiveBg,
        activeColor: styles.datepickerActiveColor,
    },
})