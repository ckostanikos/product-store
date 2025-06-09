import { Button, Container, HStack, Flex, Text, Box } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { Icon } from "@chakra-ui/react";
import { LuSquarePlus, LuSun } from "react-icons/lu";

import React from "react";
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          //bgGradient="linear(to-r,#fff, #90cdf4, #3182ce, #1a365d)"
          //bgClip="text"
          color={"cadetblue"}
        >
          <Link to="/">Product Store 🛒 </Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button variant={"surface"} size="lg">
              <Icon>
                <LuSquarePlus />
              </Icon>
            </Button>
          </Link>
          <Button variant={"surface"} size="lg" onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon size={20} /> : <LuSun size={20} />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
//
