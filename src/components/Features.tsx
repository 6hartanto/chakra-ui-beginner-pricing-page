import { Box, Flex, HStack, Icon, Stack, StackProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { GuaranteeIcon, HassleFreeIcon, PayOnceIcon } from "../icons/Icon";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="6">
      <Icon as={icon} boxSize="12" />
      <Text textAlign="left" fontSize="lg" fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
}

export function Features() {
  return (
    <Box maxW="1024px" m="auto" pt="60px" pb="8">
      <Stack direction={['column', 'column', 'row']} px="12" spacing="5">
        <Feature icon={GuaranteeIcon}>30 days money back Guarantee</Feature>
        <Feature icon={HassleFreeIcon}>
          No setup fees 100% hassle-free
        </Feature>
        <Feature icon={PayOnceIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
}
