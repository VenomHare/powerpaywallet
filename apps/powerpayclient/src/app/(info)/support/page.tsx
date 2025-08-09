import React from 'react';


const SupportPage = () => {
    return (
        <>
            <div className="bg-slate-50 text-slate-800 min-h-screen font-['Manrope'] flex flex-col">

                {/* Support Content Section */}
                <main className="container mx-auto px-4 py-16 max-w-4xl flex-grow">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 text-center">
                        Help & Support
                    </h1>
                    <p className="text-lg text-slate-600 mb-12 text-center">
                        Welcome to the PowerPay support center. We are here to help you get the most out of your experience.
                    </p>

                    <section className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 space-y-10">
                        {/* General Questions */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                General Questions
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                                        What is PowerPay?
                                    </h3>
                                    <p className="text-slate-600">
                                        PowerPay is a modern digital wallet designed to give you complete control over your finances. It allows you to send, receive, and manage your money with ease, security, and a user-friendly interface. Our goal is to simplify your financial life, making it more efficient and empowering.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                                        How do I get started with PowerPay?
                                    </h3>
                                    <p className="text-slate-600">
                                        Getting started is simple. Just click on the "Sign Up Now" button on the homepage, fill in your details, and create your secure account. You'll then be guided through the process of linking your bank account to fund your wallet, allowing you to begin making transactions immediately.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Payments and Transactions */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                Payments & Transactions
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                                        How do I send money to another user?
                                    </h3>
                                    <p className="text-slate-600">
                                        To send money, navigate to the 'Send Money' tab on your dashboard. Enter the recipient's phone number or email, the amount you wish to send, and a brief description. Confirm the transaction, and the funds will be transferred instantly and securely. All internal transfers are free.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                                        What is the difference between a transfer and a withdrawal?
                                    </h3>
                                    <p className="text-slate-600">
                                        A **transfer** is a transaction that moves money from your PowerPay account to another PowerPay user's account. This is an instant and free process. A **withdrawal** is a transaction that moves money from your PowerPay account to your linked external bank account. This process may take a few business days depending on your bank's policies.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                                        Is there a fee for transactions?
                                    </h3>
                                    <p className="text-slate-600">
                                        PowerPay offers free instant transfers between users. For deposits and withdrawals to/from an external bank account, your bank's standard fees may apply. We will always notify you of any fees before you complete a transaction, so there are no surprises.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Account & Security */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                Account & Security
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                                        What security measures does PowerPay use?
                                    </h3>
                                    <p className="text-slate-600">
                                        We take your security very seriously. We use advanced encryption protocols and multi-factor authentication to protect your account and transactions from unauthorized access. Your personal and financial information is securely stored and never shared without your explicit consent. We also conduct regular security audits and maintain a strict privacy policy.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                                        What if I forget my password?
                                    </h3>
                                    <p className="text-slate-600">
                                        On the login page, click the "Forgot Password" link. We will send a secure link to your registered email address to help you reset your password. For your security, we will never ask for your password directly.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                                        How do I close my account?
                                    </h3>
                                    <p className="text-slate-600">
                                        If you wish to close your account, please contact our support team at <a href="mailto:venomhare9@gmail.com" className="text-blue-600 hover:underline">venomhare9@gmail.com</a>. We will guide you through the process, which includes withdrawing any remaining funds from your account.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Support */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                Need more help?
                            </h2>
                            <p className="text-slate-600">
                                If your question isn't answered in our FAQ, our dedicated support team is ready to assist you. Please send us an email with a detailed description of your issue, and we'll get back to you as soon as possible.
                            </p>
                            <div className="mt-4">
                                <a href="mailto:venomhare9@gmail.com" className="inline-block px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-700">
                                    Email Support
                                </a>
                            </div>
                        </div>
                    </section>
                </main>


            </div>
        </>
    );
};

export default SupportPage;
