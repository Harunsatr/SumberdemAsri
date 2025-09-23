import { ButtonLink, ButtonLinkProps } from "#components/button-link/button-link";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Heading,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "@saas-ui/react";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";

export interface TestimonialProps extends CardProps {
  name: string;
  description: React.ReactNode;
  avatar: string;
  imageSrc?: string;
  href?: string;
  action?: any; // ubah jadi optional
  children?: React.ReactNode;
}

export const Testimonial = ({
  name,
  description,
  avatar,
  imageSrc,
  href,
  children,
  action,
  ...rest
}: TestimonialProps) => {
  return (
    <Card position="relative" {...rest}>
      <CardHeader display="flex" flexDirection="row" alignItems="center">
        <Avatar name={name} src={avatar} size="sm" bg="transparent" />
        <Stack spacing="2" ms="4">
          <Heading size="sm">{name}</Heading>
          <Text color="muted" size="xs">
            {description}
          </Text>
        </Stack>
      </CardHeader>
      {imageSrc && (
        <Stack align="center" mt={2} mb={2}>
          <Image src={imageSrc} alt={name} width={350} height={350} style={{ borderRadius: 8 }} />
        </Stack>
      )}
      <CardBody>
        {children}
        {action && (
            <Stack direction="row" justify="flex-end" mt={6}>
            <ButtonLink colorScheme="blue" {...action}>
              {action.label || 'Lihat Selengkapnya'}
            </ButtonLink>
            </Stack>
        )}
      </CardBody>
    </Card>
  );
};
