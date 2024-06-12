import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'movieLibrary';
  horrorMovies = [
    {
      id: 1,
      title: 'Get Out',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg',
      imdbId: 'tt5052448',
    },
    {
      id: 2,
      title: 'A Quiet Place',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SX300.jpg',
      imdbId: 'tt6644200',
    },
    {
      id: 3,
      title: 'King Kong',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BZTY3YjYxZGQtMTM2YS00ZmYwLWFlM2QtOWFlMTU1NTAyZDQ2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg',
      imdbId: 'tt0024216',
    },
    {
      id: 4,
      title: 'Psycho',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      imdbId: 'tt0054215',
    },
    {
      id: 5,
      title: 'Repulsion',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BZTU5ZThjNzAtNjc4NC00OTViLWIxYTYtODFmMTk5Y2NjZjZiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
      imdbId: 'tt0059646',
    },
    {
      id: 6,
      title: 'The Babadook',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMTk0NzMzODc2NF5BMl5BanBnXkFtZTgwOTYzNTM1MzE@._V1_SX300.jpg',
      imdbId: 'tt2321549',
    },
    {
      id: 7,
      title: 'Frankenstein',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BN2RjNjU4MmUtZWU5MS00MjdhLTkxM2MtYjBiM2FhYTE4OTQwXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg',
      imdbId: 'tt0021884',
    },
    {
      id: 8,
      title: "Rosemary's Baby",
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BZmEwZGU2NzctYzlmNi00MGJkLWE3N2MtYjBlN2ZhMGJkZTZiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      imdbId: 'tt0063522',
    },
    {
      id: 9,
      title: 'Aliens',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      imdbId: 'tt0090605',
    },
    {
      id: 10,
      title: 'At the Movies: Lamar and Darnell - It Follows',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BYTljYjlmZTEtY2JiOC00MjM1LWE0M2QtZjk1MzRjM2U0NDVhXkEyXkFqcGdeQXVyNTg5OTMxNDU@._V1_SX300.jpg',
      imdbId: 'tt5637996',
    },
    {
      id: 11,
      title: 'Let the Right One In',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BOWM4NTY2NTMtZDZlZS00NTgyLWEzZDMtODE3ZGI1MzI3ZmU5XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg',
      imdbId: 'tt1139797',
    },
    {
      id: 12,
      title: 'Hereditary',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SX300.jpg',
      imdbId: 'tt7784604',
    },
    {
      id: 13,
      title: 'Freaks',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMjMyYjgyOTQtZDVlZS00NTQ0LWJiNDItNGRlZmM3Yzc0N2Y0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
      imdbId: 'tt0022913',
    },
    {
      id: 14,
      title: 'Night of the Living Dead',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMjRjZjE3OGUtYzIyYy00NGRkLTliYTUtYmI1ZjQ3YmZjYTZiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      imdbId: 'tt0063350',
    },
    {
      id: 15,
      title: "Don't Look Now",
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMDM2YTQ3ODMtMDkyNS00YzM0LTgwNzUtYWI0NTFmZWE4YTQxXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg',
      imdbId: 'tt0069995',
    },
    {
      id: 16,
      title: 'The Silence of the Lambs',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
      imdbId: 'tt0102926',
    },
    {
      id: 17,
      title: "Pan's Labyrinth",
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMTU3ODg2NjQ5NF5BMl5BanBnXkFtZTcwMDEwODgzMQ@@._V1_SX300.jpg',
      imdbId: 'tt0457430',
    },
    {
      id: 18,
      title: 'The Witch',
      posterURL: 'N/A',
      imdbId: 'tt6674752',
    },
    {
      id: 19,
      title: 'The Birds',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMTAxNDA1ODc5MDleQTJeQWpwZ15BbWU4MDg2MDA4OTEx._V1_SX300.jpg',
      imdbId: 'tt0056869',
    },
    {
      id: 20,
      title: 'Halloween',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      imdbId: 'tt0077651',
    },
    {
      id: 21,
      title: 'The Innocents',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BNGQyNjBjNTUtNTM1OS00YzcyLWFhNTgtNTU0MDg3NzBlMDQzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
      imdbId: 'tt0055018',
    },
    {
      id: 22,
      title:
        'The Cabin In The Woods: An Army of Nightmares - Makeup & Animatronic Effects',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMDBlOWUwYmItMTBiNi00MWVlLTlhOTMtYWRlN2UzZjE2OTYxXkEyXkFqcGdeQXVyMjQ1MjYzOTQ@._V1_SX300.jpg',
      imdbId: 'tt7371706',
    },
    {
      id: 23,
      title: 'Invasion of the Body Snatchers',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMTg1MTgxMTY2MF5BMl5BanBnXkFtZTgwODg0NTc1MDE@._V1_SX300.jpg',
      imdbId: 'tt0077745',
    },
    {
      id: 24,
      title: 'Drag Me to Hell',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMTQwNTMyNjc5Ml5BMl5BanBnXkFtZTcwOTI2MTQ0Mg@@._V1_SX300.jpg',
      imdbId: 'tt1127180',
    },
    {
      id: 25,
      title: 'House of Wax',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BOWRhMTg1NjYtNDA5MS00NDJhLTgzZmQtZmY3NmRjNTExYWE3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
      imdbId: 'tt0045888',
    },
    {
      id: 26,
      title: 'A Girl Walks Home Alone at Night',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMjMzNjMyMjU2M15BMl5BanBnXkFtZTgwMzA3NjQ0MzE@._V1_SX300.jpg',
      imdbId: 'tt2326554',
    },
    {
      id: 27,
      title: 'It',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SX300.jpg',
      imdbId: 'tt1396484',
    },
    {
      id: 28,
      title: 'Carrie',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMTlhNmVkZGUtNjdjOC00YWY3LTljZWQtMTY1YWFhNGYwNDQwXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
      imdbId: 'tt0074285',
    },
    {
      id: 29,
      title: 'The Evil Dead',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BODc2MmVjZmUtNjAzMS00MDNiLWIyM2YtOGEzMjg0YjRhMzRmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      imdbId: 'tt0083907',
    },
    {
      id: 30,
      title: 'Young Frankenstein',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMTEwNjg2MjM2ODFeQTJeQWpwZ15BbWU4MDQ1MDU5OTEx._V1_SX300.jpg',
      imdbId: 'tt0072431',
    },
    {
      id: 31,
      title: 'Re-Animator',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BNDRjNjRlNmYtZGVkOS00ODA1LWFmMTEtZmY1MWY5ZGM5OWUxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      imdbId: 'tt0089885',
    },
    {
      id: 32,
      title: 'The Love Witch',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMjA5NDEyMjQwNV5BMl5BanBnXkFtZTgwNDQ1MjMwMDI@._V1_SX300.jpg',
      imdbId: 'tt3908142',
    },
    {
      id: 33,
      title: 'Suspiria',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMjRiYTNjODctNGU1Ni00NDg3LTk0NGUtMWU0NjgyZTAyYmNjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      imdbId: 'tt0076786',
    },
    {
      id: 34,
      title: 'A Nightmare on Elm Street',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BNzFjZmM1ODgtMDBkMS00NWFlLTg2YmUtZjc3ZTgxMjE1OTI2L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      imdbId: 'tt0087800',
    },
    {
      id: 35,
      title: 'Zombieland',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMTU5MDg0NTQ1N15BMl5BanBnXkFtZTcwMjA4Mjg3Mg@@._V1_SX300.jpg',
      imdbId: 'tt1156398',
    },
    {
      id: 36,
      title: 'The Endless',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BOGY2NDA3N2MtNmNkMC00ZmM2LWJkMjYtMDkwYWQ2MmYyNjZmXkEyXkFqcGdeQXVyNDk5MTYyMjc@._V1_SX300.jpg',
      imdbId: 'tt5581756',
    },
    {
      id: 37,
      title: 'Dracula',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BYWY5YjkzMDEtMTNmZi00MzBjLTkzN2QtNDdhM2MxMjBlZDdhXkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_SX300.jpg',
      imdbId: 'tt0021814',
    },
    {
      id: 38,
      title: 'Shaun of the Dead',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMTg5Mjk2NDMtZTk0Ny00YTQ0LWIzYWEtMWI5MGQ0Mjg1OTNkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      imdbId: 'tt0365748',
    },
    {
      id: 39,
      title: 'The Fly',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BODcxMGMwOGEtMDUxMi00MzE5LTg4YTYtYjk1YjA4MzQxNTNlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      imdbId: 'tt0091064',
    },
    {
      id: 40,
      title: 'Cam',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BYWYwZDg4Y2YtN2RiYS00YTJlLTkyNTctNjJlZjVjMmQzMmNiXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_SX300.jpg',
      imdbId: 'tt8361028',
    },
    {
      id: 41,
      title: 'What Ever Happened to Baby Jane?',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BZmI0M2VmNTgtMWVhYS00Zjg1LTk1YTYtNmJmMjRkZmMwYTc2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
      imdbId: 'tt0056687',
    },
    {
      id: 42,
      title: 'It Comes at Night',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMjQ3MDA0ODA2N15BMl5BanBnXkFtZTgwNzg0NzgwMjI@._V1_SX300.jpg',
      imdbId: 'tt4695012',
    },
    {
      id: 43,
      title: 'Eraserhead',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMDExYzg5YjQtMzE0Yy00OWJjLThiZTctMWI5MzhjM2RmNjA4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      imdbId: 'tt0074486',
    },
    {
      id: 44,
      title: "Don't Breathe",
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BZGI5ZTU2M2YtZWY4MC00ZDFhLTliYTItZTk1NjdlN2NkMzg2XkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_SX300.jpg',
      imdbId: 'tt4160708',
    },
    {
      id: 45,
      title: 'The Phantom of the Opera',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BNDk4MDM1NTI5MV5BMl5BanBnXkFtZTgwMDkyMDc2MTE@._V1_SX300.jpg',
      imdbId: 'tt0016220',
    },
    {
      id: 46,
      title: 'We Are Still Here',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMjQwMzgzMjczOV5BMl5BanBnXkFtZTgwNDk2MTUxNTE@._V1_SX300.jpg',
      imdbId: 'tt3520418',
    },
    {
      id: 47,
      title: 'Frankenweenie',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BY2UwYWI3MTktM2MxNC00MjRhLTlkMWEtYTNjMjRkOTIwOTkyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      imdbId: 'tt1142977',
    },
    {
      id: 48,
      title: 'Let Me In',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BNDQ4MjQ4OTMwMF5BMl5BanBnXkFtZTcwOTYzNDc4Mw@@._V1_SX300.jpg',
      imdbId: 'tt1228987',
    },
    {
      id: 49,
      title: 'Misery',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BNzY0ODQ3MTMxN15BMl5BanBnXkFtZTgwMDkwNTg4NjE@._V1_SX300.jpg',
      imdbId: 'tt0100157',
    },
    {
      id: 50,
      title: 'Little Shop of Horrors',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BYzUxZDI3MjktZmM4YS00MzdjLWE5MzctMmI4M2ViMDgxMmUzXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      imdbId: 'tt0091419',
    },
    {
      id: 51,
      title: 'Halloween',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMmMzNjJhYjUtNzFkZi00MWQ4LWJiMDEtYWM0NTAzNGZjMTI3XkEyXkFqcGdeQXVyOTE2OTMwNDk@._V1_SX300.jpg',
      imdbId: 'tt1502407',
    },
    {
      id: 52,
      title: 'Upgrade',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMjI0NzcyMjM5Ml5BMl5BanBnXkFtZTgwMzk2NzAyNTM@._V1_SX300.jpg',
      imdbId: 'tt6499752',
    },
    {
      id: 53,
      title: 'The Blair Witch Project',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BNzQ1NDBlNDItMDAyYS00YTI2LTgwMmYtMzAwMzg4NDFlM2ZmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      imdbId: 'tt0185937',
    },
    {
      id: 54,
      title: 'Bone Tomahawk',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMzQ0MzE4OTUzMF5BMl5BanBnXkFtZTgwODAyNzI3NjE@._V1_SX300.jpg',
      imdbId: 'tt2494362',
    },
    {
      id: 55,
      title: 'The Shining',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      imdbId: 'tt0081505',
    },
    {
      id: 56,
      title: 'The Dead Zone',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMDk2ZGVkY2UtZGE0MS00NTY1LThiZjYtYjQxMTAwMjM5M2VlXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg',
      imdbId: 'tt0085407',
    },
    {
      id: 57,
      title: 'The Wicker Man',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BOWIzY2QyNDQtOWI3Ni00MjEwLTlhYTgtZTgyMThiY2JkMTY4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      imdbId: 'tt0070917',
    },
    {
      id: 58,
      title: 'The Conjuring',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg',
      imdbId: 'tt1457767',
    },
    {
      id: 59,
      title: 'The Exorcist',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BYjhmMGMxZDYtMTkyNy00YWVmLTgyYmUtYTU3ZjcwNTBjN2I1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      imdbId: 'tt0070047',
    },
    {
      id: 60,
      title: 'Henry: Portrait of a Serial Killer',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BM2VjMDkzMTUtMDZjZi00YzFlLWE2MzYtNjVhNTkwYzU0YmNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      imdbId: 'tt0099763',
    },
    {
      id: 61,
      title: 'The Orphanage',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BYjJiMjE1ODUtOWEwOS00N2YyLWE4YmQtOWNmZTA2Y2I4OWVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
      imdbId: 'tt0464141',
    },
    {
      id: 62,
      title: "Gerald's Game",
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMzg0NGE0N2MtYTg1My00NTBkLWI5NjEtZTgyMDA0MTU4MmIyXkEyXkFqcGdeQXVyMTU2NTcyMg@@._V1_SX300.jpg',
      imdbId: 'tt3748172',
    },
    {
      id: 63,
      title: 'An American Werewolf in London',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BNTYzMDk3MzIyNV5BMl5BanBnXkFtZTgwOTM2OTE4MzE@._V1_SX300.jpg',
      imdbId: 'tt0082010',
    },
    {
      id: 64,
      title: 'Near Dark',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BODdkYzVhMmQtYmJhMy00MGMxLTk2ZmEtMmE0YTEwMWNhOTI5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      imdbId: 'tt0093605',
    },
    {
      id: 65,
      title: 'Poltergeist',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BNzliZmRlYTctYmNkYS00NzE5LWI1OWQtMTRiODY5MDMwMTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      imdbId: 'tt0084516',
    },
    {
      id: 66,
      title: 'This Is the End',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMTQxODE3NjM1Ml5BMl5BanBnXkFtZTcwMzkzNjc4OA@@._V1_SX300.jpg',
      imdbId: 'tt1245492',
    },
    {
      id: 67,
      title: 'Chronicle',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BYmRkY2RhM2QtMjQwNC00NDVjLTk4MTQtZGNiMjYxMmJmODVhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
      imdbId: 'tt1706593',
    },
    {
      id: 68,
      title: 'Hokkaido Backcountry Project',
      posterURL: 'N/A',
      imdbId: 'tt5260464',
    },
    {
      id: 69,
      title: "The Making of 'The Descent'",
      posterURL: 'N/A',
      imdbId: 'tt1611176',
    },
    {
      id: 70,
      title: 'Slither',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMjEyNTE0NDI2OF5BMl5BanBnXkFtZTcwODcwODMzMQ@@._V1_SX300.jpg',
      imdbId: 'tt0439815',
    },
    {
      id: 71,
      title: 'The Thing',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BNDcyZmFjY2YtN2I1OC00MzU3LWIzZGEtZDA5N2VlNDJjYWI3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      imdbId: 'tt0084787',
    },
    {
      id: 72,
      title: 'We Are What We Are',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMjI3NjI3NjAyN15BMl5BanBnXkFtZTgwODE3NzMxMDE@._V1_SX300.jpg',
      imdbId: 'tt2309021',
    },
    {
      id: 73,
      title: 'Better Watch Out',
      posterURL:
        'https://ia.media-imdb.com/images/M/MV5BNWU0NzdhNmQtYzM4MS00ZDMyLWEzMTEtZmNlYjk3ODJhYjM0XkEyXkFqcGdeQXVyMzYxNjAyMTg@._V1_SX300.jpg',
      imdbId: 'tt4907322',
    },
    {
      id: 74,
      title: 'Altered States',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BZTdkOTU5NDYtZjk4NC00NDA0LTlkMDItODY3ZWU2Y2VkNzFjXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      imdbId: 'tt0080360',
    },
    {
      id: 75,
      title: 'They Live',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMTQ3MjM3ODU1NV5BMl5BanBnXkFtZTgwMjU3NDU2MTE@._V1_SX300.jpg',
      imdbId: 'tt0096256',
    },
    {
      id: 76,
      title: 'The House of the Devil',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMTAxMDAxODg5ODReQTJeQWpwZ15BbWU3MDI5ODYxODI@._V1_SX300.jpg',
      imdbId: 'tt1172994',
    },
    {
      id: 77,
      title: 'The Conjuring 2',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BZjU5OWVlN2EtODNlYy00MjhhLWI0MDUtMTA3MmQ5MGMwYTZmXkEyXkFqcGdeQXVyNjE5MTM4MzY@._V1_SX300.jpg',
      imdbId: 'tt3065204',
    },
    {
      id: 78,
      title: 'The Autopsy of Jane Doe',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMjA2MTEzMzkzM15BMl5BanBnXkFtZTgwMjM2MTM5MDI@._V1_SX300.jpg',
      imdbId: 'tt3289956',
    },
  ];
  c = 0;
  addFav() {
    this.c++;
  }
}
