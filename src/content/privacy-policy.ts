// Content for the BlackLine Logic privacy policy page.
export type PolicyBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type PolicySection = { num: string; title: string; blocks: PolicyBlock[] };

export const policy: { intro: PolicyBlock[]; sections: PolicySection[] } = {
  "intro": [
    {
      "type": "p",
      "text": "Effective Date: September 1, 2026 Last Updated: September 1, 2026 BlackLine Logic (“BlackLine Logic,” “BlackLine,” “we,” “us,” or “our”) provides artificial intelligence, workflow automation, communication, scheduling, integration, and related technology services to businesses."
    },
    {
      "type": "p",
      "text": "This Privacy Policy describes how BlackLine Logic collects, uses, processes, discloses, retains, and protects personal information when you:"
    },
    {
      "type": "ul",
      "items": [
        "Visit our website at blacklinelogic.com",
        "Submit a website form",
        "Contact BlackLine Logic",
        "Request a consultation, demonstration, or quote",
        "Become a BlackLine Logic client",
        "Communicate with a business that uses BlackLine Logic technology",
        "Interact with an AI receptionist, AI assistant, telephone system, automation, form, calendar, text-message system, or other service operated or supported by BlackLine Logic",
        "Otherwise interact with BlackLine Logic or our services"
      ]
    },
    {
      "type": "p",
      "text": "By using our website or interacting with our services, you acknowledge the practices described in this Privacy Policy."
    }
  ],
  "sections": [
    {
      "num": "1",
      "title": "BLACKLINE LOGIC’S ROLE",
      "blocks": [
        {
          "type": "p",
          "text": "BlackLine Logic may process information in different capacities depending on the circumstances. Information Collected Directly by BlackLine Logic When you visit our website, submit a form, request a consultation, communicate directly with us, receive a proposal, or become a client, BlackLine Logic determines how that information is used for our own business purposes. Information Processed for Our Clients Businesses may hire BlackLine Logic to create and operate automations involving their customers, prospective customers, employees, contractors, vendors, or other individuals."
        },
        {
          "type": "p",
          "text": "When we process information for a client, that client generally determines:"
        },
        {
          "type": "ul",
          "items": [
            "What information is collected",
            "Why the information is collected",
            "How the automation operates",
            "Which communications are sent",
            "Which systems are connected",
            "Who may access the information",
            "How long the information should be retained"
          ]
        },
        {
          "type": "p",
          "text": "BlackLine Logic processes that information to provide the services requested by the client and according to the client’s instructions, our agreement with the client, and applicable law. If your privacy question relates to a particular business using BlackLine Logic technology, you should generally contact that business directly. BlackLine Logic will reasonably assist the client with responding when appropriate."
        }
      ]
    },
    {
      "num": "2",
      "title": "INFORMATION WE MAY COLLECT",
      "blocks": [
        {
          "type": "p",
          "text": "The information we collect depends on how you interact with BlackLine Logic or one of our clients."
        },
        {
          "type": "p",
          "text": "Contact Information We may collect:"
        },
        {
          "type": "ul",
          "items": [
            "Name",
            "Business name",
            "Job title",
            "Email address",
            "Telephone number",
            "Business mailing address",
            "Other contact information you voluntarily provide"
          ]
        },
        {
          "type": "p",
          "text": "Business and Account Information We may collect:"
        },
        {
          "type": "ul",
          "items": [
            "Account and authorized-user information",
            "Login or authentication information",
            "Selected services",
            "Subscription information",
            "Business processes and workflow details",
            "Software and integration information",
            "Customer-support communications",
            "Implementation information",
            "Proposals, agreements, and order forms",
            "Information provided during consultations or demonstrations"
          ]
        },
        {
          "type": "p",
          "text": "Website Form Information When you submit a form through our website, we may collect:"
        },
        {
          "type": "ul",
          "items": [
            "Your name",
            "Business name",
            "Email address",
            "Telephone number",
            "Requested service",
            "Business challenges",
            "Workflow information",
            "Consultation preferences",
            "Any other information entered into the form"
          ]
        },
        {
          "type": "p",
          "text": "Telephone and Communication Information Depending on the service being used, we may process:"
        },
        {
          "type": "ul",
          "items": [
            "Telephone numbers",
            "Caller identification information",
            "Call date, time, and duration",
            "Call routing information",
            "Call recordings",
            "Call transcripts",
            "Call summaries",
            "Voicemails",
            "Text messages",
            "Emails",
            "Chat messages",
            "Form submissions",
            "Customer-service communications",
            "Appointment requests",
            "Information discussed or provided during a communication"
          ]
        },
        {
          "type": "p",
          "text": "Calls are recorded, monitored, or transcribed only when those functions are enabled for the applicable client or service."
        },
        {
          "type": "p",
          "text": "Customer and Lead Information When providing services for a client, we may process:"
        },
        {
          "type": "ul",
          "items": [
            "Customer or prospective-customer names",
            "Contact information",
            "Service inquiries",
            "Lead source",
            "Appointment information",
            "Quote or estimate requests",
            "Service preferences",
            "Follow-up status",
            "Employee notes",
            "Customer relationship management records",
            "Other information necessary to complete the requested workflow"
          ]
        },
        {
          "type": "p",
          "text": "Calendar and Scheduling Information Our systems may process:"
        },
        {
          "type": "ul",
          "items": [
            "Appointment dates and times",
            "Calendar availability",
            "Business hours",
            "Appointment type",
            "Service location",
            "Assigned employee",
            "Scheduling preferences",
            "Confirmation status",
            "Appointment-related notes"
          ]
        },
        {
          "type": "p",
          "text": "Automation and Integration Information Our services may connect to systems selected or authorized by a client, including:"
        },
        {
          "type": "ul",
          "items": [
            "Telephone systems",
            "Calendars",
            "Email accounts",
            "Text-messaging platforms",
            "Customer relationship management systems",
            "Websites and forms",
            "Scheduling platforms",
            "Accounting software",
            "Spreadsheets",
            "Cloud-storage services",
            "Other business software"
          ]
        },
        {
          "type": "p",
          "text": "We process information obtained through these integrations only as reasonably necessary to configure and perform the applicable automation."
        },
        {
          "type": "p",
          "text": "Billing and Payment Information We may collect or process:"
        },
        {
          "type": "ul",
          "items": [
            "Billing contact information",
            "Billing address",
            "Invoice information",
            "Subscription amount",
            "Payment status",
            "Transaction history",
            "Payment-method type",
            "Limited payment identifiers",
            "Accounting records"
          ]
        },
        {
          "type": "p",
          "text": "QuickBooks may process invoices, payments, billing information, and accounting records on our behalf. BlackLine Logic does not intend to directly store complete payment-card numbers or online banking credentials when a payment is handled through QuickBooks or another authorized payment processor. Website Technical Information BlackLine Logic does not currently use advertising cookies or website analytics."
        },
        {
          "type": "p",
          "text": "Our website-hosting provider may automatically process limited technical information required to deliver, maintain, troubleshoot, and protect the website, including:"
        },
        {
          "type": "ul",
          "items": [
            "Internet Protocol address",
            "Browser type",
            "Device type",
            "Operating system",
            "Date and time of access",
            "Requested pages",
            "Referring website",
            "Error information",
            "Security and diagnostic logs"
          ]
        },
        {
          "type": "p",
          "text": "We do not use this technical information to create advertising profiles."
        },
        {
          "type": "p",
          "text": "Information Received from Other Sources We may receive information from:"
        },
        {
          "type": "ul",
          "items": [
            "Our clients",
            "Referrals",
            "Authorized integrations",
            "Publicly available business sources",
            "Technology providers",
            "Accounting and payment providers",
            "Individuals who communicate with us or our clients"
          ]
        }
      ]
    },
    {
      "num": "3",
      "title": "HOW WE USE INFORMATION",
      "blocks": [
        {
          "type": "p",
          "text": "BlackLine Logic may use personal information to:"
        },
        {
          "type": "ul",
          "items": [
            "Operate and maintain our website",
            "Respond to inquiries",
            "Schedule consultations",
            "Provide demonstrations, proposals, and quotes",
            "Create and manage client accounts",
            "Provide contracted services",
            "Configure and test automations",
            "Connect authorized business systems",
            "Answer and route telephone calls",
            "Record or transcribe calls when enabled",
            "Generate summaries",
            "Extract names, dates, times, and other information",
            "Schedule appointments",
            "Send confirmations and reminders",
            "Capture and qualify leads",
            "Follow up with customers or prospective customers",
            "Update calendars, CRMs, spreadsheets, and other systems",
            "Process documents and communications",
            "Notify employees about relevant events",
            "Provide customer and technical support",
            "Monitor and maintain service performance",
            "Identify and correct errors",
            "Improve workflow reliability",
            "Process payments and invoices",
            "Maintain tax, accounting, and business records",
            "Secure our systems",
            "Detect fraud, abuse, or unauthorized activity",
            "Enforce our agreements",
            "Resolve disputes",
            "Comply with legal obligations",
            "Carry out another purpose disclosed when the information is collected"
          ]
        },
        {
          "type": "p",
          "text": "When acting for a client, we also use information to perform the workflows and services requested by that client."
        }
      ]
    },
    {
      "num": "4",
      "title": "ARTIFICIAL INTELLIGENCE PROCESSING",
      "blocks": [
        {
          "type": "p",
          "text": "Some BlackLine Logic services use artificial intelligence and automated technologies."
        },
        {
          "type": "p",
          "text": "These systems may be used to:"
        },
        {
          "type": "ul",
          "items": [
            "Transcribe or summarize communications",
            "Understand caller or customer requests",
            "Extract names, dates, times, and contact information",
            "Identify whether an appointment was agreed upon",
            "Classify and route inquiries",
            "Draft responses",
            "Assist with appointment scheduling",
            "Update business systems",
            "Assist employees with repetitive work",
            "Process documents",
            "Generate reports",
            "Perform other configured workflow actions"
          ]
        },
        {
          "type": "p",
          "text": "Relevant information may be transmitted to OpenAI when AI processing is required to complete the applicable function. BlackLine Logic attempts to send only the information reasonably necessary to perform the requested task. The information sent depends on the client’s workflow and may include transcripts, messages, prompts, business instructions, customer information, and related context. Artificial intelligence systems are not perfect. They may misunderstand information, omit information, generate an incorrect result, or require human review. Clients are responsible for determining where human review is appropriate. Our services should not be used as the sole decision-maker for legal, medical, financial, employment, emergency, safety-critical, or similarly high-risk decisions unless appropriate safeguards have been separately established."
        }
      ]
    },
    {
      "num": "5",
      "title": "AUTOMATION PROCESSING THROUGH N8N",
      "blocks": [
        {
          "type": "p",
          "text": "BlackLine Logic uses n8n to create, coordinate, and operate certain automated workflows."
        },
        {
          "type": "p",
          "text": "Depending on the automation, n8n may temporarily process or route information between authorized systems, including:"
        },
        {
          "type": "ul",
          "items": [
            "Twilio",
            "OpenAI",
            "Client calendars",
            "Email systems",
            "Forms",
            "CRM platforms",
            "QuickBooks",
            "Spreadsheets",
            "Other client-authorized business applications"
          ]
        },
        {
          "type": "p",
          "text": "The specific information processed through n8n depends on the workflow. It may include contact information, communications, transcripts, appointment details, form responses, customer information, and system instructions. BlackLine Logic configures n8n workflows to perform the services requested by the applicable client. We do not use information passing through these workflows for unrelated advertising or sell it to third parties."
        }
      ]
    },
    {
      "num": "6",
      "title": "TELEPHONE SERVICES AND TWILIO",
      "blocks": [
        {
          "type": "p",
          "text": "BlackLine Logic uses Twilio to support certain telephone and text-message services."
        },
        {
          "type": "p",
          "text": "Depending on the client’s system, Twilio may process:"
        },
        {
          "type": "ul",
          "items": [
            "Caller and recipient telephone numbers",
            "Call routing information",
            "Call date, time, and duration",
            "Telephone audio",
            "Call recordings",
            "Text-message content",
            "Message-delivery information",
            "Related communication records"
          ]
        },
        {
          "type": "p",
          "text": "Twilio processes this information to transmit calls and messages and provide the applicable communications functionality. Not every BlackLine Logic service uses telephone recording or transcription."
        }
      ]
    },
    {
      "num": "7",
      "title": "CALL RECORDING, MONITORING, AND TRANSCRIPTION",
      "blocks": [
        {
          "type": "p",
          "text": "Certain BlackLine Logic services may record, monitor, transcribe, summarize, or analyze telephone calls or other communications. Whether these features are active depends on the service selected and configured by the applicable client."
        },
        {
          "type": "p",
          "text": "Businesses using these services are responsible for:"
        },
        {
          "type": "ul",
          "items": [
            "Determining whether recording, monitoring, or transcription is legally permitted",
            "Providing any legally required notices",
            "Obtaining required consent",
            "Informing employees and callers when required",
            "Establishing appropriate retention periods",
            "Using recordings and transcripts lawfully"
          ]
        },
        {
          "type": "p",
          "text": "When a recording disclosure is provided at the beginning of a call, continuing the call may constitute consent where permitted by law. Call-recording and consent requirements vary by jurisdiction. If you do not wish to be recorded, follow the options provided during the call or contact the applicable business using another available method."
        }
      ]
    },
    {
      "num": "8",
      "title": "TEXT MESSAGES AND AUTOMATED COMMUNICATIONS",
      "blocks": [
        {
          "type": "p",
          "text": "When you provide your telephone number and consent to receive text messages, BlackLine Logic or the applicable client may send messages concerning:"
        },
        {
          "type": "ul",
          "items": [
            "Your inquiry",
            "Requested services",
            "Appointments",
            "Confirmations",
            "Reminders",
            "Customer support",
            "Follow-up communications",
            "Account information",
            "Other communications covered by your consent"
          ]
        },
        {
          "type": "p",
          "text": "Message frequency varies. Message and data rates may apply. You may opt out of nonessential text messages by replying STOP. You may reply HELP for assistance when that function is supported. Consent to receive marketing text messages is not a condition of purchasing goods or services. Mobile telephone numbers, messaging-consent records, and opt-in information will not be sold or shared with third parties for their independent marketing purposes. Information may be provided to Twilio and other necessary communications providers solely to transmit and manage the messages. Clients using BlackLine Logic services are responsible for obtaining any consent required for communications they direct us to send."
        }
      ]
    },
    {
      "num": "9",
      "title": "COOKIES AND WEBSITE ANALYTICS",
      "blocks": [
        {
          "type": "p",
          "text": "BlackLine Logic does not currently use advertising cookies, tracking cookies, or third-party website analytics. Our website is hosted using Vercel. Vercel may automatically process limited technical and security information required to deliver and protect the website. BlackLine Logic does not use this information for behavioral advertising or to track visitors across unrelated websites. If we begin using cookies, analytics, or advertising technologies, we will update this Privacy Policy and provide any notices or choices required by applicable law."
        }
      ]
    },
    {
      "num": "10",
      "title": "HOW WE DISCLOSE INFORMATION",
      "blocks": [
        {
          "type": "p",
          "text": "BlackLine Logic does not sell personal information. We may disclose or transmit information only as described below. Twilio Information may be transmitted to Twilio when necessary to operate telephone calls, call recordings, routing, and text-message services. OpenAI Information may be transmitted to OpenAI when necessary to perform AI-supported functions such as transcription analysis, information extraction, summarization, classification, response generation, or scheduling assistance. n8n Information may be processed through n8n when necessary to connect authorized applications and complete automated workflows. Vercel Limited website and technical information may be processed by Vercel to host, deliver, troubleshoot, and secure our website. QuickBooks Billing, payment, invoice, client-contact, and accounting information may be processed by QuickBooks to provide invoicing, payment, bookkeeping, and accounting services. Our Clients When you interact with a system operated for one of our clients, information collected through that system may be disclosed to the client and its authorized personnel. Client-Authorized Applications Information may be transmitted to calendars, CRMs, email accounts, spreadsheets, scheduling systems, or other applications selected and authorized by a client when necessary to complete the requested workflow."
        },
        {
          "type": "p",
          "text": "Legal and Safety Disclosures We may disclose information when we reasonably believe disclosure is necessary to:"
        },
        {
          "type": "ul",
          "items": [
            "Comply with applicable law",
            "Respond to a court order, subpoena, or lawful government request",
            "Protect the rights, safety, or property of BlackLine Logic, our clients, or others",
            "Investigate fraud, abuse, or unauthorized activity",
            "Respond to a security incident",
            "Enforce our agreements"
          ]
        },
        {
          "type": "p",
          "text": "Business Transactions Information may be transferred as part of a merger, acquisition, financing, restructuring, sale of assets, or similar business transaction. Where appropriate, we will require the receiving party to handle the information consistently with applicable law and contractual confidentiality obligations. With Your Direction or Consent We may disclose information for another purpose when you direct us to do so or provide consent."
        }
      ]
    },
    {
      "num": "11",
      "title": "SELLING AND SHARING PERSONAL INFORMATION",
      "blocks": [
        {
          "type": "p",
          "text": "BlackLine Logic does not sell personal information for money. We do not provide personal information to third parties for their independent direct-marketing purposes."
        },
        {
          "type": "p",
          "text": "We do not sell:"
        },
        {
          "type": "ul",
          "items": [
            "Call recordings",
            "Call transcripts",
            "Text messages",
            "Customer information",
            "Client information",
            "Lead information",
            "Appointment information",
            "Website-form submissions",
            "Mobile opt-in and consent information"
          ]
        },
        {
          "type": "p",
          "text": "Our use of service providers to operate our business and deliver requested services is not intended to constitute a sale of personal information. If our practices materially change, we will update this Privacy Policy and provide any legally required notice or choice."
        }
      ]
    },
    {
      "num": "12",
      "title": "DATA RETENTION",
      "blocks": [
        {
          "type": "p",
          "text": "BlackLine Logic retains personal information only for as long as reasonably necessary to:"
        },
        {
          "type": "ul",
          "items": [
            "Provide the applicable services",
            "Complete the requested workflow",
            "Maintain and support client systems",
            "Maintain billing and accounting records",
            "Fulfill contractual obligations",
            "Resolve disputes",
            "Enforce agreements",
            "Maintain security",
            "Comply with legal obligations",
            "Serve another legitimate business purpose"
          ]
        },
        {
          "type": "p",
          "text": "Retention periods may vary depending on:"
        },
        {
          "type": "ul",
          "items": [
            "The type of information",
            "The sensitivity of the information",
            "The applicable client’s instructions",
            "The system’s configuration",
            "Contractual requirements",
            "Legal and accounting requirements",
            "The provider used",
            "Technical backup schedules"
          ]
        },
        {
          "type": "p",
          "text": "Information processed for a client may be retained according to that client’s instructions and privacy practices. When information is no longer reasonably required, we may delete, anonymize, aggregate, or securely dispose of it, subject to legal, contractual, and technical limitations."
        }
      ]
    },
    {
      "num": "13",
      "title": "DATA SECURITY",
      "blocks": [
        {
          "type": "p",
          "text": "BlackLine Logic uses reasonable administrative, technical, and organizational safeguards designed to protect personal information against unauthorized access, loss, alteration, misuse, or disclosure."
        },
        {
          "type": "p",
          "text": "These safeguards may include:"
        },
        {
          "type": "ul",
          "items": [
            "Limiting access to authorized individuals",
            "Authentication controls",
            "Credential-management practices",
            "Access restrictions",
            "Secure third-party platforms",
            "Monitoring and maintenance",
            "Software updates",
            "Testing",
            "Service-provider reviews",
            "Incident-response procedures"
          ]
        },
        {
          "type": "p",
          "text": "No internet connection, telephone system, automation platform, storage system, or security method is completely secure. BlackLine Logic cannot guarantee absolute security."
        },
        {
          "type": "p",
          "text": "Clients are responsible for:"
        },
        {
          "type": "ul",
          "items": [
            "Protecting their accounts and credentials",
            "Limiting employee access",
            "Maintaining secure devices",
            "Managing their third-party applications",
            "Removing access from former employees",
            "Promptly reporting suspected unauthorized access"
          ]
        }
      ]
    },
    {
      "num": "14",
      "title": "SECURITY INCIDENTS AND DATA BREACHES",
      "blocks": [
        {
          "type": "p",
          "text": "If BlackLine Logic discovers a security incident affecting personal information, we will investigate and take reasonable steps to contain and address the incident. We will notify affected clients, individuals, regulators, or other parties when required by applicable law or our contractual obligations. Clients are responsible for maintaining accurate contact information so we can provide necessary security notifications."
        }
      ]
    },
    {
      "num": "15",
      "title": "YOUR PRIVACY RIGHTS AND CHOICES",
      "blocks": [
        {
          "type": "p",
          "text": "Depending on where you live and the circumstances in which your information was collected, you may have the right to request that BlackLine Logic or the applicable client:"
        },
        {
          "type": "ul",
          "items": [
            "Confirm whether your personal information is being processed",
            "Provide access to certain personal information",
            "Correct inaccurate information",
            "Delete certain personal information",
            "Provide a portable copy of certain information",
            "Restrict or object to certain processing",
            "Explain certain processing activities",
            "Honor another privacy choice required by applicable law"
          ]
        },
        {
          "type": "p",
          "text": "These rights are not absolute."
        },
        {
          "type": "p",
          "text": "We may retain or continue processing information when reasonably necessary to:"
        },
        {
          "type": "ul",
          "items": [
            "Provide a requested service",
            "Complete a transaction",
            "Maintain security",
            "Detect fraud or abuse",
            "Comply with law",
            "Maintain required accounting records",
            "Establish or defend legal claims",
            "Fulfill another legally permitted purpose"
          ]
        },
        {
          "type": "p",
          "text": "To submit a request, email blacklinelogic@outlook.com with the subject line “Privacy Request.” Please include enough information for us to understand and evaluate your request. We may need to verify your identity before responding. If BlackLine Logic processes the information solely for one of our clients, we may direct your request to that client or assist the client with responding. We will not unlawfully discriminate against you for exercising an applicable privacy right."
        },
        {
          "type": "p",
          "text": "Communication Choices You may:"
        },
        {
          "type": "ul",
          "items": [
            "Unsubscribe from marketing emails using the instructions in the message",
            "Opt out of applicable text messages by replying STOP",
            "Ask the applicable business about alternatives if you do not wish to participate in a recorded call"
          ]
        }
      ]
    },
    {
      "num": "16",
      "title": "THIRD-PARTY SERVICES",
      "blocks": [
        {
          "type": "p",
          "text": "Our website and services may link to or integrate with third-party platforms. BlackLine Logic does not control every third party’s availability, security, privacy practices, policies, or data-retention practices."
        },
        {
          "type": "p",
          "text": "The third-party services currently used in our operations may include:"
        },
        {
          "type": "ul",
          "items": [
            "Twilio",
            "OpenAI",
            "n8n",
            "Vercel",
            "QuickBooks"
          ]
        },
        {
          "type": "p",
          "text": "Each provider may process information according to its applicable agreements and privacy practices. Clients may also authorize BlackLine Logic to connect with additional third-party applications. Those applications may have their own privacy policies and terms."
        }
      ]
    },
    {
      "num": "17",
      "title": "CHILDREN’S PRIVACY",
      "blocks": [
        {
          "type": "p",
          "text": "BlackLine Logic provides business services and does not direct its website or services to children under 13. We do not knowingly collect personal information directly from children under 13 through our website. If you believe a child has provided personal information to BlackLine Logic without appropriate authorization, contact us so we can investigate and take appropriate action. Clients must not intentionally use BlackLine Logic services to collect information from children in violation of applicable law."
        }
      ]
    },
    {
      "num": "18",
      "title": "SENSITIVE AND REGULATED INFORMATION",
      "blocks": [
        {
          "type": "p",
          "text": "Unless BlackLine Logic expressly agrees otherwise in writing, clients should not use our services to process:"
        },
        {
          "type": "ul",
          "items": [
            "Social Security numbers",
            "Complete payment-card information",
            "Online banking credentials",
            "Medical records or protected health information",
            "Biometric identifiers",
            "Government identification numbers",
            "Precise financial-account information",
            "Information concerning children",
            "Information subject to specialized regulatory requirements",
            "Other highly sensitive information that is unnecessary for the configured workflow"
          ]
        },
        {
          "type": "p",
          "text": "Additional agreements, safeguards, assessments, or service limitations may be required before BlackLine Logic processes regulated or highly sensitive information."
        }
      ]
    },
    {
      "num": "19",
      "title": "INTERNATIONAL USERS",
      "blocks": [
        {
          "type": "p",
          "text": "BlackLine Logic is based in the United States. If you provide information from outside the United States, that information may be transferred to, processed in, or stored in the United States or another country where our technology providers operate. Those locations may have privacy laws different from the laws where you live. Clients requiring services subject to international privacy laws must notify BlackLine Logic before implementation so the parties can determine whether additional contractual or technical measures are necessary."
        }
      ]
    },
    {
      "num": "20",
      "title": "CHANGES TO THIS PRIVACY POLICY",
      "blocks": [
        {
          "type": "p",
          "text": "We may update this Privacy Policy to reflect changes to:"
        },
        {
          "type": "ul",
          "items": [
            "Our services",
            "Our technology providers",
            "Our information practices",
            "Applicable laws",
            "Our business operations"
          ]
        },
        {
          "type": "p",
          "text": "The revised policy will be posted with an updated “Last Updated” date. If a change is material, we may provide additional notice when required by law."
        }
      ]
    },
    {
      "num": "21",
      "title": "CONTACT BLACKLINE LOGIC",
      "blocks": [
        {
          "type": "p",
          "text": "For privacy questions, concerns, or requests, contact: BlackLine Logic Email: blacklinelogic@outlook.com Phone: 816-315-7562 Website: blacklinelogic.com Use the subject line “Privacy Request” when contacting us by email. If your request concerns a business using BlackLine Logic technology, identify that business and provide enough information for us to locate and evaluate the request."
        }
      ]
    }
  ]
};
