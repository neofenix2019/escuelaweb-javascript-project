# escuelaweb-javascript-project
Repositorio para guardar el codigo fuente del proyecto del curso de javascript de escuela web 13-04-2020

## Instalacion:

1. Clonar el repositorio: git clone https://github.com/neofenix2019/escuelaweb-javascript-project.git
2. Usando la terminal, ingresar al directorio el proyecto y ejecutar npm install para descargar los modulos necesarios.
3. Para ejecutar debe ejecutar la siguiente instruccion desde la terminal en el directorio del proyecto: npm run dev.

## Firma:

### Fetch & order: 

1. Ruta: http://localhost:4000/api/fetchandorder
2. Respuesta:

```json

{
  "msg": "La consulta se realizó con éxito.",
  "result": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Hugo",
        "last": "Hernandez"
      },
      "location": {
        "street": {
          "number": 5751,
          "name": "Calle de La Luna"
        },
        "city": "La Coruña",
        "state": "Comunidad Valenciana",
        "country": "Spain",
        "postcode": 61828,
        "coordinates": {
          "latitude": "-51.2148",
          "longitude": "50.0588"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "hugo.hernandez@example.com",
      "login": {
        "uuid": "6d2b09f1-d79d-4778-ba0d-5a1ced4ee519",
        "username": "greenladybug193",
        "password": "allison",
        "salt": "MPgPKMBo",
        "md5": "e0e0e9810b3bba93c712495cee3ce3f1",
        "sha1": "b5b9e39557e98194b8b6fb279f0a8e83b6433764",
        "sha256": "c4224145a00ac6f125b902cc3d21102e3e41286297b6fe9290da6693b0194e43"
      },
      "dob": {
        "date": "1958-06-27T17:48:20.968Z",
        "age": 62
      },
      "registered": {
        "date": "2014-07-07T09:19:55.131Z",
        "age": 6
      },
      "phone": "991-434-645",
      "cell": "630-383-730",
      "id": {
        "name": "DNI",
        "value": "98196788-K"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/23.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/23.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/23.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Inmaculada",
        "last": "Fuentes"
      },
      "location": {
        "street": {
          "number": 9797,
          "name": "Calle Mota"
        },
        "city": "Cartagena",
        "state": "Castilla y León",
        "country": "Spain",
        "postcode": 83266,
        "coordinates": {
          "latitude": "33.0297",
          "longitude": "122.3223"
        },
        "timezone": {
          "offset": "+4:00",
          "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
        }
      },
      "email": "inmaculada.fuentes@example.com",
      "login": {
        "uuid": "64d9fe25-dc75-4168-be49-cfa023e76257",
        "username": "purplerabbit951",
        "password": "dolphin1",
        "salt": "WEvfxHU4",
        "md5": "5286f0bdc53bbf93dd8d75cdbd639885",
        "sha1": "3d104b2edddf2fadfa3f1b3ca0bc8fef3dc99e59",
        "sha256": "ab6bd32439b373253792b0ace96c8ed1dcb789d6e847bfcbcee31ae7ca81203f"
      },
      "dob": {
        "date": "1981-09-19T02:44:04.147Z",
        "age": 39
      },
      "registered": {
        "date": "2002-12-25T14:28:16.608Z",
        "age": 18
      },
      "phone": "919-441-346",
      "cell": "630-724-566",
      "id": {
        "name": "DNI",
        "value": "54303103-Q"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/15.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/15.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/15.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Isabel",
        "last": "Gallego"
      },
      "location": {
        "street": {
          "number": 65,
          "name": "Avenida de América"
        },
        "city": "Hospitalet de Llobregat",
        "state": "Ceuta",
        "country": "Spain",
        "postcode": 34852,
        "coordinates": {
          "latitude": "21.0676",
          "longitude": "-65.8540"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "isabel.gallego@example.com",
      "login": {
        "uuid": "0b478ab8-7605-4305-a0f7-4a3005744d18",
        "username": "happypanda976",
        "password": "gogogo",
        "salt": "t2eFLRoj",
        "md5": "3574187225509dba0c87f6dec72c7b13",
        "sha1": "7423740ca26205a44ec4bbbc01a4f3405658cdd2",
        "sha256": "1d87c03e8518a8880cf9290c544ffe426d1943d51c7284baa6f28f7959e67cf4"
      },
      "dob": {
        "date": "1985-05-05T18:31:14.876Z",
        "age": 35
      },
      "registered": {
        "date": "2012-01-28T07:37:46.589Z",
        "age": 8
      },
      "phone": "985-227-653",
      "cell": "685-733-537",
      "id": {
        "name": "DNI",
        "value": "84218669-L"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/82.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/82.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/82.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Isabel",
        "last": "Peña"
      },
      "location": {
        "street": {
          "number": 6153,
          "name": "Calle del Barquillo"
        },
        "city": "Alcalá de Henares",
        "state": "País Vasco",
        "country": "Spain",
        "postcode": 96191,
        "coordinates": {
          "latitude": "17.9194",
          "longitude": "69.9872"
        },
        "timezone": {
          "offset": "-8:00",
          "description": "Pacific Time (US & Canada)"
        }
      },
      "email": "isabel.pena@example.com",
      "login": {
        "uuid": "3266bfc9-dd93-44ca-85d8-c6585be642ea",
        "username": "lazysnake477",
        "password": "savannah",
        "salt": "9t9y0IdZ",
        "md5": "1803685d9407c1c2d4d7b4a770064c1c",
        "sha1": "9a7d9c5f256523d6f265ab34ba36059491c72d28",
        "sha256": "cc6aad0f0a3c9def1d99bbb443bd4c01814ad026bc7de297be5bf13c2285784d"
      },
      "dob": {
        "date": "1956-02-09T15:18:19.762Z",
        "age": 64
      },
      "registered": {
        "date": "2008-08-06T17:36:09.017Z",
        "age": 12
      },
      "phone": "963-096-178",
      "cell": "640-168-929",
      "id": {
        "name": "DNI",
        "value": "93929878-M"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/71.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/71.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/71.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Ivan",
        "last": "Morales"
      },
      "location": {
        "street": {
          "number": 4670,
          "name": "Calle Covadonga"
        },
        "city": "Bilbao",
        "state": "Comunidad de Madrid",
        "country": "Spain",
        "postcode": 17978,
        "coordinates": {
          "latitude": "-34.0979",
          "longitude": "16.6984"
        },
        "timezone": {
          "offset": "+11:00",
          "description": "Magadan, Solomon Islands, New Caledonia"
        }
      },
      "email": "ivan.morales@example.com",
      "login": {
        "uuid": "c305262a-0fe5-42c5-a002-952dd25a3486",
        "username": "ticklishmeercat398",
        "password": "kcj9wx5n",
        "salt": "cqTUAaTd",
        "md5": "ffc4894c22b430bac9694994c9f1b35b",
        "sha1": "933b97502f92ee551a06385635003db90216b1c7",
        "sha256": "931cc4b81be71e03c44aeba9ee47f0e16e6991b15ed9dec5411ea9bbd891abf2"
      },
      "dob": {
        "date": "1961-01-14T17:57:18.687Z",
        "age": 59
      },
      "registered": {
        "date": "2008-05-28T00:53:22.512Z",
        "age": 12
      },
      "phone": "944-526-511",
      "cell": "655-627-506",
      "id": {
        "name": "DNI",
        "value": "65694944-R"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/36.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/36.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/36.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Javier",
        "last": "Soto"
      },
      "location": {
        "street": {
          "number": 4538,
          "name": "Avenida de Andalucía"
        },
        "city": "Córdoba",
        "state": "Castilla y León",
        "country": "Spain",
        "postcode": 26606,
        "coordinates": {
          "latitude": "4.5878",
          "longitude": "-60.7346"
        },
        "timezone": {
          "offset": "-10:00",
          "description": "Hawaii"
        }
      },
      "email": "javier.soto@example.com",
      "login": {
        "uuid": "d24d53d2-0d15-4e83-a8a6-a2cea9baa91e",
        "username": "tinykoala380",
        "password": "sticky",
        "salt": "YPrwxurC",
        "md5": "cda463933507c6c06802951923bb1624",
        "sha1": "5fb16a170de9fa0702d08c89b9305df0af0970c0",
        "sha256": "e5ec1f66b0814c0182f34ec4f40257bb77e95a464667f8640fa8740aa13f1f2d"
      },
      "dob": {
        "date": "1993-11-19T10:55:02.852Z",
        "age": 27
      },
      "registered": {
        "date": "2016-12-12T09:08:26.258Z",
        "age": 4
      },
      "phone": "928-890-461",
      "cell": "667-016-375",
      "id": {
        "name": "DNI",
        "value": "51449471-W"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/36.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/36.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/36.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Mar",
        "last": "Ramirez"
      },
      "location": {
        "street": {
          "number": 5784,
          "name": "Avenida de La Albufera"
        },
        "city": "Valencia",
        "state": "Cantabria",
        "country": "Spain",
        "postcode": 67514,
        "coordinates": {
          "latitude": "-4.7018",
          "longitude": "-72.5863"
        },
        "timezone": {
          "offset": "+5:00",
          "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
      },
      "email": "mar.ramirez@example.com",
      "login": {
        "uuid": "3462070f-cd81-4b49-bd5e-c635b328915d",
        "username": "lazymouse883",
        "password": "smokey",
        "salt": "A2hTcK8e",
        "md5": "7bd9575304035f4dad20ef79b359051a",
        "sha1": "0953c3c0f36265fb260560d8b72280e82107cdd2",
        "sha256": "2cfc3f3b278f4428c9784d94a0afc283ef249e09fe8a220dbd1c4a26214802e2"
      },
      "dob": {
        "date": "1971-03-23T19:51:07.991Z",
        "age": 49
      },
      "registered": {
        "date": "2010-07-28T15:30:04.419Z",
        "age": 10
      },
      "phone": "996-083-617",
      "cell": "688-299-315",
      "id": {
        "name": "DNI",
        "value": "35720313-E"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/49.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/49.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/49.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Sofia",
        "last": "Fernandez"
      },
      "location": {
        "street": {
          "number": 8267,
          "name": "Paseo de Zorrilla"
        },
        "city": "Torrente",
        "state": "Comunidad Valenciana",
        "country": "Spain",
        "postcode": 21993,
        "coordinates": {
          "latitude": "31.2550",
          "longitude": "-131.9003"
        },
        "timezone": {
          "offset": "+7:00",
          "description": "Bangkok, Hanoi, Jakarta"
        }
      },
      "email": "sofia.fernandez@example.com",
      "login": {
        "uuid": "cd6029de-4ee5-4f4f-abd7-08f9755cecd8",
        "username": "brownduck700",
        "password": "froggy",
        "salt": "uiIqAiop",
        "md5": "0c75a40be43357bf906da0641be349da",
        "sha1": "2a79cb864c640c29509b43ea1274236f4c3207c1",
        "sha256": "9e8de88af4174ba1c8ef307ffd2d8d52f854e7f7ee44a5da43580d70ba3f0fea"
      },
      "dob": {
        "date": "1946-10-31T14:15:18.345Z",
        "age": 74
      },
      "registered": {
        "date": "2010-09-27T16:13:41.990Z",
        "age": 10
      },
      "phone": "985-381-383",
      "cell": "628-108-138",
      "id": {
        "name": "DNI",
        "value": "52856361-T"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/17.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/17.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/17.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Victor",
        "last": "Soto"
      },
      "location": {
        "street": {
          "number": 1659,
          "name": "Calle del Barquillo"
        },
        "city": "Guadalajara",
        "state": "Cataluña",
        "country": "Spain",
        "postcode": 10152,
        "coordinates": {
          "latitude": "-59.2120",
          "longitude": "107.0577"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "victor.soto@example.com",
      "login": {
        "uuid": "72081fe4-addf-4e92-9284-6234543a072d",
        "username": "purpleduck331",
        "password": "freaky",
        "salt": "bhMwi13l",
        "md5": "d98be10343de2d94289b01e426f12e2a",
        "sha1": "6d1e509012d4e7b26f1518c224bead79dcd44542",
        "sha256": "f39921a09633623a8f6d55802a3f19c3dbec3053f5c91e5feb1e9aa726e8025f"
      },
      "dob": {
        "date": "1973-01-18T06:01:45.768Z",
        "age": 47
      },
      "registered": {
        "date": "2009-05-17T06:37:57.935Z",
        "age": 11
      },
      "phone": "965-281-370",
      "cell": "626-711-691",
      "id": {
        "name": "DNI",
        "value": "90987018-W"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/20.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/20.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/20.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Virginia",
        "last": "Montero"
      },
      "location": {
        "street": {
          "number": 3353,
          "name": "Calle del Barquillo"
        },
        "city": "Valencia",
        "state": "Melilla",
        "country": "Spain",
        "postcode": 88531,
        "coordinates": {
          "latitude": "18.8180",
          "longitude": "145.0533"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "virginia.montero@example.com",
      "login": {
        "uuid": "70d7b329-c0ef-4f4f-af80-dc7d635b960f",
        "username": "angrywolf783",
        "password": "japanees",
        "salt": "GDsnrAka",
        "md5": "5974225653801f453ed71f7f16325028",
        "sha1": "d9251a08256f22f03c01a3802a89c95b34ce478e",
        "sha256": "4e03b13d46031457ef0169ea45086a1528e09b7b999f5bc519a106cfc7ac33a3"
      },
      "dob": {
        "date": "1991-07-16T05:48:18.487Z",
        "age": 29
      },
      "registered": {
        "date": "2011-06-11T16:52:34.296Z",
        "age": 9
      },
      "phone": "962-528-397",
      "cell": "641-372-155",
      "id": {
        "name": "DNI",
        "value": "13817410-O"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/7.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/7.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/7.jpg"
      },
      "nat": "ES"
    }
  ]
}
```

