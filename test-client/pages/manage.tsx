import Link from 'next/link';
import React from 'react';

export default function MAnage() {
  // todo
  return (
    <div>
      <Link
        href="/"
        role="button"
        data-testid="manage-facts-button"
        title="Manage facts">back</Link>
    </div>
  );
};
