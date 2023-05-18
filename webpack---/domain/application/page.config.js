import {
    PageEnum
} from "domain/application/enums/PageEnum"

import {
    MainLayout
} from "view/layouts/MainLayout"
import {
    TestPage
} from "view/pages/TestPage"
import {
    LoadingPage
} from "view/pages/LoadingPage"
import {
    LoginPage
} from "view/pages/LoginPage"
import {
    SignupPage
} from "view/pages/SignupPage"
import {
    CodePage
} from "view/pages/CodePage"
import {
    CryptoBuyPage
} from "view/pages/CryptoBuyPage"
import {
    WalletPage
} from "view/pages/WalletPage"
import {
    CreditCardPage
} from "view/pages/CreditCardPage"
import {
    OrderStatusPage
} from "view/pages/OrderStatusPage"
import {
    SummaryPage
} from "view/pages/SummaryPage"
import {
    ErrorPage
} from "view/pages/ErrorPage"
import {
    OrderErrorPage
} from "view/pages/OrderErrorPage"
import {
    IFramePage
} from "view/pages/IFramePage"
import {
    Fiat3dsStatus
} from "view/pages/Fiat3dsStatus"
import {
    EmptyLayout
} from "view/layouts/EmptyLayout"
import {
    KycCheckPage
} from "view/pages/KycCheckPage"
import {
    BlockedUserPage
} from "view/pages/BlockedUserPage"
import {
    ForbiddenPage
} from "view/pages/ForbiddenPage"
import {
    RegionNotSupportedPage
} from "view/pages/RegionNotSupportedPage"
import {
    ChoosePaymentMethodPage
} from "view/pages/ChoosePaymentMethodPage"
import {
    KycFirstLevelPage
} from "view/pages/KycFirstLevelPage"
import {
    PlaidPage
} from "view/pages/PlaidPage"
import {
    ShortLayout
} from "view/layouts/ShortLayout"

export const pageConfig = {
    // common
    [PageEnum.TestPage]: {
        Component: TestPage,
        Layout: MainLayout,
        public: true,
    },
    [PageEnum.LoadingPage]: {
        Component: LoadingPage,
        Layout: EmptyLayout,
        public: true,
    },
    [PageEnum.ErrorPage]: {
        Component: ErrorPage,
        Layout: MainLayout,
        public: true,
    },
    [PageEnum.OrderErrorPage]: {
        Component: OrderErrorPage,
        Layout: MainLayout,
        public: true,
    },
    [PageEnum.BlockedUserPage]: {
        Component: BlockedUserPage,
        Layout: MainLayout,
        public: true,
    },
    [PageEnum.ForbiddenPage]: {
        Component: ForbiddenPage,
        Layout: MainLayout,
        public: true,
    },
    [PageEnum.RegionNotSupportedPage]: {
        Component: RegionNotSupportedPage,
        Layout: MainLayout,
        public: true,
    },

    // identity
    [PageEnum.LoginPage]: {
        Component: LoginPage,
        Layout: MainLayout,
        public: true,
    },
    [PageEnum.SignupPage]: {
        Component: SignupPage,
        Layout: MainLayout,
        public: true,
    },
    [PageEnum.CodePage]: {
        Component: CodePage,
        Layout: MainLayout,
        public: true,
    },

    // order
    [PageEnum.PlaidPage]: {
        Component: PlaidPage,
        Layout: ShortLayout,
        public: true,
    },
    [PageEnum.CryptoBuyPage]: {
        Component: CryptoBuyPage,
        Layout: MainLayout,
        public: true,
    },
    [PageEnum.ChoosePaymentMethodPage]: {
        Component: ChoosePaymentMethodPage,
        Layout: MainLayout,
    },
    [PageEnum.WalletPage]: {
        Component: WalletPage,
        Layout: MainLayout,
    },
    [PageEnum.CreditCardPage]: {
        Component: CreditCardPage,
        Layout: MainLayout,
    },
    [PageEnum.SummaryPage]: {
        Component: SummaryPage,
        Layout: MainLayout,
    },
    [PageEnum.OrderStatusPage]: {
        Component: OrderStatusPage,
        Layout: MainLayout,
    },
    [PageEnum.IFramePage]: {
        Component: IFramePage,
        Layout: MainLayout,
    },
    [PageEnum.Fiat3dsStatus]: {
        Component: Fiat3dsStatus,
        Layout: EmptyLayout,
        public: true,
    },
    [PageEnum.KycCheckPage]: {
        Component: KycCheckPage,
        Layout: MainLayout,
    },
    [PageEnum.KycFirstLevelPage]: {
        Component: KycFirstLevelPage,
        Layout: MainLayout,
    },
}