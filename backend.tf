terraform {
  backend "s3" {
    bucket         = "tp-final-terraform-state"
    key            = "terraform.tfstate"
    region         = "eu-west-3"
    dynamodb_table = "terraform-state-lock"
    encrypt        = true
  }
}