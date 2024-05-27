import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Divider } from "@chakra-ui/react";
import { FaHome, FaTags, FaInfoCircle, FaEnvelope, FaUserPlus, FaPlus } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const threads = [
  { title: "How to learn React?", author: "John Doe", snippet: "I'm new to React and looking for resources to get started..." },
  { title: "JavaScript ES6 features", author: "Jane Smith", snippet: "Can someone explain the new features introduced in ES6?" },
  { title: "Best practices for CSS", author: "Alice Johnson", snippet: "What are some best practices for writing clean and maintainable CSS?" },
];

const categories = ["JavaScript", "React", "CSS", "HTML", "Node.js"];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={4}>
          <Link href="#" display="flex" alignItems="center">
            <FaHome />
            <Text ml={2}>Home</Text>
          </Link>
          <Link href="#" display="flex" alignItems="center">
            <FaTags />
            <Text ml={2}>Categories</Text>
          </Link>
          <Link href="#" display="flex" alignItems="center">
            <FaInfoCircle />
            <Text ml={2}>About</Text>
          </Link>
          <Link href="#" display="flex" alignItems="center">
            <FaEnvelope />
            <Text ml={2}>Contact</Text>
          </Link>
          <Link as={RouterLink} to="/register" display="flex" alignItems="center">
            <FaUserPlus />
            <Text ml={2}>Register</Text>
          </Link>
          <Link as={RouterLink} to="/create-post" display="flex" alignItems="center">
            <FaPlus />
            <Text ml={2}>Create Post</Text>
          </Link>
        </HStack>
      </Flex>

      <Flex mt={4} direction={{ base: "column", md: "row" }}>
        <Box flex="3" mr={{ md: 4 }}>
          <Heading as="h2" size="lg" mb={4}>Discussion Threads</Heading>
          <VStack spacing={4} align="stretch">
            {threads.map((thread, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md" boxShadow="sm">
                <Heading as="h3" size="md">{thread.title}</Heading>
                <Text fontSize="sm" color="gray.500">by {thread.author}</Text>
                <Text mt={2}>{thread.snippet}</Text>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box flex="1" mt={{ base: 4, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Categories</Heading>
          <VStack spacing={2} align="stretch">
            {categories.map((category, index) => (
              <Link key={index} href="#" p={2} borderWidth="1px" borderRadius="md" boxShadow="sm" _hover={{ bg: "gray.100" }}>
                {category}
              </Link>
            ))}
          </VStack>
        </Box>
      </Flex>

      <Divider my={8} />

      <Box as="footer" textAlign="center" py={4} borderTopWidth="1px">
        <Text>&copy; 2023 Tech Forum. All rights reserved.</Text>
        <HStack justifyContent="center" spacing={4} mt={2}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;