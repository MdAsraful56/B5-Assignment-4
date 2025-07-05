import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionCard() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Borrowing Policy</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Students can borrow up to 3 books at a time for a duration of 14
            days. Faculty members can borrow up to 5 books for 30 days.
          </p>
          <p>
            Late returns will incur a fine of 5 BDT per day. Renewal is allowed
            once if no other reservations exist.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Library Hours</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Our library is open from Sunday to Thursday, 9:00 AM – 6:00 PM. On
            Saturdays, it remains open from 10:00 AM – 2:00 PM.
          </p>
          <p>
            Fridays and public holidays are observed as library off days unless
            announced otherwise.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Membership Guidelines</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            All enrolled students and faculty automatically receive library
            membership using their institution ID.
          </p>
          <p>
            External researchers must apply for temporary membership with a
            valid ID and reference letter.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>Digital Resources</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Members can access eBooks, academic journals, and research papers
            through our digital portal using their login credentials.
          </p>
          <p>
            Remote access is supported for verified members using the
            institutional VPN.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
