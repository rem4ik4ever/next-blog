import React from "react";
import { Tag } from "@chakra-ui/core";

const getStatus = (status) => {
  switch (status) {
    case "draft":
      return "yellow";
    case "released":
      return "green";
    case "archived":
      return "gray";
    default:
      return "red";
  }
};

const StatusTag = ({ children, status, ...otherProps }) => {
  return (
    <Tag size="md" variantColor={getStatus(status)} {...otherProps}>
      {children}
    </Tag>
  );
};

export default StatusTag;
