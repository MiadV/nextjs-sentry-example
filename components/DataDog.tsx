import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: '31266d63-0517-440e-98a4-fc263c457d5d',
  clientToken: 'pub8e10ce0bba84a7c73fe3aa64d27a745f',
  site: 'us5.datadoghq.com',
  service: 'test-app',
  env: 'production',
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sessionSampleRate: 20,
  sessionReplaySampleRate: 0,
  trackUserInteractions: false,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'mask-user-input',
  // Specify URLs to propagate trace headers for connection between RUM and backend trace
  allowedTracingUrls: [
    { match: 'https://example.com/api/', propagatorTypes: ['tracecontext'] },
  ],
});

export default function DatadogInit() {
  // Render nothing - this component is only included so that the init code
  // above will run client-side
  return null;
}
