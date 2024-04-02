import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FaqAccordionInterface {
  faqs: Array<{
    question: string
    answer: string
  }>
}

const FaqAccordion = ({ faqs }: FaqAccordionInterface): React.ReactElement => {
  return (
    <section className="container flex h-[90vh] items-center justify-center p-8 pt-[calc(var(--navbar-height)+2rem)]">
      <div className="flex w-full flex-col items-center justify-between rounded-3xl bg-primary md:flex-row md:p-8">
        <h1 className="pb-8 text-5xl font-bold text-white md:w-2/4 md:pb-0">
          Frequently <br />
          Asked <br /> Questions
        </h1>
        <div className="w-full rounded-3xl bg-white px-8 py-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="font-bold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FaqAccordion
