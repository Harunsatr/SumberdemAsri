'use client'
import Image from "next/image";
import { Box, useTheme, useColorModeValue } from '@chakra-ui/react'
import React from 'react'


// Komponen Reusable
function Section({ title, desc, image, reverse = false }: { 
    title: string, 
    desc: string, 
    image: string, 
    reverse?: boolean 
    }) {
        const headingColor = useColorModeValue('#222', '#fff')
        const textColor = useColorModeValue('#444', '#e0e0e0')

    return (
        <Box
            display="flex"
            flexDirection={{ base: 'column', md: reverse ? 'row-reverse' : 'row' }}
            alignItems="center"
            justifyContent="center"
            gap={{ base: 6, md: 12 }}
            maxW="1100px"
            width="100%"
            py={{ base: 1, md: 12 }}
            mt={{ base: 8, md: 16 }}
        >
            <Image
                src={image}
                alt={title}
                width={440}
                height={340}
                style={{
                    borderRadius: 20,
                    boxShadow: '0 4px 24px #00b6f3',
                    objectFit: 'cover'
                }}
                priority
            />
            <Box
                maxW="1100px"
                width="100%"
                textAlign={{ base: 'center', md: 'left' }}
            >
                <h1
                    style={{
                        fontSize: '3rem',
                        fontWeight: 700,
                        marginBottom: 24,
                        marginLeft: 30,
                        color: headingColor,
                        fontFamily: 'Montserrat, Segoe UI, Arial, sans-serif'
                    }}
                >
                    {title}
                </h1>
                <p
                    style={{
                        fontSize: '1.25rem',
                        lineHeight: 1.6,
                        color: textColor,
                        marginBottom: 32,
                        marginLeft: 30,
                        fontFamily: 'Open Sans, Arial, sans-serif',
                        textAlign: 'justify'
                    }}
                >
                    {desc}
                </p>
            </Box>
        </Box>
    )
}

export default function Page() {
    const theme = useTheme()
    const bg = useColorModeValue('white', 'gray.800')

    return (
        <Box bg={bg} minH="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center" px={{ base: 2, md: 8 }}>
            
            {/* Section Pertama */}
            <Section
                title="Kampung Kopi"
                image="/static/images/awokopi.png"
                desc="SUMBERDEM 1832 adalah merek produk kampoeng kopi Sumberdem yang berasal dari lereng gunung Kawi dengan ketingian 650-850 MDPL yang diproses dengan semi tradisional menggunakan bahan bakar kayu sehingga menghasilkan aroma dan citarasa yang khas dan alami. 1832 diambil dari pendataan kopi pertama kali di kabupaten Malang oleh pemerintah Hindia-Belanda, pada masa gubernur jendral VAN DEN BOSCH yang melakukan pendataan afdeling kopi di area Malang lereng gunung Tengger-Semeru di sebelah timur dan Arjuno-Kawi di sebelah barat termasuk di area Sumberdem. Dimana peninggalan itu masih dilestarikan sampai saat ini."
            />

            {/* Section Kedua (gambar di kanan) */}
            <Section
                title="Kampung Lemon"
                image="/static/images/KampungLemon.png" reverse
                desc="Kampung tematik lemon di Desa Sumberdem, Wonosari, Malang, awalnya dikenal sebagai Kampung Lemon berkat budidaya lemon yang melimpah sebagai tanaman karangkitri khas daerah ini. Saat ini pemerintah desa bersama kelompok masyarakat setempat sedang mengembangkan wisata kolam ikan dan selada air. Seiring dengan pengembangan tersebut, kampung ini direncanakan berganti nama menjadi Kampung Darmon. Nama 'Darmon' merupakan gabungan dari 'Sedaer' (selada air) dan 'Lemon,' mencerminkan dua elemen utama yang menjadi fokus pengembangan kampung ini. Wisata kolam ikan dan selada air diharapkan dapat meningkatkan daya tarik wisata serta mendukung perekonomian lokal."
            />

            {/* Section Ketiga (duplikat isi yang sama, bisa kamu ganti kontennya nanti) */}
            <Section
                title="Kampung Ternak"
                image="/static/images/KampungTernak.png" reverse
                desc="Di kampung ternak sendiri sebenarnya sudah terbentuk kelompok ternak, oleh masyarakat Desa Sumberdem dimanfaatkan sebagai wisata karena berpotensi. Para wisatawan bisa belajar dengan baik tentang peternakan di sini, seperti cara merawat hewan, cara mengolah pakan, maupun cara pengolahan kotoran hewan sebagai pupuk tanaman. Selain itu, kampung ternak juga menjadi sarana edukasi yang bermanfaat bagi pelajar, mahasiswa, maupun masyarakat umum yang ingin memahami lebih dalam mengenai sistem peternakan berkelanjutan. Dengan suasana pedesaan yang asri, wisata edukasi kampung ternak ini tidak hanya memberikan pengalaman belajar, tetapi juga menawarkan interaksi."
            />
        </Box>
    )
}
