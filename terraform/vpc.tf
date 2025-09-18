module "vpc" {
  source               = "terraform-aws-modules/vpc/aws"
  version              = "5.0.0"
  name                 = var.project_name
  cidr                 = "10.0.0.0/16"
  azs                  = ["eu-north-1a", "eu-north-1b"]
  public_subnets       = ["10.0.1.0/24", "10.0.2.0/24"]
  private_subnets      = []
  enable_nat_gateway   = false
  enable_dns_hostnames = true
  enable_dns_support   = true
}
