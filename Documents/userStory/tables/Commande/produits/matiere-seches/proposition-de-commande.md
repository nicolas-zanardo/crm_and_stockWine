# Proposition de commande

- reference : _*"reference"*_ 
- numéro de commande : _*"order ID*_
- ref : _*ref*_
- quantité : _*"quantity"*_ **(not null)**
- prix d'achat : _*"price"*_
_ fournisseur : [`supplier`](fournisseur.md) **(not null)**
- status : CONST ["PROPOSITION" (modification possible), "EN COMMANDE"(modification impossible), 
  "EN COUR DE RÉCEPTION"(comptage des commandes et modification), "RÉCEPTIONNÉE" (ajout des stocks
  contrôlé), "ANNULER"] **(not null)**
- utilisateurs qui ont modifié : COLLECTION [[`user.id`](../../../Users/user.md)]
- date de creation : _*"createAt"*_ **(not null)**
- date de modification : _*"updateAt"*_ **(not null)**