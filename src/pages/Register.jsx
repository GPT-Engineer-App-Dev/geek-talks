import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Link, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!username) errors.username = "Username is required";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle registration logic here
      console.log("User registered:", { username, email, password });
      navigate("/");
    }
  };

  return (
    <Container maxW="container.sm" p={4}>
      <Box p={8} borderWidth="1px" borderRadius="md" boxShadow="sm">
        <Heading as="h1" size="xl" mb={6} textAlign="center">Register</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="username" isInvalid={errors.username}>
              <FormLabel>Username</FormLabel>
              <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              {errors.username && <Text color="red.500" fontSize="sm">{errors.username}</Text>}
            </FormControl>
            <FormControl id="email" isInvalid={errors.email}>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors.email && <Text color="red.500" fontSize="sm">{errors.email}</Text>}
            </FormControl>
            <FormControl id="password" isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {errors.password && <Text color="red.500" fontSize="sm">{errors.password}</Text>}
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">Register</Button>
          </VStack>
        </form>
        <Flex justifyContent="center" mt={4}>
          <Text>Already have an account? <Link color="blue.500" href="/login">Login</Link></Text>
        </Flex>
      </Box>
    </Container>
  );
};

export default Register;