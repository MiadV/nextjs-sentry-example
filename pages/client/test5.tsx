import { datadogRum } from '@datadog/browser-rum';

const Test5 = () => (
  <>
    <h1>Client Test 5</h1>
    <button
      onClick={() => {
        try {
          // Some operation the button does, but fails
          throw new Error('Client Test 5');
        } catch (error) {
          console.error('Error:', error);
          datadogRum.addError(error);
        } finally {
          //
        }
      }}
    >
      Click me to create a transaction and throw an Error
    </button>
  </>
);

export default Test5;
