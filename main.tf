terraform {
#   required_version = "1.0.0"  
  required_providers {
    aws = {
        source = "hashicorp/aws"
        version = "4.40.0"
    }
  }
}

resource "aws_instance" "Anand-test" {
  ami                       = "ami-0b0dcb5067f052a63"
  instance_type             = "t3.micro"
  tags = {
    "Name" = "Anand-test1"
    "Department" = "CS"
  }
}