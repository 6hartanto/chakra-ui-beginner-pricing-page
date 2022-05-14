import { Box, HStack, Icon, StackProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { GuaranteeIcon, HassleFreeIcon, PayOnceIcon } from "../icons/Icon";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="24px">
      <Icon as={icon} boxSize="48px" />
      <Text textAlign='left' fontSize="18px" fontWeight="700">
        {children}
      </Text>
    </HStack>
  );
}

export function Features() {
  return (
    <Box maxW='1024px' m='auto' pt='60px' pb='32px'>
      <HStack px='48px' spacing='20px'>
        <Feature icon={GuaranteeIcon}>30 days money back Guarantee</Feature>
        <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={PayOnceIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </HStack>
    </Box>
  );
}
