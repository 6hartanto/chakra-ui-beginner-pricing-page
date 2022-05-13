import "./App.css";
import { Box, Stack, VStack, HStack, Text } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Text as='i'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur amet obcaecati quibusdam! Iure fuga accusantium, sed perspiciatis ex quasi dolorem quis natus aliquam sunt suscipit tenetur iste doloremque quo nisi.
      </Text>
      <HStack spacing='24px'>
        <Box bg="green" w="100px" h="200px">
          item1
        </Box>
        <Box bg="blue" w="100px" h="200px">
          item2
        </Box>
        <Box bg="red" w="200px" h="100px">
          item3
        </Box>
        <Box bg="tomato" w="100px" h="200px">
          item4
        </Box>
      </HStack>
    </div>
  );
}

export default App;
