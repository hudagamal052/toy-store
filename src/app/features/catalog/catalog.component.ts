import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CatalogCardsComponent } from './catalog-cards/catalog-cards.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-catalog',
  imports: [
    HeaderComponent,
    FooterComponent,
    CatalogCardsComponent,
    SearchBarComponent,
    CommonModule,
  ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent {
  toyTypes = ['Wooden Toys', 'Stuffed Animals'];

  products = [
    {
      id: 1,
      title: 'Toy Box',
      description: 'A colorful toy box for kids.',
      price: 29.99,
      image:
        'https://img.freepik.com/premium-photo/childs-toy-box-filled-with-various-toys_561855-87078.jpg',
      quantity: 1,
      type: 'Wooden Toys',
    },
    {
      id: 2,
      title: 'Stuffed Bear',
      description: 'A soft cuddly teddy bear.',
      price: 19.99,
      image:
        'https://img.freepik.com/premium-photo/composition-valentine-s-day-with-toy-bear_777542-826.jpg?uid=R180960294&ga=GA1.1.767114532.1738104245&semt=ais_hybrid&w=740',
      quantity: 0,
      type: 'Stuffed Animals',
    },
    {
      id: 3,
      title: 'Building Blocks',
      description: 'A set of educational building blocks.',
      price: 24.5,
      image:
        'https://img.freepik.com/free-psd/3d-illustration-children-s-toy-game-blocks_23-2149345294.jpg?uid=R180960294&ga=GA1.1.767114532.1738104245&semt=ais_hybrid&w=740',
      quantity: 4,
      type: 'Wooden Toys',
    },
    {
      id: 4,
      title: 'Remote Control Car',
      description: 'A fast and fun remote control car.',
      price: 34.99,
      image:
        'https://media.istockphoto.com/id/90963018/photo/guided-by-radio-model-of-speed-car.jpg?b=1&s=612x612&w=0&k=20&c=6uRQBhPk_yZ6yhVaWc--RVnzh3QyzSwnC0oqvQ34Hw0=',
      quantity: 1,
      type: 'Stuffed Animals',
    },
    {
      id: 5,
      title: 'Dollhouse',
      description: 'A beautiful dollhouse with furniture.',
      price: 49.99,
      image:
        'https://img.freepik.com/free-photo/cartoon-model-residential-home-property_23-2151024237.jpg?uid=R180960294&ga=GA1.1.767114532.1738104245&semt=ais_hybrid&w=740',
      quantity: 0,
      type: 'Wooden Toys',
    },
    {
      id: 6,
      title: 'Action Figure',
      description: 'Superhero action figure with accessories.',
      price: 14.95,
      image:
        'https://img.freepik.com/free-photo/fun-3d-illustration-superhero-with-vr-helmet_183364-81250.jpg?uid=R180960294&ga=GA1.1.767114532.1738104245&semt=ais_hybrid&w=740',
      quantity: 2,
      type: 'Stuffed Animals',
    },
    {
      id: 7,
      title: 'Musical Toy',
      description: 'Interactive musical toy for toddlers.',
      price: 22.0,
      image:
        'https://img.freepik.com/premium-photo/musical-instruments-with-doll_155165-4341.jpg?uid=R180960294&ga=GA1.1.767114532.1738104245&semt=ais_hybrid&w=740',
      quantity: 6,
      type: 'Wooden Toys',
    },
    {
      id: 8,
      title: 'Toy Train Set',
      description: 'Electric train set with tracks and lights.',
      price: 39.9,
      image:
        'https://img.freepik.com/premium-photo/childrens-christmas-train-blue-background-merry-christmas-concept_1048944-2210927.jpg?uid=R180960294&ga=GA1.1.767114532.1738104245&semt=ais_hybrid&w=740',
      quantity: 1,
      type: 'Stuffed Animals',
    },
    {
      id: 9,
      title: 'Puzzle Game',
      description: 'Educational puzzle game for kids.',
      price: 12.75,
      image:
        'https://img.freepik.com/free-vector/hand-drawn-flat-design-sudoku-kids_23-2149272940.jpg?uid=R180960294&ga=GA1.1.767114532.1738104245&semt=ais_hybrid&w=740',
      quantity: 0,
      type: 'Wooden Toys',
    },
    {
      id: 10,
      title: 'Toy Kitchen Set',
      description: 'Mini kitchen set for role play.',
      price: 45.0,
      image:
        'https://img.freepik.com/free-psd/kitchen-food-3d-illustration_23-2151017867.jpg?uid=R180960294&ga=GA1.1.767114532.1738104245&semt=ais_hybrid&w=740',
      quantity: 9,
      type: 'Stuffed Animals',
    },
  ];
  allProducts = [...this.products];
  searchQuery: string = '';
  getQuery(value: string) {
    this.searchQuery = value;
    this.filterProducts();
  }
  filterProducts() {
    const filteredByCategory =
      this.selectedCategory === 'All Toys'
        ? this.products
        : this.products.filter(
            (product) => product.type === this.selectedCategory
          );

    this.allProducts = filteredByCategory.filter((product) =>
      product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  selectedCategory: string = 'All Toys';
  show(category: string) {
    this.selectedCategory = category;
    this.filterProducts();
    if (category === 'All Toys') {
      this.allProducts = [...this.products];
    } else {
      this.allProducts = this.products.filter(
        (product) => product.type === category
      );
    }
  }
}
