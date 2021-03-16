# Ajustement des stocks

---

Ajustement des stocks 

---

- type de modification : CONST ["ADD", "DELETE"] **(not null)**
- quantité modifiée : "quantity" **(not null)**
- observation : "observation" **(not null)**
- utilisateurs qui ont modifié : JSON COLLECTION [[`user.id`](../../../Users/user.md)]
- date de creation : _*"createAt"*_ **(not null)**