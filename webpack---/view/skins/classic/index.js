import {
    EmailIcon
} from "view/skins/classic/icons/email"
import {
    ErrorIcon
} from "view/skins/classic/icons/error"
import {
    PendingIcon
} from "view/skins/classic/icons/pending"
import {
    ProcessingIcon
} from "view/skins/classic/icons/processing"
import {
    SuccessIcon
} from "view/skins/classic/icons/success"
import {
    SummaryIcon
} from "view/skins/classic/icons/summary"
import {
    VerifyIcon
} from "view/skins/classic/icons/verify"
import {
    WalletIcon
} from "view/skins/classic/icons/wallet"
import {
    CardIcon
} from "view/skins/classic/icons/card"
import {
    RateArrowIcon
} from "view/skins/classic/icons/rate-arrow"
import {
    LockIcon
} from "view/skins/classic/icons/lock"
import {
    LocationIcon
} from "view/skins/classic/icons/location"
import {
    EditIcon
} from "view/skins/classic/icons/edit"

export const classicSkin = {
    layout: {
        padding: "24px",
        borderRadius: "16px",
    },
    top: {
        borderRadius: "16px",
        bgError: "var(--theme-top-error-bg)",
        bgSuccess: "var(--theme-top-success-bg)",
        bgDefault: "var(--theme-top-default-bg)",
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