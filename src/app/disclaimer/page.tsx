import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata, formatDate } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Disclaimer",
  description:
    "The scope and limits of the information on this directory: informational content only, no legal or financial advice, no affiliation with SBI/YONO SBI or any listed platform, and independently operated third-party applications.",
  path: "/disclaimer",
});

const LAST_UPDATED = "2026-07-22";
const CONTACT_EMAIL = "AllYonopattinewsupport@gmail.com";

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Disclaimer", href: "/disclaimer" },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Disclaimer
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Last updated {formatDate(LAST_UPDATED)}
      </p>

      <div className="content-prose mt-6">
        <p>
          This Disclaimer applies to every visitor and user of the
          AllYonoPatti website, including its game listings, promo-code
          pages, reward information, guides, blog articles, awareness
          resources, images, links, and other published material.
        </p>
        <p>
          AllYonoPatti is an independent informational directory that
          publishes general information about third-party gaming
          applications, card games, casual games, promotional codes,
          rewards, and publicly available platform details.
        </p>
        <p>
          By accessing or using this website, you acknowledge that you have
          read and understood this Disclaimer. If you do not agree with any
          part of it, you should discontinue using the website.
        </p>

        <h2>Informational content only</h2>
        <p>
          Everything published on AllYonoPatti is provided for general
          informational and educational purposes. Our content should not be
          treated as:
        </p>
        <ul>
          <li>legal advice;</li>
          <li>financial advice;</li>
          <li>tax advice;</li>
          <li>professional advice;</li>
          <li>a recommendation to download an application;</li>
          <li>an invitation to register with a platform;</li>
          <li>encouragement to deposit money;</li>
          <li>encouragement to place a bet or stake;</li>
          <li>a guarantee of rewards or winnings; or</li>
          <li>an endorsement of any third-party operator.</li>
        </ul>
        <p>
          Users remain solely responsible for deciding whether to visit,
          download, register with, or use any third-party platform.
        </p>

        <h2>Independent informational directory</h2>
        <p>
          AllYonoPatti does not own, develop, operate, manage, or control any
          third-party gaming application listed or discussed on this website
          unless expressly stated otherwise. We are not a gambling operator,
          gaming operator, payment processor, wallet provider, app developer,
          or customer-support provider for any listed platform.
        </p>
        <p>We do not control:</p>
        <ul>
          <li>account registration;</li>
          <li>identity verification;</li>
          <li>deposits;</li>
          <li>withdrawals;</li>
          <li>bets or stakes;</li>
          <li>game outcomes;</li>
          <li>prizes or rewards;</li>
          <li>bonus eligibility;</li>
          <li>payment processing;</li>
          <li>account suspensions;</li>
          <li>customer complaints;</li>
          <li>privacy practices; or</li>
          <li>the availability of third-party platforms.</li>
        </ul>
        <p>
          All third-party applications remain under the ownership,
          management, and responsibility of their respective operators.
        </p>

        <h2>No affiliation with SBI or YONO SBI</h2>
        <p>
          AllYonoPatti is not affiliated with, sponsored by, endorsed by, or
          officially connected to the State Bank of India, SBI, or the YONO
          SBI application. The word &quot;Yono&quot; is used on this website
          only as a descriptive reference to a naming pattern commonly used
          by certain independent gaming applications.
        </p>
        <p>
          Nothing on AllYonoPatti should be interpreted as suggesting that
          SBI or YONO SBI owns, operates, approves, supports, or guarantees
          any gaming application mentioned on this website. All trademarks,
          brand names, logos, and other intellectual-property rights
          associated with SBI and YONO SBI remain the property of their
          respective owners.
        </p>

        <h2>No affiliation with listed gaming platforms</h2>
        <p>
          Unless a relationship is expressly disclosed, AllYonoPatti is not
          affiliated with, sponsored by, endorsed by, or officially connected
          to any gaming platform listed on this website. The inclusion of an
          application, logo, promo code, screenshot, reward, review, or link
          does not mean that AllYonoPatti:
        </p>
        <ul>
          <li>owns the platform;</li>
          <li>operates the platform;</li>
          <li>has verified every operator claim;</li>
          <li>guarantees the platform&apos;s legality;</li>
          <li>certifies the platform&apos;s security;</li>
          <li>approves its business practices;</li>
          <li>guarantees its payments; or</li>
          <li>recommends participation.</li>
        </ul>
        <p>
          A listing is provided for identification and informational
          purposes only.
        </p>

        <h2>Affiliate and referral disclosure</h2>
        <p>
          Some links, buttons, promo codes, or platform references on
          AllYonoPatti may be affiliate or referral links. If a visitor
          follows one of these links or completes a qualifying action on a
          third-party platform, AllYonoPatti may receive a referral fee or
          commission. This will generally not create an additional cost for
          the visitor.
        </p>
        <p>
          An affiliate relationship does not mean that AllYonoPatti owns,
          controls, or guarantees the relevant platform. Affiliate
          compensation does not remove the user&apos;s responsibility to
          verify the operator, terms, legality, privacy practices, and risks
          associated with a platform. Where practical, an additional
          affiliate disclosure may appear near the relevant link or button —
          see our full{" "}
          <Link href="/affiliate-disclosure">affiliate disclosure</Link> for
          details.
        </p>

        <h2>Third-party applications</h2>
        <p>
          Applications discussed or linked on AllYonoPatti are independently
          developed, owned, and operated by third parties. AllYonoPatti does
          not supervise or control:
        </p>
        <ul>
          <li>application development;</li>
          <li>game mechanics;</li>
          <li>scoring systems;</li>
          <li>random outcomes;</li>
          <li>tournaments or contests;</li>
          <li>account balances;</li>
          <li>deposits and withdrawals;</li>
          <li>promotions;</li>
          <li>customer support;</li>
          <li>security systems;</li>
          <li>privacy practices;</li>
          <li>data collection;</li>
          <li>dispute resolution; or</li>
          <li>platform availability.</li>
        </ul>
        <p>
          Any interaction between a user and a third-party application takes
          place directly between those parties. AllYonoPatti is not
          responsible for the actions, omissions, promises, policies, or
          decisions of a third-party operator.
        </p>

        <h2>User responsibility and due diligence</h2>
        <p>
          Users are responsible for conducting their own checks before
          accessing, installing, or using a third-party application. Before
          taking action, users should verify:
        </p>
        <ul>
          <li>the legal identity of the operator;</li>
          <li>the official website or authorised app-store listing;</li>
          <li>the authenticity of the domain;</li>
          <li>the Terms and Conditions;</li>
          <li>the Privacy Policy;</li>
          <li>age and eligibility requirements;</li>
          <li>regional restrictions;</li>
          <li>customer-support details;</li>
          <li>payment and withdrawal conditions;</li>
          <li>promotional terms;</li>
          <li>app permissions;</li>
          <li>applicable Indian law; and</li>
          <li>whether the service is appropriate for their circumstances.</li>
        </ul>
        <p>
          Users should not rely solely on advertisements, social-media
          posts, influencer promotions, referral messages, screenshots,
          testimonials, or promotional banners. Our{" "}
          <Link href="/guides/how-to-review-a-teen-patti-platform-safely">
            platform review guide
          </Link>{" "}
          walks through this process in detail.
        </p>

        <h2>Information may change</h2>
        <p>
          AllYonoPatti makes reasonable efforts to publish clear and useful
          information. However, third-party platforms may change without
          notice. Changes may affect:
        </p>
        <ul>
          <li>operator identity;</li>
          <li>website addresses;</li>
          <li>download links;</li>
          <li>app availability;</li>
          <li>game features;</li>
          <li>promo codes;</li>
          <li>bonuses;</li>
          <li>rewards;</li>
          <li>eligibility requirements;</li>
          <li>payment methods;</li>
          <li>withdrawal rules;</li>
          <li>customer-support details;</li>
          <li>Terms and Conditions;</li>
          <li>Privacy Policies; and</li>
          <li>regional availability.</li>
        </ul>
        <p>
          We do not guarantee that every page will always be complete,
          accurate, current, or free from error. Users should consider the
          date on which a page was published or last reviewed and verify
          important information directly through the relevant operator.
        </p>

        <h2>Verification labels</h2>
        <p>AllYonoPatti may use labels such as:</p>
        <ul>
          <li>Verified;</li>
          <li>Recently Checked;</li>
          <li>Unverified;</li>
          <li>Awaiting Verification;</li>
          <li>Expired;</li>
          <li>Platform-Specific; or</li>
          <li>No Public Information Available.</li>
        </ul>
        <p>
          These labels represent the editorial status recorded when the
          relevant page was reviewed. A verification label does not
          guarantee that the information will remain accurate after that
          date. A promo code, reward, or platform detail may change, expire,
          or become unavailable without notice. Users should always verify
          current details directly with the relevant operator.
        </p>

        <h2>Promo codes, bonuses, and rewards</h2>
        <p>
          AllYonoPatti may publish information about promo codes, welcome
          bonuses, referral rewards, cashback, vouchers, daily rewards,
          spins, events, or other incentives advertised by third-party
          platforms. These offers may be subject to:
        </p>
        <ul>
          <li>expiry dates;</li>
          <li>new-user restrictions;</li>
          <li>account verification;</li>
          <li>location restrictions;</li>
          <li>minimum activity requirements;</li>
          <li>payment conditions;</li>
          <li>wagering or usage requirements;</li>
          <li>platform-specific terms; or</li>
          <li>withdrawal conditions.</li>
        </ul>
        <p>AllYonoPatti does not guarantee that:</p>
        <ul>
          <li>a promo code will work;</li>
          <li>a reward will be credited;</li>
          <li>a user will meet the eligibility rules;</li>
          <li>an offer will remain available;</li>
          <li>a bonus will be withdrawable;</li>
          <li>a stated amount will be paid; or</li>
          <li>an operator will honour an outdated promotion.</li>
        </ul>
        <p>
          Displayed rewards, bonuses, or promotional values should not be
          treated as guaranteed cash, income, or money already belonging to
          a user. Unless expressly stated otherwise, AllYonoPatti does not
          issue, activate, sell, redeem, administer, or process third-party
          promo codes or rewards. See also our post on{" "}
          <Link href="/blog/why-a-promo-code-may-not-work">
            why a promo code may not work
          </Link>
          .
        </p>

        <h2>No account or payment support</h2>
        <p>
          AllYonoPatti does not create, access, operate, recover, or modify
          user accounts held with third-party applications. We cannot assist
          with:
        </p>
        <ul>
          <li>account registration;</li>
          <li>password recovery;</li>
          <li>one-time passwords;</li>
          <li>identity verification;</li>
          <li>account balances;</li>
          <li>deposits;</li>
          <li>withdrawals;</li>
          <li>refunds;</li>
          <li>rewards;</li>
          <li>prizes;</li>
          <li>account suspension;</li>
          <li>transaction histories; or</li>
          <li>payment disputes.</li>
        </ul>
        <p>
          All such concerns must be submitted directly to the relevant
          application operator through its verified official support
          channels. Users should never send passwords, one-time passwords,
          payment PINs, banking details, identity documents, or other
          sensitive information to anyone claiming to provide third-party
          account assistance through AllYonoPatti.
        </p>

        <h2>Downloads and APK files</h2>
        <p>
          Some applications discussed on AllYonoPatti may be distributed as
          APK files or through websites outside recognised app stores.
          Installing an APK from an unknown or unauthorised source may
          expose a device, account, or personal information to security
          risks. Before downloading or installing an application, users
          should verify:
        </p>
        <ul>
          <li>the authenticity of the website;</li>
          <li>the identity of the publisher;</li>
          <li>whether the source is authorised;</li>
          <li>the permissions requested by the app;</li>
          <li>available security information;</li>
          <li>the Privacy Policy; and</li>
          <li>whether the file has been altered.</li>
        </ul>
        <p>
          AllYonoPatti does not guarantee the authenticity, safety,
          integrity, or security of files supplied by third-party websites.
          Unless expressly stated otherwise, AllYonoPatti does not develop,
          host, scan, inspect, certify, or distribute third-party APK files.
        </p>

        <h2>Financial risk</h2>
        <p>
          Certain third-party gaming platforms may involve purchases, entry
          payments, stakes, rewards, prizes, bonuses, or withdrawal
          features. Any payment or financial transaction made through a
          third-party platform is undertaken entirely at the user&apos;s own
          discretion and responsibility. AllYonoPatti does not guarantee:
        </p>
        <ul>
          <li>winnings;</li>
          <li>successful deposits;</li>
          <li>successful withdrawals;</li>
          <li>refunds;</li>
          <li>cashback;</li>
          <li>reward payments;</li>
          <li>referral commissions;</li>
          <li>account balances;</li>
          <li>prize distribution;</li>
          <li>recovery of money paid; or</li>
          <li>any other financial outcome.</li>
        </ul>
        <p>
          Users should never treat promotional statements as proof that they
          will earn money or recover funds. Users should not spend money
          required for food, housing, education, healthcare, bills, debt
          repayments, or other essential needs.
        </p>

        <h2>Compliance with Indian law</h2>
        <p>
          Users are responsible for ensuring that their access to or use of
          any third-party application complies with applicable laws and
          regulations in India and in their State or Union Territory.
        </p>
        <p>
          The Promotion and Regulation of Online Gaming Act, 2025 and the
          Promotion and Regulation of Online Gaming Rules, 2026 establish a
          national framework for online gaming. The framework recognises and
          regulates certain categories, including e-sports and online social
          games, while prohibiting online money games and specified
          activities connected with them. The legal treatment of a
          particular application depends on its actual features, operating
          model, payment structure, and official regulatory status.
        </p>
        <p>AllYonoPatti does not classify any third-party application as:</p>
        <ul>
          <li>an e-sport;</li>
          <li>an online social game;</li>
          <li>an online money game;</li>
          <li>a legally approved platform;</li>
          <li>a registered service;</li>
          <li>a licensed operator; or</li>
          <li>a government-authorised application,</li>
        </ul>
        <p>
          unless that status is supported by reliable official information.
          Any category or description appearing on this website is an
          editorial description and not a legal determination. Nothing
          published on AllYonoPatti should be interpreted as promoting,
          facilitating, or encouraging an online money game or any other
          activity prohibited by Indian law.
        </p>
        <p>
          Users who require advice concerning the legality of a particular
          platform should consult an appropriately qualified legal
          professional. Our <Link href="/legalities">legalities overview</Link>{" "}
          provides more background on this framework.
        </p>

        <h2>Regional restrictions</h2>
        <p>
          Gaming laws and restrictions may vary according to a user&apos;s
          location and the nature of a platform. The fact that an
          application or website can be accessed from a location does not
          necessarily mean that its services are legally permitted there.
        </p>
        <p>
          Users are responsible for checking whether a game, platform,
          feature, promotion, or paid activity is permitted in their State
          or Union Territory. AllYonoPatti does not guarantee that any
          listed platform is available or legally accessible throughout
          India. Users should not attempt to bypass age, geographic, legal,
          or platform restrictions through false information, VPN services,
          technical circumvention, or other improper methods.
        </p>

        <h2>Age restrictions</h2>
        <p>
          AllYonoPatti is intended for adults aged 18 years and above.
          Third-party platforms may impose different or higher minimum-age
          requirements. Users are responsible for complying with all age and
          eligibility requirements stated by the relevant operator and
          applicable law. Parents and guardians should supervise
          minors&apos; internet and device use and take reasonable measures
          to prevent access to age-restricted gaming services.
        </p>

        <h2>Responsible gaming</h2>
        <p>
          Gaming should be approached as entertainment and used within
          reasonable personal and financial limits. Users should avoid:
        </p>
        <ul>
          <li>spending money intended for essential expenses;</li>
          <li>borrowing money to participate;</li>
          <li>chasing losses;</li>
          <li>continuing after repeated losses;</li>
          <li>hiding gaming activity or spending;</li>
          <li>allowing gaming to interfere with work or education;</li>
          <li>allowing gaming to damage relationships; or</li>
          <li>continuing when it causes emotional or financial distress.</li>
        </ul>
        <p>
          If gaming stops feeling voluntary, enjoyable, or controllable, the
          user should stop using the relevant service. Anyone experiencing
          gaming-related harm should seek support from an appropriately
          qualified professional or responsible-gaming organisation — see
          our <Link href="/responsible-gaming">responsible gaming</Link> page
          for support options.
        </p>

        <h2>Addiction and well-being notice</h2>
        <p>
          Some gaming activities may become habit-forming or difficult to
          control. Possible warning signs include:
        </p>
        <ul>
          <li>spending more time or money than intended;</li>
          <li>repeatedly trying to recover losses;</li>
          <li>concealing activity from family members;</li>
          <li>neglecting work, education, or responsibilities;</li>
          <li>borrowing money for gaming;</li>
          <li>feeling anxious or distressed when unable to play; or</li>
          <li>continuing despite financial or personal harm.</li>
        </ul>
        <p>
          AllYonoPatti encourages users to recognise these signs early and
          seek appropriate support.
        </p>

        <h2>App-specific notices</h2>

        <h3>Teen Patti and Patti applications</h3>
        <p>
          Information about Teen Patti, Patti, or similar card-game
          applications is provided for general informational purposes only.
          Platforms may differ in their rules, operating models, payment
          structures, eligibility requirements, and regional availability.
          Users should review the operator&apos;s official terms, privacy
          practices, and applicable legal restrictions before accessing any
          service. AllYonoPatti does not guarantee that a Teen Patti or Patti
          application is lawful, registered, or available in every part of
          India.
        </p>

        <h3>Rummy applications</h3>
        <p>
          Rummy applications may differ in their game rules, payment
          features, promotional systems, eligibility conditions, and legal
          treatment. Users must independently review the application&apos;s
          official information and applicable law. A reference to a rummy
          platform does not constitute approval, endorsement, or
          encouragement to participate.
        </p>

        <h3>Poker applications</h3>
        <p>
          Poker applications may be subject to legal and regional
          restrictions. Users should independently assess the operator,
          game model, payment structure, age requirements, promotional
          terms, and regulatory status. AllYonoPatti does not guarantee the
          legality, licensing status, outcomes, rewards, or payments
          associated with any poker platform.
        </p>

        <h3>Ludo applications</h3>
        <p>
          Ludo applications may operate as free casual games or may include
          advertisements, in-app purchases, rewards, contests, or
          payment-related features. Users should review official platform
          information before registering or making a payment. AllYonoPatti
          does not guarantee game outcomes, rewards, prizes, withdrawals, or
          promotional benefits connected with any Ludo application.
        </p>

        <h3>Fantasy sports applications</h3>
        <p>
          Fantasy sports platforms may be subject to specific eligibility,
          geographic, legal, and regulatory restrictions. Users are
          responsible for determining whether a platform and its features
          are permitted in their location. AllYonoPatti does not guarantee
          contest entry, rankings, results, prizes, payments, or
          withdrawals.
        </p>

        <h3>Casual and social games</h3>
        <p>
          Casual and social games may include advertisements, virtual
          items, optional purchases, account features, promo codes, or
          rewards. Users should review the app&apos;s Terms and Conditions,
          Privacy Policy, and permissions before use. Their inclusion on
          AllYonoPatti is informational and does not constitute
          certification or endorsement.
        </p>

        <h3>Other gaming applications</h3>
        <p>
          Any other gaming application mentioned on AllYonoPatti remains
          under the control and responsibility of its respective owner and
          operator. Users should conduct their own checks before
          downloading, registering, providing personal information, or
          making a payment.
        </p>

        <h2>Privacy and personal information</h2>
        <p>
          AllYonoPatti does not control how third-party applications
          collect, process, store, use, or share personal information.
          Before using a platform, users should review its Privacy Policy
          and understand:
        </p>
        <ul>
          <li>what information is collected;</li>
          <li>why it is collected;</li>
          <li>which device permissions are requested;</li>
          <li>whether information is shared with third parties;</li>
          <li>where information is stored;</li>
          <li>how long it is retained;</li>
          <li>how an account can be closed;</li>
          <li>how deletion can be requested; and</li>
          <li>how privacy complaints are handled.</li>
        </ul>
        <p>
          Users should avoid applications that request excessive
          permissions, unnecessary sensitive data, or payments without
          providing clear operator and privacy information. Information
          collected directly by AllYonoPatti is governed by our separate{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>

        <h2>External links</h2>
        <p>
          AllYonoPatti may contain links to third-party websites,
          applications, app stores, social-media pages, support channels, or
          other external resources. We do not control the content,
          availability, security, accuracy, data practices, or policies of
          external websites. The presence of an external link does not
          constitute endorsement, certification, approval, or guarantee.
          Users access external resources at their own discretion and should
          review the relevant third party&apos;s Terms and Conditions and
          Privacy Policy.
        </p>

        <h2>Intellectual property</h2>
        <p>
          Third-party game names, application names, trademarks, logos,
          screenshots, icons, and other identifying materials remain the
          property of their respective owners. Their use on AllYonoPatti is
          intended for identification, reporting, reference, review, or
          informational commentary. Such use does not imply ownership,
          sponsorship, partnership, approval, or official affiliation.
        </p>
        <p>
          A rights holder who believes that protected material has been
          used improperly may contact AllYonoPatti at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and
          provide:
        </p>
        <ul>
          <li>identification of the protected material;</li>
          <li>the page where it appears;</li>
          <li>evidence of ownership or authority;</li>
          <li>contact information; and</li>
          <li>an explanation of the concern.</li>
        </ul>

        <h2>No professional advice</h2>
        <p>
          Nothing published on AllYonoPatti constitutes legal, financial,
          tax, or other professional advice. Descriptions of games,
          platform features, promotional terms, risks, or regulatory status
          are general informational observations. Users should consult an
          appropriately qualified professional when advice is required for
          their individual circumstances.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by applicable law, AllYonoPatti
          and its owners, administrators, writers, editors, and contributors
          will not be liable for any direct, indirect, incidental,
          consequential, special, or punitive loss arising from:
        </p>
        <ul>
          <li>reliance on information published on the website;</li>
          <li>inaccurate or outdated information;</li>
          <li>an expired or invalid promo code;</li>
          <li>an unavailable or refused reward;</li>
          <li>changes to eligibility requirements;</li>
          <li>use or inability to use a third-party platform;</li>
          <li>
            account registration, suspension, restriction, or closure;
          </li>
          <li>deposits, payments, purchases, withdrawals, or refunds;</li>
          <li>loss of money or virtual items;</li>
          <li>misleading claims made by a third party;</li>
          <li>installation of an APK or other software;</li>
          <li>malware, viruses, or security incidents;</li>
          <li>loss, theft, or misuse of personal information;</li>
          <li>interruption or removal of an external service;</li>
          <li>disputes between users and third-party operators; or</li>
          <li>decisions made by a user after reading content on this website.</li>
        </ul>
        <p>
          Nothing in this Disclaimer is intended to remove, restrict, or
          exclude any liability or consumer right that cannot lawfully be
          excluded under applicable Indian law.
        </p>

        <h2>No warranty</h2>
        <p>
          AllYonoPatti and its content are provided on an &quot;as
          available&quot; and &quot;as published&quot; basis. We do not
          warrant that:
        </p>
        <ul>
          <li>the website will always be available;</li>
          <li>every page will be accurate or error-free;</li>
          <li>external links will remain active;</li>
          <li>promo codes will remain valid;</li>
          <li>rewards will remain available;</li>
          <li>third-party platforms will operate as described;</li>
          <li>external operators will honour their terms; or</li>
          <li>
            the website or external services will be free from harmful
            components.
          </li>
        </ul>
        <p>
          Users remain responsible for maintaining appropriate device
          security, account protection, and data backups.
        </p>

        <h2>Corrections and removal requests</h2>
        <p>
          AllYonoPatti welcomes reasonable requests to correct inaccurate or
          outdated information. Submitting a correction or removal request
          does not automatically require the website to alter or remove
          content. Requests may be evaluated according to available
          evidence, applicable law, intellectual-property rights, and
          legitimate editorial considerations — see our full{" "}
          <Link href="/corrections-policy">corrections policy</Link>.
          Requests may be sent to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>Changes to this Disclaimer</h2>
        <p>
          AllYonoPatti may amend this Disclaimer to reflect changes in the
          website, editorial practices, third-party platforms, or
          applicable law. A revised version becomes effective when it is
          published on this page. Users are encouraged to review the
          &quot;Last Updated&quot; date periodically.
        </p>

        <h2>Governing law and jurisdiction</h2>
        <p>
          This Disclaimer and the use of AllYonoPatti are governed by the
          laws of India. Subject to any mandatory consumer protections and
          applicable jurisdictional requirements, any dispute relating to
          this website shall be subject to the exclusive jurisdiction of the
          competent courts in Bengaluru, Karnataka, India.
        </p>

        <h2>Contact us</h2>
        <p>
          Questions, correction requests, legal notices, or
          intellectual-property concerns relating to this Disclaimer may be
          sent to:
        </p>
        <ul>
          <li>Website: {siteConfig.name}</li>
          <li>
            Website Address:{" "}
            <a href={siteConfig.url}>{siteConfig.url}/</a>
          </li>
          <li>
            Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </li>
        </ul>

        <p>
          By continuing to use AllYonoPatti, you acknowledge that it is an
          independent informational and affiliate directory. All third-party
          games, applications, promo codes, rewards, offers, and services
          remain under the ownership and responsibility of their respective
          operators.
        </p>
      </div>
    </div>
  );
}
