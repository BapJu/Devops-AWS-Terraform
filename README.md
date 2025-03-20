# Projet Lambda AWS avec Terraform et GitHub Actions

Ce projet déploie une fonction Lambda Node.js qui renvoie l'heure actuelle à Paris et un nom, exposée via API Gateway. L'ensemble est déployé automatiquement grâce à Terraform et GitHub Actions.

## Fonctionnalités

- Fonction Lambda Node.js qui affiche l'heure à Paris et un nom
- Exposition via API Gateway
- Déploiement automatique via Terraform et GitHub Actions
- Destruction automatique de l'infrastructure
- Sauvegarde du state Terraform dans une branche dédiée

## Structure du projet

```
.
├── .github/workflows/       # Workflows GitHub Actions
│   ├── deploy.yml           # Workflow de déploiement
│   └── destroy.yml          # Workflow de destruction
├── lambda/                  # Code de la fonction Lambda
│   └── index.js             # Fonction Lambda
├── backend.tf               # Configuration du backend Terraform
├── main.tf                  # Configuration principale Terraform
└── variables.tf            # Variables Terraform
```

## Déploiement

Le déploiement se fait automatiquement via GitHub Actions lorsqu'un push est effectué sur la branche main.

### Prérequis

- Un bucket S3 nommé "tp-final-terraform-state" pour stocker l'état Terraform
- Une table DynamoDB nommée "terraform-state-lock" pour le verrouillage de l'état
- Les secrets GitHub suivants configurés dans le repository :
  - AWS_ACCESS_KEY_ID
  - AWS_SECRET_ACCESS_KEY

## Destruction de l'infrastructure

La destruction de l'infrastructure peut être déclenchée de deux façons :

1. Manuellement via l'interface GitHub Actions (workflow_dispatch)
2. En modifiant le fichier `.github/workflows/destroy.yml` et en le poussant sur la branche main

## Exemple de réponse API

```json
{
  "message": "Hello World ! Ici Baptiste J, à 14:30"
}
```