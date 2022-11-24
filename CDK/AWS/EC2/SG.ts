// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { TerraformStack } from "cdktf";
import { AwsProvider } from "@cdktf/provider-aws/lib/provider";
import { SecurityGroup } from "@cdktf/provider-aws/lib/security-group";
import {region, sg } from "./variable"

export class SG extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider (this, "AWS", {
      region: region
    });
    new SecurityGroup(this, "anand-SG", {
      name: sg.name,
      description: sg.description,
      vpcId: sg.vpc_id,
      ingress :[ 
        {
        fromPort: sg.ingress.from_port,
        toPort:sg.ingress.to_port,
        protocol: sg.ingress.proocol,
        description: sg.ingress.description

      }, 
    ], 
    tags: {
      "Name" : sg.tags.name,
      "Description" : sg.tags.description
    }
    })

  }
}
