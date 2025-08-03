import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What forms of payment do you accept?",
      answer: "We accept cash, check, and Zelle."
    },
    {
      question: "How often should I have my piano tuned?",
      answer: "Most pianos should be tuned at least twice a year to maintain proper pitch and sound quality. Pianos used for performances or in environments with significant temperature and humidity fluctuations may need more frequent tuning."
    },
    {
      question: "How long does a piano tuning take?",
      answer: "A standard piano tuning typically takes about 1.5 hours, depending on the condition of the piano and any additional adjustments that may be needed."
    },
    {
      question: "What should I do to prepare my piano for a tuning appointment?",
      answer: "Ensure that the area around the piano is clear and accessible. Ensure the space is quiet, as excessive noise can make it difficult to accurately hear the pitch. Remove any decorative items or sheet music from the piano to give the technician unobstructed access to the keys and lid. Check that your piano is situated in a stable environment, away from open windows, heaters, or direct air conditioning during the appointment."
    },
    {
      question: "What should I expect during a piano tuning appointment?",
      answer: "During the appointment, we will: Inspect the piano for any immediate issues or signs of wear that could affect the tuning. Tune each string, using specialized tools and techniques to bring them to the proper pitch. Perform any necessary minor adjustments to enhance sound quality. Discuss any findings with you, such as recommendations for repairs or maintenance to ensure the piano remains in top condition."
    },
    {
      question: "Will my piano sound perfect immediately after tuning?",
      answer: "Yes, but keep in mind that after a tuning, it may take a few days for the strings to fully settle, especially if the piano hasn't been tuned recently or required significant adjustments. Regular playing and maintaining a stable environment can help the tuning last longer."
    },
    {
      question: "Do I need to be home during the tuning appointment?",
      answer: "It's preferable for someone to be home during the appointment in case we need to discuss any issues or answer questions. However, if necessary, you can arrange for a trusted person to be present or discuss key drop-off options with us."
    },
    {
      question: "Can an old or neglected piano be tuned?",
      answer: "In many cases, yes. However, if the piano has not been tuned for many years, it may require a pitch raise or additional servicing to bring it back to a stable pitch. We will evaluate the condition of the piano and discuss any necessary steps with you."
    },
    {
      question: "What is a pitch raise, and why is it necessary?",
      answer: "A pitch raise is a preliminary tuning process needed when a piano is significantly out of tune, often more than a half step off pitch. It involves stretching the strings to a higher tension to get them close to the correct pitch, followed by a fine-tuning. A pitch raise is an additional fee of $75 because of the extra time required."
    },
    {
      question: "Does tuning improve the sound of an old piano?",
      answer: "While tuning ensures the piano produces correct pitches, it won't fix issues related to worn-out parts or structural damage. Repairs or restoration might be needed to fully improve the sound of an older instrument."
    },
    {
      question: "Why does my piano go out of tune?",
      answer: "Pianos go out of tune primarily due to changes in humidity and temperature, which cause the wooden soundboard and other components to expand and contract. Regular playing and moving the piano can also contribute to it going out of tune."
    },
    {
      question: "Can I tune my piano myself?",
      answer: "Tuning a piano requires specialized tools, skills, and a trained ear. Attempting to tune your piano without proper training can damage the instrument. It's best to leave tuning to a professional."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg px-6 shadow-card border-0"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-primary font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;