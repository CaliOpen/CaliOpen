import { useFormikContext } from 'formik';
import * as React from 'react';

export default function FormDebug() {
  const val = useFormikContext();
  return (
    <div>
      <pre>{JSON.stringify(val, undefined, 2)}</pre>
    </div>
  );
}
