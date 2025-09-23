import { HStack, Text } from '@chakra-ui/react'
import Image from "next/image";

export default {
  title: ' Event Sumberdem Asri',
  description:
    'Event Sumberdem Asri dengan berbagai sajian budaya, kuliner, dan produk lokal terbaik.',
  plans: [
    {
      id: 'oss',
      title: 'Festival Budaya & UMKM',
      description: 'Festival Budaya & UMKM, rayakan seni dan karya desa.',
      features: [
        {
          title: 'Festival Budaya & UMKM adalah ajang perayaan seni, tradisi, dan kreativitas masyarakat Desa Sumberdem. Melalui acara ini, budaya lokal dilestarikan sekaligus produk UMKM ditampilkan untuk memperkenalkan potensi desa yang unggul dan berdaya saing. Festival ini menjadi ruang kebersamaan, hiburan, sekaligus peluang bagi masyarakat untuk tumbuh bersama',
          image: '/static/images/FestivalBM.png',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'bootstrap',
      title: 'Festival Dewi Cemara 2025',
      description: 'Festival Dewi Cemara, meriahkan budaya.',
      isRecommended: true,
      features: [
        {
          title: 'Festival Dewi Cemara 2025 adalah perayaan budaya dan potensi lokal yang menggambarkan kekayaan tradisi Desa Sumberdem. Melalui festival ini, masyarakat diajak melestarikan warisan budaya sekaligus mengembangkan UMKM agar lebih dikenal luas. Acara ini menjadi simbol kebersamaan, kreativitas, dan semangat membangun desa yang berdaya saing.',
          image: '/static/images/FestivalDC.png',
        },
      ],
      action: {
        href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Single%20license',
      },
    },
    {
      id: 'startup',
      title: 'Bersih Desa',
      description: 'Bersih Desa, harmoni warga desa Sumberdem.',
      features: [
        {
          title: 'Bersih Desa adalah tradisi turun-temurun masyarakat Desa Sumberdem sebagai wujud rasa syukur atas rezeki dan keselamatan. Melalui kegiatan ini, warga bersama-sama menjaga harmoni, melestarikan adat, serta mempererat persaudaraan. Bersih Desa menjadi simbol kebersamaan yang terus diwariskan untuk generasi mendatang sebagai identitas dan kekuatan desa.',
          image: '/static/images/BersihDS.png',
        },
      ],
      action: {
        href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Unlimited%20license',
      },
    },
  ],
}
