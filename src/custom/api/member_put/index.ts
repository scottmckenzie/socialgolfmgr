import { AzureFunction, Context, HttpRequest } from "@azure/functions"

// update member
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest, member: any): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    context.bindings.member = member;
    context.res = {
        body: member,
        headers: {
            "content-type": "application/json"
        },
        status: 200
    };
};

export default httpTrigger;
