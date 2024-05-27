import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Select, Textarea, VStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const categories = ["JavaScript", "React", "CSS", "HTML", "Node.js"];

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!title) errors.title = "Title is required";
    if (!content) errors.content = "Content is required";
    if (!category) errors.category = "Category is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle post creation logic here
      console.log("Post created:", { title, content, category });
      // Redirect to home page after creation
      navigate("/");
    }
  };

  return (
    <Container maxW="container.md" p={4}>
      <Box p={8} borderWidth="1px" borderRadius="md" boxShadow="sm">
        <Heading as="h1" size="xl" mb={6} textAlign="center">Create New Post</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="title" isInvalid={errors.title}>
              <FormLabel>Title</FormLabel>
              <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
              {errors.title && <Text color="red.500" fontSize="sm">{errors.title}</Text>}
            </FormControl>
            <FormControl id="content" isInvalid={errors.content}>
              <FormLabel>Content</FormLabel>
              <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
              {errors.content && <Text color="red.500" fontSize="sm">{errors.content}</Text>}
            </FormControl>
            <FormControl id="category" isInvalid={errors.category}>
              <FormLabel>Category</FormLabel>
              <Select placeholder="Select category" value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </Select>
              {errors.category && <Text color="red.500" fontSize="sm">{errors.category}</Text>}
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">Create Post</Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default CreatePost;