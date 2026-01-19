import React, { Suspense } from 'react';
import Loading from './Loading/Loading';
import ErrorElem from './ErrorElem/ErrorElem';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const ComponentName = (name: string) => {
  return React.lazy(() => import(`../page/${name}/${name}.tsx`));
};

export function Component(props) {
  const Component = ComponentName(props.name);
  return (
    <ErrorBoundary fallback={<ErrorElem />}>
      <Suspense fallback={<Loading />}>
        <Component {...props} />
      </Suspense>
    </ErrorBoundary>
  );
}
