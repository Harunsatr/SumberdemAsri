'use client'
import Image from "next/image";
import { Box, useTheme, useColorModeValue } from '@chakra-ui/react'
import React from 'react'



// Komponen Reusable
function Section({ title, desc, image, reverse = false, children }: { 
    title: string, 
    desc: string, 
    image: string, 
    reverse?: boolean,
    children?: React.ReactNode
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
                {children}
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
            title="Kopi Bubuk SUMBERDEM 1832"
            image="/static/images/kopisu.png"
            desc="Kopi bubuk SUMBERDEM 1832 berasal dari lereng Gunung Kawi pada ketinggian 650–850 mdpl, menghadirkan cita rasa autentik kopi pedesaan yang khas. Proses pengolahan dilakukan dengan metode semi tradisional menggunakan bahan bakar kayu, sehingga menghasilkan aroma alami yang kuat dan cita rasa yang seimbang. Angka 1832 dipilih sebagai penanda sejarah, merujuk pada pendataan kopi pertama kali di Kabupaten Malang oleh pemerintah Hindia-Belanda pada masa Gubernur Jenderal Van Den Bosch. Sejak saat itu, kopi dari wilayah lereng Arjuno–Kawi, termasuk Sumberdem, telah tercatat sebagai salah satu penghasil kopi unggulan. Kini, warisan tersebut tetap dilestarikan dan dihadirkan dalam setiap sajian kopi bubuk SUMBERDEM 1832."
            >
            <Box display="flex" justifyContent={{ base: 'center', md: 'flex-start' }} ml={30}>
            <button
            style={{
                padding: '12px 32px',
                background: '#00b6f3',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                fontFamily: 'Montserrat, Segoe UI, Arial, sans-serif',
                boxShadow: '0 2px 8px rgba(0,182,243,0.15)'
            }}
            >
            Pesan Sekarang
            </button>
            </Box>
            </Section>

            {/* Section Kedua (gambar di kanan) */}
            <Section
            title="Roasted Bean SUMBERDEM 1832"
            image="/static/images/kopisu.png"
            desc="Roasted bean SUMBERDEM 1832 merupakan biji kopi pilihan dari perkebunan di lereng Gunung Kawi yang disangrai dengan teknik semi tradisional berbahan bakar kayu. Proses ini menjaga keaslian aroma dan rasa kopi, memberikan sentuhan khas yang tidak dimiliki oleh kopi hasil olahan modern sepenuhnya. Dengan ketinggian tanam 650–850 mdpl, biji kopi dari Sumberdem memiliki karakter rasa earthy yang berpadu dengan keasaman lembut dan aftertaste yang tahan lama. Nama 1832 bukan sekadar angka, melainkan jejak sejarah panjang kopi Sumberdem yang telah tercatat sejak masa kolonial Belanda dan tetap dijaga kelestariannya hingga kini. Roasted bean ini cocok untuk para pecinta kopi sejati yang ingin merasakan pengalaman menyeduh kopi segar dengan cita rasa asli dari tanah Malang."
            >
            <Box display="flex" justifyContent={{ base: 'center', md: 'flex-start' }} ml={30}>
            <button
            style={{
                padding: '12px 32px',
                background: '#00b6f3',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                fontFamily: 'Montserrat, Segoe UI, Arial, sans-serif',
                boxShadow: '0 2px 8px rgba(0,182,243,0.15)'
            }}
            >
            Pesan Sekarang
            </button>
            </Box>
            </Section>

            {/* Section Ketiga (gambar di kanan) */}
            <Section
            title="Lemona - Lemon Serbuk"
            image="/static/images/serbuk.jpg"
            desc="Lemon serbuk dari Kampung Lemon diolah dari buah lemon segar yang dipetik langsung dari kebun masyarakat. Dengan proses pengeringan dan penggilingan higienis, lemon serbuk ini tetap mempertahankan kandungan vitamin C dan antioksidan alaminya. Rasanya yang asam segar membuat lemon serbuk praktis untuk diseduh menjadi minuman hangat yang menenangkan atau minuman dingin yang menyegarkan. Selain sebagai minuman, lemon serbuk juga bisa digunakan sebagai bahan tambahan dalam olahan makanan dan kue untuk memberikan cita rasa segar alami. Produk ini menjadi pilihan tepat untuk gaya hidup sehat karena praktis, alami, dan menyehatkan."
            >
            <Box display="flex" justifyContent={{ base: 'center', md: 'flex-start' }} ml={30}>
            <button
            style={{
                padding: '12px 32px',
                background: '#00b6f3',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                fontFamily: 'Montserrat, Segoe UI, Arial, sans-serif',
                boxShadow: '0 2px 8px rgba(0,182,243,0.15)'
            }}
            >
            Pesan Sekarang
            </button>
            </Box>
            </Section>

            {/* Section Keempat (gambar di kanan) */}
            <Section
            title="Lemona - Lemon Kering"
            image="/static/images/lemonkering.jpg"
            desc="Lemon kering merupakan irisan lemon segar yang dikeringkan secara alami untuk menjaga aroma, rasa, dan khasiatnya. Produk ini memiliki keunikan karena mampu memberikan kesegaran lemon dalam bentuk yang lebih tahan lama. Lemon kering bisa diseduh bersama teh, dicampurkan pada infused water, atau dijadikan pelengkap minuman herbal. Aromanya yang khas menambah sensasi relaksasi, sementara kandungan nutrisi dalam lemon tetap memberikan manfaat kesehatan, seperti membantu pencernaan dan meningkatkan daya tahan tubuh. Dengan kemasan yang praktis, lemon kering dari Kampung Lemon adalah pilihan tepat untuk menemani aktivitas sehari-hari dengan cara yang sehat dan menyenangkan."
            >
            <Box display="flex" justifyContent={{ base: 'center', md: 'flex-start' }} ml={30}>
            <button
            style={{
                padding: '12px 32px',
                background: '#00b6f3',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                fontFamily: 'Montserrat, Segoe UI, Arial, sans-serif',
                boxShadow: '0 2px 8px rgba(0,182,243,0.15)'
            }}
            >
            Pesan Sekarang
            </button>
            </Box>
            </Section>

            {/* Section Kelima (gambar di kanan) */}
            <Section
            title="Lemona - Sari Lemon"
            image="/static/images/serbuk.jpg"
            desc="Minuman sari lemon siap saji dari Kampung Lemon hadir untuk Anda yang ingin merasakan kesegaran lemon asli kapan saja dan di mana saja. Dibuat dari perasan lemon segar pilihan tanpa tambahan pengawet berbahaya, minuman ini mengandung vitamin C yang tinggi serta senyawa alami yang baik untuk tubuh. Rasanya yang asam menyegarkan mampu melepas dahaga sekaligus membantu menjaga kebugaran. Minuman sari lemon ini cocok dikonsumsi setelah beraktivitas, saat cuaca panas, maupun sebagai teman bersantai. Dengan kemasan yang praktis, minuman ini tidak hanya menyajikan kesegaran alami, tetapi juga membawa cerita khas dari Kampung Lemon sebagai sentra tanaman karangkitri di Desa Sumberdem."
            >
            <Box display="flex" justifyContent={{ base: 'center', md: 'flex-start' }} ml={30}>
            <button
            style={{
                padding: '12px 32px',
                background: '#00b6f3',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                fontFamily: 'Montserrat, Segoe UI, Arial, sans-serif',
                boxShadow: '0 2px 8px rgba(0,182,243,0.15)'
            }}
            >
            Pesan Sekarang
            </button>
            </Box>
            </Section>
        </Box>
    )
}
