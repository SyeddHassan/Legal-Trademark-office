import {
  Smile,
  Globe,
  ShieldCheck,
  Clock,
  Info,
  Search,
  CheckCircle,
  FileText,
  DollarSign,
} from "lucide-react";

export const FaqPageData = [
  {
    id: 1,
    question: "How long does a trademark last?",
    answer:
      "A trademark typically lasts for 10 years but can be renewed indefinitely as long as it continues to be used in commerce.",
    icon: <Clock className="h-[16px] w-[16px]" />,
  },

  {
    id: 2,
    question: "Can I trademark a phrase or slogan?",
    answer:
      "Yes, you can trademark a unique phrase or slogan if it is used to identify your goods or services and distinguish them from others.",
    icon: <CheckCircle className="h-[16px] w-[16px]" />,
  },

  {
    id: 3,
    question: "What is the difference between a trademark and a service mark?",
    answer:
      "A trademark protects goods, while a service mark protects services. Both provide similar legal protections.",
    icon: <Info className="h-[16px] w-[16px]" />,
  },

  {
    id: 4,
    question: "Can I register a trademark internationally?",
    answer:
      "There is no universal trademark. However, you can register in multiple countries through systems like the Madrid Protocol.",
    icon: <Globe className="h-[16px] w-[16px]" />,
  },

  {
    id: 5,
    question: "What should I do if someone infringes on my trademark?",
    answer:
      "Contact an attorney to discuss enforcement options, such as sending a cease-and-desist letter or pursuing legal action.",
    icon: <ShieldCheck className="h-[16px] w-[16px]" />,
  },

  {
    id: 6,
    question: "Why are trademarks important?",
    answer:
      "Trademarks protect your brand identity, build trust with customers, and give you legal rights against infringement.",
    icon: <Smile className="h-[16px] w-[16px]" />,
  },

  {
    id: 7,
    question: "What can be trademarked?",
    answer:
      "You can trademark names, logos, slogans, sounds, and even colors if they are distinctive and represent your brand.",
    icon: <CheckCircle className="h-[16px] w-[16px]" />,
  },

  {
    id: 8,
    question: "What is the symbol for a registered trademark?",
    answer:
      "The symbol ® is used to indicate a registered trademark, while ™ can be used for unregistered trademarks.",
    icon: <Info className="h-[16px] w-[16px]" />,
  },

  {
    id: 9,
    question: "What information is needed for the trademark application?",
    answer:
      "You will need details like the trademark name/logo, description of goods/services, and proof of use in commerce.",
    icon: <FileText className="h-[16px] w-[16px]" />,
  },

  {
    id: 10,
    question: "Do I need to conduct a trademark search before applying?",
    answer:
      "Yes, conducting a trademark search helps ensure your mark does not conflict with existing ones, reducing the risk of rejection.",
    icon: <Search className="h-[16px] w-[16px]" />,
  },

  {
    id: 11,
    question: "Can a trademark expire?",
    answer:
      "Yes, if you fail to renew it after 10 years or stop using it in commerce, it can expire.",
    icon: <Clock className="h-[16px] w-[16px]" />,
  },

  {
    id: 12,
    question:
      "Is the application fee refundable if my trademark is not approved?",
    answer:
      "No, application fees are generally non-refundable, even if your trademark application is denied.",
    icon: <DollarSign className="h-[16px] w-[16px]" />,
  },

  {
    id: 13,
    question: "How long does the trademark application process take?",
    answer:
      "The process usually takes 6-12 months, depending on the complexity of the application and any potential objections.",
    icon: <Clock className="h-[16px] w-[16px]" />,
  },

  {
    id: 14,
    question: "What happens after I submit the application form?",
    answer:
      "Your application will be reviewed, and if accepted, it will be published for opposition before registration.",
    icon: <FileText className="h-[16px] w-[16px]" />,
  },
];
