import { chakra, SimpleGrid } from '@chakra-ui/react'
import { Section, SectionProps, SectionTitle } from 'components/section'

interface FaqProps extends Omit<SectionProps, 'title' | 'children'> {
  title?: React.ReactNode
  description?: React.ReactNode
  items: { q: React.ReactNode; a: React.ReactNode }[]
}

export const Faq: React.FC<FaqProps> = () => {
  return (
    <Section id="faq">
      <SectionTitle title="Lokasi Kami" />
      <chakra.div mt={8}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d107404.09389625638!2d112.463731!3d-8.050841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e789af79724d3b1%3A0xcd55a70c1c3a301a!2sSumberdem%2C%20Kec.%20Wonosari%2C%20Kabupaten%20Malang%2C%20Jawa%20Timur%2C%20Indonesia!5e1!3m2!1sid!2sus!4v1756917788378!5m2!1sid!2sus"
          width="1000"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </chakra.div>
    </Section>
  )
}

export interface FaqItemProps {
  question: React.ReactNode
  answer: React.ReactNode
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <chakra.dl>
      <chakra.dt fontWeight="semibold" mb="2">
        {question}
      </chakra.dt>
      <chakra.dd color="muted">{answer}</chakra.dd>
    </chakra.dl>
  )
}
