'use client'
import Image from "next/image";
import React from 'react'
import { 
    Box, 
    useTheme, 
    useColorModeValue, 
    Container, 
    Stack, 
    Text, 
    ButtonGroup 
} from '@chakra-ui/react'
import { FiArrowRight, FiCoffee, FiBook, FiGrid, FiThumbsUp } from 'react-icons/fi'

const BackgroundGradient = (props: any) => <Box {...props} position="absolute" top={0} left={0} right={0} bottom={0} bgGradient="linear(to-br, blue.100, blue.300)" />;
const FallInPlace = ({ children, ...props }: any) => <Box {...props}>{children}</Box>;
const Br = () => <br />;
const Em = ({ children }: any) => <em>{children}</em>;
const ButtonLink = (props: any) => <Box as="a" {...props}><Button {...props}>{props.children}</Button></Box>;
const Button = (props: any) => <button {...props}>{props.children}</button>;
const Hero = ({ title, description, children, ...props }: any) => (
    <Box {...props}>
        {title}
        {description}
        {children}
    </Box>
);
const Features = ({ features, ...props }: any) => (
    <Box {...props}>
        <Stack direction="row" spacing={8}>
            {features.map((feature: any, idx: number) => (
                <Box key={idx} p={4} borderWidth={1} borderRadius="lg">
                    <Box as={feature.icon} boxSize={8} mb={2} />
                    <Text fontWeight="bold">{feature.title}</Text>
                    <Text>{feature.description}</Text>
                </Box>
            ))}
        </Stack>
    </Box>
);

