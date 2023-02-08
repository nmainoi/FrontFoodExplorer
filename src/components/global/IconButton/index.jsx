

import { Button } from "./styles";


function IconButton({ children, ...props }) {
  return (
    <Button {...props}>
      {children}
    </Button>
  );
}

export {
    IconButton
}