import { SidebarConfig } from "@powerpaywallet/schemas";
import { useRouter } from "next/navigation";

export const useSidebarConfig = () => {
    const router = useRouter();

    const config: SidebarConfig = [
        {
            type: "item",
            id: "home",
            label: "Home",
            onClick() {
                router.push("/dashboard")
            },
        },
        {
            type: "item",
            id: "wallet",
            label: "Wallet",
            onClick() {
                router.push("/wallet")
            },
        },
        {
            type: "item",
            id: "transfer",
            label: "Transfer",
            onClick() {
                router.push("/transfer")
            }
        },
        {
            type: "category",
            id: "profile",
            label: "Profile",
            items: [
                {
                    type: "item",
                    id: "view",
                    label: "View Profile",
                    onClick() {
                        router.push("/profile")
                    },
                },
                {
                    type: "item",
                    id: "security",
                    label: "Security",
                    onClick() {
                        router.push("/security")
                    },
                }
            ]
        },
    ];

    return { config }
};
