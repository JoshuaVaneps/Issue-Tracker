import React from "react";
import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

const stausMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "InProgress", color: "violet" },
  CLOSED: { label: "Closed", color: "green" },
};

const IssuesStatusBadge = ({ status }: { status: Status }) => {
  return <Badge color={stausMap[status].color}>{stausMap[status].label}</Badge>;
};

export default IssuesStatusBadge;
