import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: '31266d63-0517-440e-98a4-fc263c457d5d',
  clientToken: 'pub76c8f641e8120f3863d91da60cf0172b',
  site: 'us5.datadoghq.com',
  service: 'test-app',
  env: 'production',
  // Specify a version number to identify the deployed version of your application in Datadog
  version: 'test-1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: false,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'mask-user-input',
});

export default function DatadogInit() {
  // Render nothing - this component is only included so that the init code
  // above will run client-side
  return null;
}
