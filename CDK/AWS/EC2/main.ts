// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { App } from "cdktf";
import { EC2 } from './ec2'
import { SG } from './SG'

const app = new App();
new EC2(app, "myEc2" )
new SG(app, "anand-SG")
app.synth();
