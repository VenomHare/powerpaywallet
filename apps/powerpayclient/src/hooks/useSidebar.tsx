import { SidebarConfig } from "@powerpaywallet/schemas";
import { setProfileTab } from "@powerpaywallet/store/slices";
import { ArrowLeftRight, House, User, Wallet, HandCoins, History } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export const useSidebarConfig = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const config: SidebarConfig = [
        {
            type: "item",
            id: "home",
            label: "Home",
            onClick() {
                router.push("/dashboard")
            },
            icon: <House />
        },
        {
            type: "item",
            id: "wallet",
            label: "Wallet",
            onClick() {
                router.push("/wallet")
            },
            icon: <Wallet />
        },
        {
            type: "item",
            id: "transactions",
            label: "Transactions",
            onClick() {
                router.push("/transactions")
            },
            icon: <History />
        },
        {
            type: "item",
            id: "transfer",
            label: "Transfer",
            onClick() {
                router.push("/transfer")
            },
            icon: <ArrowLeftRight />
        },
        {
            type: "item",
            id: "withdraw",
            label: "Withdraw",
            onClick() {
                router.push("/withdraw")
            },
            icon: <HandCoins />
        },
        {
            type: "category",
            id: "profile",
            label: "Profile",
            icon: <User />,
            items: [
                {
                    type: "item",
                    id: "personal",
                    label: "Personal Details",
                    onClick() {
                        dispatch(setProfileTab("personal"))
                        router.push("/profile")
                    },
                },
                {
                    type: "item",
                    id: "bankaccounts",
                    label: "Bank Accounts",
                    onClick() {
                        dispatch(setProfileTab("bankaccounts"))
                        router.push("/profile")
                    },
                },
            ]
        },
    ];

    return { config }
};
