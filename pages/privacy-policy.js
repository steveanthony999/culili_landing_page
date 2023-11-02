import Layout from '@/components/Layout';
import styles from '@/styles/policies.module.css';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className={styles.Policies}>
        <div className={styles.container}>
          <h1>Privacy Policy</h1>

          {/* Introduction */}
          <section>
            <h2>Introduction</h2>
            <p>
              Welcome to Culili, a unique platform designed to bridge the gap
              between freelance frontend developers and small business
              restaurant owners. Our service not only facilitates this
              connection but also provides a comprehensive backend solution for
              restaurant websites alongside various other features to enhance
              your online presence.
            </p>
            <p>
              We operate exclusively online, making it a priority to maintain a
              secure and private environment for all our users. Your privacy is
              of utmost importance to us. At Culili, we may utilize the success
              stories, testimonials, and experiences shared by developers, as
              well as showcase the restaurant websites built via our platform
              for advertising purposes. However, we want to assure you that your
              information will never be sold to third parties.
            </p>
            <p>
              For any inquiries or concerns regarding our privacy practices,
              feel free to reach out to us at steve@culili.com or call us at
              702-540-9331.
            </p>
          </section>

          {/* Information Collection */}
          <section>
            <h2>Information Collection</h2>
            <p>
              At Culili, we collect minimal personal information to facilitate
              the connections between freelance developers and small business
              restaurant owners, and to ensure the smooth operation of our
              platform. The personal information we collect includes:
            </p>
            <ul>
              <li>First Name</li>
              <li>Email Address</li>
            </ul>
            <p>
              Users will also be integrating API keys from other platforms such
              as Stripe and Google Maps with Culili as part of the functionality
              we offer. Additionally, while we will process subscription
              payments, the primary personal information required from our users
              are their first name and email address. Any other personal
              information collected through payment processing is handled
              securely and is not used for other purposes.
            </p>
            <p>
              In the future, we may introduce features that allow users to
              utilize their location to find small restaurants in specified
              areas. This will be a voluntary feature and users will have the
              option to enable or disable location services.
            </p>
            <p>
              Information is primarily collected through forms on our platform.
              Additionally, we may collect some metrics and data from
              third-party platforms like Stripe, necessary for enhancing the
              developer dashboard and overall user experience on Culili.
            </p>
            <p>
              We do not collect any non-personal information like browser type
              or IP address at the moment, but will keep our users informed of
              any changes to our information collection practices.
            </p>
          </section>

          {/* Information Use */}
          <section>
            <h2>Information Use</h2>
            <p>
              The information we collect serves various purposes, aimed at
              enhancing your experience on Culili and ensuring the smooth
              operation of our services. Here’s how we use the information:
            </p>
            <ul>
              <li>
                <span>Communication</span>: We use your email address to send
                newsletters and blog posts that provide value and keep you
                updated with the latest happenings at Culili.
              </li>
              <li>
                <span>Platform Functionality</span>: Your information aids in
                personalizing your dashboard and ensuring the platform functions
                seamlessly.
              </li>
              <li>
                <span>Advertising</span>: Minimal advertising on select social
                platforms may be done using the information we have, to promote
                Culili and connect more freelance developers with restaurant
                owners.
              </li>
              <li>
                <span>Service Improvement</span>: We continuously strive to
                improve our services based on the feedback and interactions of
                our users. Your information is valuable in guiding these
                improvements.
              </li>
              <li>
                <span>Analytics and Research</span>: Insights derived from
                analytics and research, using the collected information, play a
                crucial role in our decision-making process and in evolving our
                platform to better meet your needs.
              </li>
            </ul>
            <p>
              While marketing and promotional activities are kept to a minimal,
              they are aimed at growing our community and providing more
              opportunities for connections and collaborations on Culili.
            </p>
          </section>

          {/* Information Sharing and Disclosure */}
          <section>
            <h2>Information Sharing and Disclosure</h2>
            <p>
              At Culili, we have a strict policy of not sharing your information
              with third parties or service providers. Your privacy is valued,
              and we work diligently to safeguard your personal information.
              Here are the circumstances under which information may be shared
              or disclosed:
            </p>
            <ul>
              <li>
                <span>Legal Compliance and Business Transfers</span>: We may
                disclose your information if required by law, legal process, or
                in the event of a merger, acquisition, or sale of all or a
                portion of our assets. In such cases, we will take steps to
                ensure your privacy rights continue to be protected.
              </li>
            </ul>
            <p>
              Apart from the above-mentioned scenario, we do not share or
              disclose your information under any other circumstances. Our
              primary aim is to uphold the trust and confidence you have in us
              by ensuring a secure and private environment on Culili.
            </p>
          </section>

          {/* Information Security */}
          <section>
            <h2>Information Security</h2>
            <p>
              At Culili, we take the security of your information seriously. We
              employ robust measures to ensure the protection of your personal
              data against unauthorized access, alteration, disclosure, or
              destruction. Here are some of the security measures we have in
              place:
            </p>
            <ul>
              <li>
                <span>Third-party Authentication</span>: We utilize reputable
                third-party authentication tools like Passport.js and Clerk to
                manage user authentication securely.
              </li>
              <li>
                <span>Encryption</span>: All sensitive data is encrypted using
                industry-standard encryption technologies provided by trusted
                third parties.
              </li>
              <li>
                <span>Minimal Data Collection</span>: We adhere to the principle
                of data minimization by collecting only the necessary
                information required to provide and improve our services.
              </li>
            </ul>
            <p>
              In the unlikely event of a data breach, we have a process in place
              to promptly notify affected users via our SendGrid email list,
              ensuring you are informed and can take necessary steps to protect
              your information.
            </p>
            <p>
              We are committed to using the best known third-party tools to
              uphold the security and privacy of your information on Culili.
            </p>
          </section>

          {/* User Rights */}
          <section>
            <h2>User Rights</h2>
            <p>
              At Culili, we believe in empowering our users by providing them
              with control over their personal information. Here are the rights
              and choices available to our users:
            </p>
            <ul>
              <li>
                <span>Access and Correction</span>: Users have the right to
                access and correct their personal information by contacting us
                directly.
              </li>
              <li>
                <span>Opt-out</span>: While the information we collect is
                crucial for the functioning of Culili's services, users have the
                option to opt-out. However, this may affect the services we are
                able to provide.
              </li>
              <li>
                <span>Data Download</span>: Users have the right to download
                their data from our platform.
              </li>
              <li>
                <span>Data Deletion</span>: Users can request the deletion of
                their personal information by contacting us. Furthermore, we
                have a process in place to automatically remove user information
                60 days after they've suspended service. Notifications regarding
                data deletion will be sent on the day of suspension, 30 days
                before deletion, 14 days before deletion, 7 days before
                deletion, 2 days before deletion, 1 day before deletion, the day
                of deletion, and after deletion to ensure our users are
                well-informed.
              </li>
            </ul>
            <p>
              We are committed to responding to your requests and ensuring you
              have full control over your information on Culili.
            </p>
          </section>

          {/* International Data Transfers */}
          <section>
            <h2>International Data Transfers</h2>
            <p>
              At Culili, we prioritize keeping your data secure. All user data
              is stored within the United States and will not be transferred
              internationally. In the event of any future changes regarding data
              transfers, such changes will be clearly outlined in our terms and
              users will be duly notified.
            </p>
            <p>
              We adhere to strict data storage policies to ensure your
              information is treated securely and in accordance with this
              Privacy Policy.
            </p>
          </section>

          {/* Children’s Privacy */}
          <section>
            <h2>Children’s Privacy</h2>
            <p>
              Culili is not directed towards children, and we do not knowingly
              collect personal information from individuals under the age of 13
              or any other age as defined by the laws in your jurisdiction.
              While there is no age minimum for signing up for our newsletter,
              our platform is designed for individuals who are of age to conduct
              business. Our payment processor, Stripe, has its own age
              restrictions and requirements, ensuring that users engaging in
              transactions on Culili meet the necessary age criteria.
            </p>
            <p>
              We trust our users to provide accurate information regarding their
              age, and it is assumed that users who choose to use Culili as a
              platform are of a legal age to perform business activities.
            </p>
          </section>

          {/* Changes to the Privacy Policy */}
          <section>
            <h2>Changes to the Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. When we make changes to this policy, we will
              notify our users via email. The updated Privacy Policy will also
              be posted on our website for your review.
            </p>
            <p>
              It's important to us that you stay informed about how we protect
              your privacy. Continued use of Culili's platform after receiving
              notice of the changes implies your acceptance of the updated
              Privacy Policy. We encourage our users to regularly review this
              policy to stay informed.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2>Contact Information</h2>
            <p>
              If you have any questions or concerns regarding our Privacy Policy
              or our privacy practices, we are here to help. Feel free to
              contact us at steve@culili.com or call us at 702-540-9331. We are
              committed to ensuring a transparent and secure environment for all
              our users on Culili.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
