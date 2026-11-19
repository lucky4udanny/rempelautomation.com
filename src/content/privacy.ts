import type { HeroContent, ProseSectionBlock } from '@/types/content'
import { companyName, contactEmail, region } from '@/content/site'

export const privacyHero = {
  kicker: 'Privacy',
  title: 'Privacy policy',
  leads: [
    `This policy explains how ${companyName} collects, uses, and discloses personal information through rempelautomation.com.`,
    'Last updated: November 18, 2026.',
  ],
} satisfies HeroContent

export const privacySections: ProseSectionBlock[] = [
  {
    heading: '1. Who we are',
    paragraphs: [
      `${companyName} (“we”, “us”, or “our”) operates the public website at rempelautomation.com. We are based in ${region}, Canada.`,
      `Questions about this policy or about personal information we hold may be sent to ${contactEmail}.`,
    ],
  },
  {
    heading: '2. Scope',
    paragraphs: [
      'This policy applies to personal information collected through this website, including the contact form and related security measures.',
      'It does not cover third-party websites we link to, or systems we may build or host for a client under a separate agreement. Those arrangements are governed by their own terms.',
    ],
  },
  {
    heading: '3. Personal information we collect',
    paragraphs: [
      'Through the contact form, we collect the information you choose to submit. That includes your name, company name, email address, and the content of your message.',
      'When you submit the form, our servers also receive technical data needed to deliver and protect the service. That includes your Internet Protocol (IP) address, approximate timing of the request, and standard request metadata provided by our hosting provider.',
      'If Cloudflare Turnstile is enabled, we also process a verification token so we can distinguish human visitors from automated abuse. Turnstile may involve limited browser and network signals processed by Cloudflare for that purpose.',
      'We do not require an account on this website. We do not intentionally collect payment card numbers, government identifiers, or health information through this site.',
    ],
  },
  {
    heading: '4. How we collect information',
    paragraphs: [
      'We collect contact-form information when you submit it. A hidden honeypot field is included to detect automated submissions. Leave that field blank.',
      'Technical and security information is collected automatically when your browser or device communicates with our hosting provider (Cloudflare) and with our contact form function.',
    ],
  },
  {
    heading: '5. Why we use personal information',
    paragraphs: [
      'We use contact-form information to receive and respond to your inquiry, to understand the nature of your request, and to keep a record of the conversation for follow-up.',
      'We use IP address and related technical data to operate the website, prevent spam and abuse, enforce rate limits, diagnose delivery failures, and maintain security.',
      'We use Turnstile verification, when enabled, solely to reduce automated abuse of the contact form.',
      'We do not use contact-form submissions to build a marketing list. We do not sell personal information. We do not use the form content for public case studies without a separate agreement with you.',
    ],
  },
  {
    heading: '6. Service providers and disclosure',
    paragraphs: [
      'We use service providers to operate this website and to send form messages. Cloudflare provides hosting, content delivery, and (when enabled) Turnstile bot protection. Resend provides email delivery of contact-form messages to us.',
      'Those providers process information on our behalf for the purposes described in this policy. Message content is emailed to our business inbox (typically info@rempelautomation.com or another address we configure for that purpose).',
      'We may disclose personal information if required by law, regulation, court order, or lawful request by a public authority, or if disclosure is necessary to protect our rights, safety, or property, or that of others.',
      'If we transfer business assets in a merger, acquisition, or similar transaction, personal information related to website inquiries may be included among the transferred records, subject to applicable law.',
    ],
  },
  {
    heading: '7. Cookies and similar technologies',
    paragraphs: [
      'This website is primarily static HTML, CSS, and JavaScript. We have not added our own analytics pixels, advertising cookies, or client login cookies on this site.',
      'Cloudflare and, when enabled, Cloudflare Turnstile may set or read cookies or use similar technologies as part of hosting, security, and bot protection. Those technologies are controlled by Cloudflare under its own terms and privacy documentation.',
    ],
  },
  {
    heading: '8. Retention',
    paragraphs: [
      'We keep contact-form messages and related email records for as long as needed to reply, continue a business conversation, and meet ordinary business, legal, or security needs. When that purpose no longer applies, we delete or de-identify the records in the ordinary course of business.',
      'Transient technical logs used for rate limiting and security are kept only as long as needed for those purposes.',
      `If you want a specific message deleted after we have replied, email ${contactEmail} and identify the message. We will delete it unless we must retain it for legal, security, or dispute-resolution reasons.`,
    ],
  },
  {
    heading: '9. Security',
    paragraphs: [
      'We use reasonable administrative and technical measures appropriate to this website. Form submissions are sent to our function over HTTPS. Access to our email and hosting configuration is limited to people who need it for operations.',
      'No method of transmission or storage is completely secure. We cannot guarantee absolute security of information sent through the Internet.',
    ],
  },
  {
    heading: '10. Your rights',
    paragraphs: [
      'Subject to applicable Canadian privacy law, including the Personal Information Protection and Electronic Documents Act (PIPEDA), you may request access to personal information we hold about you that was collected through this website, and you may request correction of inaccurate information.',
      'You may also withdraw consent to our continued use of your information where consent is the basis for that use, subject to legal or contractual restrictions and reasonable notice.',
      `To make a request, email ${contactEmail}. We may need to verify your identity before responding.`,
      'If you are not satisfied with our response, you may contact the Office of the Privacy Commissioner of Canada.',
    ],
  },
  {
    heading: '11. Children',
    paragraphs: [
      'This website is directed to businesses and adult professionals. We do not knowingly collect personal information from children through this site. If you believe a child has submitted information to us, contact us and we will delete it.',
    ],
  },
  {
    heading: '12. International processing',
    paragraphs: [
      'Our service providers may process information in Canada, the United States, or other countries where they operate. When information is processed outside Canada, it may be subject to the laws of that jurisdiction, including lawful access by foreign authorities.',
    ],
  },
  {
    heading: '13. Changes to this policy',
    paragraphs: [
      'We may update this policy from time to time. The “Last updated” date at the top of this page will change when we do. Continued use of the website after an update means you should read the revised policy.',
    ],
  },
  {
    heading: '14. Contact',
    paragraphs: [
      `${companyName}`,
      `${region}, Canada`,
      `Email: ${contactEmail}`,
      'Website: https://rempelautomation.com/',
    ],
  },
]
