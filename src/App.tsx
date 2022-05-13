import "./App.css";
import { Box, Stack, VStack, HStack } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
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
