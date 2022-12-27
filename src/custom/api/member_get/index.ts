import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest, member: any): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    if (member.length > 0) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: member[0],
            headers: {
                "content-type": "application/json"
            }    
        };
    }
    else {
        context.log('Member not found');
        context.res = {
            status: 404
        };
    }
};

export default httpTrigger;
