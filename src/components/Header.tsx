import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex h="10vh" align="center">
      <Image src="/images/Logo (1).svg" alt="logo" w="215px" h="32px" />
    </Flex>
  )
}