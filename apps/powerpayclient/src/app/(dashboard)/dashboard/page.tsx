"use client";
import { signIn, useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import { WrapFadeTransition } from '../../../components/FadeInPageTransition';
import { useDispatch, useSelector } from "react-redux";
import { BanknoteArrowDown, BanknoteArrowUp, Landmark } from "lucide-react";
import { useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@powerpaywallet/store";
import { update } from "@powerpaywallet/store/slices";
import { TransactionBlock } from "../../../components/Transaction";
import ChangelogCard from "./changelog";

const DashboardPage = () => {

    const session = useSession();

    useEffect(() => {
        if (session.status == "unauthenticated") {
            signIn();
        }
    }, [session])


    return (<>
        <div className="w-full h-[92dvh] overflow-y-auto flex flex-col gap-4 p-4 bg-slate-100">

            <div className="w-full max-h-full overflow-y-auto font-[Manrope] grid gap-2 " id="dashboard_container">
                <Banner />
                <WelcomeCard />
                <QuickActions />
                <RandomPowerPayTip />
                <ChangelogCard />
                <Transactions />
                {/* <IssueNotice /> */}
            </div>
        </div>
    </>)
}

const WelcomeCard = () => {
    const session = useSession();
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return (<div className="w-full h-full p-4  shsadow shadow-slate-500 rounded-md " style={{ gridArea: "welcome" }}>
        <h3 className="text-2xl flex flex-col font-bold font-[Manrope] ps-2 py-3 text-slate-500">
            <p className="text-balance"><Greeting /></p>
            <p className="text-slate-900 ">{session.data?.user?.name}!</p>
        </h3>
        {
            (session.data?.user as any) &&
            <h4 className="flex gap-1 ps-2 text-slate-500">
                <p>Last Logged in at :</p>
                {
                    new Date((session.data?.user as any).lastSession).toLocaleString("en-IN", {
                        timeZone: userTimeZone,
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                    })
                }

            </h4>
        }
    </div>)
}

const Banner = () => {
    return (<>
        <div className="w-full h-full bgasd-red-400" style={{ gridArea: "banner" }}></div>
    </>)
}

const QuickActions = () => {
    const router = useRouter();
    return (
        <div className="w-full h-full p-4 shadow shadow-slate-500 rounded-md bg-slate-100 flex flex-col items-center justify-around gap-2" style={{
            gridArea: "quick_actions"
        }}>
            <h4 className="text-2xl font-semibold">Quick Actions</h4>

            <div className="w-full h-[15dvh] flex items-center justify-around gap-2">
                <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => { router.push("/wallet") }}>
                    <BanknoteArrowDown size={40} />
                    <div className="text-sm">Add Money</div>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => { router.push("/wallet") }}>
                    <CheckBalanceIcon />
                    <div className="text-sm">View Balance</div>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => { router.push("/withdraw") }}>
                    <Landmark size={40} />
                    <div className="text-sm">Withraw Money</div>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => { router.push("/transfer") }}>
                    <BanknoteArrowUp size={40} />
                    <div className="text-sm">Send Money</div>
                </div>
            </div>
        </div>

    )
}

const Transactions = () => {

    const [dataRequestSent, setDataRequestSent] = useState(false);
    const appDispatch = useDispatch<AppDispatch>();
    const { transactions } = useSelector((state: RootState) => state.wallet);
    const router = useRouter();

    useEffect(() => {
        if (transactions.length == 0 && !dataRequestSent) {
            appDispatch(update())
            setDataRequestSent(true);
        }
    }, [transactions, appDispatch, dataRequestSent])

    return (<div
        className="w-full h-fit p-4 shadow shadow-slate-500 rounded-md bg-slate-100 flex flex-col items-center-safe gap-1"
        style={{
            gridArea: "transactions"
        }}>
        <h4 className="text-2xl font-semibold">Recent Transactions</h4>
        <div className="w-full h-full flex flex-col gap-1 pt-2">
            {
                transactions.map((tnx, i) =>
                    i < 4 &&
                    <TransactionBlock
                        key={i}
                        type={"tnx"}
                        transaction={tnx}
                    />
                )
            }
        </div>
        <button onClick={() => { router.push("/transactions") }} className='w-full h-[4.5svh] rounded bg-slate-900 text-slate-300 font-semibold p-2 my-4 cursor-pointer shadow shadow-slate-500'>
            View All Transactions
        </button>
    </div>)
}
const greetings = {
    lateNight: [
        "You're up late",
        "Burning the midnight oil",
        "Still awake?",
        "Working hard or hardly working?"
    ],
    morning: [
        "Good morning",
        "Hope you slept well",
        "Rise and shine",
        "Morning, sunshine"
    ],
    afternoon: [
        "Good afternoon",
        "Hope your day is going well",
        "Getting things done?",
        "How's your afternoon?"
    ],
    evening: [
        "Good evening",
        "Hope you had a great day",
        "Relaxing time?",
        "Evening"
    ],
    night: [
        "Winding down for the day?",
        "Hope you're having a calm night",
        "Night vibes?",
        "Good night (almost)"
    ]
};

