import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What technologies does InnoNexus specialize in?",
    answer: "InnoNexus specializes in blockchain, Web 3.0, mobile application development, and machine learning. We also have expertise in cloud computing, DevOps, and various programming languages."
  },
  {
    question: "How does InnoNexus ensure the security of blockchain solutions?",
    answer: "We implement best practices in smart contract development, conduct thorough security audits, and use advanced encryption techniques to ensure the highest level of security for our blockchain solutions."
  },
  {
    question: "Can InnoNexus help with integrating AI into existing systems?",
    answer: "Yes, we offer AI integration services to enhance existing systems. Our team can assess your current infrastructure and implement AI solutions that improve efficiency and provide valuable insights."
  },
  {
    question: "What is InnoNexus's approach to project management?",
    answer: "We follow an agile methodology, ensuring flexibility and continuous collaboration with our clients. Our process includes regular updates, sprint reviews, and adaptability to changing requirements."
  },
  {
    question: "Does InnoNexus offer consulting services?",
    answer: "Yes, we provide consulting services in blockchain, AI/ML, and digital transformation. Our experts can help you develop strategies, identify opportunities, and guide you through the implementation process."
  },
  {
    question: "How can I get started with InnoNexus?",
    answer: "To get started, you can contact us through our website or schedule a consultation. We'll discuss your project requirements, provide insights, and develop a tailored solution for your business needs."
  }
]

export default function FAQPage() {
  return (
    <div className="container py-24 md:py-32">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      <p className="text-xl mb-12">Find answers to common questions about our services, technologies, and processes.</p>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

