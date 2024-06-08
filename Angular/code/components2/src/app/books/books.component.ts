import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  @Input() val2!: string;
  book1 = 'secret';
  book2 = 'monk who sold his ferrari';
  book3 = 'wings of fire';
  book4 = ' to kill a mockingbird';
  src1 =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAFDI_uvUpUnBvfhd6o1F6nqMG2274wxLzQ&s';
  src2 =
    'https://img.freepik.com/free-photo/maldives-island_74190-477.jpg?size=626&ext=jpg&ga=GA1.2.1694759367.1707217935&semt=sph';
  src3 =
    'https://img.freepik.com/free-photo/maldives-island_74190-478.jpg?size=626&ext=jpg&ga=GA1.2.1694759367.1707217935&semt=sph';
  src4 =
    'https://img.freepik.com/free-photo/lake-mountains_1204-502.jpg?size=626&ext=jpg&ga=GA1.2.1694759367.1707217935&semt=sph';
}
