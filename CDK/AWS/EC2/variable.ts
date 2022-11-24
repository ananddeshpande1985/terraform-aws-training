const region = "us-east-1";
const ec2 ={
  name: "anand-program-var-instance",
  ami: "ami-02b972fec07f1e659",
  instance_type : "t3.nano",
  tags:{
    name : "anand-program-var-instance",
    description: "craeted with var from cdk"
  }

}
const sg ={
  name : "anand-SG",
  description  : "created via terraform CDK",
  vpc_id: "vpc-2e711a53",
  ingress : {
    from_port : 443,
    to_port : 443,
    proocol : "tcp",
    description : "created by cdktf"
  },
  tags : {
    name : "anand-SG",
    description : "craeted by terraform cdk"
  }

}

export { ec2, sg, region}

