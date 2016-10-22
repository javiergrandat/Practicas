PreguntadosApp.factory('preguntasService', preguntasService); 

preguntasService.$inject = ['localStorageService'];

function preguntasService(localStorageService) {

     var preguntasjson = [{"Categoria":"geografia","Preguntas":[{
                                                        "texto":"Cual es la capital de Colombia",
                                                          "respuesta1":"Medellin",
                                                        "respuesta2":"Bogota",
                                                        "respuesta3":"Caracas",
                                                        "respuesta4":"Madrid",
                                                        "correcta":"Bogota"
                                                    }, 
                                                    {
                                                        "texto":"Cual es pais cuya capital es Lima",
                                                        "respuesta1":"Colombia",
                                                        "respuesta2":"Argentina",
                                                        "respuesta3":"Peru",
                                                        "respuesta4":"Egipto",
                                                        "correcta":"Peru"
                                                    },
                                                    {
                                                        "texto":"En donde esta ubicada la torre Eiffel",
                                                        "respuesta1":"Uruguay",
                                                        "respuesta2":"China",
                                                        "respuesta3":"Rusia",
                                                        "respuesta4":"Francia",
                                                        "correcta":"Francia"
                                                    }]},
                        {"Categoria":"matematicas","Preguntas":[{
                                                        "texto":"Cuanto es 1 + 1",
                                                        "respuesta1":"2",
                                                        "respuesta2":"4",
                                                        "respuesta3":"1",
                                                        "respuesta4":"0",
                                                        "correcta":"2"
                                                    }, 
                                                    {
                                                        "texto":"Cual es la raiz cubica de 8",
                                                        "respuesta1":"4",
                                                        "respuesta2":"2",
                                                        "respuesta3":"1",
                                                        "respuesta4":"16",
                                                        "correcta":"2"
                                                    },
                                                    {
                                                        "texto":"Cuanto es 5 por 4",
                                                        "respuesta1":"18",
                                                        "respuesta2":"16",
                                                        "respuesta3":"20",
                                                        "respuesta4":"4",
                                                        "correcta":"20"
                                                    }]},
                        {"Categoria":"cine","Preguntas":[{
                                                        "texto":"Quien protagonizo Titanic",
                                                        "respuesta1":"Leonardo DiCaprio",
                                                        "respuesta2":"Brad Pitt",
                                                        "respuesta3":"George Cloney",
                                                        "respuesta4":"Will Smit",
                                                        "correcta":"Leonardo DiCaprio"
                                                    }, 
                                                    {
                                                        "texto":"Quien es la exesposa de Brad Pitt",
                                                        "respuesta1":"Angelina Jolie",
                                                        "respuesta2":"Jennifer Aniston",
                                                        "respuesta3":"Julia Roberts",
                                                        "respuesta4":"Shakira",
                                                        "correcta":"Jennifer Aniston"
                                                    },
                                                    {
                                                        "texto":"Quien es el director de la trilogia de Batman",
                                                        "respuesta1":"Cristian Bale",
                                                        "respuesta2":"Cristino Ronaldo",
                                                        "respuesta3":"Nolan",
                                                        "respuesta4":"Stven Spielberg",
                                                        "correcta":"Nolan"
                                                    }]},
                        {"Categoria":"futbol","Preguntas":[{
                                                        "texto":"Quien es el 10 de la seleccion Colombia",
                                                        "respuesta1":"David Ospina",
                                                        "respuesta2":"Falcao",
                                                        "respuesta3":"Juan Cuadrado",
                                                        "respuesta4":"James Rodriguez",
                                                        "correcta":"James Rodriguez"
                                                    }, 
                                                    {
                                                        "texto":"Quien gano la copa libertadores en el 2016",
                                                        "respuesta1":"Boca Juniors",
                                                        "respuesta2":"Sao Paulo",
                                                        "respuesta3":"Atletico Nacional",
                                                        "respuesta4":"DIM",
                                                        "correcta":"Atletico Nacional"
                                                    },
                                                    {
                                                        "texto":"Cuantos mundiales tiene ganados Brasil",
                                                        "respuesta1":"3",
                                                        "respuesta2":"9",
                                                        "respuesta3":"4",
                                                        "respuesta4":"5",
                                                        "correcta":"5"
                                                    }]}
                      ];

    var service = {
        getPregunta: getPregunta,
        setPuntos: setPuntos,
        getPuntos: getPuntos
    };
    return service;

    function getPregunta(Categoria) {


        var preguntas = []

        for (var i=0 ; i < preguntasjson.length ; i++) {
            if (angular.equals(preguntasjson[i]["Categoria"], Categoria)) {
                preguntas = preguntasjson[i]["Preguntas"];
            }
        }



        var aleatorio = Math.floor((Math.random() * preguntas.length));


        //alert(aleatorio);
        //alert(preguntas[aleatorio].respuesta1);

        return preguntas[aleatorio];

    };

    function setPuntos()
    {
        var puntos;
        puntos = Number(localStorageService.get("Puntos","0"));
        if (puntos == null) {
            puntos = 0;
        }
        localStorageService.set("Puntos",puntos + 20);
    }

    function getPuntos()
    {
        var puntos;
        puntos = Number(localStorageService.get("Puntos","0"));
        if  (puntos == null) {
            puntos = 0;
        }
        return puntos;
    }

        
    };

