# User 

---

Creation des users qui se connecte sur le site web.
J'ai intégré les clients pour une éventuelle évolution de l'application pour les commandes clients 

---

- adresse de facturation : [`facturationAddress`](../shared/addresse-de-facturation.md)
- adresse de livraison : COLLECTION [[`deliveryAddress`](../shared/adrdresse-de-livraison.md)]
- contact : COLLECTION [[`contact`]](../shared/contact.md) **(not null)**
- name : _*"name"*_ **(not null)**
- email : _*"userName"*_ **(not null)**   **(UNIQUE)**
- password : _*"password"*_  **(not null)**
- type d'utilisateur : [`userType`](user-type.md) 
- roles : ["ROLE_USER", "ROLE_ADMIN", "SUPER_USER", "ROLE_COMPTABLE", "ORDER_PICKERS"] **(not null)**
- date de creation : _*"createAt"*_ **(not null)**
- date de modification : _*"updateAt"*_ **(not null)**
