import React from 'react';

import { Stack, StackProps } from './Stack';

interface Props extends Omit<StackProps, 'direction'> {}

export const VStack: React.FC<Props> = ({ children, ...props }) => {
  return (
      <Stack
          direction="column"
          {...props}
      >
        {children}
      </Stack>
  );
}
