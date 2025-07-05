import { SidebarConfig } from "@powerpaywallet/schemas";
import { setProfileTab } from "@powerpaywallet/store/slices";
import { ArrowLeftRight, House, PersonStanding, User, Wallet, Wallet2 } from "lucide-react";
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
            icon: <Wallet/>
        },
        {
            type: "item",
            id: "transfer",
            label: "Transfer",
            onClick() {
                router.push("/transfer")
            },
            icon: <ArrowLeftRight/>
        },
        {
            type: "category",
            id: "profile",
            label: "Profile",
            icon: <User/>,
            items: [
                {
                    type: "item",
                    id: "view",
                    label: "Personal Details",
                    onClick() {
                        dispatch(setProfileTab("personal"))
                        router.push("/profile")
                    },
                },
            ]
        },
    ];

    return { config }
};
