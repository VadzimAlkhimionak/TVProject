import { Stack, StackProps } from './Stack';
import React from "react";

interface Props extends Omit<StackProps, 'direction'> {}

export const HStack: React.FC<Props> = ({ align, children, ...props }) => {
  return (
      <Stack
          direction="row"
          align={align ?? 'center'}
          {...props}
      >
        {children}
      </Stack>
  );
}
