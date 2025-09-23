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
            title="Sumberdem 1832 - Bubuk"
            image="/static/images/kopi_2.png"
            desc="SUMBERDEM 1832 adalah merek produk kampoeng kopi Sumberdem yang berasal dari lereng gunung Kawi dengan ketingian 650-850 MDPL yang diproses dengan semi tradisional mengunakan bahan bakar kayu sehingga menghasilkan aroma dan citarasa yang khas dan alami. 1832 diambil dari pendataan kopi pertama kali di kabupaten Malang oleh pemerintah Hindia-Belanda, pada masa gubernur jendral VAN DEN BOSCH yang melakukan pendataan afdeling kopi di area Malang lereng gunung Tengger-Semeru di sebelah timur dan Arjuno-Kawi di sebelah barat termasuk di area Sumberdem. Dimana peninggalan itu masih dilestarikan sampai saat ini."
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
            title="Sumberdem 1832 - Roasted Bean"
            image="/static/images/kopi_2.png"
            desc="SUMBERDEM 1832 adalah merek produk kampoeng kopi Sumberdem yang berasal dari lereng gunung Kawi dengan ketingian 650-850 MDPL yang diproses dengan semi tradisional mengunakan bahan bakar kayu sehingga menghasilkan aroma dan citarasa yang khas dan alami. 1832 diambil dari pendataan kopi pertama kali di kabupaten Malang oleh pemerintah Hindia-Belanda, pada masa gubernur jendral VAN DEN BOSCH yang melakukan pendataan afdeling kopi di area Malang lereng gunung Tengger-Semeru di sebelah timur dan Arjuno-Kawi di sebelah barat termasuk di area Sumberdem. Dimana peninggalan itu masih dilestarikan sampai saat ini."
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
