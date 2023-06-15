// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("googleworkspace");

/**
 * A temporary [OAuth 2.0 access token] obtained from the Google Authorization server, i.e. the `Authorization: Bearer`
 * token used to authenticate HTTP requests to Google Admin SDK APIs. This is an alternative to `credentials`, and ignores
 * the `oauth_scopes` field. If both are specified, `access_token` will be used over the `credentials` field.
 */
export declare const accessToken: string | undefined;
Object.defineProperty(exports, "accessToken", {
    get() {
        return __config.get("accessToken");
    },
    enumerable: true,
});

/**
 * Either the path to or the contents of a service account key file in JSON format you can manage key files using the Cloud
 * Console). If not provided, the application default credentials will be used.
 */
export declare const credentials: string | undefined;
Object.defineProperty(exports, "credentials", {
    get() {
        return __config.get("credentials");
    },
    enumerable: true,
});

/**
 * The customer id provided with your Google Workspace subscription. It is found in the admin console under Account
 * Settings.
 */
export declare const customerId: string | undefined;
Object.defineProperty(exports, "customerId", {
    get() {
        return __config.get("customerId");
    },
    enumerable: true,
});

/**
 * The impersonated user's email with access to the Admin APIs can access the Admin SDK Directory API.
 * `impersonated_user_email` is required for all services except group and user management.
 */
export declare const impersonatedUserEmail: string | undefined;
Object.defineProperty(exports, "impersonatedUserEmail", {
    get() {
        return __config.get("impersonatedUserEmail");
    },
    enumerable: true,
});

/**
 * The list of the scopes required for your application (for a list of possible scopes, see [Authorize
 * requests](https://developers.google.com/admin-sdk/directory/v1/guides/authorizing))
 */
export declare const oauthScopes: string[] | undefined;
Object.defineProperty(exports, "oauthScopes", {
    get() {
        return __config.getObject<string[]>("oauthScopes");
    },
    enumerable: true,
});

/**
 * The service account used to create the provided `access_token` if authenticating using the `access_token` method and
 * needing to impersonate a user. This service account will require the GCP role `Service Account Token Creator` if needing
 * to impersonate a user.
 */
export declare const serviceAccount: string | undefined;
Object.defineProperty(exports, "serviceAccount", {
    get() {
        return __config.get("serviceAccount");
    },
    enumerable: true,
});
