provider "aws" {
  region  = "eu-north-1"
  profile = "ernesto-cervadoro"
}


terraform {
  backend "s3" {
    bucket         = "security-tools-hub-tfstate"
    key            = "security-tools-hub/terraform.tfstate"
    region         = "eu-north-1"
    dynamodb_table = "security-tools-hub-tf-lock"
    encrypt        = true
  }
}
