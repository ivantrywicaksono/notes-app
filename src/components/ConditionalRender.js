import React from "react";

function ConditionalRenderer({condition, children}) {
  return condition ? <>{children}</> : <p>No data</p>;
}

export default ConditionalRenderer;