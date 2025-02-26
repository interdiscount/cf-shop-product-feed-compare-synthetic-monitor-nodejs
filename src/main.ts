import {runSyntheticHandler, instantiateAutoInstrumentation} from '@google-cloud/synthetics-sdk-api'
// Run instantiateAutoInstrumentation before any other code runs, to get automatic logs and traces
instantiateAutoInstrumentation();
import * as ff from '@google-cloud/functions-framework';
import axios from 'axios';
import assert from 'node:assert';
import {Logger} from 'winston';

ff.http('SyntheticFunction', runSyntheticHandler(async ({logger, executionId}: {logger: Logger, executionId: string|undefined}) => {
  /*
   * This function executes the synthetic code for testing purposes.
   * If the code runs without errors, the synthetic test is considered successful.
   * If an error is thrown during execution, the synthetic test is considered failed.
   */
  logger.info('Making an http request using synthetics, with execution id: ' + executionId);
  const url = 'https://www.google.com/'; // URL to send the request to
  return await assert.doesNotReject(axios.get(url));
}));