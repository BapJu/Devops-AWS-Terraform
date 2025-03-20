variable "aws_region" {
  description = "AWS region for all resources"
  type        = string
  default     = "eu-west-3"
}

variable "lambda_function_name" {
  description = "Name of the Lambda function"
  type        = string
  default     = "hello-world-lambda"
}

variable "api_name" {
  description = "Name of the API Gateway"
  type        = string
  default     = "hello-world-api"
}