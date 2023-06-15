// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as googleworkspace from "@pulumi/googleworkspace";
 *
 * const example = googleworkspace.getUser({
 *     primaryEmail: "user.with.gmail.license@example.com",
 * });
 * const alias = new googleworkspace.User("alias", {
 *     primaryEmail: "alias@example.com",
 *     password: "34819d7beeabb9260a5c854bc85b3e44",
 *     hashFunction: "MD5",
 *     name: {
 *         familyName: "Scott",
 *         givenName: "Michael",
 *     },
 * });
 * const test = new googleworkspace.GmailSendAsAlias("test", {
 *     primaryEmail: example.then(example => example.primaryEmail),
 *     sendAsEmail: alias.primaryEmail,
 * });
 * ```
 *
 * ## Import
 *
 * ```sh
 *  $ pulumi import googleworkspace:index/gmailSendAsAlias:GmailSendAsAlias alias user@example.com:alias@anotherexample.com
 * ```
 */
export class GmailSendAsAlias extends pulumi.CustomResource {
    /**
     * Get an existing GmailSendAsAlias resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GmailSendAsAliasState, opts?: pulumi.CustomResourceOptions): GmailSendAsAlias {
        return new GmailSendAsAlias(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'googleworkspace:index/gmailSendAsAlias:GmailSendAsAlias';

    /**
     * Returns true if the given object is an instance of GmailSendAsAlias.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GmailSendAsAlias {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GmailSendAsAlias.__pulumiType;
    }

    /**
     * A name that appears in the 'From:' header for mail sent using this alias. For custom 'from' addresses, when this is empty, Gmail will populate the 'From:' header with the name that is used for the primary address associated with the account. If the admin has disabled the ability for users to update their name format, requests to update this field for the primary login will silently fail.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Whether this address is selected as the default 'From:' address in situations such as composing a new message or sending
     * a vacation auto-reply. Every Gmail account has exactly one default send-as address, so the only legal value that clients
     * may write to this field is true. Changing this from false to true for an address will result in this field becoming
     * false for the other previous default address. Toggling an existing alias' default to false is not possible, another
     * alias must be added/imported and toggled to true to remove the default from an existing alias. To avoid drift with
     * Terraform, please change the previous default's config to false AFTER a new default is applied and perform a refresh to
     * synchronize with remote state.
     */
    public readonly isDefault!: pulumi.Output<boolean | undefined>;
    /**
     * Whether this address is the primary address used to login to the account. Every Gmail account has exactly one primary address, and it cannot be deleted from the collection of send-as aliases.
     */
    public /*out*/ readonly isPrimary!: pulumi.Output<boolean>;
    /**
     * User's primary email address.
     */
    public readonly primaryEmail!: pulumi.Output<string>;
    /**
     * An optional email address that is included in a 'Reply-To:' header for mail sent using this alias. If this is empty, Gmail will not generate a 'Reply-To:' header.
     */
    public readonly replyToAddress!: pulumi.Output<string | undefined>;
    /**
     * The email address that appears in the 'From:' header for mail sent using this alias.
     */
    public readonly sendAsEmail!: pulumi.Output<string>;
    /**
     * An optional HTML signature that is included in messages composed with this alias in the Gmail web UI. This signature is added to new emails only.
     */
    public readonly signature!: pulumi.Output<string | undefined>;
    /**
     * An optional SMTP service that will be used as an outbound relay for mail sent using this alias. If this is empty, outbound mail will be sent directly from Gmail's servers to the destination SMTP service. This setting only applies to custom 'from' aliases.
     */
    public readonly smtpMsa!: pulumi.Output<outputs.GmailSendAsAliasSmtpMsa | undefined>;
    /**
     * Defaults to `true`. Whether Gmail should treat this address as an alias for the user's primary email address. This setting only applies to custom 'from' aliases. See https://support.google.com/a/answer/1710338 for help on making this decision
     */
    public readonly treatAsAlias!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether this address has been verified for use as a send-as alias.
     */
    public /*out*/ readonly verificationStatus!: pulumi.Output<string>;

    /**
     * Create a GmailSendAsAlias resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GmailSendAsAliasArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GmailSendAsAliasArgs | GmailSendAsAliasState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GmailSendAsAliasState | undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["isDefault"] = state ? state.isDefault : undefined;
            resourceInputs["isPrimary"] = state ? state.isPrimary : undefined;
            resourceInputs["primaryEmail"] = state ? state.primaryEmail : undefined;
            resourceInputs["replyToAddress"] = state ? state.replyToAddress : undefined;
            resourceInputs["sendAsEmail"] = state ? state.sendAsEmail : undefined;
            resourceInputs["signature"] = state ? state.signature : undefined;
            resourceInputs["smtpMsa"] = state ? state.smtpMsa : undefined;
            resourceInputs["treatAsAlias"] = state ? state.treatAsAlias : undefined;
            resourceInputs["verificationStatus"] = state ? state.verificationStatus : undefined;
        } else {
            const args = argsOrState as GmailSendAsAliasArgs | undefined;
            if ((!args || args.primaryEmail === undefined) && !opts.urn) {
                throw new Error("Missing required property 'primaryEmail'");
            }
            if ((!args || args.sendAsEmail === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sendAsEmail'");
            }
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["isDefault"] = args ? args.isDefault : undefined;
            resourceInputs["primaryEmail"] = args ? args.primaryEmail : undefined;
            resourceInputs["replyToAddress"] = args ? args.replyToAddress : undefined;
            resourceInputs["sendAsEmail"] = args ? args.sendAsEmail : undefined;
            resourceInputs["signature"] = args ? args.signature : undefined;
            resourceInputs["smtpMsa"] = args ? args.smtpMsa : undefined;
            resourceInputs["treatAsAlias"] = args ? args.treatAsAlias : undefined;
            resourceInputs["isPrimary"] = undefined /*out*/;
            resourceInputs["verificationStatus"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GmailSendAsAlias.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering GmailSendAsAlias resources.
 */
export interface GmailSendAsAliasState {
    /**
     * A name that appears in the 'From:' header for mail sent using this alias. For custom 'from' addresses, when this is empty, Gmail will populate the 'From:' header with the name that is used for the primary address associated with the account. If the admin has disabled the ability for users to update their name format, requests to update this field for the primary login will silently fail.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Whether this address is selected as the default 'From:' address in situations such as composing a new message or sending
     * a vacation auto-reply. Every Gmail account has exactly one default send-as address, so the only legal value that clients
     * may write to this field is true. Changing this from false to true for an address will result in this field becoming
     * false for the other previous default address. Toggling an existing alias' default to false is not possible, another
     * alias must be added/imported and toggled to true to remove the default from an existing alias. To avoid drift with
     * Terraform, please change the previous default's config to false AFTER a new default is applied and perform a refresh to
     * synchronize with remote state.
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * Whether this address is the primary address used to login to the account. Every Gmail account has exactly one primary address, and it cannot be deleted from the collection of send-as aliases.
     */
    isPrimary?: pulumi.Input<boolean>;
    /**
     * User's primary email address.
     */
    primaryEmail?: pulumi.Input<string>;
    /**
     * An optional email address that is included in a 'Reply-To:' header for mail sent using this alias. If this is empty, Gmail will not generate a 'Reply-To:' header.
     */
    replyToAddress?: pulumi.Input<string>;
    /**
     * The email address that appears in the 'From:' header for mail sent using this alias.
     */
    sendAsEmail?: pulumi.Input<string>;
    /**
     * An optional HTML signature that is included in messages composed with this alias in the Gmail web UI. This signature is added to new emails only.
     */
    signature?: pulumi.Input<string>;
    /**
     * An optional SMTP service that will be used as an outbound relay for mail sent using this alias. If this is empty, outbound mail will be sent directly from Gmail's servers to the destination SMTP service. This setting only applies to custom 'from' aliases.
     */
    smtpMsa?: pulumi.Input<inputs.GmailSendAsAliasSmtpMsa>;
    /**
     * Defaults to `true`. Whether Gmail should treat this address as an alias for the user's primary email address. This setting only applies to custom 'from' aliases. See https://support.google.com/a/answer/1710338 for help on making this decision
     */
    treatAsAlias?: pulumi.Input<boolean>;
    /**
     * Indicates whether this address has been verified for use as a send-as alias.
     */
    verificationStatus?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GmailSendAsAlias resource.
 */
export interface GmailSendAsAliasArgs {
    /**
     * A name that appears in the 'From:' header for mail sent using this alias. For custom 'from' addresses, when this is empty, Gmail will populate the 'From:' header with the name that is used for the primary address associated with the account. If the admin has disabled the ability for users to update their name format, requests to update this field for the primary login will silently fail.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Whether this address is selected as the default 'From:' address in situations such as composing a new message or sending
     * a vacation auto-reply. Every Gmail account has exactly one default send-as address, so the only legal value that clients
     * may write to this field is true. Changing this from false to true for an address will result in this field becoming
     * false for the other previous default address. Toggling an existing alias' default to false is not possible, another
     * alias must be added/imported and toggled to true to remove the default from an existing alias. To avoid drift with
     * Terraform, please change the previous default's config to false AFTER a new default is applied and perform a refresh to
     * synchronize with remote state.
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * User's primary email address.
     */
    primaryEmail: pulumi.Input<string>;
    /**
     * An optional email address that is included in a 'Reply-To:' header for mail sent using this alias. If this is empty, Gmail will not generate a 'Reply-To:' header.
     */
    replyToAddress?: pulumi.Input<string>;
    /**
     * The email address that appears in the 'From:' header for mail sent using this alias.
     */
    sendAsEmail: pulumi.Input<string>;
    /**
     * An optional HTML signature that is included in messages composed with this alias in the Gmail web UI. This signature is added to new emails only.
     */
    signature?: pulumi.Input<string>;
    /**
     * An optional SMTP service that will be used as an outbound relay for mail sent using this alias. If this is empty, outbound mail will be sent directly from Gmail's servers to the destination SMTP service. This setting only applies to custom 'from' aliases.
     */
    smtpMsa?: pulumi.Input<inputs.GmailSendAsAliasSmtpMsa>;
    /**
     * Defaults to `true`. Whether Gmail should treat this address as an alias for the user's primary email address. This setting only applies to custom 'from' aliases. See https://support.google.com/a/answer/1710338 for help on making this decision
     */
    treatAsAlias?: pulumi.Input<boolean>;
}