
# API de Filmes

Essa é uma API de filmes construída através da utilização de Firebase Functions.
Essa ferramenta em conjunto com o framework Express (Node) possibilita a criação de endpoints. 
Uma base de dados Firebase Firestore foi empregada para armazenar informações.

# API

## Recurso Base

A URL base dos endpoints é

https://us-central1-testedgb01.cloudfunctions.net/api

## GET /movies

Esse recurso é acessado por

https://us-central1-testedgb01.cloudfunctions.net/api/movies

Ele retorna todos os filmes cadastrados no sistema, isto é, ele retorna 
todos os dados carregados anteriormente no banco de dados Firestore do Firebase.

Exemplo:

+ Requisição
        
        https://us-central1-testedgb01.cloudfunctions.net/api/movies


+ Resposta

        [
        {
                "id": "30zVx2yn6wmtFvVZgIeo",
                "name": "The Lord of the Rings: The Return of the King",
                "release": 2003,
                "synopsis": "Gandalf e Aragorn lideram o Mundo dos Homens contra o exército de Sauron para desviar o olhar de Frodo e Sam quando eles se aproximam á Montanha da Perdição com o Um Anel.",
                "rating": 8.9
        },
        {
                "id": "6ovMbO08336dPv3Cave3",
                "name": "Harry Potter and the Sorcerer's Stone",
                "release": 2001,
                "synopsis": "Uma criança órfã se enrolla em uma escola de magia, onde ele aprende a verdade sobre si mesmo, sua família e o terrível mal que se esconde no mundo mágico.",
                "rating": 7.6
        },
        ...
        ]

## GET /movies/find/{movie}

Esse recurso é acessado por

https://us-central1-testedgb01.cloudfunctions.net/api/movies/find/{movie}

em que {movie} pode ser substituído pelo nome de um filme. 

Ele retorna informações somente se for encontrado no banco de dados um filme com nome idêntico a string passada no endpoint.

Exemplo:

+ Requisição

        https://us-central1-testedgb01.cloudfunctions.net/api/movies/find/The Matrix
        

+ Resposta

        {
                "id": "JLoY0aKALiTkAw3Ehmav",
                "name": "The Matrix",
                "release": 1999,
                "synopsis": "Um hacker aprende com os misteriosos rebeldes sobre a verdadeira natureza de sua realidade e seu papel na guerra contra seus controladores.",
                "rating": 8.7
        }
        
## GET /movies/search/{movie}

Esse recurso é acessado por

https://us-central1-testedgb01.cloudfunctions.net/api/movies/search/{movie}

em que {movie} pode ser substituido por uma string qualquer.

Ele retorna todos os filmes da base de dados que contém a string passada no endpoint.

Exemplo:

+ Requisição
        
        https://us-central1-testedgb01.cloudfunctions.net/api/movies/find/The Matrix


+ Resposta

        [
        {
                "id": "7JhNUzGf99hyS7EPYFqN",
                "name": "The Matrix Revolutions",
                "release": 2003,
                "synopsis": "Zion se defende contra a invasão das máquinas enquanto Neo luta em outra frente dessa mesma guerra.",
                "rating": 6.8
        },
        {
                "id": "8ys5vjpvI8erTDZZAOra",
                "name": "The Matrix Reloaded",
                "release": 2003,
                "synopsis": "Seguindo os eventos de Matrix, Neo e os líderes rebeldes acham que tem só 72 houras antes que Zion seja descoberto e destroido. Neo deberá decidir como salvar á Trinity de seus sonhos.",
                "rating": 7.2
        },
        {
                "id": "JLoY0aKALiTkAw3Ehmav",
                "name": "The Matrix",
                "release": 1999,
                "synopsis": "Um hacker aprende com os misteriosos rebeldes sobre a verdadeira natureza de sua realidade e seu papel na guerra contra seus controladores.",
                "rating": 8.7
        }
        ]

## GET /movies/top5

Esse recurso é acessado por

https://us-central1-testedgb01.cloudfunctions.net/api/movies/top5

Ele retorna informações de cinco filmes com maiores notas e em ordem decrescente.

Exemplo:

+ Requisição
        
        https://us-central1-testedgb01.cloudfunctions.net/api/movies/top5
        

+ Resposta

        [
        {
                "id": "30zVx2yn6wmtFvVZgIeo",
                "name": "The Lord of the Rings: The Return of the King",
                "release": 2003,
                "synopsis": "Gandalf e Aragorn lideram o Mundo dos Homens contra o exército de Sauron para desviar o olhar de Frodo e Sam quando eles se aproximam á Montanha da Perdição com o Um Anel.",
                "rating": 8.9
        },
        {
                "id": "meVr693ci0V9KXQI3Sc3",
                "name": "The Lord of the Rings: The Fellowship of the Ring",
                "release": 2001,
                "synopsis": "Um manso hobbit do Condado e oito companheiros partem em uma jornada para destruir o poderoso Um Anel e salvar a Terra-média das Trevas.",
                "rating": 8.8
        },
        {
                "id": "JLoY0aKALiTkAw3Ehmav",
                "name": "The Matrix",
                "release": 1999,
                "synopsis": "Um hacker aprende com os misteriosos rebeldes sobre a verdadeira natureza de sua realidade e seu papel na guerra contra seus controladores.",
                "rating": 8.7
        },
        {
                "id": "ScXTTfNUX1WEauMt39GU",
                "name": "The Lord of the Rings: The Two Towers",
                "release": 2002,
                "synopsis": "Enquanto Frodo e Sam estão perto de Mordor com a ajuda de Gollum, a divida comunhão luta contra Saruman e os Isengards.",
                "rating": 8.7
        },
        {
                "id": "eJsf2SJWVQQcyi62keoT",
                "name": "Harry Potter and the Prisoner of Azkaban",
                "release": 2004,
                "synopsis": "Harry está prestes a começar o seu terceiro ano em Hogwarts quando o terrível assassino Sirius Black, um aliado de Voldemort, foge da prisão de Azkaban. Apesar da vigilância, Harry sabe que, cedo ou tarde, Black virá ao seu encontro.",
                "rating": 7.9
        }
        ]


## POST /movies

Esse recurso permite inserir um filme no sistema, pelo endpoint

https://us-central1-testedgb01.cloudfunctions.net/api/movies

Ele pode ser utilizado inserindo no body da requisição, por exemplo, o seguinte JSON:

+ Body
        
        {
                "id": "30zVx2yn6wmtFvVZgIeo",
                "name": "The Lord of the Rings: The Return of the King",
                "release": 2003,
                "synopsis": "Gandalf e Aragorn lideram o Mundo dos Homens contra o exército de Sauron para desviar o olhar de Frodo e Sam quando eles se aproximam á Montanha da Perdição com o Um Anel.",
                "rating": 8.9
        }
        
 No caso de sucesso da requisição, a resposta é
 
+ Response
        
        {
                "message": "added a movie"
        }
