import { datadogLogs } from '@datadog/browser-logs';

datadogLogs.init({
  clientToken: 'pub8e10ce0bba84a7c73fe3aa64d27a745f',
  site: 'us5.datadoghq.com',
  service: 'test-app',
  env: 'production',
  // Specify a version number to identify the deployed version of your application in Datadog
  version: 'test-1.0.0',
  sessionSampleRate: 100,
  forwardErrorsToLogs: true,
  forwardConsoleLogs: 'all',
});

export default function DatadogInit() {
  // Render nothing - this component is only included so that the init code
  // above will run client-side
  return null;
}
