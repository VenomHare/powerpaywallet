import Link from "next/link";

export default function Footer() {
    return (<>
        {/* Footer */}
        <footer className="bg-slate-300 py-12 border-t border-slate-400 mt-auto">
            <div className="container mx-auto px-4 text-center text-slate-600">
                <div className="mb-8">
                    <h3 className="text-3xl font-bold text-slate-900 mb-2 italic">PowerPay</h3>
                    <p className="max-w-md mx-auto">
                        Secure, fast, and simple. Your money, your power.
                    </p>
                </div>
                <div className="flex justify-center space-x-6 mb-8">
                    <Link href="/" className="hover:text-blue-600 transition-colors">About Us</Link>
                    <Link href="/support" className="hover:text-blue-600 transition-colors">Support</Link>
                    <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
                </div>
                <p className="text-sm">
                    &copy; 2025 PowerPay. All rights reserved.
                </p>
            </div>
        </footer>
    </>)
}