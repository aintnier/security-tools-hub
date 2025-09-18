resource "aws_db_subnet_group" "default" {
  name       = "${var.project_name}-db-subnet-group"
  subnet_ids = module.vpc.public_subnets

  tags = {
    Name = "${var.project_name}-db-subnet-group"
  }
}
