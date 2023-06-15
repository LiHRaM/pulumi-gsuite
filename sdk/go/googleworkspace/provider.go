// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package googleworkspace

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// The provider type for the googleworkspace package. By default, resources use package-wide configuration
// settings, however an explicit `Provider` instance may be created and passed during resource
// construction to achieve fine-grained programmatic control over provider settings. See the
// [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
type Provider struct {
	pulumi.ProviderResourceState

	// A temporary [OAuth 2.0 access token] obtained from the Google Authorization server, i.e. the `Authorization: Bearer`
	// token used to authenticate HTTP requests to Google Admin SDK APIs. This is an alternative to `credentials`, and ignores
	// the `oauth_scopes` field. If both are specified, `access_token` will be used over the `credentials` field.
	AccessToken pulumi.StringPtrOutput `pulumi:"accessToken"`
	// Either the path to or the contents of a service account key file in JSON format you can manage key files using the Cloud
	// Console). If not provided, the application default credentials will be used.
	Credentials pulumi.StringPtrOutput `pulumi:"credentials"`
	// The customer id provided with your Google Workspace subscription. It is found in the admin console under Account
	// Settings.
	CustomerId pulumi.StringPtrOutput `pulumi:"customerId"`
	// The impersonated user's email with access to the Admin APIs can access the Admin SDK Directory API.
	// `impersonated_user_email` is required for all services except group and user management.
	ImpersonatedUserEmail pulumi.StringPtrOutput `pulumi:"impersonatedUserEmail"`
	// The service account used to create the provided `access_token` if authenticating using the `access_token` method and
	// needing to impersonate a user. This service account will require the GCP role `Service Account Token Creator` if needing
	// to impersonate a user.
	ServiceAccount pulumi.StringPtrOutput `pulumi:"serviceAccount"`
}

// NewProvider registers a new resource with the given unique name, arguments, and options.
func NewProvider(ctx *pulumi.Context,
	name string, args *ProviderArgs, opts ...pulumi.ResourceOption) (*Provider, error) {
	if args == nil {
		args = &ProviderArgs{}
	}

	var resource Provider
	err := ctx.RegisterResource("pulumi:providers:googleworkspace", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

type providerArgs struct {
	// A temporary [OAuth 2.0 access token] obtained from the Google Authorization server, i.e. the `Authorization: Bearer`
	// token used to authenticate HTTP requests to Google Admin SDK APIs. This is an alternative to `credentials`, and ignores
	// the `oauth_scopes` field. If both are specified, `access_token` will be used over the `credentials` field.
	AccessToken *string `pulumi:"accessToken"`
	// Either the path to or the contents of a service account key file in JSON format you can manage key files using the Cloud
	// Console). If not provided, the application default credentials will be used.
	Credentials *string `pulumi:"credentials"`
	// The customer id provided with your Google Workspace subscription. It is found in the admin console under Account
	// Settings.
	CustomerId *string `pulumi:"customerId"`
	// The impersonated user's email with access to the Admin APIs can access the Admin SDK Directory API.
	// `impersonated_user_email` is required for all services except group and user management.
	ImpersonatedUserEmail *string `pulumi:"impersonatedUserEmail"`
	// The list of the scopes required for your application (for a list of possible scopes, see [Authorize
	// requests](https://developers.google.com/admin-sdk/directory/v1/guides/authorizing))
	OauthScopes []string `pulumi:"oauthScopes"`
	// The service account used to create the provided `access_token` if authenticating using the `access_token` method and
	// needing to impersonate a user. This service account will require the GCP role `Service Account Token Creator` if needing
	// to impersonate a user.
	ServiceAccount *string `pulumi:"serviceAccount"`
}

// The set of arguments for constructing a Provider resource.
type ProviderArgs struct {
	// A temporary [OAuth 2.0 access token] obtained from the Google Authorization server, i.e. the `Authorization: Bearer`
	// token used to authenticate HTTP requests to Google Admin SDK APIs. This is an alternative to `credentials`, and ignores
	// the `oauth_scopes` field. If both are specified, `access_token` will be used over the `credentials` field.
	AccessToken pulumi.StringPtrInput
	// Either the path to or the contents of a service account key file in JSON format you can manage key files using the Cloud
	// Console). If not provided, the application default credentials will be used.
	Credentials pulumi.StringPtrInput
	// The customer id provided with your Google Workspace subscription. It is found in the admin console under Account
	// Settings.
	CustomerId pulumi.StringPtrInput
	// The impersonated user's email with access to the Admin APIs can access the Admin SDK Directory API.
	// `impersonated_user_email` is required for all services except group and user management.
	ImpersonatedUserEmail pulumi.StringPtrInput
	// The list of the scopes required for your application (for a list of possible scopes, see [Authorize
	// requests](https://developers.google.com/admin-sdk/directory/v1/guides/authorizing))
	OauthScopes pulumi.StringArrayInput
	// The service account used to create the provided `access_token` if authenticating using the `access_token` method and
	// needing to impersonate a user. This service account will require the GCP role `Service Account Token Creator` if needing
	// to impersonate a user.
	ServiceAccount pulumi.StringPtrInput
}

func (ProviderArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*providerArgs)(nil)).Elem()
}

