export const getStyles = (themeData) => {
    return {
        "*": {
            "box-sizing": "border-box",
            "font-family": "'Inter', sans-serif",
            "-webkit-font-smoothing": "antialiased",
            "-moz-osx-font-smoothing": "grayscale",
        },
        "html, body": {
            "font-weight": 400,
            margin: 0,
            padding: 0,
        },

        html: {
            height: "100%",
        },
        body: {
            "min-height": "100%",
        },

        ".unl-js-sdk_form__body": {
            padding: "0 !important"
        },
        ".unl-js-sdk_form": {
            width: "100% !important",
            "max-width": "500px",
            "box-shadow": "none !important",
            margin: "0 auto",
            "border-radius": "0 !important",
            height: "100% !important",
            background: "transparent !important",
        },
        "unlimint-ui-form-title": {
            display: "none"
        },
        "unlimint-ui-form-total": {
            display: "none"
        },
        "unlimint-ui-form-footer": {
            display: "none"
        },
        "unlimint-ui-form-order": {
            display: "none"
        },
        "unlimint-ui-form-body form": {
            display: "grid",
            "grid-template-columns": "50% 50%",
            "grid-template-rows": "1fr 1fr minmax(0px, 100%) 1fr",
            height: "100vh",
            "padding-top": "5px",
        },
        ".unl-js-sdk_form__input": {
            "margin-bottom": "24px !important",
            "grid-column-start": "1",
            "grid-column-end": "3",
        },
        ".unl-js-sdk_form__input:focus label": {
            color: `${themeData.input.error.color} !important`,
        },
        ".unl-js-sdk_form__input:nth-child(2)": {
            "grid-column-start": "1",
            "grid-column-end": "1",
            "grid-row-start": "2",
            "grid-row-end": "2",
            "padding-right": "6px",
            "margin-bottom": "12px !important",
        },
        ".unl-js-sdk_form__input:nth-child(3)": {
            "grid-column-start": "2",
            "grid-column-end": "3",
            "grid-row-start": "2",
            "grid-row-end": "2",
            "padding-left": "6px",
            "margin-bottom": "12px !important",
        },
        ".unl-js-sdk_input-text__control": {
            background: `${themeData.input.bg} !important`,
            border: `1px solid ${themeData.input.borderColor} !important`,
            height: "48px !important",
            padding: "12px 16px !important",
            "border-radius": "6px !important",
        },
        ".unl-js-sdk_form__checkbox": {
            margin: "0 !important",
        },
        ".unl-js-sdk_checkbox__label": {
            "padding-left": "32px !important",
            "line-height": "20px !important",
            color: `${themeData.checkbox.label.color} !important`,
            "font-size": "14px !important",
        },
        ".unl-js-sdk_checkbox input+span:before": {
            "background-color": `${themeData.checkbox.check.bg} !important`,
            border: `1px solid ${themeData.checkbox.check.borderColor} !important`,
            width: "20px !important",
            height: "20px !important",
            "border-radius": "4px !important",
        },
        ".unl-js-sdk_checkbox:hover input+span:before": {
            border: `1px solid ${themeData.checkbox.check.hover.borderColor} !important`,
        },
        ".unl-js-sdk_checkbox:focus input+span:before": {
            border: `1px solid ${themeData.checkbox.check.focus.borderColor} !important`,
        },
        ".unl-js-sdk_checkbox input:checked+span:before": {
            "background-color": `${themeData.checkbox.check.checked.bg} !important`,
            border: `1px solid ${themeData.checkbox.check.checked.borderColor} !important`,
            "background-image": `url("data:image/svg+xml,%3Csvg width='9' height='8' viewBox='0 0 9 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath class='fill' d='M0.201705 4.24574L1.21591 3.21875L3.28267 5.25142L7.75284 0.798295L8.77557 1.82528L3.28267 7.29688L0.201705 4.24574Z' fill='%23000000'%3E%3C/path%3E%3C/svg%3E") !important`,
        },
        ".unl-js-sdk_checkbox input:focus+span:before": {
            outline: "none !important",
        },
        "unlimint-ui-form-button": {
            display: "flex",
            "grid-column-start": "1",
            "grid-column-end": "3",
            "align-items": "flex-end",
        },
        "unlimint-ui-form-button button": {
            height: "48px !important"
        },
        ".unl-js-sdk_form-button": {
            width: "100% !important",
            "border-radius": "6px !important",
            "background-color": `${themeData.button.primary.bg} !important`,
            "font-weight": "400 !important",
            "font-size": "16px !important",
            "line-height": "24px",
            color: `${themeData.button.primary.color} !important`,
        },
        ".unl-js-sdk_input-text__label": {
            position: "absolute",
            top: "-9px",
            padding: "0 4px",
            "background-color": themeData.input.bg,
            color: "#808080 !important",
            "user-select": "none",
        },
        ".unl-js-sdk_input-text__input": {
            color: `${themeData.input.color} !important`,
            "max-width": "100%",
        },
        ".unl-js-sdk_input-text__error": {
            height: "auto !important",
            color: `${themeData.input.color} !important`,
        },
        ".unl-js-sdk_form__error-message": {
            "grid-column-start": "1",
            "grid-column-end": "3",
            "grid-row-start": "3",
            "font-weight": "400 !important",
            "font-size": "14px !important",
            "line-height": "20px !important",
            "user-select": "none",
            "margin-bottom": "0 !important",
        },
        ".unl-js-sdk_loader": {
            background: "#1A1A1A !important",
            opacity: 0.7,
        },
        ".unl-js-sdk_loader__text": {
            color: "#e5e5e5 !important",
            "user-select": "none",
        },
    }
}