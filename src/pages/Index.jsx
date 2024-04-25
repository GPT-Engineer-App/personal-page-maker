// Complete the My Page component for a community site
import { Box, VStack, Heading, Divider, List, ListItem, ListIcon, Text } from "@chakra-ui/react";
import { FaRegComment, FaRegListAlt, FaUserSlash, FaHeart } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Heading textAlign="center" mb={3}>
        마이페이지
      </Heading>
      <Divider mb={5} />

      <Box display="flex">
        <VStack align="stretch" minW="200px" borderRight="1px" borderColor="gray.200" pr={5}>
          <Heading size="md" mb={3}>
            내 활동
          </Heading>
          <List spacing={2}>
            <ListItem>
              <ListIcon as={FaRegListAlt} color="green.500" />
              내가 쓴 글 보기
            </ListItem>
            <ListItem>
              <ListIcon as={FaRegComment} color="blue.500" />
              내가 쓴 댓글
            </ListItem>
            <ListItem>
              <ListIcon as={FaHeart} color="pink.500" />
              관심글 보기
            </ListItem>
            <ListItem>
              <ListIcon as={FaUserSlash} color="red.500" />
              차단 사용자 관리
            </ListItem>
          </List>
        </VStack>

        <Box flex="1" pl={5}>
          <Heading size="lg" mb={3}>
            내가 쓴 글 보기
          </Heading>
          <List spacing={3}>
            <ListItem>
              <Text fontSize="md">글 제목 1</Text>
            </ListItem>
            <ListItem>
              <Text fontSize="md">글 제목 2</Text>
            </ListItem>
            <ListItem>
              <Text fontSize="md">글 제목 3</Text>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
