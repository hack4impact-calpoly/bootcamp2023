import React from 'react';
import '../../../styles.css';

const ContactPage: React.FC = () => {
  return (
    <div>
      <main>
        <h1 className="page-title">
          Let's connect!
        </h1>
        <div className="socials">
          <a href="https://www.linkedin.com/in/sameerpaykel/">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Sammy's LinkedIn" width="100" height="100" />
          </a>
          <a href="https://www.instagram.com/sameerpaykel/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Sammy's Instagram" width="100" height="100" />
          </a>
          <a href="mailto:someone@example.com">
            <img src="emaillogo.png" alt="Sammy's Email" width="100" height="100" />
          </a>
        </div>
      </main>
      <footer className="footer">
        © 2023 Sammy Paykel | All Rights Reserved
      </footer>
    </div>
  );
};

export default ContactPage;
