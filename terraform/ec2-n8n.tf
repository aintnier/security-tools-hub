resource "aws_instance" "n8n" {
  ami                         = "ami-038896afdd7b6a879"
  instance_type               = "t3.micro"
  subnet_id                   = module.vpc.public_subnets[0]
  associate_public_ip_address = true

  tags = {
    Name = "${var.project_name}-n8n"
  }
}
