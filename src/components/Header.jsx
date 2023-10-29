import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"5"} shadow={"base"} bgColor={"blackAlpha.900"}  >
      <Button fontSize='2xl' variant={"solid"} color={"black"} borderWidth='1px' borderRadius='lg' >
        <Link to="/">Home</Link>
      </Button>
      <Button fontSize='2xl' variant={"solid"} color={"black"} borderWidth='1px'>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button fontSize='2xl' variant={"solid"} color={"black"} borderWidth='1px'>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
