import { chakra, HTMLChakraProps, Box, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Logo: React.FC<HTMLChakraProps<'img'>> = (props) => (
  <Box display="inline-flex" alignItems="center">
    <Box boxSize="28px" minW={0} ml={9} display="inline-block">
      <chakra.img
        src="/static/images/LogoSumberdem.png"
        alt="Logo"
        objectFit="contain"
        width="110%"
        height="120%"
        {...props}
        boxSize="200%"
      />
    </Box>
    <Box as="span" ml={2} display="inline-block">
      <Text as="span" fontWeight="bold" fontSize="md" lineHeight="1.1" display="block">
        DESA SUMBERDEM
      </Text>
      <Text as="span" fontSize="sm" color="white.700" fontWeight="normal" display="block">
        WONOSARI - MALANG
      </Text>
    </Box>
  </Box>
)