function Greeting() {
    const [randomGreeting, setRandomGreeting] = useState<string | null>(null);

    useEffect(() => {
        const date = new Date();
        const hour = date.getHours();
        let period: keyof typeof greetings;

        if (hour < 5) period = "lateNight";
        else if (hour < 12) period = "morning";
        else if (hour < 17) period = "afternoon";
        else if (hour < 21) period = "evening";
        else period = "night";

        const variants = greetings[period];
        setRandomGreeting(variants[Math.floor(Math.random() * variants.length)] || "Good Day");
    }, []);

    // While waiting for client render, render nothing or a placeholder
    if (randomGreeting === null) return null;

    return <>{randomGreeting},</>;
}

const CheckBalanceIcon = () => {
    return (<>
        <svg enableBackground="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="check_balance_x2C__mobile_x2C__phone"><g><g><g><g><g><g><g><g><g><path d="M9.5,4h5C14.776,4,15,3.776,15,3.5S14.776,3,14.5,3h-5C9.224,3,9,3.224,9,3.5S9.224,4,9.5,4z" fill="#263238" /></g></g></g></g></g></g><g><g><g><g><g><g><path d="M11.5,29h1c0.276,0,0.5-0.224,0.5-0.5S12.776,28,12.5,28h-1c-0.276,0-0.5,0.224-0.5,0.5            S11.224,29,11.5,29z" fill="#263238" /></g></g></g></g></g></g><g><g><g><g><path d="M17.5,31h-11C5.122,31,4,29.879,4,28.5v-25C4,2.121,5.122,1,6.5,1h11C18.878,1,20,2.121,20,3.5          C20,3.776,19.776,4,19.5,4S19,3.776,19,3.5C19,2.673,18.327,2,17.5,2h-11C5.673,2,5,2.673,5,3.5v25          C5,29.327,5.673,30,6.5,30h11c0.827,0,1.5-0.673,1.5-1.5v-5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v5          C20,29.879,18.878,31,17.5,31z" fill="#263238" /></g></g></g></g></g></g><g><g><g><g><path d="M15.5,25.5c-0.061,0-0.123-0.011-0.181-0.034C15.126,25.392,15,25.206,15,25v-4h-2.5        c-0.827,0-1.5-0.673-1.5-1.5v-13C11,5.673,11.673,5,12.5,5h14C27.327,5,28,5.673,28,6.5v13c0,0.827-0.673,1.5-1.5,1.5h-6.655        l-3.976,4.338C15.772,25.443,15.637,25.5,15.5,25.5z M12.5,6C12.224,6,12,6.225,12,6.5v13c0,0.275,0.224,0.5,0.5,0.5h3        c0.276,0,0.5,0.224,0.5,0.5v3.215l3.256-3.553C19.351,20.059,19.485,20,19.625,20H26.5c0.276,0,0.5-0.225,0.5-0.5v-13        C27,6.225,26.776,6,26.5,6H12.5z" fill="#263238" /></g></g></g></g></g><g><g><g><g><g><g><path d="M19.5,17c1.402,0,2.5-1.098,2.5-2.5c0-1.135-0.771-1.962-2.291-2.458l-0.113-0.037         C19.026,11.819,18.5,11.569,18.5,11c0-0.589,0.411-1,1-1c0.704,0,1.174,0.378,1.178,0.382c0.213,0.178,0.527,0.15,0.705-0.06         c0.178-0.212,0.15-0.526-0.061-0.704C21.292,9.593,20.576,9,19.5,9c-1.141,0-2,0.86-2,2c0,1.374,1.344,1.813,1.785,1.955         l0.113,0.037C20.477,13.344,21,13.838,21,14.5c0,0.855-0.645,1.5-1.5,1.5c-0.928,0-1.459-0.612-1.6-0.8         c-0.166-0.222-0.48-0.265-0.7-0.101c-0.222,0.166-0.267,0.479-0.101,0.7C17.311,16.082,18.108,17,19.5,17z" fill="#263238" /></g></g></g></g></g><g><g><g><g><g><path d="M19.5,18c0.276,0,0.5-0.224,0.5-0.5V17c0-0.276-0.224-0.5-0.5-0.5S19,16.724,19,17v0.5         C19,17.776,19.224,18,19.5,18z" fill="#263238" /></g></g></g></g></g><g><g><g><g><g><path d="M19.5,9.5C19.776,9.5,20,9.276,20,9V8.5C20,8.224,19.776,8,19.5,8S19,8.224,19,8.5V9         C19,9.276,19.224,9.5,19.5,9.5z" fill="#263238" /></g></g></g></g></g></g></g></svg>
    </>)
}

