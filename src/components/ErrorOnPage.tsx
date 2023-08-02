import React, { useEffect } from 'react';
import cn from 'classnames';

import { ErrorMessages } from '../types/ErrorNessages';

type Props = {
  error: ErrorMessages | null,
  setNewError: (error: ErrorMessages | null) => void,
};

export const ErrorOnPage: React.FC<Props> = ({
  error,
  setNewError,
}) => {
  useEffect(() => {
    setTimeout(() => {
      setNewError(null);
    }, 3000);
  }, [error, setNewError]);

  return (
    <div className={cn(
      'notification is-danger is-light has-text-weight-normal',
      { hidden: !error },
    )}
    >
      <button
        type="button"
        className="delete"
        onClick={() => setNewError(null)}
        aria-label="closeBtn"
      />
      {error}
    </div>
  );
};
