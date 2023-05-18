import {
    EmailIcon
} from "view/skins/gradient/icons/email"
import {
    ErrorIcon
} from "view/skins/gradient/icons/error"
import {
    PendingIcon
} from "view/skins/gradient/icons/pending"
import {
    ProcessingIcon
} from "view/skins/gradient/icons/processing"
import {
    SuccessIcon
} from "view/skins/gradient/icons/success"
import {
    SummaryIcon
} from "view/skins/gradient/icons/summary"
import {
    VerifyIcon
} from "view/skins/gradient/icons/verify"
import {
    WalletIcon
} from "view/skins/gradient/icons/wallet"
import {
    CardIcon
} from "view/skins/gradient/icons/card"
import {
    RateArrowIcon
} from "view/skins/gradient/icons/rate-arrow"
import {
    LockIcon
} from "view/skins/gradient/icons/lock"
import {
    LocationIcon
} from "view/skins/gradient/icons/location"
import {
    EditIcon
} from "view/skins/gradient/icons/edit"

export const gradientSkin = {
    layout: {
        padding: "24px",
        borderRadius: "16px",
    },
    top: {
        borderRadius: "0",
        bgError: "linear-gradient(180deg, var(--theme-top-error-bgStart) 0%, var(--theme-top-error-bgEnd) 100%)",
        bgSuccess: "linear-gradient(180deg, var(--theme-top-success-bgStart) 0%, var(--theme-top-success-bgEnd) 100%)",
        bgDefault: "linear-gradient(180deg, var(--theme-top-default-bgStart) 0%, var(--theme-top-default-bgEnd) 100%)",
    },
    // UI kit
    button: {
        borderRadius: "6px",
    },
    checkbox: {
        borderRadius: "4px",
    },
    input: {
        borderRadius: "6px",
    },
    tooltip: {
        borderRadius: "4px",
    },
    amountCurrency: {
        borderRadius: "8px",
    },
    currencySelector: {
        borderRadius: "4px",
    },
    methodsListItem: {
        borderRadius: "8px",
    },
    icons: {
        card: CardIcon,
        email: EmailIcon,
        error: ErrorIcon,
        pending: PendingIcon,
        processing: ProcessingIcon,
        rateArrow: RateArrowIcon,
        success: SuccessIcon,
        summary: SummaryIcon,
        verify: VerifyIcon,
        wallet: WalletIcon,
        lock: LockIcon,
        location: LocationIcon,
        edit: EditIcon,
    },
}