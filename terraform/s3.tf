resource "aws_s3_bucket" "assets" {
  bucket        = "${var.project_name}-assets-bucket"
  force_destroy = true
}
