// import imgTv from '../images/portfolio/TVshowsKotlin.jpg'
// import imgMeteo from '../images/portfolio/meteoKotlin.jpg'
// import imgAlbums from '../images/portfolio/albumsKotlin.jpg'
import imgComics from '../../images/portfolio/bdKotlin.jpg'
import vidComics from '../../images/portfolio/bdKotlin.mp4'
import imgVi from '../../images/portfolio/ViKotlin.jpg'


export let projectData = [
    {
        id: 1,
        title: "Comics Application",
        category: [
            {
                name: "Mobile"
            }
        ],
        img: imgComics
    },
    {
        id: 2,
        title: "Vi - Gym Application",
        category: [
            {
                name: "Mobile"
            }
        ],
        img: imgVi
    }
]

export let projectDetailsData = {
    English: {
        1: {
            title: "Comics Application",
            category: [
                {
                    name: "Mobile"
                }
            ],
            technologie: [
                {
                    name: "Android studio (Kotlin)"
                },
                {
                    name: "API (JSON)"
                }
            ],
            date: "21 November 2022",
            desc: "Mobile application created on Android Studio with the Kotlin language, working with an API. This API returned a token on authentication, all comics on a request, and other requests to add/remove favorites.",
            video: vidComics
        },
        2:{
            title: "Vi - Gym Application",
            category: [
                {
                    name: "Mobile"
                }
            ],
            technologie: [
                {
                    name: "Android studio (Kotlin)"
                },
                {
                    name: "API (JSON)"
                }
            ],
            date: "21 November 2022",
            desc: "Mobile application created during a project course (team of 5) on Android Studio with the Kotlin language. This application has several features: A connection as a Coach and the ability to create training plans, with information specific to it. A login / registration as a user, forgotten password, subscription / unsubscription to a training plan and the possibility of seeing the details of it and keeping track of each 'daily training', a calorie calculator depending on a given food and weight... All this works with a backend of which I made the major part as well as firebase to store the images",
            video: vidComics
        },
    },
    Français: {
        1:{
            title: "Comics Application",
            category: [
                {
                    name: "Mobile"
                }
            ],
            technologie: [
                {
                    name: "Android studio (Kotlin)"
                },
                {
                    name: "API (JSON)"
                }
            ],
            date: "21 Novembre 2022",
            desc: "Application mobile créée sur Android Studio avec le langage Kotlin, fonctionnant avec une API. Cette API a renvoyé un jeton lors de l'authentification, toutes les bandes dessinées sur une demande et d'autres demandes d'ajout/suppression de favoris.",
            video: vidComics
        },
        2:{
            title: "Vi - Gym Application",
            category: [
                {
                    name: "Mobile"
                }
            ],
            technologie: [
                {
                    name: "Android studio (Kotlin)"
                },
                {
                    name: "API (JSON)"
                }
            ],
            date: "21 Novembre 2022",
            desc: "Application mobile créée lors d'un cours de projet (équipe de 5) sur Android Studio avec le langage Kotlin. Cette application a plusieurs fonctionnalité: Une conncetion en tant que Coach et la possiblité de créer des  workout plan, avec des informations spécifiques à celui-ci. Une connection / inscription en tant qu'utilisateur, mot de passe oublié, abonnement / désabonnement à un workout plan et la possiblité de voir les details de celui-ci et faire un suivi de chaque 'daily workout', un calculateur de calories en fonction d'un aliment et du poids donnés... Tout cela fonctionne avec un backend dont j'ai réalisé la majore partie ainsi que firebase pour stocker les images",
            video: vidComics
        },
    }

}
