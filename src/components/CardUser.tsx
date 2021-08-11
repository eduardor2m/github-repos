import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { AiOutlineRight } from 'react-icons/ai'

type Props = {
  user: {
    name: string,
    avatar_url: string,
    repos_url: string,

  }
}

export function CardUser({user}: Props) {
  return (
    <Flex w="714px" h="112px" bg="white" borderRadius="5px" align="center" pl="14px" pr="14px" justify="space-between">
      <Flex>
        <Flex>
          <Image src={user.avatar_url} alt="github" w="83.81" h="83.81" borderRadius="50%" />
        </Flex>
        <Flex flexDir="column" ml="22px" justify="center">
          <Text fontSize="24px" fontWeight="bold">{user.name}/repo</Text>
          <Text fontSize="18px">{user.repos_url}</Text>
        </Flex>
      </Flex>
      <Flex>

        <Button>
          <AiOutlineRight />
        </Button>

      </Flex>
    </Flex>
  )
}
