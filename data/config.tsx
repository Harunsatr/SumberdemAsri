import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'
import { Hero } from '#components/hero'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Sumberdem Asri',
    description: 'WebsiteDesa',
    href: '/',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'pariwisata',
        label: 'Berita',
        href: 'https://sumberdem-malangkab.desa.id/berita',
      },
      {
        id: 'kampung',
        label: 'Kampung Tematik',
        href: '/kampung',
      },
      {
        id: 'produk',
        label: 'Produk UMKM',
        href: '/produk',
      },
      {
        id: 'tiket',
        label: 'Pesan Tiket',
        href: 'https://www.djalanin.com/destination/kampoeng-kopi-sumberdem',
      },
      {
        label: 'Beranda',
        href: 'https://sumberdem-malangkab.desa.id/',
        variant: 'solid',
        colorScheme: 'blue',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="https://sumberdem-malangkab.desa.id/">2020-2025 © Kementerian Komunikasi dan Informatika RI.</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:sumberdem.wonosari@malangkab.go.id',
        label: 'Contact',
      },
      {
        href: 'https://www.youtube.com/@desasumberdem5549',
        label: <FaYoutube size="14" />,
      },
      {
        href: 'https://www.instagram.com/desasumberdem',
        label: <FaInstagram size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
