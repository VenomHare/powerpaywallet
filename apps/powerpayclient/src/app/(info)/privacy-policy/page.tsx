import React from 'react';

const PrivacyPolicyPage = () => {
    return (
        <>
            <div className="bg-slate-50 text-slate-800 min-h-screen font-['Manrope'] flex flex-col">

                {/* Privacy Policy Content Section */}
                <main className="container mx-auto px-4 py-16 max-w-4xl flex-grow">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 text-center">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-600 mb-8 text-center">
                        Last Updated: August 9, 2025
                    </p>

                    <section className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                1. Introduction & Our Commitment
                            </h2>
                            <p className="text-slate-600">
                                Welcome to PowerPay. Your privacy is paramount to us. We are committed to protecting your personal information and handling your data in an open and transparent manner. This Privacy Policy is designed to help you understand what information we collect, why we collect it, how we use it, and what choices you have regarding your data. By using our services, you consent to the data practices described in this policy.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                2. Information We Collect
                            </h2>
                            <p className="text-slate-600 mb-4">
                                We collect personal information that you provide directly to us when you create an account, use our services, or communicate with us. This may include:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2">
                                <li>
                                    <strong className="font-semibold text-slate-800">Contact Information:</strong> Your name, email address, phone number, and mailing address.
                                </li>
                                <li>
                                    <strong className="font-semibold text-slate-800">Financial Information:</strong> Bank account details and payment card information, which are necessary to process transactions.
                                </li>
                                <li>
                                    <strong className="font-semibold text-slate-800">Transaction Data:</strong> Details about your transactions, including the amount, date, time, and recipient.
                                </li>
                                <li>
                                    <strong className="font-semibold text-slate-800">Technical Information:</strong> Your IP address, device type, operating system, and unique device identifiers to help us maintain security and improve our service.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                3. How We Use Your Information
                            </h2>
                            <p className="text-slate-600">
                                We use the information we collect for the following purposes:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2">
                                <li>
                                    <strong className="font-semibold text-slate-800">Service Provision:</strong> To provide, operate, and maintain our services, including processing transactions and managing your account.
                                </li>
                                <li>
                                    <strong className="font-semibold text-slate-800">Communication:</strong> To send you transaction receipts, service updates, security alerts, and to respond to your support inquiries.
                                </li>
                                <li>
                                    <strong className="font-semibold text-slate-800">Improvement & Development:</strong> To analyze how our services are used and to develop new features and functionality.
                                </li>
                                <li>
                                    <strong className="font-semibold text-slate-800">Security:</strong> To verify your identity, prevent fraud, and ensure the security and integrity of our platform.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                4. Data Security
                            </h2>
                            <p className="text-slate-600">
                                We are dedicated to safeguarding your information. We have implemented robust technical and organizational security measures to protect your personal information from unauthorized access, alteration, and disclosure. These measures include data encryption, multi-factor authentication, and regular security audits. We also limit access to your data to authorized employees who require it to perform their duties.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                5. Your Rights & Choices
                            </h2>
                            <p className="text-slate-600">
                                You have certain rights concerning your personal data. You can access, update, or delete your account information at any time from your profile settings. You also have the right to request a copy of your personal data or to object to its processing. To exercise these rights, or if you have any questions about this policy, please contact us at <a href="mailto:privacy@powerpay.com" className="text-blue-600 hover:underline">privacy@powerpay.com</a>.
                            </p>
                        </div>
                    </section>
                </main>

            </div>
        </>
    );
};

export default PrivacyPolicyPage;
