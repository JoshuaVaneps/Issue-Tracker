import IssuesStatusBadge from "@/app/components/IssuesStatusBadge";
import { Box, Card, Flex } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssueDetails = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton width="10rem" />
      <Flex gap="3" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetails;
