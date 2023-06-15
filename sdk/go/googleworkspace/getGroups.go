// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package googleworkspace

import (
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func GetGroups(ctx *pulumi.Context, opts ...pulumi.InvokeOption) (*GetGroupsResult, error) {
	var rv GetGroupsResult
	err := ctx.Invoke("googleworkspace:index/getGroups:getGroups", nil, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of values returned by getGroups.
type GetGroupsResult struct {
	// A list of Group resources.
	Groups []GetGroupsGroup `pulumi:"groups"`
	// The provider-assigned unique ID for this managed resource.
	Id string `pulumi:"id"`
}