import React from 'react';


const TermsOfServicePage = () => {
    return (
        <>
            <div className="bg-slate-50 text-slate-800 min-h-screen font-['Manrope'] flex flex-col">

                {/* Terms of Service Content Section */}
                <main className="container mx-auto px-4 py-16 max-w-4xl flex-grow">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-6 text-center">
                        Terms of Service
                    </h1>
                    <p className="text-slate-600 mb-8 text-center">
                        Last Updated: August 9, 2025
                    </p>

                    <section className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                1. Acceptance of Terms
                            </h2>
                            <p className="text-slate-600">
                                By accessing or using the PowerPay application and its services, you signify that you have read, understood, and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our services. These Terms constitute a legally binding agreement between you and PowerPay.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                2. User Accounts & Eligibility
                            </h2>
                            <p className="text-slate-600">
                                You must be at least 18 years old to create an account and use our services. You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. We reserve the right to suspend or terminate your account at our sole discretion.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                3. Prohibited Conduct & Use
                            </h2>
                            <p className="text-slate-600">
                                You agree not to use our services for any illegal, fraudulent, or unauthorized purpose. Prohibited activities include, but are not limited to, money laundering, fraud, spamming, harassment, and any activity that could harm PowerPay or its users. You also agree not to interfere with the proper functioning of our service.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                4. Intellectual Property
                            </h2>
                            <p className="text-slate-600">
                                The PowerPay application and all its original content, features, and functionality are the exclusive property of the developers and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You are granted a limited, non-exclusive, non-transferable, revocable license to use the application for your personal, non-commercial use.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                5. Disclaimer of Warranties
                            </h2>
                            <p className="text-slate-600">
                                The PowerPay service is provided on an "as is" and "as available" basis without any warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the service will be uninterrupted, secure, or error-free.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                6. Limitation of Liability
                            </h2>
                            <p className="text-slate-600">
                                To the maximum extent permitted by applicable law, PowerPay and its affiliates, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the service.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                7. Governing Law
                            </h2>
                            <p className="text-slate-600">
                                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where the project is based, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts located in that jurisdiction to resolve any legal matter arising from these Terms.
                            </p>
                        </div>
                    </section>
                </main>

            </div>
        </>
    );
};

export default TermsOfServicePage;