### Fetch & find:  

1. Ruta: http://localhost:4000/api/fetchandfind/age/:age

2. Respuesta:

- Si no encuentra ningun registro con la edad seleccionada:

```json
{
  "msg": "La consulta no arrojó resultados.",
  "result": null
}
```

- Si encentra un registro:

```json
{
  "msg": "La consulta se realizó con éxito.",
  "result": {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Marco",
      "last": "Castro"
    },
    "location": {
      "street": {
        "number": 3135,
        "name": "Avenida de América"
      },
      "city": "Fuenlabrada",
      "state": "Islas Baleares",
      "country": "Spain",
      "postcode": 95003,
      "coordinates": {
        "latitude": "-79.1994",
        "longitude": "-24.6137"
      },
      "timezone": {
        "offset": "+1:00",
        "description": "Brussels, Copenhagen, Madrid, Paris"
      }
    },
    "email": "marco.castro@example.com",
    "login": {
      "uuid": "fc450ccb-b78a-4208-9f40-8cd32eee80a3",
      "username": "angrysnake994",
      "password": "apples",
      "salt": "iH9oB5V4",
      "md5": "fb2fdb5e75d3cb8d3c74308599443ed4",
      "sha1": "0efdc54b134606882d8b568556ed36e6b727c474",
      "sha256": "5c09ade25ac15c92c9fd29d1c2d19b5a9743a88fbcdbf3f77298c8fbbe359219"
    },
    "dob": {
      "date": "1990-07-22T10:15:45.842Z",
      "age": 30
    },
    "registered": {
      "date": "2019-02-02T18:20:41.084Z",
      "age": 1
    },
    "phone": "985-047-496",
    "cell": "607-113-532",
    "id": {
      "name": "DNI",
      "value": "93573208-Z"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/50.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/50.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/50.jpg"
    },
    "nat": "ES"
  }
}
```

### Fetch & count

1. Ruta: http://localhost:4000/api/fetchandcount

2. Respuesta:

```json
{
  "msg": "La consulta se realizó con éxito.",
  "result": {
    "maxOccurrNameLetter": "I"
  }
}
```