import FaqAccordion from '@/components/Pages/FAQ/FaqAccordion'

const page = (): React.ReactElement => {
  const faqs = [
    {
      question: 'Your question here',
      answer: 'And your answer here',
    },
    {
      question: 'Your question here',
      answer: 'And your answer here',
    },
    {
      question: 'Your question here',
      answer: 'And your answer here',
    },
    {
      question: 'Your question here',
      answer:
        'You opened this one partially, and this answer is longer than the others, just to see if someone reads it',
    },
    {
      question: 'Your question here',
      answer: 'And your answer here',
    },
    {
      question: 'Your question here',
      answer: 'And your answer here',
    },
  ]

  return (
    <main className="container bg-primary">
      <FaqAccordion faqs={faqs} />
    </main>
  )
}

export default page
