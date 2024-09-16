import React from "react";
import { LinkProps } from "react-router-dom";

export interface items {
  title: React.ReactElement<LinkProps> | string;
}
