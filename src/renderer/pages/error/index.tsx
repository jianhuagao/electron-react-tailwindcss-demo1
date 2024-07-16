import { memo } from 'react';
import { Link, useRouteError } from 'react-router-dom';

export default memo(function Error() {
  const error: any = useRouteError();
  return (
    <div className="flex items-center justify-center h-screen text-black">
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/home">Back to home</Link>
      </div>
    </div>
  );
});
