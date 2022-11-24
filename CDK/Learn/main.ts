// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { DockerProvider } from "@cdktf/provider-docker/lib/provider";
import { Image } from "@cdktf/provider-docker/lib/image";
import { Container } from "@cdktf/provider-docker/lib/container"


class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new DockerProvider (this, "docker", {})
    const dockerImage  = new Image(this, "nginixImage", 
    {
      name : "nginx:latest",
      keepLocally : false,
    });
    new Container(this, "nginxContainer", {
      name : "cdkcont",
      image : dockerImage.latest,
      ports:  [
        {
          internal: 80,
          external: 8000
        }
      ]

    })


    // define resources here
  }
}

const app = new App();
new MyStack(app, "Learn");
app.synth();
