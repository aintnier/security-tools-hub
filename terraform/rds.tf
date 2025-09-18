resource "aws_db_instance" "default" {
  identifier             = "${var.project_name}-db"
  engine                 = "mysql"
  instance_class         = "db.t3.micro"
  allocated_storage      = 8
  db_name                = "securitytoolshub"
  username               = var.db_username
  password               = var.db_password
  db_subnet_group_name   = aws_db_subnet_group.default.name
  vpc_security_group_ids = [module.vpc.default_security_group_id]
  skip_final_snapshot    = true
  publicly_accessible    = false
  storage_type           = "gp2"
  multi_az               = false
}