function RandomPowerPayTip() {
    const tips = [
        "💡 Instantly transfer money to friends via the PowerPay Transfer page.",
        "🔒 Your PowerPay data is protected with bank-grade security.",
        "🏦 Withdraw your balance to any linked bank account with a few clicks.",
        "📈 Track your transaction history in real time from the Transactions tab.",
        "🪙 Your wallet balance updates automatically after every transaction.",
        "📤 Use the Withdraw page to cash out directly from your wallet.",
        "💳 PowerPay supports seamless wallet-to-wallet payments 24/7.",
        "⚠️ Always verify the amount and recipient before confirming a transfer.",
        "🔁 Failed transfer? Check the transaction status and try again.",
        "📱 Access your wallet from any device with PowerPay's secure login.",
        "⏳ Delays in withdrawal? It may be under review. Check its status!",
        "🚀 Transfers are processed in seconds — no waiting!",
        "🔁 You can retry a failed withdrawal once the issue is resolved.",
        "🛡️ We'll alert you of any suspicious activity on your account.",
        "🌐 PowerPay works even on low internet speeds — great for rural areas.",
        "🆘 Need support? Reach out via the Help section in your dashboard.",
        "🧠 Tip: Transfer small amounts first when sending to a new contact.",
        "🛠️ You can update your bank details anytime in your profile settings."
    ];

    const randomIndex = Math.floor(Math.random() * tips.length);
    return <>
        <div className="w-full h-full flex items-center justify-center text-center" style={{ gridArea: "tip" }}>
            <div className="w-9/10 p-4 text-balance text-xl font-medium shadow shadow-slate-500 rounded-md bg-slate-200 ">
                {tips[randomIndex]}
            </div>
        </div>
    </>
}

// const IssueNotice = () => {
//     const handleReportClick = () => {
//         window.open('https://github.com/venomhare/powerpaywallet/issues', '_blank');
//     };

//     return (
//         <div className="w-full h-full flex items-center justify-center text-center" style={{ gridArea: "issue" }}>
//             <div className="w-4/5 max-w-lg p-6 shadow-lg shadow-slate-400 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-300">
//                 {/* Header */}
//                 <div className="mb-6">
//                     <div className="flex items-center justify-center mb-3">
//                         <Bug className="w-8 h-8 text-slate-600 mr-2" />
//                         <h3 className="text-2xl font-bold text-slate-800">Report Issues</h3>
//                     </div>
//                     <p className="text-slate-600 text-lg">
//                         Spotted a bug or have an idea? We'd love to hear from you!
//                     </p>
//                 </div>

//                 {/* Quick Info Cards */}
//                 {/* <div className="grid grid-cols-2 gap-3 mb-5">
//                     <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-400">
//                         <div className="flex items-center mb-1">
//                             <AlertTriangle className="w-4 h-4 text-red-600 mr-1" />
//                             <span className="font-medium text-red-800 text-sm">Bugs</span>
//                         </div>
//                         <p className="text-xs text-red-700">Something broken?</p>
//                     </div>
//                     <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
//                         <div className="flex items-center mb-1">
//                             <MessageSquare className="w-4 h-4 text-blue-600 mr-1" />
//                             <span className="font-medium text-blue-800 text-sm">Ideas</span>
//                         </div>
//                         <p className="text-xs text-blue-700">Suggest features</p>
//                     </div>
//                 </div> */}

//                 {/* Simple Instructions */}
//                 <div className="bg-slate-50 rounded-lg p-4 mb-5 border border-slate-200">
//                     <p className="text-sm text-slate-700 leading-relaxed">
//                         <span className="font-medium">Quick tip:</span> Describe what happened, what you expected, and how to reproduce it. Screenshots help too!
//                     </p>
//                 </div>

//                 {/* Action Button */}
//                 <button
//                     onClick={handleReportClick}
//                     className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-200 flex items-center justify-center group"
//                 >
//                     <GitBranch className="w-4 h-4 mr-2" />
//                     Report on GitHub Issues
//                     <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
//                 </button>

//                 {/* Footer Note */}
//                 <p className="text-xs text-slate-500 mt-3">
//                     Your feedback helps make PowerPay Wallet better for everyone
//                 </p>
//             </div>
//         </div>
//     );
// };


export default WrapFadeTransition(DashboardPage)
