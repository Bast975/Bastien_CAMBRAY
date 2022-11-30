// import imgTv from '../images/portfolio/TVshowsKotlin.jpg'
// import imgMeteo from '../images/portfolio/meteoKotlin.jpg'
// import imgAlbums from '../images/portfolio/albumsKotlin.jpg'
import imgComics from '../../images/portfolio/bdKotlin.jpg'
import vidComics from '../../images/portfolio/bdKotlin.mp4'
import imgVi from '../../images/portfolio/ViKotlin.jpg'
import vidVi from '../../images/portfolio/ViKotlin.mp4'
import imgPersonalWebsite from '../../images/portfolio/professionalwebsitereact.jpg'
import vidPersonalWebsite from '../../images/portfolio/professionalwebsitereact.mp4'
import imgPokemons from '../../images/portfolio/pokemonsReact.jpg'
import vidPokemons from '../../images/portfolio/pokemonsReact.mp4'

export let projectData = {
    Mobile: [
        {
            id: 1,
            title: "Comics Application",
            technologie: [
                {
                    name: "Android studio (Kotlin)"
                },
                {
                    name: "API (JSON)"
                }
            ],
            img: imgComics
        },
        {
            id: 2,
            title: "Vi - Gym Application",
            technologie: [
                {
                    name: "Android studio (Kotlin)"
                },
                {
                    name: "API (JSON)"
                },
                {
                    name: "SQL Server"
                },
                {
                    name: "mssql"
                },
                {
                    name: "Firebase"
                },
                {
                    name: "OpenAi"
                }
            ],
            img: imgVi
        },
    ],
    Web : [
        {
            id: 3,
            title: "Professional Website",
            technologie: [
                {
                    name: "React"
                },
                {
                    name: "Bootstrap"
                }
            ],
            img: imgPersonalWebsite
        },
        {
            id: 4,
            title: "Pokemons",
            technologie: [
                {
                    name: "React"
                },
                {
                    name: "Vue.js"
                },
                {
                    name: "Bulma"
                },
                {
                    name: "API (JSON)"
                }
            ],
            img: imgPokemons
        }
    ]
}




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
            date: "18 October 2022",
            desc: "Mobile application created on Android Studio with the Kotlin language, working with an API given by a teacher. This API returned a token on authentication, all comics on a request, and other requests to add/remove favorites.",
            video: vidComics
        },
        2: {
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
                },
                {
                    name: "SQL Server"
                },
                {
                    name: "Firebase"
                }
            ],
            date: "18 December 2022",
            desc: "Mobile application created during a project course (team of 5) on Android Studio with the Kotlin language. This application has many features: A connection as a Coach and the ability to create, delete, update workout plans with information specific to it. A login / registration as a user, forgotten password, subscription / unsubscription to a training plan and the possibility of seeing the details of it and keeping track of each 'daily workout', a calories calculator depending on a given food and weight and other many features. All this works with a backend that I made the major part, firebase is also used to store all the images and gif of the app. Many updates of different features and UI weren't shown on the video as it's an project in process.",
            video: vidVi
        },
        3: {
            title: "Professionnal Website",
            category: [
                {
                    name: "WEB"
                }
            ],
            technologie: [
                {
                    name: "React"
                },
                {
                    name: "Bootstrap"
                }
            ],
            date: "1 December 2022",
            desc: "Website created with React after learnings the basics at school, I wanted to have a profesionnal website and in the same time improve my skills. I used and learn Bootstrap for the first time doing this website. The website was realy focus on the content and features using react, I could have done a better css and add other features but I had to focus my times on finishing my school session and wanted to have my website done to send internships requests.",
            video: vidPersonalWebsite
        },
         4: {
            title: "Pokemons website",
            category: [
                {
                    name: "WEB"
                }
            ],
            technologie: [
                {
                    name: "React"
                },
                {
                    name: "Vue.js"
                },
                {
                    name: "Bulma"
                },
                {
                    name: "API (JSON)"
                }
            ],
            date: "22 November 2022",
            desc: "Website created with React, the API was given by the teacher, the goal was to learn many features of react. We also have done the same website in Vue.js few sessions ago.",
            video: vidPokemons
        },
    },
    Français: {
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
            date: "18 Octobre 2022",
            desc: "Application mobile créée sur Android Studio avec le langage Kotlin, fonctionnant avec une API. Cette API a renvoyé un jeton lors de l'authentification, toutes les bandes dessinées sur une demande et d'autres demandes d'ajout/suppression de favoris.",
            video: vidComics
        },
        2: {
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
                },
                {
                    name: "SQL Server"
                },
                {
                    name: "Firebase"
                }
            ],
            date: "18 Décembre 2022",
            desc: "Application mobile créée lors d'un cours de projet (équipe de 5) sur Android Studio avec le langage Kotlin. Cette application a plusieurs fonctionnalité: Une conncetion en tant que Coach et la possiblité de créer,modifier et supprimer des  workout plans avec des informations spécifiques à celui-ci. Une connection / inscription en tant qu'utilisateur, mot de passe oublié, abonnement / désabonnement à un workout plan et la possiblité de voir les details de celui-ci et faire un suivi de chaque 'daily workout', un calculateur de calories en fonction d'un aliment et du poids donnés et plusieurs autres fonctionnalités. Tout cela fonctionne avec un backend dont j'ai réalisé la majore partie ainsi que firebase pour stocker toutes les images. Beaucoup d'update concernant pleins de foncitonnalités et du UI n'était pas présente sur la vidéo étant donné que c'est un projet en cours.",
            video: vidVi
        },
        3: {
            title: "Site web professionnel",
            category: [
                {
                    name: "WEB"
                }
            ],
            technologie: [
                {
                    name: "React"
                },
                {
                    name: "Bootstrap"
                }
            ],
            date: "1 Décembre 2022",
            desc: "Site créé avec React après avoir appris les bases à l'école, je voulais avoir un site professionnel et en même temps améliorer mes compétences. J'ai utilisé et appris Bootstrap pour la première fois en faisant ce site Web. Le site Web était vraiment axé sur le contenu et les fonctionnalités en utilisant React, j'aurais pu faire un meilleur css et ajouter d'autres fonctionnalités mais je devais concentrer mon temps sur la fin de ma session scolaire et je voulais que mon site Web soit fait pour envoyer mes demandes de stages.",
            video: vidPersonalWebsite
        },
        4: {
            title: "Pokemons website",
            category: [
                {
                    name: "WEB"
                }
            ],
            technologie: [
                {
                    name: "React"
                },
                {
                    name: "Vue.js"
                },
                {
                    name: "Bulma"
                },
                {
                    name: "API (JSON)"
                }
            ],
            date: "22 Novembre 2022",
            desc: "Site créé avec React et une API donnée par un professeur, le but était d'apprendre de nombreuses fonctionnalités de React. Nous avons également créé le même site Web dans Vue.js il y a quelques sessions.",
            video: vidPokemons
        },
    }

}
