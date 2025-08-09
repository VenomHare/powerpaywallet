import Image from 'next/image';
import React from 'react';

// This component renders the About page for the project.
// It showcases the project creator's profile, a detailed project journey,
// technologies used, and the system's architecture.
// The design is clean and modern, using only Tailwind CSS.

const AboutPage = () => {
  const technologies = [
    { name: 'Next.js', new: false },
    { name: 'Express.js', new: false },
    { name: 'Redux', new: true },
    { name: 'Turborepo', new: true },
    { name: 'CI/CD', new: true },
    { name: 'Tailwind CSS', new: false },
    { name: 'Prisma ORM', new: false },
    { name: 'Zod', new: false },
    { name: 'Docker', new: false },
    { name: 'Webhooks', new: true },
    { name: 'Postgres', new: false },
    { name: 'Next Auth', new: true },
    { name: 'Cloudinary CDN', new: true },
  ];

  return (
    <>
      <div className="bg-slate-50 text-slate-800 min-h-screen font-['Manrope'] flex flex-col items-center p-4 sm:p-8">

        <main className="container mx-auto max-w-5xl py-16">

          {/* About Me Section */}
          <section className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12 mb-20 p-8 bg-slate-100 rounded-3xl shadow-xl animate-fade-in">
            <div className="flex-shrink-0">
              <Image
                src="https://avatars.githubusercontent.com/u/70837929?v=4"
                alt="Sarthak Kadam's GitHub Profile"
                width={512}
                height={512}
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
                Sarthak Kadam
              </h1>
              <p className="text-lg text-slate-600 mb-4">
                A dedicated and passionate full-stack developer with a focus on building secure and scalable applications.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                {/* GitHub */}
                <a href="https://github.com/venomhare" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 98 96">
                    <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="https://linkedin.com/in/sarthak00dev" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512">
                    <path fill="#0A66C2" d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.37 53.37 0 1 1 53.37-53.37a53.36 53.36 0 0 1-53.37 53.37zM447.9 448h-92.4V306.4c0-33.7-12.1-56.7-42.4-56.7c-23.1 0-36.9 15.5-42.9 30.5c-2.2 5.3-2.8 12.6-2.8 20V448h-92.5s1.2-270.5 0-299.1h92.5v42.4c12.3-19 34.3-46.1 83.4-46.1c60.9 0 106.6 39.8 106.6 125.2V448z" />
                  </svg>
                </a>

                {/* X */}
                <a href="https://x.com/KadamSarthak" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1200 1227">
                    <path fill="#000000" d="M714.163 519.284L1160.89 0H1052.4L667.137 450.887L356.785 0H0l466.02 680.681L0 1226.56h108.49l404.54-466.867L843.215 1226.56H1200L714.163 519.284ZM561.99 687.049l-46.38-66.674L147.965 79.884h153.17l298.34 428.505l46.38 66.675l386.03 554.08H878.715L561.99 687.049Z" />
                  </svg>
                </a>

                {/* Email */}
                <a href="mailto:sarthakkadam147@gmail.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M502.3 190.8L327.4 338.2c-21.8 18.1-53 18.1-74.8 0L9.7 190.8C3.5 185.7 0 178 0 170V136c0-22.1 17.9-40 40-40h432c22.1 0 40 17.9 40 40v34c0 8-3.5 15.7-9.7 20.8zM0 200.5v175.5c0 22.1 17.9 40 40 40h432c22.1 0 40-17.9 40-40V200.5L341.1 357.3c-35.5 29.4-86.7 29.4-122.2 0L0 200.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* Project Details Section */}
          <section className="mb-20 space-y-16 animate-fade-in animate-fade-in-delay-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              My Journey & Learnings
            </h2>

            {/* Difficulties Faced */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Difficulties Faced
              </h3>
              <ul className="list-disc list-inside text-slate-600 space-y-4">
                <li>
                  <strong className="font-semibold text-slate-800">Building a secure, multi-server architecture:</strong> Ensuring secure communication between the client, webhook, and mock bank servers was a significant challenge. This required careful implementation of protocols and secure endpoints to prevent unauthorized access.
                </li>
                <li>
                  <strong className="font-semibold text-slate-800">Implementing real-time updates without a dedicated library:</strong> Integrating technologies like Webhooks and a mock banking system required custom logic to handle asynchronous events and maintain data consistency across all services.
                </li>
                <li>
                  <strong className="font-semibold text-slate-800">Learning new technologies under a tight deadline:</strong> The project pushed me to quickly and effectively learn several new technologies like Redux, NextAuth, and Turborepo, which was a demanding but rewarding process.
                </li>
                <li>
                  <strong className="font-semibold text-slate-800">Fixing UI Bugs:</strong> Fixing subtle UI bugs proved to be a significant time investment, often requiring several hours to debug and resolve seemingly illogical issues on the front end.
                </li>
              </ul>
            </div>

            {/* What I Learned */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                What I Learned
              </h3>
              <ul className="list-disc list-inside text-slate-600 space-y-4">
                <li>
                  <strong className="font-semibold text-slate-800">Scalable Architecture:</strong> Gained hands-on experience in designing a modular, multi-server architecture that is both secure and scalable.
                </li>
                <li>
                  <strong className="font-semibold text-slate-800">State Management:</strong> Mastered complex state management with Redux to handle global application state efficiently.
                </li>
                <li>
                  <strong className="font-semibold text-slate-800">Component Reusability:</strong> Developed a deep understanding of component-based architecture and created my own reusable components for common UI elements.
                </li>
                <li>
                  <strong className="font-semibold text-slate-800">API Integration:</strong> Learned to effectively integrate and manage a custom webhook system for seamless, real-time communication between services.
                </li>
              </ul>
            </div>
          </section>

          {/* Technologies Used Section */}
          <section className="mb-20 animate-fade-in animate-fade-in-delay-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Technologies Used
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech) => (
                <div key={tech.name} className="relative bg-slate-200 text-slate-800 font-bold px-5 py-2 rounded-full shadow-md hover:cursor-pointer active:scale-95">
                  {tech.name}
                  {tech.new && (
                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-xs bg-blue-600 text-white font-semibold rounded-full px-2 py-1">
                      New
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-slate-600 max-w-2xl mx-auto">
              The front-end of this project was meticulously handcrafted using only **Tailwind CSS**. No external UI libraries or component frameworks were used. This includes all custom alerts, popups, and dialogs, demonstrating a deep understanding of core web development principles.
            </p>
          </section>

          {/* Architecture Section */}
          <section className="animate-fade-in animate-fade-in-delay-3">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Project Architecture
            </h2>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
              <p className="text-slate-600 mb-4">
                The PowerPay application is built on a robust, microservice-like architecture to ensure security and scalability. The system is composed of three primary services:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-4">
                <li>
                  <strong className="font-semibold text-slate-800">Client Server:</strong> The user-facing front-end built with Next.js and React. It handles user authentication, dashboard display, and all user interactions.
                </li>
                <li>
                  <strong className="font-semibold text-slate-800">Webhook Server:</strong> A dedicated service that securely listens for events from the mock bank server. This decoupled approach ensures that the client server never directly communicates with the bank, significantly enhancing security.
                </li>
                <li>
                  <strong className="font-semibold text-slate-800">Mock Bank Server:</strong> A simulated banking service that handles all financial transactions. It sends a secure webhook to our webhook server upon transaction completion, maintaining a secure and reliable communication flow.
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                This architecture ensures that all sensitive financial data is handled through a secure, non-public channel, providing a high level of security and integrity for the entire system.
              </p>
            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default AboutPage;
