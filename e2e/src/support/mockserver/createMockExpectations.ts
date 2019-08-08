import { mockServerClient } from 'mockserver-client';
import { MOCKSERVER_HOST, MOCKSERVER_PORT } from './config/environmentConstants';

interface MockExpectationArgs {
    method?: 'GET' | 'POST' | 'PUT',
    path: string,
    responseCode?: number,
    responseBody?: any,
    requestBody?: any,
    requestHeaders?: any,
    responseHeaders?: any,
    queryStringParameters?: object,
    times?: number
    stringifyResponseBody?: boolean
}

export const createMockExpectation = async ({
    method = 'GET',
    path,
    responseCode = 200,
    responseBody,
    requestBody,
    requestHeaders,
    queryStringParameters,
    responseHeaders,
    times = -1,
}: MockExpectationArgs) => {
    const expectation = {
        httpRequest: {
            method,
            path,
            queryStringParameters,
            headers: requestHeaders,
            body:
                requestBody !== undefined
                    ? {
                        type: 'JSON',
                        json: JSON.stringify(requestBody)
                    }
                    : undefined
        },
        httpResponse: {
            statusCode: responseCode,
            headers: responseHeaders,
            body: JSON.stringify(responseBody)
        },
        times: {
            remainingTimes: times ? times : undefined,
            unlimited: times <= 0
        }
    };
    try {
        const client = mockServerClient(MOCKSERVER_HOST, MOCKSERVER_PORT);
        if (responseHeaders) {
            await client.setDefaultHeaders([], []);
        }
        await client.clear(expectation);
        await client.mockAnyResponse(expectation);
    } catch (error) {
        console.log(error);
    }
};
