import React from "react";

function ConditionalRenderer({condition, children}) {
  return condition ? <>{children}</> : <p className="notes-list__empty-message">Tidak ada catatan</p>;
}

export default ConditionalRenderer;