import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const MinCard = ({ title, description, imageSrc, handleClick, company, Date, cursor}) => {
  return (
              <Card
            onClick={handleClick}
            key={title}
            direction={{ base: "column", sm: "row"}}
             overflow="hidden"
            variant="outline"
            cursor={cursor}
            backgroundColor={"white"}
            >
            <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px"}}
            src={imageSrc}
            alt={title}
            />
            <Stack>
              <CardBody>
                <Heading size="md" color={"#514242"}>{title}</Heading>
                <Text color="#64748b" py='2'>
                <b>{company}</b><br/>
                {/* <hr/> */}
                {Date}<br/>
                {description}
                </Text>
              </CardBody>
            </Stack>
          </Card>
  );
};

export default MinCard;


   // <Card
    //   onClick={handleClick(url)}
    //   direction={{ base: "column", sm: "row" }}
    //   overflow="hidden"
    //   variant="outline" 
    //   style={{cursor:"pointer"}}
    //   >
    //   <Image
    //     objectFit="cover"
    //     maxW={{ base: "100%", sm: "200px" }}
    //     src={imageSrc}
    //     alt={title}
    //   />
    //   <Stack>
    //     <CardBody>
    //       <Heading as="h3" size="md">{title}</Heading>
    //       <Text color="#64748b" fontSize="lg">
    //         {description}
    //       </Text>
    //     </CardBody>
    //     <CardFooter>
    //       <p spacing={2} alignitems="center">
    //         see more <FontAwesomeIcon icon={faArrowRight} size="1x" />
    //       </p>
    //     </CardFooter>
    //   </Stack>
    // </Card>