type ProviderInput interface {
	pulumi.Input

	ToProviderOutput() ProviderOutput
	ToProviderOutputWithContext(ctx context.Context) ProviderOutput
}

func (*Provider) ElementType() reflect.Type {
	return reflect.TypeOf((**Provider)(nil)).Elem()
}

func (i *Provider) ToProviderOutput() ProviderOutput {
	return i.ToProviderOutputWithContext(context.Background())
}

func (i *Provider) ToProviderOutputWithContext(ctx context.Context) ProviderOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ProviderOutput)
}

type ProviderOutput struct{ *pulumi.OutputState }

func (ProviderOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**Provider)(nil)).Elem()
}

func (o ProviderOutput) ToProviderOutput() ProviderOutput {
	return o
}

func (o ProviderOutput) ToProviderOutputWithContext(ctx context.Context) ProviderOutput {
	return o
}

// A temporary [OAuth 2.0 access token] obtained from the Google Authorization server, i.e. the `Authorization: Bearer`
// token used to authenticate HTTP requests to Google Admin SDK APIs. This is an alternative to `credentials`, and ignores
// the `oauth_scopes` field. If both are specified, `access_token` will be used over the `credentials` field.
func (o ProviderOutput) AccessToken() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Provider) pulumi.StringPtrOutput { return v.AccessToken }).(pulumi.StringPtrOutput)
}

// Either the path to or the contents of a service account key file in JSON format you can manage key files using the Cloud
// Console). If not provided, the application default credentials will be used.
func (o ProviderOutput) Credentials() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Provider) pulumi.StringPtrOutput { return v.Credentials }).(pulumi.StringPtrOutput)
}

// The customer id provided with your Google Workspace subscription. It is found in the admin console under Account
// Settings.
func (o ProviderOutput) CustomerId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Provider) pulumi.StringPtrOutput { return v.CustomerId }).(pulumi.StringPtrOutput)
}

// The impersonated user's email with access to the Admin APIs can access the Admin SDK Directory API.
// `impersonated_user_email` is required for all services except group and user management.
func (o ProviderOutput) ImpersonatedUserEmail() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Provider) pulumi.StringPtrOutput { return v.ImpersonatedUserEmail }).(pulumi.StringPtrOutput)
}

// The service account used to create the provided `access_token` if authenticating using the `access_token` method and
// needing to impersonate a user. This service account will require the GCP role `Service Account Token Creator` if needing
// to impersonate a user.
func (o ProviderOutput) ServiceAccount() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Provider) pulumi.StringPtrOutput { return v.ServiceAccount }).(pulumi.StringPtrOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*ProviderInput)(nil)).Elem(), &Provider{})
	pulumi.RegisterOutputType(ProviderOutput{})
}