const HeroSection: React.FC = () => {
    return (
        <Box position="relative" overflow="hidden">           
            <Features
                id="benefits"
                columns={[1, 2, 4]}
                iconSize={4}
                innerWidth="container.xl"
                pt="60"
                marginBottom="15"

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
            {/* Hero */}
                        <HeroSection />
                        <Section
                            title="Kampung Kopi"
                            image="/static/images/KampungKopi.png"
                            desc="SUMBERDEM 1832 adalah merek produk kampoeng kopi Sumberdem yang berasal dari lereng gunung Kawi dengan ketingian 650-850 MDPL yang diproses dengan semi tradisional menggunakan bahan bakar kayu sehingga menghasilkan aroma dan citarasa yang khas dan alami. 1832 diambil dari pendataan kopi pertama kali di kabupaten Malang oleh pemerintah Hindia-Belanda, pada masa gubernur jendral VAN DEN BOSCH yang melakukan pendataan afdeling kopi di area Malang lereng gunung Tengger-Semeru di sebelah timur dan Arjuno-Kawi di sebelah barat termasuk di area Sumberdem. Dimana peninggalan itu masih dilestarikan sampai saat ini."
                        />
                        <Box width="100%" textAlign="center" mt={8}>
                            <Text fontSize="3rem" fontWeight={700} mb={4} fontFamily="Montserrat, Segoe UI, Arial, sans-serif">
                                Produk Unggulan
                            </Text>
                            <Text fontSize="1.25rem" mb={8} fontFamily="Open Sans, Arial, sans-serif">
                                Berikut adalah produk unggulan dari Kampung Kopi Sumberdem.
                            </Text>
                            <Box display="flex" flexWrap="wrap" justifyContent="center" gap={8}>
                                <Box>
                                    <Image
                                        src="/static/images/Koopi1.png"
                                        alt="Produk Unggulan"
                                        width={250}
                                        height={320}
                                        style={{
                                            borderRadius: 16,
                                            boxShadow: '0 2px 16px #00b6f3',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    {/* <Text mt={2} fontWeight={600} fontSize="1.1rem">Produk 1</Text> */}
                                </Box>
                                <Box>
                                    <Image
                                        src="/static/images/Koopi2.png"
                                        alt="Sumberdem 1832 - Bubuk"
                                        width={250}
                                        height={320}
                                        style={{
                                            borderRadius: 16,
                                            boxShadow: '0 2px 16px #00b6f3',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    {/* <Text mt={2} fontWeight={600} fontSize="1.1rem">Produk 2</Text> */}
                                </Box>
                                <Box>
                                    <Image
                                        src="/static/images/Koopi3.png"
                                        alt="Sumberdem 1832 - Roasted Bean"
                                        width={250}
                                        height={320}
                                        style={{
                                            borderRadius: 16,
                                            boxShadow: '0 2px 16px #00b6f3',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    {/* <Text mt={2} fontWeight={600} fontSize="1.1rem">Produk 3</Text> */}
                                </Box>
                                <Box>
                                    <Image
                                        src="/static/images/Koopi4.png"
                                        alt="Produk Unggulan"
                                        width={250}
                                        height={320}
                                        style={{
                                            borderRadius: 16,
                                            boxShadow: '0 2px 16px #00b6f3',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    {/* <Text mt={2} fontWeight={600} fontSize="1.1rem">Produk 4</Text> */}
                                </Box>
                            </Box>
                        </Box>
                        {/* Section Kedua (gambar di kanan) */}
            <Section
                title="Kampung Lemon"
                image="/static/images/KampungLemon.png" reverse
                desc="Kampung tematik lemon di Desa Sumberdem, Wonosari, Malang, awalnya dikenal sebagai Kampung Lemon berkat budidaya lemon yang melimpah sebagai tanaman karangkitri khas daerah ini. Saat ini pemerintah desa bersama kelompok masyarakat setempat sedang mengembangkan wisata kolam ikan dan selada air. Seiring dengan pengembangan tersebut, kampung ini direncanakan berganti nama menjadi Kampung Darmon. Nama 'Darmon' merupakan gabungan dari 'Sedaer' (selada air) dan 'Lemon,' mencerminkan dua elemen utama yang menjadi fokus pengembangan kampung ini. Wisata kolam ikan dan selada air diharapkan dapat meningkatkan daya tarik wisata serta mendukung perekonomian lokal."
            />
            <Box width="100%" textAlign="center" mt={8}>
                            <Text fontSize="3rem" fontWeight={700} mb={4} fontFamily="Montserrat, Segoe UI, Arial, sans-serif">
                                Produk Unggulan
                            </Text>
                            <Text fontSize="1.25rem" mb={8} fontFamily="Open Sans, Arial, sans-serif">
                                Berikut adalah produk unggulan dari Kampung Lemon Sumberdem.
                            </Text>
                            <Box display="flex" flexWrap="wrap" justifyContent="center" gap={8}>
                                <Box>
                                    <Image
                                        src="/static/images/lemon1.png"
                                        alt="Produk Unggulan"
                                        width={250}
                                        height={320}
                                        style={{
                                            borderRadius: 16,
                                            boxShadow: '0 2px 16px #00b6f3',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    {/* <Text mt={2} fontWeight={600} fontSize="1.1rem">Produk 1</Text> */}
                                </Box>
                                <Box>
                                    <Image
                                        src="/static/images/lemon2.png"
                                        alt="Sumberdem 1832 - Bubuk"
                                        width={250}
                                        height={320}
                                        style={{
                                            borderRadius: 16,
                                            boxShadow: '0 2px 16px #00b6f3',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    {/* <Text mt={2} fontWeight={600} fontSize="1.1rem">Produk 2</Text> */}
                                </Box>
                                <Box>
                                    <Image
                                        src="/static/images/lemon3.png"
                                        alt="Sumberdem 1832 - Roasted Bean"
                                        width={250}
                                        height={320}
                                        style={{
                                            borderRadius: 16,
                                            boxShadow: '0 2px 16px #00b6f3',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    {/* <Text mt={2} fontWeight={600} fontSize="1.1rem">Produk 3</Text> */}
                                </Box>
                                <Box>
                                    <Image
                                        src="/static/images/lemon4.png"
                                        alt="Produk Unggulan"
                                        width={250}
                                        height={320}
                                        style={{
                                            borderRadius: 16,
                                            boxShadow: '0 2px 16px #00b6f3',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    {/* <Text mt={2} fontWeight={600} fontSize="1.1rem">Produk 4</Text> */}
                                </Box>
                            </Box>
                        </Box>

            {/* Section Ketiga (duplikat isi yang sama, bisa kamu ganti kontennya nanti) */}
            <Section
                title="Kampung Ternak"
                image="/static/images/KampungTernak.png" reverse
                desc="Di kampung ternak sendiri sebenarnya sudah terbentuk kelompok ternak, oleh masyarakat Desa Sumberdem dimanfaatkan sebagai wisata karena berpotensi. Para wisatawan bisa belajar dengan baik tentang peternakan di sini, seperti cara merawat hewan, cara mengolah pakan, maupun cara pengolahan kotoran hewan sebagai pupuk tanaman. Selain itu, kampung ternak juga menjadi sarana edukasi yang bermanfaat bagi pelajar, mahasiswa, maupun masyarakat umum yang ingin memahami lebih dalam mengenai sistem peternakan berkelanjutan. Dengan suasana pedesaan yang asri, wisata edukasi kampung ternak ini tidak hanya memberikan pengalaman belajar, tetapi juga menawarkan interaksi."
            />
            <Box width="100%" textAlign="center" mt={8}>
                            <Text fontSize="3rem" fontWeight={700} mb={4} fontFamily="Montserrat, Segoe UI, Arial, sans-serif">
                                Produk Unggulan
                            </Text>
                            <Text fontSize="1.25rem" mb={8} fontFamily="Open Sans, Arial, sans-serif">
                                Berikut adalah produk unggulan dari Olahan Kampung Ternak.
                            </Text>
                            <Box display="flex" flexWrap="wrap" justifyContent="center" gap={8}>
                                <Box>
                                    <Image
                                        src="/static/images/ternak1.png"
                                        alt="Produk Unggulan"
                                        width={250}
                                        height={320}
                                        style={{
                                            borderRadius: 16,
                                            boxShadow: '0 2px 16px #00b6f3',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    {/* <Text mt={2} fontWeight={600} fontSize="1.1rem">Produk 1</Text> */}
                                </Box>
                                <Box>
                                    <Image
                                        src="/static/images/ternak2.png"
                                        alt="Sumberdem 1832 - Bubuk"
                                        width={250}
                                        height={320}
                                        style={{
                                            borderRadius: 16,
                                            boxShadow: '0 2px 16px #00b6f3',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    {/* <Text mt={2} fontWeight={600} fontSize="1.1rem">Produk 2</Text> */}
                                </Box>
                                <Box>
                                    <Image
                                        src="/static/images/ternak3.png"
                                        alt="Sumberdem 1832 - Roasted Bean"
                                        width={250}
                                        height={320}
                                        style={{
                                            borderRadius: 16,
                                            boxShadow: '0 2px 16px #00b6f3',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    {/* <Text mt={2} fontWeight={600} fontSize="1.1rem">Produk 3</Text> */}
                                </Box>
                                <Box>
                                    <Image
                                        src="/static/images/ternak4.png"
                                        alt="Produk Unggulan"
                                        width={250}
                                        height={320}
                                        style={{
                                            borderRadius: 16,
                                            boxShadow: '0 2px 16px #00b6f3',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    {/* <Text mt={2} fontWeight={600} fontSize="1.1rem">Produk 4</Text> */}
                                </Box>
                            </Box>
                        </Box>
        </Box>
    )
}
