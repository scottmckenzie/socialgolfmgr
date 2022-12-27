import { AzureFunction, Context, HttpRequest } from "@azure/functions"

// create a new member
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest, member: any): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    member.id = crypto.randomUUID();
    context.bindings.member = member;

    context.res = {
        body: member,
        headers: {
            "content-type": "application/json"
        },
        status: 201
    };
};

export default httpTrigger;
