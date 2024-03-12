import React from "react";

const PrivacyPolicy = () => {
  return (
    <section>
      <div className="container mx-auto w-[90%] mb-10">
        <div className="banner-for-content bg-left-top h-[10vh] md:h-[20vh] mt-6 flex justify-center items-center rounded-2xl">
          <h2 className="text-[2rem] md:text-4xl text-amber-100 font-[cookie,cursive] font-bold">
            Privacy Policy
          </h2>
        </div>
        <div className="flex flex-col gap-10 text-justify mt-5">
          <div className="flex flex-col gap-5">
            <p>
              We care about keeping your trust and protecting your info. Our
              Privacy Policy explains how we use your personal data on the Rio
              Apparels Website(Website).
            </p>
            <p>
              You can explore parts of the Platform without giving us any info.
              But, please know, we only provide products/services within India
              on this Platform. If you use our Platform, share info, or use our
              products/services, you're agreeing to follow this Privacy Policy.
              If you don't agree, please don't use our Platform.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-semibold">
              collection of your information
            </h3>
            <p>
              When you're on our Platform, we collect and keep the info you give
              us. Usually, you can look around without telling us anything
              personal. But when you do share info, we'll know it's from you. We
              try to tell you what we really need and what you can choose to
              give. You have a choice—you don't have to give info if you don't
              want to use a specific service or feature on our Platform. Your
              privacy matters, and we want you to feel comfortable using our
              Platform, so we're clear about how we collect data.
            </p>
            <p>
              We may track your buying behavior, preferences, and other
              information that you choose to provide on our Platform. We use
              this information to do internal research on our users'
              demographics, interests, and behavior to better understand,
              protect and serve our users. This information is compiled and
              analyzed on an aggregated basis.We observe your purchases,
              preferences, and provided details on our Platform. This helps us
              research our users' demographics, interests, and actions
              internally to serve and protect them better. The information
              gathered is compiled and analyzed collectively to understand our
              user community comprehensively.
            </p>
            <p>
              We might Collect Your personal details like your email, address,
              name, phone number, and payment info when you create an account or
              buy something from us.
            </p>
            <p>
              If you reach out to us through emails or letters, or if others or
              third parties talk to us about what you do on the Platform, we
              might gather that information and keep it in a file connected to
              you.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-semibold">Links to Other Sites</h3>
            <p>
              Our Platform might have links to other websites or apps that
              gather your personal info. We aren't in charge of how those linked
              websites handle privacy or what they show.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-semibold">
              Changes to this Privacy Policy
            </h3>
            <p>
              Keep an eye on our Privacy Policy for any updates. We might revise
              it to mirror changes in how we handle information. We'll notify
              you of major updates by indicating the last update date,
              displaying a notice on our Platform, or sending an email as needed
              by the law.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-semibold">Grievance Officer</h3>
            <p>
              As per the Information Technology Act 2000 and its regulations,
              the Grievance Officer's name and contact information are furnished
              below:
            </p>
            <div className="flex flex-col gap-1">
              <p>Mr. Mohammed Ibrahim Riyaaz</p>
              <p>Designation: Senior Manager</p>
              <p>Rio Apparels.</p>
              <p>Ambattur, Chennai,</p>
              <p>Tamil Nadu, India, 600-005.</p>
              <p>
                Email:{" "}
                <a
                  className="text-blue-400"
                  href="mailto:riofashions3@gmail.com"
                >
                  riofashions3@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-semibold">Customer Support</h3>
            <p>
              If you ever have any questions, worries or issues about how we
              handle your personal information according to this privacy policy
              please feel free to contact us at rioapparels@gmail.com. we're
              here to help and address any concerns you might have.
            </p>
          </div>
          <i className="text-gray-500">Last Updated: 4th January 2024</i>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
