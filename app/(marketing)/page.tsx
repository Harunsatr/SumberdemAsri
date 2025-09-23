'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBook,
  FiBox,
  FiCheck,
  FiCode,
  FiCoffee,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricingRaw from '#data/pricing'

// Ensure all plans have a 'price' property
const pricing = {
  ...pricingRaw,
  plans: pricingRaw.plans.map((plan: any) => ({
    ...plan,
    price: plan.price ?? '',
  })),
}

import testimonials from '#data/testimonials'

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
      <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
        <Hero
        id="home"
        justifyContent="flex-start"
        px="0"
        title={
          <FallInPlace>
            <Text fontSize="8xl" fontWeight="bold">
              Wonderful <Br /> Sumberdem Asri
            </Text>
          </FallInPlace>
        }
        description={
          <FallInPlace delay={0.4} fontWeight="medium">
          Destinasi <Em>Indah</Em> yang menghadirkan
          <Br /> harmoni antara alam, budaya, dan kehidupan <Br />{' '}
          masyarakat desa.
          </FallInPlace>
        }
        >
        <FallInPlace delay={0.8}>
          <ButtonGroup spacing={4} alignItems="center" mt={6}>
          <ButtonLink colorScheme="blue" size="lg" href="/signup">
            Lihat Produk
          </ButtonLink>
          <ButtonLink
            size="lg"
            href="https://demo.saas-ui.dev"
            variant="outline"
            rightIcon={
            <Icon
              as={FiArrowRight}
              color="blue.500"
              sx={{
              transitionProperty: 'common',
              transitionDuration: 'normal',
              '.chakra-button:hover &': {
                transform: 'translate(5px)',
              },
              }}
            />
            }
          >
            Belanja Sekarang  
          </ButtonLink>
          </ButtonGroup>
        </FallInPlace>
        </Hero>
        <Box
        height="600px"
        position="absolute"
        display={{ base: 'none', lg: 'block' }}
        left={{ lg: '60%', xl: '55%' }}
        width="80vw"
        maxW="1100px"
        margin="0 auto"
        >
        <FallInPlace delay={1}>
          <Box overflow="hidden" height="100%">
          <Image
            src="/static/images/HD2.png"
            width={1200}
            height={762}
            alt="Pemandangan Sumberdem"
            quality="75"
            priority
          />
          </Box>
        </FallInPlace>
        </Box>
      </Stack>
      </Container>

      <Features
      id="benefits"
      columns={[1, 2, 4]}
      iconSize={4}
      innerWidth="container.xl"
      pt="20"
      features={[
        {
        title: 'Kopi',
        icon: FiCoffee,
        description: 'Kopi Sumberdem, racikan biji pilihan dengan aroma khas dan cita rasa nikmat yang menghadirkan kehangatan di setiap tegukan',
        iconPosition: 'left',
        delay: 0.6,
        },
        {
        title: 'Toga',
        icon: FiBook,
        description:
          'Tanaman herbal yang mudah dibudidayakan di pekarangan rumah, bermanfaat sebagai obat alami untuk menjaga kesehatan dan mengatasi berbagai keluhan sehari-hari',
        iconPosition: 'left',
        delay: 0.8,
        },
        {
        title: 'Rosella',
        icon: FiGrid,
        description:
          'Rosella adalah tanaman herbal kaya antioksidan dengan rasa segar asam manis, bermanfaat untuk menjaga daya tahan tubuh dan menyehatkan jantung.',
        iconPosition: 'left',
        delay: 1,
        },
        {
        title: 'Ternak',
        icon: FiThumbsUp,
        description:
          'Usaha pemeliharaan hewan yang memberikan manfaat ekonomi sekaligus mendukung kebutuhan pangan dan kesejahteraan masyarakat.',
        iconPosition: 'left',
        delay: 1.1,
        },
      ]}
      reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Event Sumberdem Asri">
        <VStack alignItems="flex-start" spacing="8">
            <Text color="muted" fontSize="xl">
            Event Sumberdem adalah rangkaian kegiatan desa yang menampilkan <Em>kekayaan budaya</Em>, 
            kreativitas masyarakat, serta potensi lokal. Setiap acara menjadi momen kebersamaan yang 
            mempererat warga sekaligus memperkenalkan pesona Sumberdem kepada pengunjung.
            </Text>
            <ButtonLink colorScheme="blue" size="md" href="/events" mt={1}>
            Lihat Event Lengkap
            </ButtonLink>

        </VStack>
      </HighlightsItem>
      <HighlightsItem title={'UMKM Sumberdem Asri'}>
        <Text color="muted" fontSize="lg">
        UMKM Sumberdem Asri Produk lokal berkualitas, cita rasa khas, dan 
        karya kreatif masyarakat desa untuk mendukung ekonomi mandiri.
        </Text>
            <ButtonLink colorScheme="blue" size="md" href="/events" mt={10}>
              Lihat UMKM
            </ButtonLink>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Purwati, SE"
        description="Kepala Desa"
        avatar="/static/images/Kades.png"
        gradient={['black.800', 'black.500']}
      >
        &quot;UMKM Sumberdem Asri menghadirkan produk lokal yang berkualitas dan bernilai tinggi. Hal ini membuat kami lebih 
        percaya diri untuk bersaing sekaligus fokus mengembangkan potensi desa sejak awal.&quot;
      </HighlightsTestimonialItem>

      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Mengapa Memilih Sumberdem Asri?"
      >
        <Text color="muted" fontSize="lg">
          Sumberdem menawarkan keasrian alam, kearifan lokal, 
          serta keramahan masyarakatnya. Dengan potensi pertanian, wisata, 
          hingga produk unggulan desa, Sumberdem menjadi pilihan tepat untuk berkunjung, 
          berinvestasi, maupun sekadar menikmati suasana pedesaan yang menenangkan.
        </Text>
        <Wrap mt="8">
          {[
            'keindahan alam',
            'eduwisata kampung tematik',
            'produk unggulan',
            'keragaman budaya',
            'kopi',
            'bunga',
            'lemon',
            'ternak',
            'krpl',
            'rosella',
            'krpl',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="blue"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial
                key={i}
                {...t}
                avatar={t.avatar ?? ''}
              />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        Warisi budaya, kembangkan usaha
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
