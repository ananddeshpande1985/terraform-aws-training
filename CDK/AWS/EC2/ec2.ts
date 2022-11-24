// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { TerraformStack, TerraformOutput } from "cdktf";
import { AwsProvider } from "@cdktf/provider-aws/lib/provider";
import { Instance } from "@cdktf/provider-aws/lib/instance";
import {ec2, region} from "./variable"

export class EC2 extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider (this, "AWS", {
      region: region
    });
    const EC2_Instance = new Instance(this, "anand-program", {
      ami : ec2.ami,
      instanceType : ec2.instance_type,
      tags : {
          "Name" : ec2.tags.name,
          "Description" : ec2.tags.description
        },
      
    })
    new TerraformOutput(this, "get_public_ip", {
      value : EC2_Instance.publicIp
    });
    new TerraformOutput(this, "instance_state", {
      value : EC2_Instance.instanceState
    });


    // define resources here
  }
}
