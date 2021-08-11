import { Button, Flex, FormControl, Image, Input, Link, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineRight} from 'react-icons/ai'
import { Header } from "../components/Header";
import { CardRepo } from "../components/CardRepo";
import { CardUser } from "../components/CardUser";

type PropsRepo = {
  url: string,
  name: string,
  owner: {
    login: string
  }
}

type PropsUser = {
  name: string,
  avatar_url: string,
  repos_url: string,
}

export default function Home() {

  const [repos, setRepos] = useState<PropsRepo[]>([] as PropsRepo[]);
  const [user, setUser] = useState<PropsUser>({} as PropsUser);
  const [name, setName] = useState('');

  async function loadUser(name: string) {
    const data = fetch(`https://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(data => setUser(data));
    const repo = fetch(`https://api.github.com/users/${name}/repos`)
      .then(response => response.json())
      .then(repos => setRepos(repos));
    console.log(data);

  }


  return (
    <Flex paddingLeft="241px" flexDir="column">
      <Header />

      <Flex mt="102px" flexDir="column"> 
        <Text fontSize="48px" fontWeight="bold">
          Explore repositórios<br/>
          no Github.
        </Text> 
        <Flex mt="40px">
          <Input
            w="504px"
            h="72px"
            placeholder="Digite aqui"
            onChange={(e) => { setName(e.target.value) }} value={name} />
          <Button
            w="210px"
            h="72px"
            bg="#04D361"
            color="white"
            onClick={() => loadUser(name)}>Pesquisar</Button>
        </Flex>

        <Flex mt="120px">
          {user.name ? 
            <CardUser user={user}/>

          : null}
        </Flex> 

      </Flex>
      
      <Flex mt="120px" flexDir="column">
        { repos ? repos.map( repo => (
          <CardRepo key={repo.name} repo={repo}/>
        )) : null}
      </Flex>
    </Flex>

  )
}
