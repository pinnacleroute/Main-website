import React from "react";

const TermsOfUse = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
      <p className="mb-4">
        By accessing or using our website, about us, or services (collectively,
        the “Services”), you agree to be bound by these Terms of Use (“Terms”).
        Please read them carefully.
      </p>
      <p className="mb-6">
        If you do not agree with any part of these Terms, please do not use our
        Services.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="font-semibold text-lg mb-1">1. Eligibility</h2>
          <p>
            You must be at least 16 years old to access our Services. By using
            our Services, you represent and warrant that you meet the applicable
            age requirement and have the legal capacity to enter into these Terms.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-1">2. Use of Services</h2>
          <p>You agree to use our Services in accordance with all applicable laws and regulations. You must not:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Use the Services for unlawful, harmful, or fraudulent activities</li>
            <li>Attempt to gain unauthorized access to our systems or networks</li>
            <li>Reverse-engineer or copy the software, structure, or layout of the website</li>
            <li>Interfere with or disrupt other users’ use of the Services</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-1">3. Intellectual Property</h2>
          <p>
            All content, trademarks, graphics, code, and intellectual property related to Pinnacle Route are owned or licensed by us.
            You may not copy, reproduce, distribute, or create derivative works without our prior written permission.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-1">4. Payments and Subscriptions</h2>
          <p>
            Certain services may be subject to fees or subscription plans. All payments must be made in accordance with our pricing and billing policies. We reserve the right to change pricing with prior notice.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-1">5. User Content</h2>
          <p>
            If you submit content (e.g., testimonials, comments, files) through our Services, you grant us a non-exclusive, royalty-free license to use, reproduce, modify, and display it as part of our business operations.
            You are solely responsible for your content and its legality.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-1">6. Third-Party Links and Tools</h2>
          <p>
            Our Services may contain links to third-party websites or tools. We are not responsible for their content or practices. Use them at your own risk and review their respective terms and policies.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-1">7. Termination</h2>
          <p>
            We may suspend or terminate your access to the Services at any time for any reason, including but not limited to breach of these Terms. You may also terminate your account at any time.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-1">8. Disclaimers</h2>
          <p>
            Our Services are provided "as is" and "as available." We make no warranties or guarantees regarding the accuracy, completeness, or reliability of the Services. Use of our Services is at your sole risk.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-1">9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Pinnacle Route shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the Services.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-1">10. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Pinnacle Route, its officers, affiliates, and employees from any claims, liabilities, damages, or expenses resulting from your use of the Services or violation of these Terms.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-1">11. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to conflict of law principles.
            Any disputes shall be subject to the exclusive jurisdiction of the courts in [Insert Location].
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-1">12. Changes to These Terms</h2>
          <p>
            We reserve the right to update or modify these Terms at any time. Changes will be effective upon posting on our website. Your continued use of the Services constitutes acceptance of the revised Terms.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-1">13. Contact Us</h2>
          <p>Email: <a href="mailto:admin@pinnacleroute.com" className="text-blue-600 underline">admin@pinnacleroute.com</a></p>
          <p>Website: <a href="https://www.pinnacleroute.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.pinnacleroute.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
