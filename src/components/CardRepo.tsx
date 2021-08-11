import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { AiOutlineRight } from 'react-icons/ai'

interface Props {
  repo: {
    name: string;
    url: string,
    owner: {
      login: string;
    }
  }
}

export function CardRepo({repo}: Props) {

  return (
    <Flex flexDir="column">

      <Flex flexDir="column">
         <Flex key={repo.name} w="960px" h="112px" bg="white" pl="24px" pr="24px" borderRadius="5px" mt="16px"  justify="space-between" align="center">
          <Flex flexDir="column">
            <Text fontSize="24px" fontWeight="bold">{repo.name}</Text>
            <Text>{repo.owner.login}</Text>
          </Flex>
           <Flex>
             <Link href={repo.url}>
             <Button>
               <AiOutlineRight />
             </Button>
             </Link>
           </Flex>
         </Flex>
     </Flex>
    </Flex>

  )
}
