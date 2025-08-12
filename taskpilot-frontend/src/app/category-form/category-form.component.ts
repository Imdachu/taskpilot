import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
  category = { name: '' };
  errorMessage = '';

  constructor(private categoryService: CategoryService, private router: Router) {}

  onSubmit() {
    if (!this.category.name.trim()) {
      this.errorMessage = 'Category name is required.';
      return;
    }

    this.categoryService.createCategory(this.category).subscribe({
      next: () => {
        this.router.navigate(['/categories']); // redirect to categories list on success
      },
      error: err => {
        this.errorMessage = 'Failed to create category. Please try again.';
        console.error(err);
      }
    });
  }
}
