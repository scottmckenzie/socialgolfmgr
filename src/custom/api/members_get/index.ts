import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest, members: any): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    if (members.length > 0) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: members,
            headers: {
                "content-type": "application/json"
            }    
        };
    }
    else {
        context.log('Members not found');
        context.res = {
            status: 404
        };
    }
};

export default httpTrigger;
