import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? {message: "Hello, " + name + ". This HTTP triggered function executed successfully."}
        : {message: "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."};

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage,
        headers: {
            "content-type": "application/json"
        }
    };
};

export default httpTrigger;