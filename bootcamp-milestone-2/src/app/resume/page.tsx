export default function Resume() {
  return (
    <main className="flex flex-col">
      <a href="/resume/resume_asarelcastellanos.pdf" download="resume_asarelcastellanos.pdf">
        <div className="container mx-auto bg-[white]">
          <div className="w-full text-center py-5">
            <h2 className="text-4xl">Asarel Castellanos</h2>
            <div className="flex justify-around">
              <p>Los Angeles, CA</p>
              <p>asarelc@gmail.com</p>
              <p>323-572-1018</p>
              <p>asarelcastellanos.com</p>
            </div>
          </div>
          <div className="px-10 mt-5">
            <h3 className="text-2xl font-semibold">Education</h3>
            <div className="flex justify-between px-2.5">
              <h4 className="text-lg font-medium">
                California Polytechnic State University, San Luis Obispo
              </h4>
              <h4>San Luis Obispo, CA</h4>
            </div>
            <div className="flex justify-between px-2.5">
              <h4>BS Economics - Quantitative Analysis</h4>
              <h4>Sept 2023 - June 2025</h4>
            </div>
          </div>
          <div className="px-10 mt-5">
            <h3 className="text-2xl font-semibold">Work Experience</h3>
            <div className="py-2.5">
              <div className="flex justify-between px-2.5">
                <h4 className="text-lg font-medium">Axios</h4>
                <h4>Remote</h4>
              </div>
              <div className="flex justify-between px-2.5">
                <h4 className="italic">Software Engineering Intern</h4>
                <h4>Jun 2023 - Aug 2023</h4>
              </div>
              <p className="px-10">
                • Conducted research and deployed a honeypot on newsletter
                sign-up forms, identifying and labeling 3,000 suspected bots
                within the first week of implementation.
              </p>
              <p className="px-10">
                • Contributed to the migration of newsletter sign up and
                confirmation pages from Webflow to Next.js, while also writing
                an accessible carousel and newsletter card component in
                Typescript.
              </p>
              <p className="px-10">
                • Engaged in competitor newsletter page analysis, providing
                research-based recommendations, and actively contributed to
                design of the newsletter signup and confirmation pages.
              </p>
            </div>
            <div className="py-2.5">
              <div className="flex justify-between px-2.5">
                <h4 className="text-lg font-medium">tella.friend</h4>
                <h4>Los Angeles, CA</h4>
              </div>
              <div className="flex justify-between px-2.5">
                <h4 className="italic">Software Engineering Intern</h4>
                <h4>May 2023 - Aug 2023</h4>
              </div>
              <p className="px-10">
                • Implemented a CI/CD pipeline with Github Actions, thus
                decreasing deployment time by 90%.
              </p>
              <p className="px-10">
                • Built student onboarding and reporting pages with React Native
                and Javscript, allowing students to submit reports in 4 steps.
              </p>
              <p className="px-10">
                • Refactored login, home, and resource pages by implementing
                React Contexts, enabling seamless data access across multiple
                pages.
              </p>
            </div>
            <div className="py-2.5">
              <div className="flex justify-between px-2.5">
                <h4 className="text-lg font-medium">Santa Monica College</h4>
                <h4>Los Angeles, CA</h4>
              </div>
              <div className="flex justify-between px-2.5">
                <h4 className="italic">
                  Computer Science and Information Systems Tutor
                </h4>
                <h4>Mar 2022 - May 2023</h4>
              </div>
              <p className="px-10">
                • Provided comprehensive tutoring support for 80% of SMC's
                computer science courses, spanning from introductory levels to
                advanced data structures.
              </p>
              <p className="px-10">
                • Achieved high student retention and received top ratings among
                all program tutors, maintaining a 90% student satisfaction rate.
              </p>
            </div>
            <div className="py-2.5">
              <div className="flex justify-between px-2.5">
                <h4 className="text-lg font-medium">Snap</h4>
                <h4>Santa Monica, CA</h4>
              </div>
              <div className="flex justify-between px-2.5">
                <h4 className="italic">Engineering Academy Scholar</h4>
                <h4>Jun 2022 - Aug 2022</h4>
              </div>
              <p className="px-10">
                • Developed a Snapchat template using React Native, adopted by
                all Snap Academies teams, streamlining instructors&apos;
                workflow and saving approximately 1 week of their time.
              </p>
              <p className="px-10">
                • Solely engineered a Snap Mini using React Native, integrating
                Expo Camera and Firebase within a 6-hour timeframe.
              </p>
              <p className="px-10">
                • Collaborated with a cross-functional team of designers and
                marketers to create a Snap Mini addressing a social cause.
              </p>
            </div>
            <div className="py-2.5">
              <div className="flex justify-between px-2.5">
                <h4 className="text-lg font-medium">TRIVIAL</h4>
                <h4>Remote</h4>
              </div>
              <div className="flex justify-between px-2.5">
                <h4 className="italic">Software Engineering Intern</h4>
                <h4>Oct 2021 - Nov 2021</h4>
              </div>
              <p className="px-10">
                • Utilized Node.js to implement 3 API integrations connecting
                TRIVIAL and Typeform.
              </p>
              <p className="px-10">
                • Tested and validated the functionality and data security of
                the 3 integrations using Mocha and Chai.
              </p>
              <p className="px-10">
                • Published 2 educational articles on Intercom, empowering users
                to effectively leverage the newly implemented Typeform
                integrations.
              </p>
            </div>
          </div>
          <div className="px-10 mt-5">
            <h3 className="text-2xl font-semibold">Projects</h3>
            <h4 className="text-md font-medium pt-2.5 px-2.5">
              SMC Grades | Python, MongoDB, Javascript, Next.js, TailwindCSS
            </h4>
            <p className="text-sm px-2.5">
              A website to view and analyze grade distributions so students can
              choose their schedules.
            </p>
            <h4 className="text-md font-medium pt-2.5 px-2.5">
              Salon Javascript, Next.js, Sanity (CMS), TailwindCSS
            </h4>
            <p className="text-sm px-2.5">
              A concept website for a local salon.
            </p>
          </div>
          <div className="px-10 mt-5 pb-10">
            <h3 className="text-2xl font-semibold">Skills</h3>
            <p className="text-md px-2.5 pt-1">
              Programming Languages: Typescript, Javascript, Python, Java,
              C/C++, HTML, CSS
            </p>
            <p className="text-md px-2.5 pt-1">
              Frameworks/Libraries: Next.js, React.js, SvelteKit, React Native,
              TailwindCSS, Sanity
            </p>
            <p className="text-md px-2.5 pt-1">
              Backend: Node.js, Express, MongoDB, Firebase, Google App Engine,
              Heroku
            </p>
            <p className="text-md px-2.5 pt-1">
              Tools: VS Code, Github, Postman, Vercel, Jira, Notion, Sailthru,
              Cypress
            </p>
          </div>
        </div>
      </a>
    </main>
  );
}
