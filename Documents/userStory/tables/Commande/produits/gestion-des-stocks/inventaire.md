# inventaire

---

Inventaire de fin d'année

---

- type de modification : CONST _*"addingOrRemoving"*_ ["ADD", "DELETE"] **(not null)**
- quantité modifiée : _*"quantity"*_ **(not null)**
- observation : _*"observation"*_
- utilisateurs qui ont modifié : JSON COLLECTION [[`user.id`](../../../Users/user.md)]
- date de creation : _*"createAt"*_ **(not null)**