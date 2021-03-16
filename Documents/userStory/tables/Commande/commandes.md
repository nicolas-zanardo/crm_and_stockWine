# Commandes

___

Commande attaché a un client

___

- client : [`user.id`](../Users/user.md) **(not null)**
- adresse de livraison : [`user.delivrayAddress`](../shared/adrdresse-de-livraison.md) **(not null)**
- numéro de commande : _*"cdeNumber"*_ **(not null)**
- un numéro de référence : _*"refNumber"*_
- produits : COLLECTION [[`orderItem`](order-items.md)] **(not null)**
- status : _*"status"*_ CONST ["CREATED", "PREPARING", "SENT"] **(not null)**
- statue paiement : CONST paymentStatus ["PAID", "UNPAID", "CANCELLED"] **(not null)**
- Total commande:  _*"TotalAmount"*_ **(not null)**
- observation : _*"observation"*_
- utilisateurs qui ont modifié : JSON COLLECTION [[`user.id`](../Users/user.md)]
- date de creation : _*"createAt"*_ **(not null)**
- date de modification : _*"updateAt"*_ **(not null)**